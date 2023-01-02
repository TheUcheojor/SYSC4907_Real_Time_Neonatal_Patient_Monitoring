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
import TripRoute from "./models/Route";
import RouteSegment from "./models/RouteSegment";
import RouteMeasurementDataPoint from "./models/RouteMeasurementDataPoint";

//Enable promises for the sqlite databases
enablePromise(true);

export class DatabaseService {
  /**
   * The database
   */
  private database!: SQLiteDatabase;

  /**
   * The dataBaseSevice instance, following a singleton model
   */
  private static dataBaseService: DatabaseService;

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
  public static async getConfiguredDatabaseController(): Promise<DatabaseService> {
    if (DatabaseService.dataBaseService == undefined) {
      DatabaseService.dataBaseService = new DatabaseService();

      await DatabaseService.dataBaseService.setUpDatabase();
    }

    return DatabaseService.dataBaseService;
  }

  /**
   * Sets up the database and datatables
   */
  private async setUpDatabase() {
    // Create the database
    this.database = await openDatabase({
      name: DatabaseService.DATABASE_NAME,
      location: "default",
    });

    // For clearing the database
    await this.database.executeSql(
      `DROP TABLE IF EXISTS ${DatabaseService.ROUTES_TABLE};`
    );
    await this.database.executeSql(
      `DROP TABLE IF EXISTS ${DatabaseService.ROUTE_SEGMENTS_TABLE};`
    );
    await this.database.executeSql(
      `DROP TABLE IF EXISTS ${DatabaseService.ROUTE_MEASUREMENT_DATA_POINTS_TABLE};`
    );

    // Prepare and execute table-creation queries
    const createRoutesTableQuery: string = `CREATE TABLE  IF NOT EXISTS ${DatabaseService.ROUTES_TABLE} ( routeId integer PRIMARY KEY AUTOINCREMENT, patientId text,  startTime text NOT NULL, endTime text );`;
    const createRouteSegmentsTableQuery: string = `CREATE TABLE IF NOT EXISTS ${DatabaseService.ROUTE_SEGMENTS_TABLE} ( segmentId integer PRIMARY KEY AUTOINCREMENT, routeId integer NOT NULL, segmentType text NOT NULL, startTime text NOT NULL, endTime text );`;
    const createRouteMeasurementDataPointsTableQuery: string = `CREATE TABLE IF NOT EXISTS ${DatabaseService.ROUTE_MEASUREMENT_DATA_POINTS_TABLE} ( routeDataPointId integer PRIMARY KEY AUTOINCREMENT, segmentid integer NOT NULL, routeId integer NOT NULL, time float NOT NULL, velocity float NOT NULL, noise float NOT NULL, vibration float NOT NULL, temperature float NOT NULL, airPressure float NOT NULL, annotation text, location text NOT NULL );`;

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
  public async saveTrip(trip: TripRoute): Promise<[ResultSet]> {
    console.log("saveTrip: ", trip);
    const saveTripQuery = `INSERT INTO ${DatabaseService.ROUTES_TABLE} (patientId, startTime, endTime) VALUES ('${trip.patientId}', '${trip.startTime}',  '${trip.endTime}' ) `;

    console.log("saveTripQuery: ", saveTripQuery);

    return await this.database.executeSql(saveTripQuery);
  }

  /**
   * Update a route in the database
   * @param trip the trip to be updated
   * @returns  the results
   */
  public async updateRoute(trip: TripRoute): Promise<[ResultSet]> {
    const updateTripQuery: string = `UPDATE ${DatabaseService.ROUTES_TABLE} SET 
    patientid='${trip.patientId}', 
    startTime='${trip.startTime}', 
    endTime='${trip.endTime}' 
    WHERE routeid = ${trip.routeId}`;

    console.log("updateTripQuery: ", updateTripQuery);

    return await this.database.executeSql(updateTripQuery);
  }

  /**
   * Save the given route segement to the database
   * @param trip  the associated route
   * @param routeSegement the route segment
   * @returns query
   */
  public async saveRouteSegment(
    trip: TripRoute,
    routeSegement: RouteSegment
  ): Promise<[ResultSet]> {
    const saveRouteSegmentQuery: string = `INSERT INTO ${DatabaseService.ROUTE_SEGMENTS_TABLE} (routeId, segmentType, startTime, endTime) VALUES
     ('${trip.routeId}', '${routeSegement.segmentType}', '${routeSegement.startTime}',  '${routeSegement.endTime}' ) `;

    console.log("saveRouteSegmentQuery: ", saveRouteSegmentQuery);

    return await this.database.executeSql(saveRouteSegmentQuery);
  }

  /**
   * Returns the query results for fetching routes with restrictions
   * @param maxNumberOfFetchedRoutes  the max number of routes that can be fetched at a time
   * @param fetchOffset  the offset from which the next trip routes will be fetched
   * @returns the query result
   */
  public async getRoutesWithRestrictions(
    maxNumberOfFetchedRoutes: number,
    fetchOffset: number
  ): Promise<[ResultSet]> {
    const getRoutesQuery: string = `SELECT * FROM ${DatabaseService.ROUTES_TABLE} ORDER BY routeId DESC LIMIT ${maxNumberOfFetchedRoutes} OFFSET ${fetchOffset};`;

    console.log("getRoutesQuery: ", getRoutesQuery);
    return await this.database.executeSql(getRoutesQuery);
  }

  /**
   * Returns the query results for fetching all routes
   * @returns the query results
   */
  public async getAllRoutes(): Promise<[ResultSet]> {
    const getAllRoutesQuery: string = `SELECT * FROM ${DatabaseService.ROUTES_TABLE} ORDER BY routeId DESC;`;

    return await this.database.executeSql(getAllRoutesQuery);
  }

  /**
   * Update the given route segment
   * @param routeSegement the given route segment
   * @returns the query result
   */
  public async updateRouteSegment(routeSegement: RouteSegment) {
    const updateRouteSegmentQuery: string = `UPDATE ${DatabaseService.ROUTE_SEGMENTS_TABLE} SET 
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
      DatabaseService.ROUTE_MEASUREMENT_DATA_POINTS_TABLE
    } (segmentId, routeId, time, velocity, noise, vibration, temperature, airPressure, annotation, location) VALUES 
    ('${routeMeasurementDataPoint.routeSegmentId}',
    '${routeMeasurementDataPoint.routeId}',
    '${routeMeasurementDataPoint.time}','
    ${routeMeasurementDataPoint.velocity}',
    '${routeMeasurementDataPoint.noise}',
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
    const getRouteMeasurementDataPointsByIdQuery = `SELECT * FROM ${DatabaseService.ROUTE_MEASUREMENT_DATA_POINTS_TABLE} WHERE routeId='${routeId}' ) `;

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
