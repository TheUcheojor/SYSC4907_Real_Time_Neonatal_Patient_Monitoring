/**
 * Author: Paul Okenne
 * File: database-service
 * Purpose: Provides database-related functionalities
 */

import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
  ResultSet,
} from "react-native-sqlite-storage";
import Route from "./models/Route";
import RouteSegment from "./models/RouteSegment";
import RouteMeasurementDataPoint from "./models/RouteMeasurementDataPoint";

//Enable promises for the sqlite databases
enablePromise(true);

export class DatabaseController {
  /**
   * The database
   */
  private database!: SQLiteDatabase;

  /**
   * The dataBaseController instance, following a singleton model
   */
  private static dataBaseController: DatabaseController;

  /**
   * The database name
   */
  static readonly DATABASE_NAME = "TCA.db";

  /**
   * The name of the routes table
   */
  static readonly ROUTES_TABLE = "routes";

  /**
   * The name of the routes segements table
   */
  static readonly ROUTE_SEGMENTS_TABLE = "route_segments";

  /**
   * The name of the route measurement data point table
   */
  static readonly ROUTE_MEASUREMENT_DATA_POINTS_TABLE =
    "route_measurement_data_points";

  /**
   * The DatabaseController private constructor
   */
  private constructor() {}

  /**
   * Returns a configurated database controller
   * @returns a configurated database controller
   */
  public static async getConfiguredDatabaseController(): Promise<DatabaseController> {
    if (DatabaseController.dataBaseController == undefined) {
      DatabaseController.dataBaseController = new DatabaseController();

      await DatabaseController.dataBaseController.setUpDatabase();
    }

    return DatabaseController.dataBaseController;
  }

  /**
   * Sets up the database and datatables
   */
  private async setUpDatabase() {
    // Create the database
    this.database = await openDatabase({
      name: DatabaseController.DATABASE_NAME,
      location: "default",
    });

    // Prepare and execute table-creation queries
    const createRoutesTableQuery: string = `CREATE TABLE  IF NOT EXISTS ${DatabaseController.ROUTES_TABLE} ( routeId integer PRIMARY KEY AUTOINCREMENT, patientId text,  startTime text NOT NULL, endTime text );`;
    const createRouteSegmentsTableQuery: string = `CREATE TABLE IF NOT EXISTS ${DatabaseController.ROUTE_SEGMENTS_TABLE} ( segmentId integer PRIMARY KEY AUTOINCREMENT, routeId integer NOT NULL, segmentType text NOT NULL, startTime text NOT NULL, endTime text );`;
    const createRouteMeasurementDataPointsTableQuery: string = `CREATE TABLE IF NOT EXISTS ${DatabaseController.ROUTE_MEASUREMENT_DATA_POINTS_TABLE} ( routeDataPointId integer PRIMARY KEY AUTOINCREMENT, segmentid integer NOT NULL, routeId integer NOT NULL, time float NOT NULL, velocity float NOT NULL, noise float NOT NULL, vibration float NOT NULL, temperature float NOT NULL, airPressure float NOT NULL, annotation text, location text NOT NULL );`;

    console.log(createRoutesTableQuery);
    await this.database.executeSql(createRoutesTableQuery);
    await this.database.executeSql(createRouteSegmentsTableQuery);
    await this.database.executeSql(createRouteMeasurementDataPointsTableQuery);
  }

  /**
   * Save a trip to the database
   * @param trip the trip to be saved
   * @returns  the results
   */
  public async saveTrip(trip: Route): Promise<[ResultSet]> {
    const saveTripQuery = `INSERT INTO ${DatabaseController.ROUTES_TABLE} (patientId, startTime, endTime) VALUES ('${trip.patientId}', '${trip.startTime}',  '${trip.endTime}' ) `;

    // const saveTripQuery = "SELECT * FROM routes";

    // console.log(saveTripQuery);

    return await this.database.executeSql(saveTripQuery);
  }

  /**
   * Update a route in the database
   * @param trip the trip to be updated
   * @returns  the results
   */
  public async updateRoute(trip: Route): Promise<[ResultSet]> {
    // if (trip.routeId == undefined)
    //   return { message: "Routeid is not defined!" } as DatabaseError;

    const updateTripQuery: string = `UPDATE ${DatabaseController.ROUTES_TABLE} SET 
    patientid='${trip.patientId}', 
    startTime='${trip.startTime}', 
    endTime='${trip.endTime}' 
    WHERE routeid = ${trip.routeId}`;

    return await this.database.executeSql(updateTripQuery);
  }

  /**
   * Save the given route segement to the database
   * @param trip  the associated route
   * @param routeSegement the route segment
   * @returns the route id
   */
  public async saveRouteSegment(
    trip: Route,
    routeSegement: RouteSegment
  ): Promise<[ResultSet]> {
    // if (trip.routeId == undefined)
    //   return { message: "Routeid is not defined!" } as DatabaseError;

    const saveRouteSegmentQuery: string = `INSERT INTO ${DatabaseController.ROUTE_SEGMENTS_TABLE} (routeId, segmentType, startTime, endTime) VALUES
     ('${trip.routeId}', '${routeSegement.segmentType}', '${routeSegement.startTime}',  '${routeSegement.endTime}' ) `;

    return await this.database.executeSql(saveRouteSegmentQuery);
  }

  /**
   * Update the given route segment
   * @param routeSegement the given route segment
   * @returns the query response
   */
  public async updateRouteSegment(routeSegement: RouteSegment) {
    const updateRouteSegmentQuery: string = `UPDATE ${DatabaseController.ROUTE_SEGMENTS_TABLE} SET , 
    segmentType='${routeSegement.segmentType}', 
    startTime='${routeSegement.startTime}', 
    endTime='${routeSegement.endTime}' ,
    routeId = ${routeSegement.routeId}
    WHERE segmentId = ${routeSegement.segmentId}`;

    return await this.database.executeSql(updateRouteSegmentQuery);
  }

  /**
   * Save the given route measurement data point
   * @param routeMeasurementDataPoint the given route measurement data point
   * @returns the query result
   */
  public async saveRouteMeasurementDataPoint(
    routeMeasurementDataPoint: RouteMeasurementDataPoint
  ) {
    const saveRouteMeasurementDataPointQuery = `INSERT INTO ${
      DatabaseController.ROUTE_MEASUREMENT_DATA_POINTS_TABLE
    } (segmentId, routeId, time, velocity, noise, vibration, temperature, airPressure, annotation, location) VALUES 
    ('${routeMeasurementDataPoint.routeSegmentId}',
    '${routeMeasurementDataPoint.routeId}','
    ${routeMeasurementDataPoint.time}','
    ${routeMeasurementDataPoint.velocity}','
    ${routeMeasurementDataPoint.noise}',
    '${routeMeasurementDataPoint.vibration}',
    '${routeMeasurementDataPoint.temperature}',
    '${routeMeasurementDataPoint.airPressure}',
    '${routeMeasurementDataPoint.annotation}',
    '${JSON.stringify(routeMeasurementDataPoint.location)}' ) `;

    return await this.database.executeSql(saveRouteMeasurementDataPointQuery);
  }

  /**
   * Get route measurement data points by route id
   * @param routeId the route
   * @returns the query result
   */
  public async getRouteMeasurementDataPointsByRouteId(
    routeId: string
  ): Promise<RouteMeasurementDataPoint[]> {
    const getRouteMeasurementDataPointsByIdQuery = `SELECT * FROM ${DatabaseController.ROUTE_MEASUREMENT_DATA_POINTS_TABLE} WHERE routeId='${routeId}' ) `;

    return await this.database
      .executeSql(getRouteMeasurementDataPointsByIdQuery)
      .then((resultSet: [ResultSet]) => {
        const routeMeasurementDataPoints: Array<RouteMeasurementDataPoint> = [];

        resultSet.forEach((result) => {
          for (let index = 0; index < result.rows.length; index++) {
            routeMeasurementDataPoints.push(result.rows.item(index));
          }
        });

        return routeMeasurementDataPoints;
      });
  }
}
