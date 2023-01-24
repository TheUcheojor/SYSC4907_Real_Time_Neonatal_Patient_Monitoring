/**
 * Author: Ryan Fife
 * File: demoData.tsx
 * Purpose: Exports the demo data
 */

import { RouteSegmentType } from "../services/models/trips/RouteSegment";
import { convertUnixTimestampToUTCTime } from "../utils/TimeUtil";

export default [
  {
    segmentId: 1,
    routeId: 1,
    segmentType: RouteSegmentType.GROUND,
    startTime: convertUnixTimestampToUTCTime(1674507521),
    endTime: convertUnixTimestampToUTCTime(1674508829),
  },
  {
    segmentId: 2,
    routeId: 1,
    segmentType: RouteSegmentType.AERIAL,
    startTime: convertUnixTimestampToUTCTime(1674508829),
    endTime: convertUnixTimestampToUTCTime(1674509129),
  },
];
