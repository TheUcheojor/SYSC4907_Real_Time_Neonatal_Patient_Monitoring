/**
 * Author: Ryan Fife
 * File: demoData.tsx
 * Purpose: Exports the demo data
 */

import { RouteSegmentType } from "../services/models/trips/RouteSegment";
import { formatUnixTimestamp } from "../utils/TimeUtil";

export default [
  {
    segmentId: 1,
    routeId: 1,
    segmentType: RouteSegmentType.GROUND,
    startTime: formatUnixTimestamp(1674507521),
    endTime: formatUnixTimestamp(1674508829),
  },
  {
    segmentId: 2,
    routeId: 1,
    segmentType: RouteSegmentType.AERIAL,
    startTime: formatUnixTimestamp(1674508829),
    endTime: formatUnixTimestamp(1674509129),
  },
];
