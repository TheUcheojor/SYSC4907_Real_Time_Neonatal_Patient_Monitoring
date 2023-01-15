/**
 * Author: Paul Okenne
 * File: RouteMeasurementDataPoint
 * Purpose: Exports the route-measurement-data-point schema model
 */

import MeasurementPacket from "../sensor-package-communication/MeasurementPacket";

export default interface RouteMeasurementDataPoint extends MeasurementPacket {
  /**
   * The route measurement data point id
   */
  routeMeasurementDataPointId: number | undefined;

  /**
   * The route segment id
   */
  routeSegmentId: number;

  /**
   * The route id
   */
  routeId: number;

  /**
   * Optional annotations
   */
  annotation: string | undefined;
}
