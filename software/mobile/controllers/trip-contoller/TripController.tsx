/**
 * Author: Paul Okenne
 * File: TripController
 * Purpose: Exports the TripController class which manages the trips
 */

import { DatabaseController } from "../database/DatabaseController";
import Route from "../database/models/Route";
import { ResultSet } from "react-native-sqlite-storage";
import RouteSegment, {
  RouteSegmentType,
} from "../database/models/RouteSegment";
import { convertUnixTimestampToUTCTime } from "../../utils/TimeUtil";
import MeasurementPacket from "../sensor-package/models/MeasurementPacket";
import RouteMeasurementDataPoint from "../database/models/RouteMeasurementDataPoint";

export class TripController {
  /**
   * The singleton database controller
   */
  private static databaseController: DatabaseController | undefined;

  /**
   * The singleton trip controller
   */
  private static tripController: TripController | undefined;

  /**
   * The current route
   */
  private currentRoute: Route;

  /**
   * The current route segment
   */
  private currentRouteSegment: RouteSegment;
  /**
   * The private TripController constructor
   */
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
  public static async getTripController(): Promise<TripController> {
    if (TripController.tripController == undefined) {
      TripController.databaseController =
        await DatabaseController.getConfiguredDatabaseController();

      TripController.tripController = new TripController();
    }

    return TripController.tripController;
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
      await TripController.databaseController?.saveTrip(this.currentRoute);

    if (startRouteResults == undefined) return;

    startRouteResults.forEach((result) => {
      console.log("startRoute insertRoute: ", result);

      //Update the current route id
      this.currentRoute.routeId = result.insertId;
    });

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

    // Close the current route
    this.currentRoute.endTime = endTime;
    const updateRouteResults: [ResultSet] | undefined =
      await TripController.databaseController?.updateRoute(this.currentRoute);
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
      await TripController.databaseController?.saveRouteMeasurementDataPoint(
        routeMeasurementDataPoint
      );

    console.log("saveMeasurementPacket: ", results);
  }

  /**
   * Complete the route segment by setting the end-time
   */
  private async closeRouteSegment(endTime: string): Promise<void> {
    // Update the old route segment.
    this.currentRouteSegment.endTime = endTime;

    const updateRouteSegmentResults: [ResultSet] | undefined =
      await TripController.databaseController?.updateRouteSegment(
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
      await TripController.databaseController?.saveRouteSegment(
        this.currentRoute,
        this.currentRouteSegment
      );

    saveRouteSegmentResults?.forEach((result) => {
      console.log("configurureNewRouteSegment insertSegment: ", result);

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
