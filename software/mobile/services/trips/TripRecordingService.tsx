/**
 * Author: Paul Okenne
 * File: TripRecordingService
 * Purpose: Exports the TripController class which manages the trips
 */

import { DatabaseService } from "../database/DatabaseService";
import TripRoute from "../database/models/Route";
import { ResultSet } from "react-native-sqlite-storage";
import RouteSegment, {
  RouteSegmentType,
} from "../database/models/RouteSegment";
import { convertUnixTimestampToUTCTime } from "../../utils/TimeUtil";
import MeasurementPacket from "../sensor-package/models/MeasurementPacket";
import RouteMeasurementDataPoint from "../database/models/RouteMeasurementDataPoint";

export class TripRecordingService {
  /**
   * The singleton database controller
   */
  private static databaseService: DatabaseService | undefined;

  /**
   * The singleton trip service
   */
  private static tripRecordingService: TripRecordingService | undefined;

  /**
   * The current route
   */
  private currentRoute: TripRoute;

  /**
   * The current route segment
   */
  private currentRouteSegment: RouteSegment;

  private constructor() {
    this.currentRoute = {
      routeId: -1,
      patientId: "",
      startTime: "",
      endTime: "",
    };

    this.currentRouteSegment = {
      segmentId: -1,
      routeId: -1,
      segmentType: RouteSegmentType.GROUND,
      startTime: "",
      endTime: "",
    };
  }

  /**
   * Return the trip controller
   * @returns the trip controller
   */
  public static async getTripController(): Promise<TripRecordingService> {
    if (TripRecordingService.tripRecordingService == undefined) {
      TripRecordingService.databaseService =
        await DatabaseService.getConfiguredDatabaseController();

      TripRecordingService.tripRecordingService = new TripRecordingService();
    }

    return TripRecordingService.tripRecordingService;
  }

  /**
   * Start a route
   * @param route
   * @returns an empty promise
   */
  public async startRoute(
    patientId: string,
    segmentType: RouteSegmentType
  ): Promise<void> {
    this.resetCurrentRoute();

    this.currentRoute.patientId = patientId;
    this.currentRoute.startTime = convertUnixTimestampToUTCTime(Date.now());

    const startRouteResults: [ResultSet] | undefined =
      await TripRecordingService.databaseService?.saveTripRoute(
        this.currentRoute
      );

    if (startRouteResults == undefined) return;

    startRouteResults.forEach((result) => {
      // console.log("startRoute insertRoute: ", result);

      //Update the current route id
      this.currentRoute.routeId = result.insertId;
    });

    // console.log("startRoute: ", this.currentRoute);

    //configure the associated route segment
    await this.configurureNewRouteSegment(segmentType);
  }

  /**
   * Starts a new segment associated to the current route
   */
  public async startNewRouteSegment(
    segmentType: RouteSegmentType
  ): Promise<void> {
    // Close the current route segment
    await this.closeRouteSegment(convertUnixTimestampToUTCTime(Date.now()));

    // Reset and set a fresh current-route-segment
    await this.configurureNewRouteSegment(segmentType);
  }

  /**
   * Complete the route
   */
  public async endRoute() {
    const endTime = convertUnixTimestampToUTCTime(Date.now());

    // Close the current route segment
    await this.closeRouteSegment(convertUnixTimestampToUTCTime(Date.now()));

    // console.log("endRoute: ", this.currentRoute);
    // Close the current route
    this.currentRoute.endTime = endTime;
    const updateRouteResults: [ResultSet] | undefined =
      await TripRecordingService.databaseService?.updateTripRoute(
        this.currentRoute
      );
  }

  /**
   * Saves the given measurement packet, associating the packet to the current route and segment
   * @param measurementPacket the given measurement packet
   * @returns an empty measurement packet
   */
  public async saveMeasurementPacket(
    measurementPacket: MeasurementPacket,
    annotation: string
  ): Promise<void> {
    const routeMeasurementDataPoint: RouteMeasurementDataPoint = {
      ...measurementPacket,
      routeMeasurementDataPointId: -1,
      routeSegmentId: this.currentRouteSegment.segmentId,
      routeId: this.currentRoute.routeId,
      annotation: annotation,
    };
    const results: [ResultSet] | undefined =
      await TripRecordingService.databaseService?.saveRouteMeasurementDataPoint(
        routeMeasurementDataPoint
      );

    // console.log("saveMeasurementPacket: ", results);
  }

  /**
   * Complete the route segment by setting the end-time
   */
  private async closeRouteSegment(endTime: string): Promise<void> {
    // Update the old route segment.
    this.currentRouteSegment.endTime = endTime;

    const updateRouteSegmentResults: [ResultSet] | undefined =
      await TripRecordingService.databaseService?.updateRouteSegment(
        this.currentRouteSegment
      );
  }

  /**
   * Save the current route segment and update the segment with its associated id
   * @returns an empty promise
   */
  private async configurureNewRouteSegment(
    segmentType: RouteSegmentType
  ): Promise<void> {
    //Clear the current route segment
    this.resetCurrentRouteSegment();

    //Update the current route segment
    this.currentRouteSegment.routeId = this.currentRoute.routeId;
    this.currentRouteSegment.segmentType = segmentType;
    this.currentRouteSegment.startTime = this.currentRoute.startTime;

    const saveRouteSegmentResults: [ResultSet] | undefined =
      await TripRecordingService.databaseService?.saveRouteSegment(
        this.currentRoute,
        this.currentRouteSegment
      );

    saveRouteSegmentResults?.forEach((result) => {
      // console.log("configurureNewRouteSegment insertSegment: ", result);

      this.currentRouteSegment.segmentId = result.insertId;
    });
  }

  /**
   * Resets the current route
   */
  private resetCurrentRoute() {
    this.currentRoute = {
      routeId: -1,
      patientId: "",
      startTime: "",
      endTime: "",
    };
  }

  /**
   * Reset the current route segment
   */
  private resetCurrentRouteSegment() {
    this.currentRouteSegment = {
      segmentId: -1,
      routeId: -1,
      segmentType: RouteSegmentType.GROUND,
      startTime: "",
      endTime: "",
    };
  }
}
