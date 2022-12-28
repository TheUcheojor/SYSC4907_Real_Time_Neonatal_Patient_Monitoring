import RouteSegment from "../models/RouteSegment"
import Route from"../models/Route"
import RouteMeasurementDataPoint from "../models/RouteMeasurementDataPoint"

export const route1: Route = {
    routeId: "1",
    ownerId: "1",
    organizationId: "1",
    startTime: Date.now() - 1000,
    endTime: Date.now(),
    totalVibrationExposure: 100,
    avgTemperature: 40,
    avgNoise: 40,
    avgVibration: 40,
    avgVelocity: 80
}

export const route2: Route = {
    routeId: "2",
    ownerId: "1",
    organizationId: "1",
    startTime: Date.now() - 10000000,
    endTime: Date.now(),
    totalVibrationExposure: 20,
    avgTemperature: 40,
    avgNoise: 40,
    avgVibration: 10,
    avgVelocity: 80
}

export const route3: Route = {
    routeId: "3",
    ownerId: "1",
    organizationId: "1",
    startTime: Date.now() - 100000000000,
    endTime: Date.now() - 100000000,
    totalVibrationExposure: 20,
    avgTemperature: 40,
    avgNoise: 40,
    avgVibration: 10,
    avgVelocity: 80
}

export const route4: Route = {
    routeId: "4",
    ownerId: "1",
    organizationId: "1",
    startTime: Date.now() - 100000000000/2,
    endTime: Date.now() - 10000000,
    totalVibrationExposure: 1000,
    avgTemperature: 40,
    avgNoise: 40,
    avgVibration: 20,
    avgVelocity: 80
}

export const dpsCarletonCampus: RouteMeasurementDataPoint[] = [
    {
        "routeDataPointId": "0",
        "segmentId": "1",
        "time": 1672158522531,
        "velocity": 0,
        "noise": 60,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69637,
            45.38553
        ]
    },
    {
        "routeDataPointId": "1",
        "segmentId": "1",
        "time": 1672158522541,
        "velocity": 1,
        "noise": 61,
        "vibration": 3,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69637,
            45.38546
        ]
    },
    {
        "routeDataPointId": "2",
        "segmentId": "1",
        "time": 1672158522551,
        "velocity": 2,
        "noise": 60,
        "vibration": 1,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69637,
            45.38533
        ]
    },
    {
        "routeDataPointId": "3",
        "segmentId": "1",
        "time": 1672158522561,
        "velocity": 3,
        "noise": 61,
        "vibration": 2,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.69637,
            45.38501
        ]
    },
    {
        "routeDataPointId": "4",
        "segmentId": "1",
        "time": 1672158522571,
        "velocity": 4,
        "noise": 60,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69636,
            45.38467
        ]
    },
    {
        "routeDataPointId": "5",
        "segmentId": "1",
        "time": 1672158522581,
        "velocity": 5,
        "noise": 61,
        "vibration": 1,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69636,
            45.38454
        ]
    },
    {
        "routeDataPointId": "6",
        "segmentId": "1",
        "time": 1672158522591,
        "velocity": 6,
        "noise": 60,
        "vibration": 2,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69637,
            45.38437
        ]
    },
    {
        "routeDataPointId": "7",
        "segmentId": "1",
        "time": 1672158522601,
        "velocity": 7,
        "noise": 61,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69635,
            45.38412
        ]
    },
    {
        "routeDataPointId": "8",
        "segmentId": "1",
        "time": 1672158522611,
        "velocity": 8,
        "noise": 60,
        "vibration": 1,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69631,
            45.38382
        ]
    },
    {
        "routeDataPointId": "9",
        "segmentId": "1",
        "time": 1672158522621,
        "velocity": 9,
        "noise": 61,
        "vibration": 1,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69629,
            45.38371
        ]
    },
    {
        "routeDataPointId": "10",
        "segmentId": "1",
        "time": 1672158522631,
        "velocity": 10,
        "noise": 60,
        "vibration": 2,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69628,
            45.38365
        ]
    },
    {
        "routeDataPointId": "11",
        "segmentId": "1",
        "time": 1672158522641,
        "velocity": 11,
        "noise": 61,
        "vibration": 1,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69628,
            45.38362
        ]
    },
    {
        "routeDataPointId": "12",
        "segmentId": "1",
        "time": 1672158522651,
        "velocity": 12,
        "noise": 60,
        "vibration": 2,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69625,
            45.38352
        ]
    },
    {
        "routeDataPointId": "13",
        "segmentId": "1",
        "time": 1672158522661,
        "velocity": 13,
        "noise": 61,
        "vibration": 3,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.69621,
            45.38341
        ]
    },
    {
        "routeDataPointId": "14",
        "segmentId": "1",
        "time": 1672158522671,
        "velocity": 14,
        "noise": 60,
        "vibration": 3,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69616,
            45.38326
        ]
    },
    {
        "routeDataPointId": "15",
        "segmentId": "1",
        "time": 1672158522681,
        "velocity": 15,
        "noise": 61,
        "vibration": 1,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69612,
            45.38315
        ]
    },
    {
        "routeDataPointId": "16",
        "segmentId": "1",
        "time": 1672158522691,
        "velocity": 16,
        "noise": 60,
        "vibration": 1,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.69609,
            45.38308
        ]
    },
    {
        "routeDataPointId": "17",
        "segmentId": "1",
        "time": 1672158522701,
        "velocity": 17,
        "noise": 61,
        "vibration": 3,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69606,
            45.38301
        ]
    },
    {
        "routeDataPointId": "18",
        "segmentId": "1",
        "time": 1672158522711,
        "velocity": 18,
        "noise": 60,
        "vibration": 2,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69601,
            45.38291
        ]
    },
    {
        "routeDataPointId": "19",
        "segmentId": "1",
        "time": 1672158522721,
        "velocity": 19,
        "noise": 61,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69597,
            45.38285
        ]
    },
    {
        "routeDataPointId": "20",
        "segmentId": "1",
        "time": 1672158522731,
        "velocity": 20,
        "noise": 60,
        "vibration": 3,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.69594,
            45.3828
        ]
    },
    {
        "routeDataPointId": "21",
        "segmentId": "1",
        "time": 1672158522741,
        "velocity": 21,
        "noise": 61,
        "vibration": 3,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69594,
            45.38279
        ]
    },
    {
        "routeDataPointId": "22",
        "segmentId": "1",
        "time": 1672158522751,
        "velocity": 22,
        "noise": 60,
        "vibration": 2,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69578,
            45.38249
        ]
    },
    {
        "routeDataPointId": "23",
        "segmentId": "1",
        "time": 1672158522761,
        "velocity": 23,
        "noise": 61,
        "vibration": 3,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69573,
            45.38241
        ]
    },
    {
        "routeDataPointId": "24",
        "segmentId": "1",
        "time": 1672158522771,
        "velocity": 24,
        "noise": 60,
        "vibration": 3,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.6957,
            45.38237
        ]
    },
    {
        "routeDataPointId": "25",
        "segmentId": "1",
        "time": 1672158522781,
        "velocity": 25,
        "noise": 61,
        "vibration": 1,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69568,
            45.38234
        ]
    },
    {
        "routeDataPointId": "26",
        "segmentId": "1",
        "time": 1672158522791,
        "velocity": 26,
        "noise": 60,
        "vibration": 1,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69567,
            45.38233
        ]
    },
    {
        "routeDataPointId": "27",
        "segmentId": "1",
        "time": 1672158522801,
        "velocity": 27,
        "noise": 61,
        "vibration": 1,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69562,
            45.3823
        ]
    },
    {
        "routeDataPointId": "28",
        "segmentId": "1",
        "time": 1672158522811,
        "velocity": 28,
        "noise": 60,
        "vibration": 1,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.69557,
            45.38227
        ]
    },
    {
        "routeDataPointId": "29",
        "segmentId": "1",
        "time": 1672158522821,
        "velocity": 29,
        "noise": 61,
        "vibration": 2,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69556,
            45.38227
        ]
    },
    {
        "routeDataPointId": "30",
        "segmentId": "1",
        "time": 1672158522831,
        "velocity": 30,
        "noise": 60,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69549,
            45.38226
        ]
    },
    {
        "routeDataPointId": "31",
        "segmentId": "1",
        "time": 1672158522841,
        "velocity": 31,
        "noise": 61,
        "vibration": 2,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69543,
            45.38225
        ]
    },
    {
        "routeDataPointId": "32",
        "segmentId": "1",
        "time": 1672158522851,
        "velocity": 32,
        "noise": 60,
        "vibration": 1,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.69538,
            45.38227
        ]
    },
    {
        "routeDataPointId": "33",
        "segmentId": "1",
        "time": 1672158522861,
        "velocity": 33,
        "noise": 61,
        "vibration": 3,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69534,
            45.38228
        ]
    },
    {
        "routeDataPointId": "34",
        "segmentId": "1",
        "time": 1672158522871,
        "velocity": 34,
        "noise": 60,
        "vibration": 3,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69516,
            45.38234
        ]
    },
    {
        "routeDataPointId": "35",
        "segmentId": "1",
        "time": 1672158522881,
        "velocity": 35,
        "noise": 61,
        "vibration": 1,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69462,
            45.38252
        ]
    },
    {
        "routeDataPointId": "36",
        "segmentId": "1",
        "time": 1672158522891,
        "velocity": 36,
        "noise": 60,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.6945,
            45.38257
        ]
    },
    {
        "routeDataPointId": "37",
        "segmentId": "1",
        "time": 1672158522901,
        "velocity": 37,
        "noise": 61,
        "vibration": 2,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69444,
            45.38259
        ]
    },
    {
        "routeDataPointId": "38",
        "segmentId": "1",
        "time": 1672158522911,
        "velocity": 38,
        "noise": 60,
        "vibration": 1,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69439,
            45.38262
        ]
    },
    {
        "routeDataPointId": "39",
        "segmentId": "1",
        "time": 1672158522921,
        "velocity": 39,
        "noise": 61,
        "vibration": 1,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.69429,
            45.38267
        ]
    },
    {
        "routeDataPointId": "40",
        "segmentId": "1",
        "time": 1672158522931,
        "velocity": 40,
        "noise": 60,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69419,
            45.38272
        ]
    },
    {
        "routeDataPointId": "41",
        "segmentId": "1",
        "time": 1672158522941,
        "velocity": 41,
        "noise": 61,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.6941,
            45.38277
        ]
    },
    {
        "routeDataPointId": "42",
        "segmentId": "1",
        "time": 1672158522951,
        "velocity": 42,
        "noise": 60,
        "vibration": 3,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69402,
            45.38282
        ]
    },
    {
        "routeDataPointId": "43",
        "segmentId": "1",
        "time": 1672158522961,
        "velocity": 43,
        "noise": 61,
        "vibration": 1,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69395,
            45.38287
        ]
    },
    {
        "routeDataPointId": "44",
        "segmentId": "1",
        "time": 1672158522971,
        "velocity": 44,
        "noise": 60,
        "vibration": 2,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.69383,
            45.38296
        ]
    },
    {
        "routeDataPointId": "45",
        "segmentId": "1",
        "time": 1672158522982,
        "velocity": 45,
        "noise": 61,
        "vibration": 1,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69377,
            45.38303
        ]
    },
    {
        "routeDataPointId": "46",
        "segmentId": "1",
        "time": 1672158522992,
        "velocity": 46,
        "noise": 60,
        "vibration": 3,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69373,
            45.38308
        ]
    },
    {
        "routeDataPointId": "47",
        "segmentId": "1",
        "time": 1672158523002,
        "velocity": 47,
        "noise": 61,
        "vibration": 2,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69371,
            45.38312
        ]
    },
    {
        "routeDataPointId": "48",
        "segmentId": "1",
        "time": 1672158523012,
        "velocity": 48,
        "noise": 60,
        "vibration": 2,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.6937,
            45.38314
        ]
    },
    {
        "routeDataPointId": "49",
        "segmentId": "1",
        "time": 1672158523022,
        "velocity": 49,
        "noise": 61,
        "vibration": 1,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69369,
            45.3832
        ]
    },
    {
        "routeDataPointId": "50",
        "segmentId": "1",
        "time": 1672158523032,
        "velocity": 50,
        "noise": 60,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69368,
            45.38326
        ]
    },
    {
        "routeDataPointId": "51",
        "segmentId": "1",
        "time": 1672158523042,
        "velocity": 51,
        "noise": 61,
        "vibration": 1,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69369,
            45.38333
        ]
    },
    {
        "routeDataPointId": "52",
        "segmentId": "1",
        "time": 1672158523052,
        "velocity": 52,
        "noise": 60,
        "vibration": 2,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69371,
            45.38341
        ]
    },
    {
        "routeDataPointId": "53",
        "segmentId": "1",
        "time": 1672158523062,
        "velocity": 53,
        "noise": 61,
        "vibration": 2,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69374,
            45.38348
        ]
    },
    {
        "routeDataPointId": "54",
        "segmentId": "1",
        "time": 1672158523072,
        "velocity": 54,
        "noise": 60,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69378,
            45.38355
        ]
    },
    {
        "routeDataPointId": "55",
        "segmentId": "1",
        "time": 1672158523082,
        "velocity": 55,
        "noise": 61,
        "vibration": 1,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69405,
            45.38401
        ]
    },
    {
        "routeDataPointId": "56",
        "segmentId": "1",
        "time": 1672158523092,
        "velocity": 56,
        "noise": 60,
        "vibration": 1,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69413,
            45.38413
        ]
    },
    {
        "routeDataPointId": "57",
        "segmentId": "1",
        "time": 1672158523102,
        "velocity": 57,
        "noise": 61,
        "vibration": 2,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69426,
            45.38432
        ]
    },
    {
        "routeDataPointId": "58",
        "segmentId": "1",
        "time": 1672158523112,
        "velocity": 58,
        "noise": 60,
        "vibration": 3,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69461,
            45.38487
        ]
    },
    {
        "routeDataPointId": "59",
        "segmentId": "1",
        "time": 1672158523122,
        "velocity": 59,
        "noise": 61,
        "vibration": 2,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69475,
            45.3851
        ]
    },
    {
        "routeDataPointId": "60",
        "segmentId": "1",
        "time": 1672158523132,
        "velocity": 60,
        "noise": 60,
        "vibration": 3,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69479,
            45.38517
        ]
    },
    {
        "routeDataPointId": "61",
        "segmentId": "1",
        "time": 1672158523142,
        "velocity": 61,
        "noise": 61,
        "vibration": 3,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69489,
            45.38534
        ]
    },
    {
        "routeDataPointId": "62",
        "segmentId": "1",
        "time": 1672158523152,
        "velocity": 62,
        "noise": 60,
        "vibration": 2,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69509,
            45.38566
        ]
    },
    {
        "routeDataPointId": "63",
        "segmentId": "1",
        "time": 1672158523162,
        "velocity": 63,
        "noise": 61,
        "vibration": 3,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69511,
            45.38569
        ]
    },
    {
        "routeDataPointId": "64",
        "segmentId": "1",
        "time": 1672158523172,
        "velocity": 64,
        "noise": 60,
        "vibration": 1,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69513,
            45.38573
        ]
    },
    {
        "routeDataPointId": "65",
        "segmentId": "1",
        "time": 1672158523182,
        "velocity": 65,
        "noise": 61,
        "vibration": 1,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69521,
            45.38589
        ]
    },
    {
        "routeDataPointId": "66",
        "segmentId": "1",
        "time": 1672158523192,
        "velocity": 66,
        "noise": 60,
        "vibration": 3,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69525,
            45.38597
        ]
    },
    {
        "routeDataPointId": "67",
        "segmentId": "1",
        "time": 1672158523202,
        "velocity": 67,
        "noise": 61,
        "vibration": 2,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69528,
            45.38604
        ]
    },
    {
        "routeDataPointId": "68",
        "segmentId": "1",
        "time": 1672158523212,
        "velocity": 68,
        "noise": 60,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69563,
            45.3875
        ]
    },
    {
        "routeDataPointId": "69",
        "segmentId": "1",
        "time": 1672158523222,
        "velocity": 69,
        "noise": 61,
        "vibration": 1,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69563,
            45.38754
        ]
    },
    {
        "routeDataPointId": "70",
        "segmentId": "1",
        "time": 1672158523232,
        "velocity": 70,
        "noise": 60,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69567,
            45.38769
        ]
    },
    {
        "routeDataPointId": "71",
        "segmentId": "1",
        "time": 1672158523242,
        "velocity": 71,
        "noise": 61,
        "vibration": 3,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.6959,
            45.3887
        ]
    },
    {
        "routeDataPointId": "72",
        "segmentId": "1",
        "time": 1672158523252,
        "velocity": 72,
        "noise": 60,
        "vibration": 2,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69589,
            45.38884
        ]
    },
    {
        "routeDataPointId": "73",
        "segmentId": "1",
        "time": 1672158523262,
        "velocity": 73,
        "noise": 61,
        "vibration": 1,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69588,
            45.38884
        ]
    },
    {
        "routeDataPointId": "74",
        "segmentId": "1",
        "time": 1672158523272,
        "velocity": 74,
        "noise": 60,
        "vibration": 3,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69587,
            45.38885
        ]
    },
    {
        "routeDataPointId": "75",
        "segmentId": "1",
        "time": 1672158523282,
        "velocity": 75,
        "noise": 61,
        "vibration": 1,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69586,
            45.38886
        ]
    },
    {
        "routeDataPointId": "76",
        "segmentId": "1",
        "time": 1672158523292,
        "velocity": 76,
        "noise": 60,
        "vibration": 2,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69585,
            45.38887
        ]
    },
    {
        "routeDataPointId": "77",
        "segmentId": "1",
        "time": 1672158523302,
        "velocity": 77,
        "noise": 61,
        "vibration": 2,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69584,
            45.38888
        ]
    },
    {
        "routeDataPointId": "78",
        "segmentId": "1",
        "time": 1672158523312,
        "velocity": 78,
        "noise": 60,
        "vibration": 1,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69583,
            45.38889
        ]
    },
    {
        "routeDataPointId": "79",
        "segmentId": "1",
        "time": 1672158523322,
        "velocity": 79,
        "noise": 61,
        "vibration": 1,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69583,
            45.3889
        ]
    },
    {
        "routeDataPointId": "80",
        "segmentId": "1",
        "time": 1672158523332,
        "velocity": 80,
        "noise": 60,
        "vibration": 2,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69582,
            45.38891
        ]
    },
    {
        "routeDataPointId": "81",
        "segmentId": "1",
        "time": 1672158523342,
        "velocity": 81,
        "noise": 61,
        "vibration": 1,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69582,
            45.38892
        ]
    },
    {
        "routeDataPointId": "82",
        "segmentId": "1",
        "time": 1672158523352,
        "velocity": 82,
        "noise": 60,
        "vibration": 3,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69582,
            45.38893
        ]
    },
    {
        "routeDataPointId": "83",
        "segmentId": "1",
        "time": 1672158523362,
        "velocity": 83,
        "noise": 61,
        "vibration": 3,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69582,
            45.38894
        ]
    },
    {
        "routeDataPointId": "84",
        "segmentId": "1",
        "time": 1672158523372,
        "velocity": 84,
        "noise": 60,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69582,
            45.38895
        ]
    },
    {
        "routeDataPointId": "85",
        "segmentId": "1",
        "time": 1672158523382,
        "velocity": 85,
        "noise": 61,
        "vibration": 2,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69583,
            45.38896
        ]
    },
    {
        "routeDataPointId": "86",
        "segmentId": "1",
        "time": 1672158523392,
        "velocity": 86,
        "noise": 60,
        "vibration": 2,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69583,
            45.38897
        ]
    },
    {
        "routeDataPointId": "87",
        "segmentId": "1",
        "time": 1672158523402,
        "velocity": 87,
        "noise": 61,
        "vibration": 3,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69584,
            45.38898
        ]
    },
    {
        "routeDataPointId": "88",
        "segmentId": "1",
        "time": 1672158523412,
        "velocity": 88,
        "noise": 60,
        "vibration": 2,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69584,
            45.38899
        ]
    },
    {
        "routeDataPointId": "89",
        "segmentId": "1",
        "time": 1672158523422,
        "velocity": 89,
        "noise": 61,
        "vibration": 2,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69585,
            45.38899
        ]
    },
    {
        "routeDataPointId": "90",
        "segmentId": "1",
        "time": 1672158523432,
        "velocity": 90,
        "noise": 60,
        "vibration": 3,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69585,
            45.389
        ]
    },
    {
        "routeDataPointId": "91",
        "segmentId": "1",
        "time": 1672158523442,
        "velocity": 91,
        "noise": 61,
        "vibration": 3,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69586,
            45.38901
        ]
    },
    {
        "routeDataPointId": "92",
        "segmentId": "1",
        "time": 1672158523452,
        "velocity": 92,
        "noise": 60,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69587,
            45.38901
        ]
    },
    {
        "routeDataPointId": "93",
        "segmentId": "1",
        "time": 1672158523462,
        "velocity": 93,
        "noise": 61,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69588,
            45.38902
        ]
    },
    {
        "routeDataPointId": "94",
        "segmentId": "1",
        "time": 1672158523472,
        "velocity": 94,
        "noise": 60,
        "vibration": 2,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69589,
            45.38903
        ]
    },
    {
        "routeDataPointId": "95",
        "segmentId": "1",
        "time": 1672158523482,
        "velocity": 95,
        "noise": 61,
        "vibration": 2,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.6959,
            45.38903
        ]
    },
    {
        "routeDataPointId": "96",
        "segmentId": "1",
        "time": 1672158523492,
        "velocity": 96,
        "noise": 60,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69591,
            45.38903
        ]
    },
    {
        "routeDataPointId": "97",
        "segmentId": "1",
        "time": 1672158523502,
        "velocity": 97,
        "noise": 61,
        "vibration": 3,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69592,
            45.38904
        ]
    },
    {
        "routeDataPointId": "98",
        "segmentId": "1",
        "time": 1672158523512,
        "velocity": 98,
        "noise": 60,
        "vibration": 2,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69593,
            45.38904
        ]
    },
    {
        "routeDataPointId": "99",
        "segmentId": "1",
        "time": 1672158523522,
        "velocity": 99,
        "noise": 61,
        "vibration": 1,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69594,
            45.38904
        ]
    },
    {
        "routeDataPointId": "100",
        "segmentId": "1",
        "time": 1672158523532,
        "velocity": 100,
        "noise": 60,
        "vibration": 3,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.69595,
            45.38904
        ]
    },
    {
        "routeDataPointId": "101",
        "segmentId": "1",
        "time": 1672158523542,
        "velocity": 101,
        "noise": 61,
        "vibration": 2,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69596,
            45.38905
        ]
    },
    {
        "routeDataPointId": "102",
        "segmentId": "1",
        "time": 1672158523552,
        "velocity": 102,
        "noise": 60,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69597,
            45.38905
        ]
    },
    {
        "routeDataPointId": "103",
        "segmentId": "1",
        "time": 1672158523562,
        "velocity": 103,
        "noise": 61,
        "vibration": 1,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69598,
            45.38905
        ]
    },
    {
        "routeDataPointId": "104",
        "segmentId": "1",
        "time": 1672158523572,
        "velocity": 104,
        "noise": 60,
        "vibration": 1,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69599,
            45.38905
        ]
    },
    {
        "routeDataPointId": "105",
        "segmentId": "1",
        "time": 1672158523582,
        "velocity": 105,
        "noise": 61,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.696,
            45.38905
        ]
    },
    {
        "routeDataPointId": "106",
        "segmentId": "1",
        "time": 1672158523592,
        "velocity": 106,
        "noise": 60,
        "vibration": 3,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69601,
            45.38905
        ]
    },
    {
        "routeDataPointId": "107",
        "segmentId": "1",
        "time": 1672158523602,
        "velocity": 107,
        "noise": 61,
        "vibration": 3,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69602,
            45.38905
        ]
    },
    {
        "routeDataPointId": "108",
        "segmentId": "1",
        "time": 1672158523612,
        "velocity": 108,
        "noise": 60,
        "vibration": 1,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69603,
            45.38904
        ]
    },
    {
        "routeDataPointId": "109",
        "segmentId": "1",
        "time": 1672158523622,
        "velocity": 109,
        "noise": 61,
        "vibration": 2,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.69604,
            45.38904
        ]
    },
    {
        "routeDataPointId": "110",
        "segmentId": "1",
        "time": 1672158523632,
        "velocity": 110,
        "noise": 60,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69605,
            45.38904
        ]
    },
    {
        "routeDataPointId": "111",
        "segmentId": "1",
        "time": 1672158523642,
        "velocity": 111,
        "noise": 61,
        "vibration": 2,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69606,
            45.38904
        ]
    },
    {
        "routeDataPointId": "112",
        "segmentId": "1",
        "time": 1672158523652,
        "velocity": 112,
        "noise": 60,
        "vibration": 3,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69607,
            45.38903
        ]
    },
    {
        "routeDataPointId": "113",
        "segmentId": "1",
        "time": 1672158523662,
        "velocity": 113,
        "noise": 61,
        "vibration": 3,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69608,
            45.38903
        ]
    },
    {
        "routeDataPointId": "114",
        "segmentId": "1",
        "time": 1672158523672,
        "velocity": 114,
        "noise": 60,
        "vibration": 2,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69609,
            45.38902
        ]
    },
    {
        "routeDataPointId": "115",
        "segmentId": "1",
        "time": 1672158523682,
        "velocity": 115,
        "noise": 61,
        "vibration": 2,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.6961,
            45.38902
        ]
    },
    {
        "routeDataPointId": "116",
        "segmentId": "1",
        "time": 1672158523692,
        "velocity": 116,
        "noise": 60,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69611,
            45.38901
        ]
    },
    {
        "routeDataPointId": "117",
        "segmentId": "1",
        "time": 1672158523702,
        "velocity": 117,
        "noise": 61,
        "vibration": 1,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69612,
            45.389
        ]
    },
    {
        "routeDataPointId": "118",
        "segmentId": "1",
        "time": 1672158523712,
        "velocity": 118,
        "noise": 60,
        "vibration": 3,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69613,
            45.38899
        ]
    },
    {
        "routeDataPointId": "119",
        "segmentId": "1",
        "time": 1672158523722,
        "velocity": 119,
        "noise": 61,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69613,
            45.38898
        ]
    },
    {
        "routeDataPointId": "120",
        "segmentId": "1",
        "time": 1672158523732,
        "velocity": 120,
        "noise": 60,
        "vibration": 1,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69614,
            45.38898
        ]
    },
    {
        "routeDataPointId": "121",
        "segmentId": "1",
        "time": 1672158523742,
        "velocity": 121,
        "noise": 61,
        "vibration": 2,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69614,
            45.38897
        ]
    },
    {
        "routeDataPointId": "122",
        "segmentId": "1",
        "time": 1672158523752,
        "velocity": 122,
        "noise": 60,
        "vibration": 3,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69615,
            45.38896
        ]
    },
    {
        "routeDataPointId": "123",
        "segmentId": "1",
        "time": 1672158523762,
        "velocity": 123,
        "noise": 61,
        "vibration": 1,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.69615,
            45.38895
        ]
    },
    {
        "routeDataPointId": "124",
        "segmentId": "1",
        "time": 1672158523772,
        "velocity": 124,
        "noise": 60,
        "vibration": 3,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69615,
            45.38894
        ]
    },
    {
        "routeDataPointId": "125",
        "segmentId": "1",
        "time": 1672158523782,
        "velocity": 125,
        "noise": 61,
        "vibration": 1,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69615,
            45.38893
        ]
    },
    {
        "routeDataPointId": "126",
        "segmentId": "1",
        "time": 1672158523792,
        "velocity": 126,
        "noise": 60,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69615,
            45.38892
        ]
    },
    {
        "routeDataPointId": "127",
        "segmentId": "1",
        "time": 1672158523802,
        "velocity": 127,
        "noise": 61,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69615,
            45.38891
        ]
    },
    {
        "routeDataPointId": "128",
        "segmentId": "1",
        "time": 1672158523812,
        "velocity": 128,
        "noise": 60,
        "vibration": 1,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69615,
            45.3889
        ]
    },
    {
        "routeDataPointId": "129",
        "segmentId": "1",
        "time": 1672158523822,
        "velocity": 129,
        "noise": 61,
        "vibration": 3,
        "temperature": 24,
        "annotation": "",
        "coordinates": [
            -75.69637,
            45.38883
        ]
    },
    {
        "routeDataPointId": "130",
        "segmentId": "1",
        "time": 1672158523832,
        "velocity": 130,
        "noise": 60,
        "vibration": 2,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69688,
            45.38863
        ]
    },
    {
        "routeDataPointId": "131",
        "segmentId": "1",
        "time": 1672158523842,
        "velocity": 131,
        "noise": 61,
        "vibration": 1,
        "temperature": 28,
        "annotation": "",
        "coordinates": [
            -75.69701,
            45.38859
        ]
    },
    {
        "routeDataPointId": "132",
        "segmentId": "1",
        "time": 1672158523852,
        "velocity": 132,
        "noise": 60,
        "vibration": 1,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.6969,
            45.3884
        ]
    },
    {
        "routeDataPointId": "133",
        "segmentId": "1",
        "time": 1672158523862,
        "velocity": 133,
        "noise": 61,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69677,
            45.38816
        ]
    },
    {
        "routeDataPointId": "134",
        "segmentId": "1",
        "time": 1672158523872,
        "velocity": 134,
        "noise": 60,
        "vibration": 1,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69668,
            45.38798
        ]
    },
    {
        "routeDataPointId": "135",
        "segmentId": "1",
        "time": 1672158523882,
        "velocity": 135,
        "noise": 61,
        "vibration": 2,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69662,
            45.3878
        ]
    },
    {
        "routeDataPointId": "136",
        "segmentId": "1",
        "time": 1672158523892,
        "velocity": 136,
        "noise": 60,
        "vibration": 1,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69655,
            45.38758
        ]
    },
    {
        "routeDataPointId": "137",
        "segmentId": "1",
        "time": 1672158523902,
        "velocity": 137,
        "noise": 61,
        "vibration": 2,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69654,
            45.38757
        ]
    },
    {
        "routeDataPointId": "138",
        "segmentId": "1",
        "time": 1672158523912,
        "velocity": 138,
        "noise": 60,
        "vibration": 2,
        "temperature": 22,
        "annotation": "",
        "coordinates": [
            -75.6965,
            45.38742
        ]
    },
    {
        "routeDataPointId": "139",
        "segmentId": "1",
        "time": 1672158523922,
        "velocity": 139,
        "noise": 61,
        "vibration": 3,
        "temperature": 27,
        "annotation": "",
        "coordinates": [
            -75.69646,
            45.38725
        ]
    },
    {
        "routeDataPointId": "140",
        "segmentId": "1",
        "time": 1672158523932,
        "velocity": 140,
        "noise": 60,
        "vibration": 2,
        "temperature": 26,
        "annotation": "",
        "coordinates": [
            -75.69645,
            45.38723
        ]
    },
    {
        "routeDataPointId": "141",
        "segmentId": "1",
        "time": 1672158523942,
        "velocity": 141,
        "noise": 61,
        "vibration": 3,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69643,
            45.38709
        ]
    },
    {
        "routeDataPointId": "142",
        "segmentId": "1",
        "time": 1672158523952,
        "velocity": 142,
        "noise": 60,
        "vibration": 3,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.6964,
            45.38687
        ]
    },
    {
        "routeDataPointId": "143",
        "segmentId": "1",
        "time": 1672158523962,
        "velocity": 143,
        "noise": 61,
        "vibration": 2,
        "temperature": 25,
        "annotation": "",
        "coordinates": [
            -75.69639,
            45.38664
        ]
    },
    {
        "routeDataPointId": "144",
        "segmentId": "1",
        "time": 1672158523972,
        "velocity": 144,
        "noise": 60,
        "vibration": 2,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69638,
            45.38649
        ]
    },
    {
        "routeDataPointId": "145",
        "segmentId": "1",
        "time": 1672158523982,
        "velocity": 145,
        "noise": 61,
        "vibration": 2,
        "temperature": 21,
        "annotation": "",
        "coordinates": [
            -75.69638,
            45.38638
        ]
    },
    {
        "routeDataPointId": "146",
        "segmentId": "1",
        "time": 1672158523992,
        "velocity": 146,
        "noise": 60,
        "vibration": 2,
        "temperature": 23,
        "annotation": "",
        "coordinates": [
            -75.69638,
            45.38631
        ]
    }
]

export const dpsCivicToHull: RouteMeasurementDataPoint[] = 
[
{
    "routeDataPointId": "0",
    "segmentId": "1",
    "time": 1672163850863,
    "velocity": 0,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72134,
        45.39147
    ]
},
{
    "routeDataPointId": "1",
    "segmentId": "1",
    "time": 1672163850873,
    "velocity": 1,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72096,
        45.39164
    ]
},
{
    "routeDataPointId": "2",
    "segmentId": "1",
    "time": 1672163850883,
    "velocity": 2,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71915,
        45.39243
    ]
},
{
    "routeDataPointId": "3",
    "segmentId": "1",
    "time": 1672163850893,
    "velocity": 3,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71864,
        45.39266
    ]
},
{
    "routeDataPointId": "4",
    "segmentId": "1",
    "time": 1672163850903,
    "velocity": 4,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71773,
        45.39305
    ]
},
{
    "routeDataPointId": "5",
    "segmentId": "1",
    "time": 1672163850913,
    "velocity": 5,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71704,
        45.39336
    ]
},
{
    "routeDataPointId": "6",
    "segmentId": "1",
    "time": 1672163850923,
    "velocity": 6,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71637,
        45.39366
    ]
},
{
    "routeDataPointId": "7",
    "segmentId": "1",
    "time": 1672163850933,
    "velocity": 7,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71605,
        45.39379
    ]
},
{
    "routeDataPointId": "8",
    "segmentId": "1",
    "time": 1672163850943,
    "velocity": 8,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71583,
        45.39389
    ]
},
{
    "routeDataPointId": "9",
    "segmentId": "1",
    "time": 1672163850953,
    "velocity": 9,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71564,
        45.39398
    ]
},
{
    "routeDataPointId": "10",
    "segmentId": "1",
    "time": 1672163850963,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71528,
        45.39413
    ]
},
{
    "routeDataPointId": "11",
    "segmentId": "1",
    "time": 1672163850973,
    "velocity": 11,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71527,
        45.39414
    ]
},
{
    "routeDataPointId": "12",
    "segmentId": "1",
    "time": 1672163850983,
    "velocity": 12,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71526,
        45.39414
    ]
},
{
    "routeDataPointId": "13",
    "segmentId": "1",
    "time": 1672163850993,
    "velocity": 13,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71486,
        45.39432
    ]
},
{
    "routeDataPointId": "14",
    "segmentId": "1",
    "time": 1672163851003,
    "velocity": 14,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71484,
        45.39433
    ]
},
{
    "routeDataPointId": "15",
    "segmentId": "1",
    "time": 1672163851013,
    "velocity": 15,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71483,
        45.39433
    ]
},
{
    "routeDataPointId": "16",
    "segmentId": "1",
    "time": 1672163851023,
    "velocity": 16,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71465,
        45.39441
    ]
},
{
    "routeDataPointId": "17",
    "segmentId": "1",
    "time": 1672163851033,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71462,
        45.39443
    ]
},
{
    "routeDataPointId": "18",
    "segmentId": "1",
    "time": 1672163851043,
    "velocity": 18,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71457,
        45.39445
    ]
},
{
    "routeDataPointId": "19",
    "segmentId": "1",
    "time": 1672163851053,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7144,
        45.39452
    ]
},
{
    "routeDataPointId": "20",
    "segmentId": "1",
    "time": 1672163851063,
    "velocity": 20,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71434,
        45.39455
    ]
},
{
    "routeDataPointId": "21",
    "segmentId": "1",
    "time": 1672163851073,
    "velocity": 21,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71363,
        45.39486
    ]
},
{
    "routeDataPointId": "22",
    "segmentId": "1",
    "time": 1672163851083,
    "velocity": 22,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71361,
        45.39487
    ]
},
{
    "routeDataPointId": "23",
    "segmentId": "1",
    "time": 1672163851093,
    "velocity": 23,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71337,
        45.39497
    ]
},
{
    "routeDataPointId": "24",
    "segmentId": "1",
    "time": 1672163851103,
    "velocity": 24,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7133,
        45.39501
    ]
},
{
    "routeDataPointId": "25",
    "segmentId": "1",
    "time": 1672163851113,
    "velocity": 25,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7132,
        45.39505
    ]
},
{
    "routeDataPointId": "26",
    "segmentId": "1",
    "time": 1672163851123,
    "velocity": 26,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71299,
        45.39515
    ]
},
{
    "routeDataPointId": "27",
    "segmentId": "1",
    "time": 1672163851133,
    "velocity": 27,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71274,
        45.39526
    ]
},
{
    "routeDataPointId": "28",
    "segmentId": "1",
    "time": 1672163851143,
    "velocity": 28,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71262,
        45.39531
    ]
},
{
    "routeDataPointId": "29",
    "segmentId": "1",
    "time": 1672163851153,
    "velocity": 29,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71248,
        45.39538
    ]
},
{
    "routeDataPointId": "30",
    "segmentId": "1",
    "time": 1672163851163,
    "velocity": 30,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71225,
        45.39546
    ]
},
{
    "routeDataPointId": "31",
    "segmentId": "1",
    "time": 1672163851173,
    "velocity": 31,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71222,
        45.39548
    ]
},
{
    "routeDataPointId": "32",
    "segmentId": "1",
    "time": 1672163851183,
    "velocity": 32,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71207,
        45.39555
    ]
},
{
    "routeDataPointId": "33",
    "segmentId": "1",
    "time": 1672163851193,
    "velocity": 33,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71194,
        45.39561
    ]
},
{
    "routeDataPointId": "34",
    "segmentId": "1",
    "time": 1672163851203,
    "velocity": 34,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71146,
        45.39581
    ]
},
{
    "routeDataPointId": "35",
    "segmentId": "1",
    "time": 1672163851213,
    "velocity": 35,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71106,
        45.39598
    ]
},
{
    "routeDataPointId": "36",
    "segmentId": "1",
    "time": 1672163851223,
    "velocity": 36,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71019,
        45.39635
    ]
},
{
    "routeDataPointId": "37",
    "segmentId": "1",
    "time": 1672163851233,
    "velocity": 37,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70948,
        45.39666
    ]
},
{
    "routeDataPointId": "38",
    "segmentId": "1",
    "time": 1672163851243,
    "velocity": 38,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70921,
        45.39678
    ]
},
{
    "routeDataPointId": "39",
    "segmentId": "1",
    "time": 1672163851253,
    "velocity": 39,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70894,
        45.3969
    ]
},
{
    "routeDataPointId": "40",
    "segmentId": "1",
    "time": 1672163851263,
    "velocity": 40,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70877,
        45.39698
    ]
},
{
    "routeDataPointId": "41",
    "segmentId": "1",
    "time": 1672163851273,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70841,
        45.39713
    ]
},
{
    "routeDataPointId": "42",
    "segmentId": "1",
    "time": 1672163851283,
    "velocity": 42,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70764,
        45.39748
    ]
},
{
    "routeDataPointId": "43",
    "segmentId": "1",
    "time": 1672163851293,
    "velocity": 43,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70716,
        45.3977
    ]
},
{
    "routeDataPointId": "44",
    "segmentId": "1",
    "time": 1672163851303,
    "velocity": 44,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7071,
        45.39772
    ]
},
{
    "routeDataPointId": "45",
    "segmentId": "1",
    "time": 1672163851313,
    "velocity": 45,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70679,
        45.39787
    ]
},
{
    "routeDataPointId": "46",
    "segmentId": "1",
    "time": 1672163851323,
    "velocity": 46,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70652,
        45.398
    ]
},
{
    "routeDataPointId": "47",
    "segmentId": "1",
    "time": 1672163851333,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70627,
        45.39811
    ]
},
{
    "routeDataPointId": "48",
    "segmentId": "1",
    "time": 1672163851343,
    "velocity": 48,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70614,
        45.39816
    ]
},
{
    "routeDataPointId": "49",
    "segmentId": "1",
    "time": 1672163851353,
    "velocity": 49,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70567,
        45.39836
    ]
},
{
    "routeDataPointId": "50",
    "segmentId": "1",
    "time": 1672163851363,
    "velocity": 50,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70554,
        45.3984
    ]
},
{
    "routeDataPointId": "51",
    "segmentId": "1",
    "time": 1672163851373,
    "velocity": 51,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70516,
        45.39857
    ]
},
{
    "routeDataPointId": "52",
    "segmentId": "1",
    "time": 1672163851383,
    "velocity": 52,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.705,
        45.39865
    ]
},
{
    "routeDataPointId": "53",
    "segmentId": "1",
    "time": 1672163851393,
    "velocity": 53,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70443,
        45.39892
    ]
},
{
    "routeDataPointId": "54",
    "segmentId": "1",
    "time": 1672163851403,
    "velocity": 54,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70424,
        45.399
    ]
},
{
    "routeDataPointId": "55",
    "segmentId": "1",
    "time": 1672163851413,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70433,
        45.39912
    ]
},
{
    "routeDataPointId": "56",
    "segmentId": "1",
    "time": 1672163851423,
    "velocity": 56,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70438,
        45.39921
    ]
},
{
    "routeDataPointId": "57",
    "segmentId": "1",
    "time": 1672163851433,
    "velocity": 57,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70459,
        45.39956
    ]
},
{
    "routeDataPointId": "58",
    "segmentId": "1",
    "time": 1672163851443,
    "velocity": 58,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7046,
        45.39958
    ]
},
{
    "routeDataPointId": "59",
    "segmentId": "1",
    "time": 1672163851453,
    "velocity": 59,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7048,
        45.3999
    ]
},
{
    "routeDataPointId": "60",
    "segmentId": "1",
    "time": 1672163851463,
    "velocity": 60,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70499,
        45.40022
    ]
},
{
    "routeDataPointId": "61",
    "segmentId": "1",
    "time": 1672163851473,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70504,
        45.4003
    ]
},
{
    "routeDataPointId": "62",
    "segmentId": "1",
    "time": 1672163851483,
    "velocity": 62,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70516,
        45.40051
    ]
},
{
    "routeDataPointId": "63",
    "segmentId": "1",
    "time": 1672163851493,
    "velocity": 63,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70549,
        45.40105
    ]
},
{
    "routeDataPointId": "64",
    "segmentId": "1",
    "time": 1672163851503,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70581,
        45.4016
    ]
},
{
    "routeDataPointId": "65",
    "segmentId": "1",
    "time": 1672163851513,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70591,
        45.40177
    ]
},
{
    "routeDataPointId": "66",
    "segmentId": "1",
    "time": 1672163851523,
    "velocity": 66,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70611,
        45.4021
    ]
},
{
    "routeDataPointId": "67",
    "segmentId": "1",
    "time": 1672163851533,
    "velocity": 67,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70641,
        45.4026
    ]
},
{
    "routeDataPointId": "68",
    "segmentId": "1",
    "time": 1672163851543,
    "velocity": 68,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70651,
        45.40277
    ]
},
{
    "routeDataPointId": "69",
    "segmentId": "1",
    "time": 1672163851553,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70667,
        45.40303
    ]
},
{
    "routeDataPointId": "70",
    "segmentId": "1",
    "time": 1672163851563,
    "velocity": 70,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70685,
        45.40333
    ]
},
{
    "routeDataPointId": "71",
    "segmentId": "1",
    "time": 1672163851573,
    "velocity": 71,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70695,
        45.40349
    ]
},
{
    "routeDataPointId": "72",
    "segmentId": "1",
    "time": 1672163851583,
    "velocity": 72,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70703,
        45.40362
    ]
},
{
    "routeDataPointId": "73",
    "segmentId": "1",
    "time": 1672163851593,
    "velocity": 73,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70704,
        45.40365
    ]
},
{
    "routeDataPointId": "74",
    "segmentId": "1",
    "time": 1672163851603,
    "velocity": 74,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "foo bar",
    "coordinates": [
        -75.70712,
        45.40376
    ]
},
{
    "routeDataPointId": "75",
    "segmentId": "1",
    "time": 1672163851613,
    "velocity": 75,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70722,
        45.40396
    ]
},
{
    "routeDataPointId": "76",
    "segmentId": "1",
    "time": 1672163851623,
    "velocity": 76,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70731,
        45.40409
    ]
},
{
    "routeDataPointId": "77",
    "segmentId": "1",
    "time": 1672163851633,
    "velocity": 77,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70732,
        45.40411
    ]
},
{
    "routeDataPointId": "78",
    "segmentId": "1",
    "time": 1672163851643,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70757,
        45.40453
    ]
},
{
    "routeDataPointId": "79",
    "segmentId": "1",
    "time": 1672163851653,
    "velocity": 79,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70777,
        45.40484
    ]
},
{
    "routeDataPointId": "80",
    "segmentId": "1",
    "time": 1672163851663,
    "velocity": 80,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70795,
        45.40512
    ]
},
{
    "routeDataPointId": "81",
    "segmentId": "1",
    "time": 1672163851673,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70802,
        45.40524
    ]
},
{
    "routeDataPointId": "82",
    "segmentId": "1",
    "time": 1672163851683,
    "velocity": 82,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70803,
        45.40529
    ]
},
{
    "routeDataPointId": "83",
    "segmentId": "1",
    "time": 1672163851693,
    "velocity": 83,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70804,
        45.40531
    ]
},
{
    "routeDataPointId": "84",
    "segmentId": "1",
    "time": 1672163851703,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70816,
        45.4055
    ]
},
{
    "routeDataPointId": "85",
    "segmentId": "1",
    "time": 1672163851713,
    "velocity": 85,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70836,
        45.40585
    ]
},
{
    "routeDataPointId": "86",
    "segmentId": "1",
    "time": 1672163851723,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70848,
        45.40603
    ]
},
{
    "routeDataPointId": "87",
    "segmentId": "1",
    "time": 1672163851733,
    "velocity": 87,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70871,
        45.40638
    ]
},
{
    "routeDataPointId": "88",
    "segmentId": "1",
    "time": 1672163851743,
    "velocity": 88,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70885,
        45.40664
    ]
},
{
    "routeDataPointId": "89",
    "segmentId": "1",
    "time": 1672163851753,
    "velocity": 89,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70902,
        45.40694
    ]
},
{
    "routeDataPointId": "90",
    "segmentId": "1",
    "time": 1672163851763,
    "velocity": 90,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70909,
        45.40707
    ]
},
{
    "routeDataPointId": "91",
    "segmentId": "1",
    "time": 1672163851773,
    "velocity": 91,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70943,
        45.40763
    ]
},
{
    "routeDataPointId": "92",
    "segmentId": "1",
    "time": 1672163851783,
    "velocity": 92,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70948,
        45.40773
    ]
},
{
    "routeDataPointId": "93",
    "segmentId": "1",
    "time": 1672163851793,
    "velocity": 93,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70956,
        45.40786
    ]
},
{
    "routeDataPointId": "94",
    "segmentId": "1",
    "time": 1672163851803,
    "velocity": 94,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7098,
        45.40824
    ]
},
{
    "routeDataPointId": "95",
    "segmentId": "1",
    "time": 1672163851813,
    "velocity": 95,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70985,
        45.40832
    ]
},
{
    "routeDataPointId": "96",
    "segmentId": "1",
    "time": 1672163851823,
    "velocity": 96,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7099,
        45.4084
    ]
},
{
    "routeDataPointId": "97",
    "segmentId": "1",
    "time": 1672163851833,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70992,
        45.40844
    ]
},
{
    "routeDataPointId": "98",
    "segmentId": "1",
    "time": 1672163851843,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70995,
        45.40847
    ]
},
{
    "routeDataPointId": "99",
    "segmentId": "1",
    "time": 1672163851853,
    "velocity": 99,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71002,
        45.4086
    ]
},
{
    "routeDataPointId": "100",
    "segmentId": "1",
    "time": 1672163851863,
    "velocity": 100,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71004,
        45.40862
    ]
},
{
    "routeDataPointId": "101",
    "segmentId": "1",
    "time": 1672163851873,
    "velocity": 101,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71008,
        45.40868
    ]
},
{
    "routeDataPointId": "102",
    "segmentId": "1",
    "time": 1672163851883,
    "velocity": 102,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71012,
        45.40874
    ]
},
{
    "routeDataPointId": "103",
    "segmentId": "1",
    "time": 1672163851893,
    "velocity": 103,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71019,
        45.40887
    ]
},
{
    "routeDataPointId": "104",
    "segmentId": "1",
    "time": 1672163851903,
    "velocity": 104,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "foo bar",
    "coordinates": [
        -75.7103,
        45.40906
    ]
},
{
    "routeDataPointId": "105",
    "segmentId": "1",
    "time": 1672163851913,
    "velocity": 105,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71048,
        45.40936
    ]
},
{
    "routeDataPointId": "106",
    "segmentId": "1",
    "time": 1672163851923,
    "velocity": 106,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71049,
        45.40937
    ]
},
{
    "routeDataPointId": "107",
    "segmentId": "1",
    "time": 1672163851933,
    "velocity": 107,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71057,
        45.40949
    ]
},
{
    "routeDataPointId": "108",
    "segmentId": "1",
    "time": 1672163851943,
    "velocity": 108,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71064,
        45.40959
    ]
},
{
    "routeDataPointId": "109",
    "segmentId": "1",
    "time": 1672163851953,
    "velocity": 109,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71066,
        45.40963
    ]
},
{
    "routeDataPointId": "110",
    "segmentId": "1",
    "time": 1672163851963,
    "velocity": 110,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71068,
        45.40966
    ]
},
{
    "routeDataPointId": "111",
    "segmentId": "1",
    "time": 1672163851973,
    "velocity": 111,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7107,
        45.40968
    ]
},
{
    "routeDataPointId": "112",
    "segmentId": "1",
    "time": 1672163851983,
    "velocity": 112,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71078,
        45.40981
    ]
},
{
    "routeDataPointId": "113",
    "segmentId": "1",
    "time": 1672163851993,
    "velocity": 113,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7109,
        45.41002
    ]
},
{
    "routeDataPointId": "114",
    "segmentId": "1",
    "time": 1672163852003,
    "velocity": 114,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71096,
        45.41013
    ]
},
{
    "routeDataPointId": "115",
    "segmentId": "1",
    "time": 1672163852013,
    "velocity": 115,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71101,
        45.41022
    ]
},
{
    "routeDataPointId": "116",
    "segmentId": "1",
    "time": 1672163852023,
    "velocity": 116,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71136,
        45.4108
    ]
},
{
    "routeDataPointId": "117",
    "segmentId": "1",
    "time": 1672163852033,
    "velocity": 117,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71156,
        45.41113
    ]
},
{
    "routeDataPointId": "118",
    "segmentId": "1",
    "time": 1672163852043,
    "velocity": 118,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71165,
        45.4113
    ]
},
{
    "routeDataPointId": "119",
    "segmentId": "1",
    "time": 1672163852053,
    "velocity": 119,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71175,
        45.41147
    ]
},
{
    "routeDataPointId": "120",
    "segmentId": "1",
    "time": 1672163852063,
    "velocity": 120,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71211,
        45.41207
    ]
},
{
    "routeDataPointId": "121",
    "segmentId": "1",
    "time": 1672163852073,
    "velocity": 121,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71227,
        45.41234
    ]
},
{
    "routeDataPointId": "122",
    "segmentId": "1",
    "time": 1672163852083,
    "velocity": 122,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71233,
        45.41246
    ]
},
{
    "routeDataPointId": "123",
    "segmentId": "1",
    "time": 1672163852093,
    "velocity": 123,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71237,
        45.41254
    ]
},
{
    "routeDataPointId": "124",
    "segmentId": "1",
    "time": 1672163852103,
    "velocity": 124,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71255,
        45.41282
    ]
},
{
    "routeDataPointId": "125",
    "segmentId": "1",
    "time": 1672163852113,
    "velocity": 125,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71255,
        45.41285
    ]
},
{
    "routeDataPointId": "126",
    "segmentId": "1",
    "time": 1672163852123,
    "velocity": 126,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71254,
        45.41287
    ]
},
{
    "routeDataPointId": "127",
    "segmentId": "1",
    "time": 1672163852133,
    "velocity": 127,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71255,
        45.41291
    ]
},
{
    "routeDataPointId": "128",
    "segmentId": "1",
    "time": 1672163852143,
    "velocity": 128,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71256,
        45.41295
    ]
},
{
    "routeDataPointId": "129",
    "segmentId": "1",
    "time": 1672163852153,
    "velocity": 129,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71271,
        45.41312
    ]
},
{
    "routeDataPointId": "130",
    "segmentId": "1",
    "time": 1672163852163,
    "velocity": 130,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71274,
        45.41316
    ]
},
{
    "routeDataPointId": "131",
    "segmentId": "1",
    "time": 1672163852173,
    "velocity": 131,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71289,
        45.41338
    ]
},
{
    "routeDataPointId": "132",
    "segmentId": "1",
    "time": 1672163852183,
    "velocity": 132,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7129,
        45.4134
    ]
},
{
    "routeDataPointId": "133",
    "segmentId": "1",
    "time": 1672163852193,
    "velocity": 133,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71313,
        45.41375
    ]
},
{
    "routeDataPointId": "134",
    "segmentId": "1",
    "time": 1672163852203,
    "velocity": 134,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71322,
        45.41389
    ]
},
{
    "routeDataPointId": "135",
    "segmentId": "1",
    "time": 1672163852213,
    "velocity": 135,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71328,
        45.41399
    ]
},
{
    "routeDataPointId": "136",
    "segmentId": "1",
    "time": 1672163852223,
    "velocity": 136,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71351,
        45.41437
    ]
},
{
    "routeDataPointId": "137",
    "segmentId": "1",
    "time": 1672163852233,
    "velocity": 137,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71366,
        45.41457
    ]
},
{
    "routeDataPointId": "138",
    "segmentId": "1",
    "time": 1672163852243,
    "velocity": 138,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7138,
        45.41485
    ]
},
{
    "routeDataPointId": "139",
    "segmentId": "1",
    "time": 1672163852253,
    "velocity": 139,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71385,
        45.41494
    ]
},
{
    "routeDataPointId": "140",
    "segmentId": "1",
    "time": 1672163852263,
    "velocity": 140,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71389,
        45.41501
    ]
},
{
    "routeDataPointId": "141",
    "segmentId": "1",
    "time": 1672163852273,
    "velocity": 141,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7139,
        45.41502
    ]
},
{
    "routeDataPointId": "142",
    "segmentId": "1",
    "time": 1672163852283,
    "velocity": 142,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71402,
        45.41522
    ]
},
{
    "routeDataPointId": "143",
    "segmentId": "1",
    "time": 1672163852293,
    "velocity": 143,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71407,
        45.41531
    ]
},
{
    "routeDataPointId": "144",
    "segmentId": "1",
    "time": 1672163852303,
    "velocity": 144,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71424,
        45.41565
    ]
},
{
    "routeDataPointId": "145",
    "segmentId": "1",
    "time": 1672163852313,
    "velocity": 145,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7146,
        45.41627
    ]
},
{
    "routeDataPointId": "146",
    "segmentId": "1",
    "time": 1672163852323,
    "velocity": 146,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71434,
        45.4164
    ]
},
{
    "routeDataPointId": "147",
    "segmentId": "1",
    "time": 1672163852333,
    "velocity": 147,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71429,
        45.41642
    ]
},
{
    "routeDataPointId": "148",
    "segmentId": "1",
    "time": 1672163852343,
    "velocity": 148,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71421,
        45.41646
    ]
},
{
    "routeDataPointId": "149",
    "segmentId": "1",
    "time": 1672163852353,
    "velocity": 149,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71413,
        45.4165
    ]
},
{
    "routeDataPointId": "150",
    "segmentId": "1",
    "time": 1672163852363,
    "velocity": 150,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71402,
        45.41658
    ]
},
{
    "routeDataPointId": "151",
    "segmentId": "1",
    "time": 1672163852373,
    "velocity": 151,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71388,
        45.41669
    ]
},
{
    "routeDataPointId": "152",
    "segmentId": "1",
    "time": 1672163852383,
    "velocity": 152,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71386,
        45.4167
    ]
},
{
    "routeDataPointId": "153",
    "segmentId": "1",
    "time": 1672163852393,
    "velocity": 153,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71378,
        45.41678
    ]
},
{
    "routeDataPointId": "154",
    "segmentId": "1",
    "time": 1672163852403,
    "velocity": 154,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71377,
        45.41678
    ]
},
{
    "routeDataPointId": "155",
    "segmentId": "1",
    "time": 1672163852413,
    "velocity": 155,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71368,
        45.41688
    ]
},
{
    "routeDataPointId": "156",
    "segmentId": "1",
    "time": 1672163852423,
    "velocity": 156,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71359,
        45.41698
    ]
},
{
    "routeDataPointId": "157",
    "segmentId": "1",
    "time": 1672163852433,
    "velocity": 157,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7135,
        45.41711
    ]
},
{
    "routeDataPointId": "158",
    "segmentId": "1",
    "time": 1672163852443,
    "velocity": 158,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71343,
        45.41721
    ]
},
{
    "routeDataPointId": "159",
    "segmentId": "1",
    "time": 1672163852453,
    "velocity": 159,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71327,
        45.41752
    ]
},
{
    "routeDataPointId": "160",
    "segmentId": "1",
    "time": 1672163852463,
    "velocity": 0,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71308,
        45.41787
    ]
},
{
    "routeDataPointId": "161",
    "segmentId": "1",
    "time": 1672163852473,
    "velocity": 1,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71302,
        45.41798
    ]
},
{
    "routeDataPointId": "162",
    "segmentId": "1",
    "time": 1672163852483,
    "velocity": 2,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71292,
        45.4181
    ]
},
{
    "routeDataPointId": "163",
    "segmentId": "1",
    "time": 1672163852493,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71282,
        45.41819
    ]
},
{
    "routeDataPointId": "164",
    "segmentId": "1",
    "time": 1672163852503,
    "velocity": 4,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71275,
        45.41826
    ]
},
{
    "routeDataPointId": "165",
    "segmentId": "1",
    "time": 1672163852513,
    "velocity": 5,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71262,
        45.41835
    ]
},
{
    "routeDataPointId": "166",
    "segmentId": "1",
    "time": 1672163852523,
    "velocity": 6,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7124,
        45.41847
    ]
},
{
    "routeDataPointId": "167",
    "segmentId": "1",
    "time": 1672163852533,
    "velocity": 7,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71231,
        45.41851
    ]
},
{
    "routeDataPointId": "168",
    "segmentId": "1",
    "time": 1672163852543,
    "velocity": 8,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71223,
        45.41855
    ]
},
{
    "routeDataPointId": "169",
    "segmentId": "1",
    "time": 1672163852553,
    "velocity": 9,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71216,
        45.41858
    ]
},
{
    "routeDataPointId": "170",
    "segmentId": "1",
    "time": 1672163852563,
    "velocity": 10,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71195,
        45.41866
    ]
},
{
    "routeDataPointId": "171",
    "segmentId": "1",
    "time": 1672163852573,
    "velocity": 11,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71182,
        45.41872
    ]
},
{
    "routeDataPointId": "172",
    "segmentId": "1",
    "time": 1672163852583,
    "velocity": 12,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71173,
        45.41877
    ]
},
{
    "routeDataPointId": "173",
    "segmentId": "1",
    "time": 1672163852593,
    "velocity": 13,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71158,
        45.41888
    ]
},
{
    "routeDataPointId": "174",
    "segmentId": "1",
    "time": 1672163852603,
    "velocity": 14,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71149,
        45.41895
    ]
},
{
    "routeDataPointId": "175",
    "segmentId": "1",
    "time": 1672163852613,
    "velocity": 15,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71144,
        45.419
    ]
},
{
    "routeDataPointId": "176",
    "segmentId": "1",
    "time": 1672163852623,
    "velocity": 16,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71141,
        45.41903
    ]
},
{
    "routeDataPointId": "177",
    "segmentId": "1",
    "time": 1672163852633,
    "velocity": 17,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7114,
        45.41909
    ]
},
{
    "routeDataPointId": "178",
    "segmentId": "1",
    "time": 1672163852643,
    "velocity": 18,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7114,
        45.41914
    ]
},
{
    "routeDataPointId": "179",
    "segmentId": "1",
    "time": 1672163852653,
    "velocity": 19,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71141,
        45.41919
    ]
},
{
    "routeDataPointId": "180",
    "segmentId": "1",
    "time": 1672163852663,
    "velocity": 20,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71143,
        45.41923
    ]
},
{
    "routeDataPointId": "181",
    "segmentId": "1",
    "time": 1672163852673,
    "velocity": 21,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71145,
        45.41928
    ]
},
{
    "routeDataPointId": "182",
    "segmentId": "1",
    "time": 1672163852683,
    "velocity": 22,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71148,
        45.41932
    ]
},
{
    "routeDataPointId": "183",
    "segmentId": "1",
    "time": 1672163852693,
    "velocity": 23,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71154,
        45.41938
    ]
},
{
    "routeDataPointId": "184",
    "segmentId": "1",
    "time": 1672163852703,
    "velocity": 24,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7116,
        45.41946
    ]
},
{
    "routeDataPointId": "185",
    "segmentId": "1",
    "time": 1672163852713,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71164,
        45.4195
    ]
},
{
    "routeDataPointId": "186",
    "segmentId": "1",
    "time": 1672163852723,
    "velocity": 26,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71198,
        45.4199
    ]
},
{
    "routeDataPointId": "187",
    "segmentId": "1",
    "time": 1672163852733,
    "velocity": 27,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71202,
        45.41995
    ]
},
{
    "routeDataPointId": "188",
    "segmentId": "1",
    "time": 1672163852743,
    "velocity": 28,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7121,
        45.42004
    ]
},
{
    "routeDataPointId": "189",
    "segmentId": "1",
    "time": 1672163852753,
    "velocity": 29,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71219,
        45.42014
    ]
},
{
    "routeDataPointId": "190",
    "segmentId": "1",
    "time": 1672163852763,
    "velocity": 30,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7123,
        45.42027
    ]
},
{
    "routeDataPointId": "191",
    "segmentId": "1",
    "time": 1672163852773,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71236,
        45.42034
    ]
},
{
    "routeDataPointId": "192",
    "segmentId": "1",
    "time": 1672163852783,
    "velocity": 32,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71243,
        45.42042
    ]
},
{
    "routeDataPointId": "193",
    "segmentId": "1",
    "time": 1672163852793,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71247,
        45.42046
    ]
},
{
    "routeDataPointId": "194",
    "segmentId": "1",
    "time": 1672163852803,
    "velocity": 34,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71251,
        45.4205
    ]
},
{
    "routeDataPointId": "195",
    "segmentId": "1",
    "time": 1672163852813,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71265,
        45.42068
    ]
},
{
    "routeDataPointId": "196",
    "segmentId": "1",
    "time": 1672163852823,
    "velocity": 36,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71277,
        45.42083
    ]
},
{
    "routeDataPointId": "197",
    "segmentId": "1",
    "time": 1672163852833,
    "velocity": 37,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71286,
        45.42098
    ]
},
{
    "routeDataPointId": "198",
    "segmentId": "1",
    "time": 1672163852843,
    "velocity": 38,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71288,
        45.421
    ]
},
{
    "routeDataPointId": "199",
    "segmentId": "1",
    "time": 1672163852853,
    "velocity": 39,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71295,
        45.4211
    ]
},
{
    "routeDataPointId": "200",
    "segmentId": "1",
    "time": 1672163852863,
    "velocity": 40,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71304,
        45.42126
    ]
},
{
    "routeDataPointId": "201",
    "segmentId": "1",
    "time": 1672163852873,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7131,
        45.42137
    ]
},
{
    "routeDataPointId": "202",
    "segmentId": "1",
    "time": 1672163852883,
    "velocity": 42,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71315,
        45.42148
    ]
},
{
    "routeDataPointId": "203",
    "segmentId": "1",
    "time": 1672163852893,
    "velocity": 43,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71318,
        45.42154
    ]
},
{
    "routeDataPointId": "204",
    "segmentId": "1",
    "time": 1672163852903,
    "velocity": 44,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71321,
        45.42162
    ]
},
{
    "routeDataPointId": "205",
    "segmentId": "1",
    "time": 1672163852913,
    "velocity": 45,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71331,
        45.42187
    ]
},
{
    "routeDataPointId": "206",
    "segmentId": "1",
    "time": 1672163852923,
    "velocity": 46,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71343,
        45.42212
    ]
},
{
    "routeDataPointId": "207",
    "segmentId": "1",
    "time": 1672163852933,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71347,
        45.42222
    ]
},
{
    "routeDataPointId": "208",
    "segmentId": "1",
    "time": 1672163852943,
    "velocity": 48,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71353,
        45.42235
    ]
},
{
    "routeDataPointId": "209",
    "segmentId": "1",
    "time": 1672163852953,
    "velocity": 49,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71362,
        45.42257
    ]
},
{
    "routeDataPointId": "210",
    "segmentId": "1",
    "time": 1672163852963,
    "velocity": 50,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71378,
        45.42289
    ]
},
{
    "routeDataPointId": "211",
    "segmentId": "1",
    "time": 1672163852973,
    "velocity": 51,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7138,
        45.42293
    ]
},
{
    "routeDataPointId": "212",
    "segmentId": "1",
    "time": 1672163852983,
    "velocity": 52,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71385,
        45.42305
    ]
},
{
    "routeDataPointId": "213",
    "segmentId": "1",
    "time": 1672163852993,
    "velocity": 53,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71387,
        45.42312
    ]
},
{
    "routeDataPointId": "214",
    "segmentId": "1",
    "time": 1672163853003,
    "velocity": 54,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71393,
        45.42329
    ]
},
{
    "routeDataPointId": "215",
    "segmentId": "1",
    "time": 1672163853013,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71399,
        45.42346
    ]
},
{
    "routeDataPointId": "216",
    "segmentId": "1",
    "time": 1672163853023,
    "velocity": 56,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71401,
        45.42352
    ]
},
{
    "routeDataPointId": "217",
    "segmentId": "1",
    "time": 1672163853033,
    "velocity": 57,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71403,
        45.42361
    ]
},
{
    "routeDataPointId": "218",
    "segmentId": "1",
    "time": 1672163853043,
    "velocity": 58,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71405,
        45.4237
    ]
},
{
    "routeDataPointId": "219",
    "segmentId": "1",
    "time": 1672163853053,
    "velocity": 59,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71406,
        45.42374
    ]
},
{
    "routeDataPointId": "220",
    "segmentId": "1",
    "time": 1672163853063,
    "velocity": 60,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71407,
        45.42381
    ]
},
{
    "routeDataPointId": "221",
    "segmentId": "1",
    "time": 1672163853073,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71409,
        45.42393
    ]
},
{
    "routeDataPointId": "222",
    "segmentId": "1",
    "time": 1672163853083,
    "velocity": 62,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71409,
        45.42399
    ]
},
{
    "routeDataPointId": "223",
    "segmentId": "1",
    "time": 1672163853093,
    "velocity": 63,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7141,
        45.42405
    ]
},
{
    "routeDataPointId": "224",
    "segmentId": "1",
    "time": 1672163853103,
    "velocity": 64,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7141,
        45.42407
    ]
},
{
    "routeDataPointId": "225",
    "segmentId": "1",
    "time": 1672163853113,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7141,
        45.42417
    ]
},
{
    "routeDataPointId": "226",
    "segmentId": "1",
    "time": 1672163853123,
    "velocity": 66,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71409,
        45.4242
    ]
},
{
    "routeDataPointId": "227",
    "segmentId": "1",
    "time": 1672163853133,
    "velocity": 67,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71407,
        45.42432
    ]
},
{
    "routeDataPointId": "228",
    "segmentId": "1",
    "time": 1672163853143,
    "velocity": 68,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71406,
        45.42438
    ]
},
{
    "routeDataPointId": "229",
    "segmentId": "1",
    "time": 1672163853153,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71406,
        45.42442
    ]
},
{
    "routeDataPointId": "230",
    "segmentId": "1",
    "time": 1672163853163,
    "velocity": 70,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71405,
        45.42446
    ]
},
{
    "routeDataPointId": "231",
    "segmentId": "1",
    "time": 1672163853173,
    "velocity": 71,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71404,
        45.42461
    ]
},
{
    "routeDataPointId": "232",
    "segmentId": "1",
    "time": 1672163853183,
    "velocity": 72,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71403,
        45.42474
    ]
},
{
    "routeDataPointId": "233",
    "segmentId": "1",
    "time": 1672163853193,
    "velocity": 73,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71422,
        45.42473
    ]
},
{
    "routeDataPointId": "234",
    "segmentId": "1",
    "time": 1672163853203,
    "velocity": 74,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7144,
        45.42474
    ]
},
{
    "routeDataPointId": "235",
    "segmentId": "1",
    "time": 1672163853213,
    "velocity": 75,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71459,
        45.42474
    ]
},
{
    "routeDataPointId": "236",
    "segmentId": "1",
    "time": 1672163853223,
    "velocity": 76,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71478,
        45.42475
    ]
},
{
    "routeDataPointId": "237",
    "segmentId": "1",
    "time": 1672163853233,
    "velocity": 77,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71504,
        45.42476
    ]
},
{
    "routeDataPointId": "238",
    "segmentId": "1",
    "time": 1672163853243,
    "velocity": 78,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71508,
        45.42477
    ]
},
{
    "routeDataPointId": "239",
    "segmentId": "1",
    "time": 1672163853253,
    "velocity": 79,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7154,
        45.42478
    ]
},
{
    "routeDataPointId": "240",
    "segmentId": "1",
    "time": 1672163853263,
    "velocity": 80,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71569,
        45.4248
    ]
},
{
    "routeDataPointId": "241",
    "segmentId": "1",
    "time": 1672163853273,
    "velocity": 81,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71598,
        45.42481
    ]
},
{
    "routeDataPointId": "242",
    "segmentId": "1",
    "time": 1672163853283,
    "velocity": 82,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71617,
        45.42481
    ]
},
{
    "routeDataPointId": "243",
    "segmentId": "1",
    "time": 1672163853293,
    "velocity": 83,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71637,
        45.42481
    ]
},
{
    "routeDataPointId": "244",
    "segmentId": "1",
    "time": 1672163853303,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71662,
        45.4248
    ]
},
{
    "routeDataPointId": "245",
    "segmentId": "1",
    "time": 1672163853313,
    "velocity": 85,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71679,
        45.42477
    ]
},
{
    "routeDataPointId": "246",
    "segmentId": "1",
    "time": 1672163853323,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71692,
        45.42476
    ]
},
{
    "routeDataPointId": "247",
    "segmentId": "1",
    "time": 1672163853333,
    "velocity": 87,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71709,
        45.42474
    ]
},
{
    "routeDataPointId": "248",
    "segmentId": "1",
    "time": 1672163853343,
    "velocity": 88,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7173,
        45.42471
    ]
},
{
    "routeDataPointId": "249",
    "segmentId": "1",
    "time": 1672163853353,
    "velocity": 89,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71757,
        45.42466
    ]
},
{
    "routeDataPointId": "250",
    "segmentId": "1",
    "time": 1672163853363,
    "velocity": 90,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71783,
        45.42461
    ]
},
{
    "routeDataPointId": "251",
    "segmentId": "1",
    "time": 1672163853373,
    "velocity": 91,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71798,
        45.42458
    ]
},
{
    "routeDataPointId": "252",
    "segmentId": "1",
    "time": 1672163853383,
    "velocity": 92,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7182,
        45.42455
    ]
},
{
    "routeDataPointId": "253",
    "segmentId": "1",
    "time": 1672163853393,
    "velocity": 93,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71846,
        45.42453
    ]
},
{
    "routeDataPointId": "254",
    "segmentId": "1",
    "time": 1672163853403,
    "velocity": 94,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71856,
        45.42453
    ]
},
{
    "routeDataPointId": "255",
    "segmentId": "1",
    "time": 1672163853413,
    "velocity": 95,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71872,
        45.42454
    ]
},
{
    "routeDataPointId": "256",
    "segmentId": "1",
    "time": 1672163853423,
    "velocity": 96,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71881,
        45.42455
    ]
},
{
    "routeDataPointId": "257",
    "segmentId": "1",
    "time": 1672163853433,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71883,
        45.42455
    ]
},
{
    "routeDataPointId": "258",
    "segmentId": "1",
    "time": 1672163853443,
    "velocity": 98,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71896,
        45.42457
    ]
},
{
    "routeDataPointId": "259",
    "segmentId": "1",
    "time": 1672163853453,
    "velocity": 99,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71904,
        45.42459
    ]
},
{
    "routeDataPointId": "260",
    "segmentId": "1",
    "time": 1672163853463,
    "velocity": 100,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71915,
        45.42461
    ]
},
{
    "routeDataPointId": "261",
    "segmentId": "1",
    "time": 1672163853473,
    "velocity": 101,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71979,
        45.42477
    ]
},
{
    "routeDataPointId": "262",
    "segmentId": "1",
    "time": 1672163853483,
    "velocity": 102,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71992,
        45.42479
    ]
},
{
    "routeDataPointId": "263",
    "segmentId": "1",
    "time": 1672163853493,
    "velocity": 103,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72,
        45.4248
    ]
},
{
    "routeDataPointId": "264",
    "segmentId": "1",
    "time": 1672163853503,
    "velocity": 104,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72004,
        45.42481
    ]
},
{
    "routeDataPointId": "265",
    "segmentId": "1",
    "time": 1672163853513,
    "velocity": 105,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7201,
        45.42481
    ]
},
{
    "routeDataPointId": "266",
    "segmentId": "1",
    "time": 1672163853523,
    "velocity": 106,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72016,
        45.42482
    ]
},
{
    "routeDataPointId": "267",
    "segmentId": "1",
    "time": 1672163853533,
    "velocity": 107,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72026,
        45.42482
    ]
},
{
    "routeDataPointId": "268",
    "segmentId": "1",
    "time": 1672163853543,
    "velocity": 108,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72039,
        45.42481
    ]
},
{
    "routeDataPointId": "269",
    "segmentId": "1",
    "time": 1672163853553,
    "velocity": 109,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72062,
        45.4248
    ]
},
{
    "routeDataPointId": "270",
    "segmentId": "1",
    "time": 1672163853563,
    "velocity": 110,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72085,
        45.42479
    ]
},
{
    "routeDataPointId": "271",
    "segmentId": "1",
    "time": 1672163853573,
    "velocity": 111,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72087,
        45.42479
    ]
},
{
    "routeDataPointId": "272",
    "segmentId": "1",
    "time": 1672163853583,
    "velocity": 112,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72093,
        45.42478
    ]
},
{
    "routeDataPointId": "273",
    "segmentId": "1",
    "time": 1672163853593,
    "velocity": 113,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72114,
        45.42476
    ]
},
{
    "routeDataPointId": "274",
    "segmentId": "1",
    "time": 1672163853603,
    "velocity": 114,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72136,
        45.42475
    ]
},
{
    "routeDataPointId": "275",
    "segmentId": "1",
    "time": 1672163853613,
    "velocity": 115,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72166,
        45.42472
    ]
},
{
    "routeDataPointId": "276",
    "segmentId": "1",
    "time": 1672163853623,
    "velocity": 116,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72173,
        45.42471
    ]
},
{
    "routeDataPointId": "277",
    "segmentId": "1",
    "time": 1672163853633,
    "velocity": 117,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72192,
        45.42469
    ]
},
{
    "routeDataPointId": "278",
    "segmentId": "1",
    "time": 1672163853643,
    "velocity": 118,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72204,
        45.42467
    ]
},
{
    "routeDataPointId": "279",
    "segmentId": "1",
    "time": 1672163853653,
    "velocity": 119,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7221,
        45.42467
    ]
},
{
    "routeDataPointId": "280",
    "segmentId": "1",
    "time": 1672163853663,
    "velocity": 120,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72227,
        45.42466
    ]
},
{
    "routeDataPointId": "281",
    "segmentId": "1",
    "time": 1672163853673,
    "velocity": 121,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72255,
        45.42463
    ]
},
{
    "routeDataPointId": "282",
    "segmentId": "1",
    "time": 1672163853683,
    "velocity": 122,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72258,
        45.42462
    ]
},
{
    "routeDataPointId": "283",
    "segmentId": "1",
    "time": 1672163853693,
    "velocity": 123,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72285,
        45.42456
    ]
},
{
    "routeDataPointId": "284",
    "segmentId": "1",
    "time": 1672163853703,
    "velocity": 124,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72316,
        45.42507
    ]
},
{
    "routeDataPointId": "285",
    "segmentId": "1",
    "time": 1672163853713,
    "velocity": 125,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72335,
        45.42537
    ]
},
{
    "routeDataPointId": "286",
    "segmentId": "1",
    "time": 1672163853723,
    "velocity": 126,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72342,
        45.42547
    ]
},
{
    "routeDataPointId": "287",
    "segmentId": "1",
    "time": 1672163853733,
    "velocity": 127,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72358,
        45.42571
    ]
},
{
    "routeDataPointId": "288",
    "segmentId": "1",
    "time": 1672163853743,
    "velocity": 128,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72372,
        45.42594
    ]
},
{
    "routeDataPointId": "289",
    "segmentId": "1",
    "time": 1672163853753,
    "velocity": 129,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72388,
        45.42619
    ]
},
{
    "routeDataPointId": "290",
    "segmentId": "1",
    "time": 1672163853763,
    "velocity": 130,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72392,
        45.42625
    ]
},
{
    "routeDataPointId": "291",
    "segmentId": "1",
    "time": 1672163853773,
    "velocity": 131,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72401,
        45.4264
    ]
},
{
    "routeDataPointId": "292",
    "segmentId": "1",
    "time": 1672163853783,
    "velocity": 132,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72412,
        45.42657
    ]
},
{
    "routeDataPointId": "293",
    "segmentId": "1",
    "time": 1672163853793,
    "velocity": 133,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7245,
        45.42717
    ]
},
{
    "routeDataPointId": "294",
    "segmentId": "1",
    "time": 1672163853803,
    "velocity": 134,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72471,
        45.42752
    ]
},
{
    "routeDataPointId": "295",
    "segmentId": "1",
    "time": 1672163853813,
    "velocity": 135,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72479,
        45.42766
    ]
},
{
    "routeDataPointId": "296",
    "segmentId": "1",
    "time": 1672163853823,
    "velocity": 136,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72489,
        45.42782
    ]
},
{
    "routeDataPointId": "297",
    "segmentId": "1",
    "time": 1672163853833,
    "velocity": 137,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72506,
        45.42814
    ]
},
{
    "routeDataPointId": "298",
    "segmentId": "1",
    "time": 1672163853843,
    "velocity": 138,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72522,
        45.42842
    ]
},
{
    "routeDataPointId": "299",
    "segmentId": "1",
    "time": 1672163853853,
    "velocity": 139,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72528,
        45.42849
    ]
},
{
    "routeDataPointId": "300",
    "segmentId": "1",
    "time": 1672163853863,
    "velocity": 140,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72551,
        45.42887
    ]
},
{
    "routeDataPointId": "301",
    "segmentId": "1",
    "time": 1672163853873,
    "velocity": 141,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72555,
        45.42893
    ]
},
{
    "routeDataPointId": "302",
    "segmentId": "1",
    "time": 1672163853883,
    "velocity": 142,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72563,
        45.42902
    ]
},
{
    "routeDataPointId": "303",
    "segmentId": "1",
    "time": 1672163853893,
    "velocity": 143,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72568,
        45.42907
    ]
},
{
    "routeDataPointId": "304",
    "segmentId": "1",
    "time": 1672163853903,
    "velocity": 144,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72573,
        45.42911
    ]
},
{
    "routeDataPointId": "305",
    "segmentId": "1",
    "time": 1672163853913,
    "velocity": 145,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72579,
        45.42916
    ]
},
{
    "routeDataPointId": "306",
    "segmentId": "1",
    "time": 1672163853923,
    "velocity": 146,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72583,
        45.42918
    ]
},
{
    "routeDataPointId": "307",
    "segmentId": "1",
    "time": 1672163853933,
    "velocity": 147,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7259,
        45.42923
    ]
},
{
    "routeDataPointId": "308",
    "segmentId": "1",
    "time": 1672163853943,
    "velocity": 148,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72598,
        45.42927
    ]
},
{
    "routeDataPointId": "309",
    "segmentId": "1",
    "time": 1672163853953,
    "velocity": 149,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72609,
        45.42931
    ]
},
{
    "routeDataPointId": "310",
    "segmentId": "1",
    "time": 1672163853963,
    "velocity": 150,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72621,
        45.42935
    ]
},
{
    "routeDataPointId": "311",
    "segmentId": "1",
    "time": 1672163853973,
    "velocity": 151,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72638,
        45.4294
    ]
},
{
    "routeDataPointId": "312",
    "segmentId": "1",
    "time": 1672163853983,
    "velocity": 152,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72661,
        45.42945
    ]
},
{
    "routeDataPointId": "313",
    "segmentId": "1",
    "time": 1672163853993,
    "velocity": 153,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7267,
        45.42952
    ]
},
{
    "routeDataPointId": "314",
    "segmentId": "1",
    "time": 1672163854003,
    "velocity": 154,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72694,
        45.42958
    ]
},
{
    "routeDataPointId": "315",
    "segmentId": "1",
    "time": 1672163854013,
    "velocity": 155,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72707,
        45.42961
    ]
},
{
    "routeDataPointId": "316",
    "segmentId": "1",
    "time": 1672163854023,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72731,
        45.42968
    ]
},
{
    "routeDataPointId": "317",
    "segmentId": "1",
    "time": 1672163854033,
    "velocity": 157,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72734,
        45.42969
    ]
},
{
    "routeDataPointId": "318",
    "segmentId": "1",
    "time": 1672163854043,
    "velocity": 158,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72735,
        45.4297
    ]
},
{
    "routeDataPointId": "319",
    "segmentId": "1",
    "time": 1672163854053,
    "velocity": 159,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72759,
        45.42977
    ]
},
{
    "routeDataPointId": "320",
    "segmentId": "1",
    "time": 1672163854063,
    "velocity": 0,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72771,
        45.42981
    ]
},
{
    "routeDataPointId": "321",
    "segmentId": "1",
    "time": 1672163854073,
    "velocity": 1,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72781,
        45.42984
    ]
},
{
    "routeDataPointId": "322",
    "segmentId": "1",
    "time": 1672163854083,
    "velocity": 2,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72786,
        45.42985
    ]
},
{
    "routeDataPointId": "323",
    "segmentId": "1",
    "time": 1672163854093,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7279,
        45.42987
    ]
},
{
    "routeDataPointId": "324",
    "segmentId": "1",
    "time": 1672163854103,
    "velocity": 4,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72814,
        45.42993
    ]
},
{
    "routeDataPointId": "325",
    "segmentId": "1",
    "time": 1672163854113,
    "velocity": 5,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72849,
        45.43003
    ]
},
{
    "routeDataPointId": "326",
    "segmentId": "1",
    "time": 1672163854123,
    "velocity": 6,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72863,
        45.43008
    ]
},
{
    "routeDataPointId": "327",
    "segmentId": "1",
    "time": 1672163854133,
    "velocity": 7,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72904,
        45.43019
    ]
},
{
    "routeDataPointId": "328",
    "segmentId": "1",
    "time": 1672163854143,
    "velocity": 8,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72951,
        45.43034
    ]
},
{
    "routeDataPointId": "329",
    "segmentId": "1",
    "time": 1672163854153,
    "velocity": 9,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72962,
        45.4304
    ]
},
{
    "routeDataPointId": "330",
    "segmentId": "1",
    "time": 1672163854163,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7299,
        45.43049
    ]
},
{
    "routeDataPointId": "331",
    "segmentId": "1",
    "time": 1672163854173,
    "velocity": 11,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73018,
        45.43058
    ]
},
{
    "routeDataPointId": "332",
    "segmentId": "1",
    "time": 1672163854183,
    "velocity": 12,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73039,
        45.43065
    ]
},
{
    "routeDataPointId": "333",
    "segmentId": "1",
    "time": 1672163854193,
    "velocity": 13,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73074,
        45.43076
    ]
},
{
    "routeDataPointId": "334",
    "segmentId": "1",
    "time": 1672163854203,
    "velocity": 14,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73129,
        45.43093
    ]
},
{
    "routeDataPointId": "335",
    "segmentId": "1",
    "time": 1672163854213,
    "velocity": 15,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73165,
        45.43104
    ]
},
{
    "routeDataPointId": "336",
    "segmentId": "1",
    "time": 1672163854223,
    "velocity": 16,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73231,
        45.43125
    ]
},
{
    "routeDataPointId": "337",
    "segmentId": "1",
    "time": 1672163854233,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73258,
        45.43135
    ]
},
{
    "routeDataPointId": "338",
    "segmentId": "1",
    "time": 1672163854243,
    "velocity": 18,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73275,
        45.43142
    ]
},
{
    "routeDataPointId": "339",
    "segmentId": "1",
    "time": 1672163854253,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73295,
        45.43148
    ]
},
{
    "routeDataPointId": "340",
    "segmentId": "1",
    "time": 1672163854263,
    "velocity": 20,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73302,
        45.43149
    ]
},
{
    "routeDataPointId": "341",
    "segmentId": "1",
    "time": 1672163854273,
    "velocity": 21,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73303,
        45.4315
    ]
},
{
    "routeDataPointId": "342",
    "segmentId": "1",
    "time": 1672163854283,
    "velocity": 22,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73303,
        45.43151
    ]
},
{
    "routeDataPointId": "343",
    "segmentId": "1",
    "time": 1672163854293,
    "velocity": 23,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73303,
        45.43152
    ]
},
{
    "routeDataPointId": "344",
    "segmentId": "1",
    "time": 1672163854303,
    "velocity": 24,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73304,
        45.43152
    ]
},
{
    "routeDataPointId": "345",
    "segmentId": "1",
    "time": 1672163854313,
    "velocity": 25,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73304,
        45.43153
    ]
},
{
    "routeDataPointId": "346",
    "segmentId": "1",
    "time": 1672163854323,
    "velocity": 26,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73305,
        45.43153
    ]
},
{
    "routeDataPointId": "347",
    "segmentId": "1",
    "time": 1672163854333,
    "velocity": 27,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73305,
        45.43154
    ]
},
{
    "routeDataPointId": "348",
    "segmentId": "1",
    "time": 1672163854343,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73306,
        45.43154
    ]
},
{
    "routeDataPointId": "349",
    "segmentId": "1",
    "time": 1672163854353,
    "velocity": 29,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73306,
        45.43155
    ]
},
{
    "routeDataPointId": "350",
    "segmentId": "1",
    "time": 1672163854363,
    "velocity": 30,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73307,
        45.43155
    ]
},
{
    "routeDataPointId": "351",
    "segmentId": "1",
    "time": 1672163854373,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73308,
        45.43156
    ]
},
{
    "routeDataPointId": "352",
    "segmentId": "1",
    "time": 1672163854383,
    "velocity": 32,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73309,
        45.43156
    ]
},
{
    "routeDataPointId": "353",
    "segmentId": "1",
    "time": 1672163854393,
    "velocity": 33,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7331,
        45.43156
    ]
},
{
    "routeDataPointId": "354",
    "segmentId": "1",
    "time": 1672163854403,
    "velocity": 34,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73311,
        45.43157
    ]
},
{
    "routeDataPointId": "355",
    "segmentId": "1",
    "time": 1672163854413,
    "velocity": 35,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73316,
        45.43168
    ]
},
{
    "routeDataPointId": "356",
    "segmentId": "1",
    "time": 1672163854423,
    "velocity": 36,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73317,
        45.43175
    ]
},
{
    "routeDataPointId": "357",
    "segmentId": "1",
    "time": 1672163854433,
    "velocity": 37,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73318,
        45.4318
    ]
},
{
    "routeDataPointId": "358",
    "segmentId": "1",
    "time": 1672163854443,
    "velocity": 38,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73318,
        45.43182
    ]
},
{
    "routeDataPointId": "359",
    "segmentId": "1",
    "time": 1672163854453,
    "velocity": 39,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73317,
        45.43188
    ]
},
{
    "routeDataPointId": "360",
    "segmentId": "1",
    "time": 1672163854463,
    "velocity": 40,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73315,
        45.43197
    ]
},
{
    "routeDataPointId": "361",
    "segmentId": "1",
    "time": 1672163854473,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73312,
        45.43198
    ]
},
{
    "routeDataPointId": "362",
    "segmentId": "1",
    "time": 1672163854483,
    "velocity": 42,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7331,
        45.43198
    ]
},
{
    "routeDataPointId": "363",
    "segmentId": "1",
    "time": 1672163854493,
    "velocity": 43,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73306,
        45.432
    ]
},
{
    "routeDataPointId": "364",
    "segmentId": "1",
    "time": 1672163854503,
    "velocity": 44,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73303,
        45.43201
    ]
},
{
    "routeDataPointId": "365",
    "segmentId": "1",
    "time": 1672163854513,
    "velocity": 45,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73302,
        45.43203
    ]
},
{
    "routeDataPointId": "366",
    "segmentId": "1",
    "time": 1672163854523,
    "velocity": 46,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "foo bar",
    "coordinates": [
        -75.73301,
        45.43204
    ]
},
{
    "routeDataPointId": "367",
    "segmentId": "1",
    "time": 1672163854533,
    "velocity": 47,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73298,
        45.43207
    ]
},
{
    "routeDataPointId": "368",
    "segmentId": "1",
    "time": 1672163854543,
    "velocity": 48,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73296,
        45.43209
    ]
},
{
    "routeDataPointId": "369",
    "segmentId": "1",
    "time": 1672163854553,
    "velocity": 49,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73295,
        45.43211
    ]
},
{
    "routeDataPointId": "370",
    "segmentId": "1",
    "time": 1672163854563,
    "velocity": 50,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73294,
        45.43213
    ]
},
{
    "routeDataPointId": "371",
    "segmentId": "1",
    "time": 1672163854573,
    "velocity": 51,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73293,
        45.43216
    ]
},
{
    "routeDataPointId": "372",
    "segmentId": "1",
    "time": 1672163854583,
    "velocity": 52,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73293,
        45.43218
    ]
},
{
    "routeDataPointId": "373",
    "segmentId": "1",
    "time": 1672163854593,
    "velocity": 53,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73294,
        45.43221
    ]
},
{
    "routeDataPointId": "374",
    "segmentId": "1",
    "time": 1672163854603,
    "velocity": 54,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73294,
        45.43223
    ]
},
{
    "routeDataPointId": "375",
    "segmentId": "1",
    "time": 1672163854613,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73295,
        45.43225
    ]
},
{
    "routeDataPointId": "376",
    "segmentId": "1",
    "time": 1672163854623,
    "velocity": 56,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73296,
        45.43227
    ]
},
{
    "routeDataPointId": "377",
    "segmentId": "1",
    "time": 1672163854633,
    "velocity": 57,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73298,
        45.43229
    ]
},
{
    "routeDataPointId": "378",
    "segmentId": "1",
    "time": 1672163854643,
    "velocity": 58,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73299,
        45.43231
    ]
},
{
    "routeDataPointId": "379",
    "segmentId": "1",
    "time": 1672163854653,
    "velocity": 59,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73301,
        45.43232
    ]
},
{
    "routeDataPointId": "380",
    "segmentId": "1",
    "time": 1672163854663,
    "velocity": 60,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73303,
        45.43234
    ]
},
{
    "routeDataPointId": "381",
    "segmentId": "1",
    "time": 1672163854673,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73305,
        45.43235
    ]
},
{
    "routeDataPointId": "382",
    "segmentId": "1",
    "time": 1672163854683,
    "velocity": 62,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73307,
        45.43236
    ]
},
{
    "routeDataPointId": "383",
    "segmentId": "1",
    "time": 1672163854693,
    "velocity": 63,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7331,
        45.43237
    ]
},
{
    "routeDataPointId": "384",
    "segmentId": "1",
    "time": 1672163854703,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73313,
        45.43238
    ]
},
{
    "routeDataPointId": "385",
    "segmentId": "1",
    "time": 1672163854713,
    "velocity": 65,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "foo bar",
    "coordinates": [
        -75.73316,
        45.43239
    ]
},
{
    "routeDataPointId": "386",
    "segmentId": "1",
    "time": 1672163854723,
    "velocity": 66,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73319,
        45.43239
    ]
},
{
    "routeDataPointId": "387",
    "segmentId": "1",
    "time": 1672163854733,
    "velocity": 67,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73322,
        45.43239
    ]
},
{
    "routeDataPointId": "388",
    "segmentId": "1",
    "time": 1672163854743,
    "velocity": 68,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73326,
        45.43239
    ]
},
{
    "routeDataPointId": "389",
    "segmentId": "1",
    "time": 1672163854753,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7333,
        45.43239
    ]
},
{
    "routeDataPointId": "390",
    "segmentId": "1",
    "time": 1672163854763,
    "velocity": 70,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73333,
        45.43238
    ]
},
{
    "routeDataPointId": "391",
    "segmentId": "1",
    "time": 1672163854773,
    "velocity": 71,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73336,
        45.43237
    ]
},
{
    "routeDataPointId": "392",
    "segmentId": "1",
    "time": 1672163854783,
    "velocity": 72,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73339,
        45.43236
    ]
},
{
    "routeDataPointId": "393",
    "segmentId": "1",
    "time": 1672163854793,
    "velocity": 73,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "foo bar",
    "coordinates": [
        -75.73341,
        45.43236
    ]
},
{
    "routeDataPointId": "394",
    "segmentId": "1",
    "time": 1672163854803,
    "velocity": 74,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73343,
        45.43235
    ]
},
{
    "routeDataPointId": "395",
    "segmentId": "1",
    "time": 1672163854813,
    "velocity": 75,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73345,
        45.43233
    ]
},
{
    "routeDataPointId": "396",
    "segmentId": "1",
    "time": 1672163854823,
    "velocity": 76,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73347,
        45.43232
    ]
},
{
    "routeDataPointId": "397",
    "segmentId": "1",
    "time": 1672163854833,
    "velocity": 77,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73357,
        45.43229
    ]
},
{
    "routeDataPointId": "398",
    "segmentId": "1",
    "time": 1672163854843,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73363,
        45.43228
    ]
},
{
    "routeDataPointId": "399",
    "segmentId": "1",
    "time": 1672163854853,
    "velocity": 79,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73367,
        45.43227
    ]
},
{
    "routeDataPointId": "400",
    "segmentId": "1",
    "time": 1672163854863,
    "velocity": 80,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73371,
        45.43226
    ]
},
{
    "routeDataPointId": "401",
    "segmentId": "1",
    "time": 1672163854873,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73376,
        45.43226
    ]
},
{
    "routeDataPointId": "402",
    "segmentId": "1",
    "time": 1672163854883,
    "velocity": 82,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7338,
        45.43225
    ]
},
{
    "routeDataPointId": "403",
    "segmentId": "1",
    "time": 1672163854893,
    "velocity": 83,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73385,
        45.43225
    ]
},
{
    "routeDataPointId": "404",
    "segmentId": "1",
    "time": 1672163854903,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73389,
        45.43225
    ]
},
{
    "routeDataPointId": "405",
    "segmentId": "1",
    "time": 1672163854913,
    "velocity": 85,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73396,
        45.43225
    ]
},
{
    "routeDataPointId": "406",
    "segmentId": "1",
    "time": 1672163854923,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73448,
        45.43226
    ]
},
{
    "routeDataPointId": "407",
    "segmentId": "1",
    "time": 1672163854933,
    "velocity": 87,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73473,
        45.43227
    ]
},
{
    "routeDataPointId": "408",
    "segmentId": "1",
    "time": 1672163854943,
    "velocity": 88,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73482,
        45.43227
    ]
},
{
    "routeDataPointId": "409",
    "segmentId": "1",
    "time": 1672163854953,
    "velocity": 89,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73498,
        45.43227
    ]
},
{
    "routeDataPointId": "410",
    "segmentId": "1",
    "time": 1672163854963,
    "velocity": 90,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73558,
        45.43229
    ]
},
{
    "routeDataPointId": "411",
    "segmentId": "1",
    "time": 1672163854973,
    "velocity": 91,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73573,
        45.43229
    ]
},
{
    "routeDataPointId": "412",
    "segmentId": "1",
    "time": 1672163854983,
    "velocity": 92,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73574,
        45.43229
    ]
},
{
    "routeDataPointId": "413",
    "segmentId": "1",
    "time": 1672163854993,
    "velocity": 93,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73584,
        45.4323
    ]
},
{
    "routeDataPointId": "414",
    "segmentId": "1",
    "time": 1672163855003,
    "velocity": 94,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7359,
        45.4323
    ]
},
{
    "routeDataPointId": "415",
    "segmentId": "1",
    "time": 1672163855013,
    "velocity": 95,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73603,
        45.43231
    ]
},
{
    "routeDataPointId": "416",
    "segmentId": "1",
    "time": 1672163855023,
    "velocity": 96,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73603,
        45.43232
    ]
},
{
    "routeDataPointId": "417",
    "segmentId": "1",
    "time": 1672163855033,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73604,
        45.43233
    ]
},
{
    "routeDataPointId": "418",
    "segmentId": "1",
    "time": 1672163855043,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73605,
        45.43233
    ]
},
{
    "routeDataPointId": "419",
    "segmentId": "1",
    "time": 1672163855053,
    "velocity": 99,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73605,
        45.43234
    ]
},
{
    "routeDataPointId": "420",
    "segmentId": "1",
    "time": 1672163855063,
    "velocity": 100,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73606,
        45.43234
    ]
},
{
    "routeDataPointId": "421",
    "segmentId": "1",
    "time": 1672163855073,
    "velocity": 101,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73607,
        45.43235
    ]
},
{
    "routeDataPointId": "422",
    "segmentId": "1",
    "time": 1672163855083,
    "velocity": 102,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73609,
        45.43236
    ]
},
{
    "routeDataPointId": "423",
    "segmentId": "1",
    "time": 1672163855093,
    "velocity": 103,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73611,
        45.43237
    ]
},
{
    "routeDataPointId": "424",
    "segmentId": "1",
    "time": 1672163855103,
    "velocity": 104,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73613,
        45.43237
    ]
},
{
    "routeDataPointId": "425",
    "segmentId": "1",
    "time": 1672163855113,
    "velocity": 105,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73616,
        45.43238
    ]
},
{
    "routeDataPointId": "426",
    "segmentId": "1",
    "time": 1672163855123,
    "velocity": 106,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73618,
        45.43238
    ]
},
{
    "routeDataPointId": "427",
    "segmentId": "1",
    "time": 1672163855133,
    "velocity": 107,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73621,
        45.43238
    ]
},
{
    "routeDataPointId": "428",
    "segmentId": "1",
    "time": 1672163855143,
    "velocity": 108,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73624,
        45.43238
    ]
},
{
    "routeDataPointId": "429",
    "segmentId": "1",
    "time": 1672163855153,
    "velocity": 109,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73627,
        45.43237
    ]
},
{
    "routeDataPointId": "430",
    "segmentId": "1",
    "time": 1672163855163,
    "velocity": 110,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73629,
        45.43236
    ]
},
{
    "routeDataPointId": "431",
    "segmentId": "1",
    "time": 1672163855173,
    "velocity": 111,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7363,
        45.43236
    ]
},
{
    "routeDataPointId": "432",
    "segmentId": "1",
    "time": 1672163855183,
    "velocity": 112,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73631,
        45.43236
    ]
},
{
    "routeDataPointId": "433",
    "segmentId": "1",
    "time": 1672163855193,
    "velocity": 113,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73632,
        45.43235
    ]
},
{
    "routeDataPointId": "434",
    "segmentId": "1",
    "time": 1672163855203,
    "velocity": 114,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73633,
        45.43235
    ]
},
{
    "routeDataPointId": "435",
    "segmentId": "1",
    "time": 1672163855213,
    "velocity": 115,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73634,
        45.43234
    ]
},
{
    "routeDataPointId": "436",
    "segmentId": "1",
    "time": 1672163855223,
    "velocity": 116,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73635,
        45.43234
    ]
},
{
    "routeDataPointId": "437",
    "segmentId": "1",
    "time": 1672163855233,
    "velocity": 117,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73646,
        45.43233
    ]
},
{
    "routeDataPointId": "438",
    "segmentId": "1",
    "time": 1672163855243,
    "velocity": 118,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73652,
        45.43232
    ]
},
{
    "routeDataPointId": "439",
    "segmentId": "1",
    "time": 1672163855253,
    "velocity": 119,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73656,
        45.43231
    ]
},
{
    "routeDataPointId": "440",
    "segmentId": "1",
    "time": 1672163855263,
    "velocity": 120,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73668,
        45.43231
    ]
},
{
    "routeDataPointId": "441",
    "segmentId": "1",
    "time": 1672163855273,
    "velocity": 121,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7367,
        45.43231
    ]
},
{
    "routeDataPointId": "442",
    "segmentId": "1",
    "time": 1672163855283,
    "velocity": 122,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73698,
        45.43232
    ]
},
{
    "routeDataPointId": "443",
    "segmentId": "1",
    "time": 1672163855293,
    "velocity": 123,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73702,
        45.43232
    ]
},
{
    "routeDataPointId": "444",
    "segmentId": "1",
    "time": 1672163855303,
    "velocity": 124,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73712,
        45.43232
    ]
},
{
    "routeDataPointId": "445",
    "segmentId": "1",
    "time": 1672163855313,
    "velocity": 125,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73722,
        45.43233
    ]
},
{
    "routeDataPointId": "446",
    "segmentId": "1",
    "time": 1672163855323,
    "velocity": 126,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7379,
        45.43235
    ]
},
{
    "routeDataPointId": "447",
    "segmentId": "1",
    "time": 1672163855333,
    "velocity": 127,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73858,
        45.43234
    ]
},
{
    "routeDataPointId": "448",
    "segmentId": "1",
    "time": 1672163855343,
    "velocity": 128,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73917,
        45.43237
    ]
},
{
    "routeDataPointId": "449",
    "segmentId": "1",
    "time": 1672163855353,
    "velocity": 129,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74037,
        45.43239
    ]
},
{
    "routeDataPointId": "450",
    "segmentId": "1",
    "time": 1672163855363,
    "velocity": 130,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7405,
        45.43239
    ]
},
{
    "routeDataPointId": "451",
    "segmentId": "1",
    "time": 1672163855373,
    "velocity": 131,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74059,
        45.43239
    ]
},
{
    "routeDataPointId": "452",
    "segmentId": "1",
    "time": 1672163855383,
    "velocity": 132,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74081,
        45.4324
    ]
},
{
    "routeDataPointId": "453",
    "segmentId": "1",
    "time": 1672163855393,
    "velocity": 133,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74084,
        45.4324
    ]
},
{
    "routeDataPointId": "454",
    "segmentId": "1",
    "time": 1672163855403,
    "velocity": 134,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74093,
        45.4324
    ]
},
{
    "routeDataPointId": "455",
    "segmentId": "1",
    "time": 1672163855413,
    "velocity": 135,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74097,
        45.43241
    ]
},
{
    "routeDataPointId": "456",
    "segmentId": "1",
    "time": 1672163855423,
    "velocity": 136,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74106,
        45.43241
    ]
},
{
    "routeDataPointId": "457",
    "segmentId": "1",
    "time": 1672163855433,
    "velocity": 137,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74115,
        45.43242
    ]
},
{
    "routeDataPointId": "458",
    "segmentId": "1",
    "time": 1672163855443,
    "velocity": 138,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74122,
        45.43243
    ]
},
{
    "routeDataPointId": "459",
    "segmentId": "1",
    "time": 1672163855453,
    "velocity": 139,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74135,
        45.43245
    ]
},
{
    "routeDataPointId": "460",
    "segmentId": "1",
    "time": 1672163855463,
    "velocity": 140,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74137,
        45.43246
    ]
},
{
    "routeDataPointId": "461",
    "segmentId": "1",
    "time": 1672163855473,
    "velocity": 141,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74138,
        45.43247
    ]
},
{
    "routeDataPointId": "462",
    "segmentId": "1",
    "time": 1672163855483,
    "velocity": 142,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74139,
        45.43247
    ]
},
{
    "routeDataPointId": "463",
    "segmentId": "1",
    "time": 1672163855493,
    "velocity": 143,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74141,
        45.43248
    ]
},
{
    "routeDataPointId": "464",
    "segmentId": "1",
    "time": 1672163855503,
    "velocity": 144,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74143,
        45.43249
    ]
},
{
    "routeDataPointId": "465",
    "segmentId": "1",
    "time": 1672163855513,
    "velocity": 145,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74145,
        45.43249
    ]
},
{
    "routeDataPointId": "466",
    "segmentId": "1",
    "time": 1672163855523,
    "velocity": 146,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74146,
        45.43249
    ]
},
{
    "routeDataPointId": "467",
    "segmentId": "1",
    "time": 1672163855533,
    "velocity": 147,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74148,
        45.4325
    ]
},
{
    "routeDataPointId": "468",
    "segmentId": "1",
    "time": 1672163855543,
    "velocity": 148,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74149,
        45.4325
    ]
},
{
    "routeDataPointId": "469",
    "segmentId": "1",
    "time": 1672163855553,
    "velocity": 149,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74151,
        45.4325
    ]
},
{
    "routeDataPointId": "470",
    "segmentId": "1",
    "time": 1672163855563,
    "velocity": 150,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74153,
        45.4325
    ]
},
{
    "routeDataPointId": "471",
    "segmentId": "1",
    "time": 1672163855573,
    "velocity": 151,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74154,
        45.43249
    ]
},
{
    "routeDataPointId": "472",
    "segmentId": "1",
    "time": 1672163855583,
    "velocity": 152,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74156,
        45.43249
    ]
},
{
    "routeDataPointId": "473",
    "segmentId": "1",
    "time": 1672163855593,
    "velocity": 153,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74157,
        45.43249
    ]
},
{
    "routeDataPointId": "474",
    "segmentId": "1",
    "time": 1672163855603,
    "velocity": 154,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74158,
        45.43248
    ]
},
{
    "routeDataPointId": "475",
    "segmentId": "1",
    "time": 1672163855613,
    "velocity": 155,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74161,
        45.43247
    ]
},
{
    "routeDataPointId": "476",
    "segmentId": "1",
    "time": 1672163855623,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74162,
        45.43247
    ]
},
{
    "routeDataPointId": "477",
    "segmentId": "1",
    "time": 1672163855633,
    "velocity": 157,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74163,
        45.43247
    ]
},
{
    "routeDataPointId": "478",
    "segmentId": "1",
    "time": 1672163855643,
    "velocity": 158,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74163,
        45.43246
    ]
},
{
    "routeDataPointId": "479",
    "segmentId": "1",
    "time": 1672163855653,
    "velocity": 159,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74164,
        45.43246
    ]
},
{
    "routeDataPointId": "480",
    "segmentId": "1",
    "time": 1672163855663,
    "velocity": 0,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74176,
        45.43245
    ]
},
{
    "routeDataPointId": "481",
    "segmentId": "1",
    "time": 1672163855673,
    "velocity": 1,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74184,
        45.43244
    ]
},
{
    "routeDataPointId": "482",
    "segmentId": "1",
    "time": 1672163855683,
    "velocity": 2,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7419,
        45.43243
    ]
},
{
    "routeDataPointId": "483",
    "segmentId": "1",
    "time": 1672163855693,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74199,
        45.43243
    ]
},
{
    "routeDataPointId": "484",
    "segmentId": "1",
    "time": 1672163855703,
    "velocity": 4,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74216,
        45.43243
    ]
},
{
    "routeDataPointId": "485",
    "segmentId": "1",
    "time": 1672163855713,
    "velocity": 5,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "foo bar",
    "coordinates": [
        -75.74242,
        45.43244
    ]
},
{
    "routeDataPointId": "486",
    "segmentId": "1",
    "time": 1672163855723,
    "velocity": 6,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74267,
        45.43244
    ]
},
{
    "routeDataPointId": "487",
    "segmentId": "1",
    "time": 1672163855733,
    "velocity": 7,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74293,
        45.43245
    ]
},
{
    "routeDataPointId": "488",
    "segmentId": "1",
    "time": 1672163855743,
    "velocity": 8,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74301,
        45.43248
    ]
},
{
    "routeDataPointId": "489",
    "segmentId": "1",
    "time": 1672163855753,
    "velocity": 9,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74306,
        45.4325
    ]
},
{
    "routeDataPointId": "490",
    "segmentId": "1",
    "time": 1672163855763,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74315,
        45.43252
    ]
},
{
    "routeDataPointId": "491",
    "segmentId": "1",
    "time": 1672163855773,
    "velocity": 11,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74329,
        45.43254
    ]
},
{
    "routeDataPointId": "492",
    "segmentId": "1",
    "time": 1672163855783,
    "velocity": 12,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74346,
        45.43256
    ]
},
{
    "routeDataPointId": "493",
    "segmentId": "1",
    "time": 1672163855793,
    "velocity": 13,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74364,
        45.4326
    ]
},
{
    "routeDataPointId": "494",
    "segmentId": "1",
    "time": 1672163855803,
    "velocity": 14,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74379,
        45.43264
    ]
},
{
    "routeDataPointId": "495",
    "segmentId": "1",
    "time": 1672163855813,
    "velocity": 15,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7439,
        45.43267
    ]
},
{
    "routeDataPointId": "496",
    "segmentId": "1",
    "time": 1672163855823,
    "velocity": 16,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74391,
        45.43268
    ]
},
{
    "routeDataPointId": "497",
    "segmentId": "1",
    "time": 1672163855833,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74405,
        45.43273
    ]
},
{
    "routeDataPointId": "498",
    "segmentId": "1",
    "time": 1672163855843,
    "velocity": 18,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74411,
        45.43275
    ]
},
{
    "routeDataPointId": "499",
    "segmentId": "1",
    "time": 1672163855853,
    "velocity": 19,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74422,
        45.4328
    ]
},
{
    "routeDataPointId": "500",
    "segmentId": "1",
    "time": 1672163855863,
    "velocity": 20,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74433,
        45.43285
    ]
},
{
    "routeDataPointId": "501",
    "segmentId": "1",
    "time": 1672163855873,
    "velocity": 21,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74446,
        45.43292
    ]
},
{
    "routeDataPointId": "502",
    "segmentId": "1",
    "time": 1672163855883,
    "velocity": 22,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7446,
        45.433
    ]
},
{
    "routeDataPointId": "503",
    "segmentId": "1",
    "time": 1672163855893,
    "velocity": 23,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74477,
        45.43311
    ]
},
{
    "routeDataPointId": "504",
    "segmentId": "1",
    "time": 1672163855903,
    "velocity": 24,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74498,
        45.43326
    ]
},
{
    "routeDataPointId": "505",
    "segmentId": "1",
    "time": 1672163855913,
    "velocity": 25,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74499,
        45.43326
    ]
},
{
    "routeDataPointId": "506",
    "segmentId": "1",
    "time": 1672163855923,
    "velocity": 26,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74515,
        45.43338
    ]
},
{
    "routeDataPointId": "507",
    "segmentId": "1",
    "time": 1672163855933,
    "velocity": 27,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74532,
        45.43352
    ]
},
{
    "routeDataPointId": "508",
    "segmentId": "1",
    "time": 1672163855943,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74535,
        45.43354
    ]
},
{
    "routeDataPointId": "509",
    "segmentId": "1",
    "time": 1672163855953,
    "velocity": 29,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74542,
        45.43361
    ]
},
{
    "routeDataPointId": "510",
    "segmentId": "1",
    "time": 1672163855963,
    "velocity": 30,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74548,
        45.43366
    ]
},
{
    "routeDataPointId": "511",
    "segmentId": "1",
    "time": 1672163855973,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74549,
        45.43367
    ]
},
{
    "routeDataPointId": "512",
    "segmentId": "1",
    "time": 1672163855983,
    "velocity": 32,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74563,
        45.43381
    ]
},
{
    "routeDataPointId": "513",
    "segmentId": "1",
    "time": 1672163855993,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74567,
        45.43385
    ]
},
{
    "routeDataPointId": "514",
    "segmentId": "1",
    "time": 1672163856003,
    "velocity": 34,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74583,
        45.43403
    ]
},
{
    "routeDataPointId": "515",
    "segmentId": "1",
    "time": 1672163856013,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74616,
        45.43443
    ]
},
{
    "routeDataPointId": "516",
    "segmentId": "1",
    "time": 1672163856023,
    "velocity": 36,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74621,
        45.43448
    ]
},
{
    "routeDataPointId": "517",
    "segmentId": "1",
    "time": 1672163856033,
    "velocity": 37,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74625,
        45.43451
    ]
},
{
    "routeDataPointId": "518",
    "segmentId": "1",
    "time": 1672163856043,
    "velocity": 38,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74634,
        45.43455
    ]
},
{
    "routeDataPointId": "519",
    "segmentId": "1",
    "time": 1672163856053,
    "velocity": 39,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74678,
        45.43513
    ]
},
{
    "routeDataPointId": "520",
    "segmentId": "1",
    "time": 1672163856063,
    "velocity": 40,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "foo bar",
    "coordinates": [
        -75.74679,
        45.43514
    ]
},
{
    "routeDataPointId": "521",
    "segmentId": "1",
    "time": 1672163856073,
    "velocity": 41,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74694,
        45.43535
    ]
},
{
    "routeDataPointId": "522",
    "segmentId": "1",
    "time": 1672163856083,
    "velocity": 42,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74744,
        45.43598
    ]
},
{
    "routeDataPointId": "523",
    "segmentId": "1",
    "time": 1672163856093,
    "velocity": 43,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74806,
        45.43677
    ]
},
{
    "routeDataPointId": "524",
    "segmentId": "1",
    "time": 1672163856103,
    "velocity": 44,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7483,
        45.43708
    ]
},
{
    "routeDataPointId": "525",
    "segmentId": "1",
    "time": 1672163856113,
    "velocity": 45,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74853,
        45.43737
    ]
},
{
    "routeDataPointId": "526",
    "segmentId": "1",
    "time": 1672163856123,
    "velocity": 46,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74883,
        45.43775
    ]
},
{
    "routeDataPointId": "527",
    "segmentId": "1",
    "time": 1672163856133,
    "velocity": 47,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74904,
        45.43802
    ]
},
{
    "routeDataPointId": "528",
    "segmentId": "1",
    "time": 1672163856143,
    "velocity": 48,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74927,
        45.43831
    ]
},
{
    "routeDataPointId": "529",
    "segmentId": "1",
    "time": 1672163856153,
    "velocity": 49,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74947,
        45.43857
    ]
},
{
    "routeDataPointId": "530",
    "segmentId": "1",
    "time": 1672163856163,
    "velocity": 50,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74969,
        45.43884
    ]
},
{
    "routeDataPointId": "531",
    "segmentId": "1",
    "time": 1672163856173,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74999,
        45.43922
    ]
},
{
    "routeDataPointId": "532",
    "segmentId": "1",
    "time": 1672163856183,
    "velocity": 52,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.75014,
        45.43942
    ]
},
{
    "routeDataPointId": "533",
    "segmentId": "1",
    "time": 1672163856193,
    "velocity": 53,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75022,
        45.43955
    ]
},
{
    "routeDataPointId": "534",
    "segmentId": "1",
    "time": 1672163856203,
    "velocity": 54,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75033,
        45.43973
    ]
},
{
    "routeDataPointId": "535",
    "segmentId": "1",
    "time": 1672163856213,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75047,
        45.44003
    ]
},
{
    "routeDataPointId": "536",
    "segmentId": "1",
    "time": 1672163856223,
    "velocity": 56,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75056,
        45.44029
    ]
},
{
    "routeDataPointId": "537",
    "segmentId": "1",
    "time": 1672163856233,
    "velocity": 57,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.75065,
        45.44059
    ]
},
{
    "routeDataPointId": "538",
    "segmentId": "1",
    "time": 1672163856243,
    "velocity": 58,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7507,
        45.4409
    ]
},
{
    "routeDataPointId": "539",
    "segmentId": "1",
    "time": 1672163856253,
    "velocity": 59,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7507,
        45.4411
    ]
},
{
    "routeDataPointId": "540",
    "segmentId": "1",
    "time": 1672163856263,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7507,
        45.44115
    ]
},
{
    "routeDataPointId": "541",
    "segmentId": "1",
    "time": 1672163856273,
    "velocity": 61,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7507,
        45.44127
    ]
},
{
    "routeDataPointId": "542",
    "segmentId": "1",
    "time": 1672163856283,
    "velocity": 62,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7507,
        45.44137
    ]
},
{
    "routeDataPointId": "543",
    "segmentId": "1",
    "time": 1672163856293,
    "velocity": 63,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75068,
        45.44155
    ]
},
{
    "routeDataPointId": "544",
    "segmentId": "1",
    "time": 1672163856303,
    "velocity": 64,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75066,
        45.44181
    ]
},
{
    "routeDataPointId": "545",
    "segmentId": "1",
    "time": 1672163856313,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.75065,
        45.44193
    ]
},
{
    "routeDataPointId": "546",
    "segmentId": "1",
    "time": 1672163856323,
    "velocity": 66,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75062,
        45.44218
    ]
},
{
    "routeDataPointId": "547",
    "segmentId": "1",
    "time": 1672163856333,
    "velocity": 67,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.75059,
        45.44253
    ]
},
{
    "routeDataPointId": "548",
    "segmentId": "1",
    "time": 1672163856343,
    "velocity": 68,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75057,
        45.4427
    ]
},
{
    "routeDataPointId": "549",
    "segmentId": "1",
    "time": 1672163856353,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.75057,
        45.44276
    ]
},
{
    "routeDataPointId": "550",
    "segmentId": "1",
    "time": 1672163856363,
    "velocity": 70,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75057,
        45.44281
    ]
},
{
    "routeDataPointId": "551",
    "segmentId": "1",
    "time": 1672163856373,
    "velocity": 71,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75057,
        45.44294
    ]
},
{
    "routeDataPointId": "552",
    "segmentId": "1",
    "time": 1672163856383,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.75042,
        45.44296
    ]
},
{
    "routeDataPointId": "553",
    "segmentId": "1",
    "time": 1672163856393,
    "velocity": 73,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7501,
        45.44299
    ]
},
{
    "routeDataPointId": "554",
    "segmentId": "1",
    "time": 1672163856403,
    "velocity": 74,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74991,
        45.44297
    ]
},
{
    "routeDataPointId": "555",
    "segmentId": "1",
    "time": 1672163856413,
    "velocity": 75,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74977,
        45.44298
    ]
},
{
    "routeDataPointId": "556",
    "segmentId": "1",
    "time": 1672163856423,
    "velocity": 76,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74969,
        45.44298
    ]
},
{
    "routeDataPointId": "557",
    "segmentId": "1",
    "time": 1672163856433,
    "velocity": 77,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74887,
        45.44302
    ]
},
{
    "routeDataPointId": "558",
    "segmentId": "1",
    "time": 1672163856443,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74879,
        45.44303
    ]
},
{
    "routeDataPointId": "559",
    "segmentId": "1",
    "time": 1672163856453,
    "velocity": 79,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74809,
        45.44307
    ]
},
{
    "routeDataPointId": "560",
    "segmentId": "1",
    "time": 1672163856463,
    "velocity": 80,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74783,
        45.44308
    ]
},
{
    "routeDataPointId": "561",
    "segmentId": "1",
    "time": 1672163856473,
    "velocity": 81,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74751,
        45.4431
    ]
},
{
    "routeDataPointId": "562",
    "segmentId": "1",
    "time": 1672163856483,
    "velocity": 82,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74733,
        45.44311
    ]
},
{
    "routeDataPointId": "563",
    "segmentId": "1",
    "time": 1672163856493,
    "velocity": 83,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74672,
        45.44314
    ]
},
{
    "routeDataPointId": "564",
    "segmentId": "1",
    "time": 1672163856503,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74665,
        45.44315
    ]
},
{
    "routeDataPointId": "565",
    "segmentId": "1",
    "time": 1672163856513,
    "velocity": 85,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74611,
        45.44317
    ]
},
{
    "routeDataPointId": "566",
    "segmentId": "1",
    "time": 1672163856523,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74583,
        45.44319
    ]
}
]

export const dpsCivicToGeneral: RouteMeasurementDataPoint[] = 
[
{
    "routeDataPointId": "0",
    "segmentId": "1",
    "time": 1672158522543,
    "velocity": 0,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72089,
        45.39193
    ]
},
{
    "routeDataPointId": "1",
    "segmentId": "1",
    "time": 1672158522553,
    "velocity": 1,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72095,
        45.39192
    ]
},
{
    "routeDataPointId": "2",
    "segmentId": "1",
    "time": 1672158522563,
    "velocity": 2,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72105,
        45.39192
    ]
},
{
    "routeDataPointId": "3",
    "segmentId": "1",
    "time": 1672158522573,
    "velocity": 3,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72115,
        45.39194
    ]
},
{
    "routeDataPointId": "4",
    "segmentId": "1",
    "time": 1672158522583,
    "velocity": 4,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72122,
        45.39196
    ]
},
{
    "routeDataPointId": "5",
    "segmentId": "1",
    "time": 1672158522593,
    "velocity": 5,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72126,
        45.39201
    ]
},
{
    "routeDataPointId": "6",
    "segmentId": "1",
    "time": 1672158522603,
    "velocity": 6,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72129,
        45.39207
    ]
},
{
    "routeDataPointId": "7",
    "segmentId": "1",
    "time": 1672158522613,
    "velocity": 7,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7213,
        45.39211
    ]
},
{
    "routeDataPointId": "8",
    "segmentId": "1",
    "time": 1672158522623,
    "velocity": 8,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72131,
        45.39219
    ]
},
{
    "routeDataPointId": "9",
    "segmentId": "1",
    "time": 1672158522633,
    "velocity": 9,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72132,
        45.39221
    ]
},
{
    "routeDataPointId": "10",
    "segmentId": "1",
    "time": 1672158522643,
    "velocity": 10,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72133,
        45.39224
    ]
},
{
    "routeDataPointId": "11",
    "segmentId": "1",
    "time": 1672158522653,
    "velocity": 11,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72149,
        45.39222
    ]
},
{
    "routeDataPointId": "12",
    "segmentId": "1",
    "time": 1672158522663,
    "velocity": 12,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72164,
        45.3922
    ]
},
{
    "routeDataPointId": "13",
    "segmentId": "1",
    "time": 1672158522673,
    "velocity": 13,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72203,
        45.39214
    ]
},
{
    "routeDataPointId": "14",
    "segmentId": "1",
    "time": 1672158522683,
    "velocity": 14,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72254,
        45.39207
    ]
},
{
    "routeDataPointId": "15",
    "segmentId": "1",
    "time": 1672158522693,
    "velocity": 15,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72306,
        45.39198
    ]
},
{
    "routeDataPointId": "16",
    "segmentId": "1",
    "time": 1672158522703,
    "velocity": 16,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72314,
        45.39196
    ]
},
{
    "routeDataPointId": "17",
    "segmentId": "1",
    "time": 1672158522713,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72319,
        45.39195
    ]
},
{
    "routeDataPointId": "18",
    "segmentId": "1",
    "time": 1672158522723,
    "velocity": 18,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72324,
        45.39195
    ]
},
{
    "routeDataPointId": "19",
    "segmentId": "1",
    "time": 1672158522733,
    "velocity": 19,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72328,
        45.39195
    ]
},
{
    "routeDataPointId": "20",
    "segmentId": "1",
    "time": 1672158522743,
    "velocity": 20,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72332,
        45.39197
    ]
},
{
    "routeDataPointId": "21",
    "segmentId": "1",
    "time": 1672158522753,
    "velocity": 21,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72335,
        45.39198
    ]
},
{
    "routeDataPointId": "22",
    "segmentId": "1",
    "time": 1672158522763,
    "velocity": 22,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7236,
        45.39211
    ]
},
{
    "routeDataPointId": "23",
    "segmentId": "1",
    "time": 1672158522773,
    "velocity": 23,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72362,
        45.39212
    ]
},
{
    "routeDataPointId": "24",
    "segmentId": "1",
    "time": 1672158522783,
    "velocity": 24,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72363,
        45.39212
    ]
},
{
    "routeDataPointId": "25",
    "segmentId": "1",
    "time": 1672158522793,
    "velocity": 25,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72367,
        45.39213
    ]
},
{
    "routeDataPointId": "26",
    "segmentId": "1",
    "time": 1672158522803,
    "velocity": 26,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72388,
        45.39208
    ]
},
{
    "routeDataPointId": "27",
    "segmentId": "1",
    "time": 1672158522813,
    "velocity": 27,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72403,
        45.39233
    ]
},
{
    "routeDataPointId": "28",
    "segmentId": "1",
    "time": 1672158522823,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72434,
        45.39284
    ]
},
{
    "routeDataPointId": "29",
    "segmentId": "1",
    "time": 1672158522833,
    "velocity": 29,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72434,
        45.39285
    ]
},
{
    "routeDataPointId": "30",
    "segmentId": "1",
    "time": 1672158522843,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72437,
        45.3929
    ]
},
{
    "routeDataPointId": "31",
    "segmentId": "1",
    "time": 1672158522853,
    "velocity": 31,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72453,
        45.39316
    ]
},
{
    "routeDataPointId": "32",
    "segmentId": "1",
    "time": 1672158522863,
    "velocity": 32,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72465,
        45.39337
    ]
},
{
    "routeDataPointId": "33",
    "segmentId": "1",
    "time": 1672158522873,
    "velocity": 33,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72506,
        45.39403
    ]
},
{
    "routeDataPointId": "34",
    "segmentId": "1",
    "time": 1672158522883,
    "velocity": 34,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7252,
        45.39427
    ]
},
{
    "routeDataPointId": "35",
    "segmentId": "1",
    "time": 1672158522893,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72537,
        45.39455
    ]
},
{
    "routeDataPointId": "36",
    "segmentId": "1",
    "time": 1672158522903,
    "velocity": 36,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72546,
        45.39468
    ]
},
{
    "routeDataPointId": "37",
    "segmentId": "1",
    "time": 1672158522913,
    "velocity": 37,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72555,
        45.39483
    ]
},
{
    "routeDataPointId": "38",
    "segmentId": "1",
    "time": 1672158522923,
    "velocity": 38,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72574,
        45.39515
    ]
},
{
    "routeDataPointId": "39",
    "segmentId": "1",
    "time": 1672158522933,
    "velocity": 39,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72583,
        45.39529
    ]
},
{
    "routeDataPointId": "40",
    "segmentId": "1",
    "time": 1672158522943,
    "velocity": 40,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72592,
        45.39545
    ]
},
{
    "routeDataPointId": "41",
    "segmentId": "1",
    "time": 1672158522953,
    "velocity": 41,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72616,
        45.39585
    ]
},
{
    "routeDataPointId": "42",
    "segmentId": "1",
    "time": 1672158522963,
    "velocity": 42,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72625,
        45.39602
    ]
},
{
    "routeDataPointId": "43",
    "segmentId": "1",
    "time": 1672158522973,
    "velocity": 43,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72658,
        45.39655
    ]
},
{
    "routeDataPointId": "44",
    "segmentId": "1",
    "time": 1672158522983,
    "velocity": 44,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72659,
        45.39657
    ]
},
{
    "routeDataPointId": "45",
    "segmentId": "1",
    "time": 1672158522993,
    "velocity": 45,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72682,
        45.39692
    ]
},
{
    "routeDataPointId": "46",
    "segmentId": "1",
    "time": 1672158523003,
    "velocity": 46,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72651,
        45.39709
    ]
},
{
    "routeDataPointId": "47",
    "segmentId": "1",
    "time": 1672158523013,
    "velocity": 47,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72639,
        45.39716
    ]
},
{
    "routeDataPointId": "48",
    "segmentId": "1",
    "time": 1672158523023,
    "velocity": 48,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72564,
        45.39757
    ]
},
{
    "routeDataPointId": "49",
    "segmentId": "1",
    "time": 1672158523033,
    "velocity": 49,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7255,
        45.39764
    ]
},
{
    "routeDataPointId": "50",
    "segmentId": "1",
    "time": 1672158523043,
    "velocity": 50,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72542,
        45.39769
    ]
},
{
    "routeDataPointId": "51",
    "segmentId": "1",
    "time": 1672158523053,
    "velocity": 51,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72498,
        45.39792
    ]
},
{
    "routeDataPointId": "52",
    "segmentId": "1",
    "time": 1672158523063,
    "velocity": 52,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72399,
        45.39842
    ]
},
{
    "routeDataPointId": "53",
    "segmentId": "1",
    "time": 1672158523073,
    "velocity": 53,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72387,
        45.39848
    ]
},
{
    "routeDataPointId": "54",
    "segmentId": "1",
    "time": 1672158523083,
    "velocity": 54,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72387,
        45.39849
    ]
},
{
    "routeDataPointId": "55",
    "segmentId": "1",
    "time": 1672158523093,
    "velocity": 55,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72387,
        45.39859
    ]
},
{
    "routeDataPointId": "56",
    "segmentId": "1",
    "time": 1672158523103,
    "velocity": 56,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72362,
        45.39871
    ]
},
{
    "routeDataPointId": "57",
    "segmentId": "1",
    "time": 1672158523113,
    "velocity": 57,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72348,
        45.39877
    ]
},
{
    "routeDataPointId": "58",
    "segmentId": "1",
    "time": 1672158523123,
    "velocity": 58,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72336,
        45.39882
    ]
},
{
    "routeDataPointId": "59",
    "segmentId": "1",
    "time": 1672158523133,
    "velocity": 59,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72323,
        45.39888
    ]
},
{
    "routeDataPointId": "60",
    "segmentId": "1",
    "time": 1672158523143,
    "velocity": 60,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72311,
        45.39894
    ]
},
{
    "routeDataPointId": "61",
    "segmentId": "1",
    "time": 1672158523153,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.723,
        45.39899
    ]
},
{
    "routeDataPointId": "62",
    "segmentId": "1",
    "time": 1672158523163,
    "velocity": 62,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72297,
        45.399
    ]
},
{
    "routeDataPointId": "63",
    "segmentId": "1",
    "time": 1672158523173,
    "velocity": 63,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72284,
        45.39906
    ]
},
{
    "routeDataPointId": "64",
    "segmentId": "1",
    "time": 1672158523183,
    "velocity": 64,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72272,
        45.39912
    ]
},
{
    "routeDataPointId": "65",
    "segmentId": "1",
    "time": 1672158523193,
    "velocity": 65,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7224,
        45.39926
    ]
},
{
    "routeDataPointId": "66",
    "segmentId": "1",
    "time": 1672158523203,
    "velocity": 66,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72234,
        45.39929
    ]
},
{
    "routeDataPointId": "67",
    "segmentId": "1",
    "time": 1672158523213,
    "velocity": 67,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72221,
        45.39935
    ]
},
{
    "routeDataPointId": "68",
    "segmentId": "1",
    "time": 1672158523223,
    "velocity": 68,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72208,
        45.3994
    ]
},
{
    "routeDataPointId": "69",
    "segmentId": "1",
    "time": 1672158523233,
    "velocity": 69,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72195,
        45.39946
    ]
},
{
    "routeDataPointId": "70",
    "segmentId": "1",
    "time": 1672158523243,
    "velocity": 70,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72182,
        45.39951
    ]
},
{
    "routeDataPointId": "71",
    "segmentId": "1",
    "time": 1672158523253,
    "velocity": 71,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72168,
        45.39957
    ]
},
{
    "routeDataPointId": "72",
    "segmentId": "1",
    "time": 1672158523263,
    "velocity": 72,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72156,
        45.39962
    ]
},
{
    "routeDataPointId": "73",
    "segmentId": "1",
    "time": 1672158523273,
    "velocity": 73,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72144,
        45.39967
    ]
},
{
    "routeDataPointId": "74",
    "segmentId": "1",
    "time": 1672158523283,
    "velocity": 74,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72129,
        45.39974
    ]
},
{
    "routeDataPointId": "75",
    "segmentId": "1",
    "time": 1672158523293,
    "velocity": 75,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72115,
        45.39979
    ]
},
{
    "routeDataPointId": "76",
    "segmentId": "1",
    "time": 1672158523303,
    "velocity": 76,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72093,
        45.39988
    ]
},
{
    "routeDataPointId": "77",
    "segmentId": "1",
    "time": 1672158523313,
    "velocity": 77,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72074,
        45.39996
    ]
},
{
    "routeDataPointId": "78",
    "segmentId": "1",
    "time": 1672158523323,
    "velocity": 78,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72055,
        45.40003
    ]
},
{
    "routeDataPointId": "79",
    "segmentId": "1",
    "time": 1672158523333,
    "velocity": 79,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72035,
        45.40011
    ]
},
{
    "routeDataPointId": "80",
    "segmentId": "1",
    "time": 1672158523343,
    "velocity": 80,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72022,
        45.40016
    ]
},
{
    "routeDataPointId": "81",
    "segmentId": "1",
    "time": 1672158523353,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72009,
        45.40021
    ]
},
{
    "routeDataPointId": "82",
    "segmentId": "1",
    "time": 1672158523363,
    "velocity": 82,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71995,
        45.40027
    ]
},
{
    "routeDataPointId": "83",
    "segmentId": "1",
    "time": 1672158523373,
    "velocity": 83,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71981,
        45.40032
    ]
},
{
    "routeDataPointId": "84",
    "segmentId": "1",
    "time": 1672158523383,
    "velocity": 84,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71968,
        45.40037
    ]
},
{
    "routeDataPointId": "85",
    "segmentId": "1",
    "time": 1672158523393,
    "velocity": 85,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71955,
        45.40042
    ]
},
{
    "routeDataPointId": "86",
    "segmentId": "1",
    "time": 1672158523403,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7194,
        45.40047
    ]
},
{
    "routeDataPointId": "87",
    "segmentId": "1",
    "time": 1672158523413,
    "velocity": 87,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71927,
        45.40052
    ]
},
{
    "routeDataPointId": "88",
    "segmentId": "1",
    "time": 1672158523423,
    "velocity": 88,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71914,
        45.40057
    ]
},
{
    "routeDataPointId": "89",
    "segmentId": "1",
    "time": 1672158523433,
    "velocity": 89,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71901,
        45.40062
    ]
},
{
    "routeDataPointId": "90",
    "segmentId": "1",
    "time": 1672158523443,
    "velocity": 90,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71886,
        45.40067
    ]
},
{
    "routeDataPointId": "91",
    "segmentId": "1",
    "time": 1672158523453,
    "velocity": 91,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71873,
        45.40072
    ]
},
{
    "routeDataPointId": "92",
    "segmentId": "1",
    "time": 1672158523463,
    "velocity": 92,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7186,
        45.40076
    ]
},
{
    "routeDataPointId": "93",
    "segmentId": "1",
    "time": 1672158523473,
    "velocity": 93,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71845,
        45.40081
    ]
},
{
    "routeDataPointId": "94",
    "segmentId": "1",
    "time": 1672158523483,
    "velocity": 94,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7183,
        45.40087
    ]
},
{
    "routeDataPointId": "95",
    "segmentId": "1",
    "time": 1672158523493,
    "velocity": 95,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71805,
        45.40095
    ]
},
{
    "routeDataPointId": "96",
    "segmentId": "1",
    "time": 1672158523503,
    "velocity": 96,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7179,
        45.401
    ]
},
{
    "routeDataPointId": "97",
    "segmentId": "1",
    "time": 1672158523513,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71776,
        45.40105
    ]
},
{
    "routeDataPointId": "98",
    "segmentId": "1",
    "time": 1672158523523,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71763,
        45.40109
    ]
},
{
    "routeDataPointId": "99",
    "segmentId": "1",
    "time": 1672158523533,
    "velocity": 99,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7175,
        45.40114
    ]
},
{
    "routeDataPointId": "100",
    "segmentId": "1",
    "time": 1672158523543,
    "velocity": 100,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71735,
        45.40118
    ]
},
{
    "routeDataPointId": "101",
    "segmentId": "1",
    "time": 1672158523553,
    "velocity": 101,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71714,
        45.40125
    ]
},
{
    "routeDataPointId": "102",
    "segmentId": "1",
    "time": 1672158523563,
    "velocity": 102,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71694,
        45.40131
    ]
},
{
    "routeDataPointId": "103",
    "segmentId": "1",
    "time": 1672158523573,
    "velocity": 103,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71679,
        45.40136
    ]
},
{
    "routeDataPointId": "104",
    "segmentId": "1",
    "time": 1672158523583,
    "velocity": 104,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71664,
        45.40141
    ]
},
{
    "routeDataPointId": "105",
    "segmentId": "1",
    "time": 1672158523593,
    "velocity": 105,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71652,
        45.40145
    ]
},
{
    "routeDataPointId": "106",
    "segmentId": "1",
    "time": 1672158523603,
    "velocity": 106,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71638,
        45.40149
    ]
},
{
    "routeDataPointId": "107",
    "segmentId": "1",
    "time": 1672158523613,
    "velocity": 107,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71624,
        45.40153
    ]
},
{
    "routeDataPointId": "108",
    "segmentId": "1",
    "time": 1672158523623,
    "velocity": 108,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71596,
        45.40161
    ]
},
{
    "routeDataPointId": "109",
    "segmentId": "1",
    "time": 1672158523633,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7158,
        45.40166
    ]
},
{
    "routeDataPointId": "110",
    "segmentId": "1",
    "time": 1672158523643,
    "velocity": 110,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71537,
        45.40178
    ]
},
{
    "routeDataPointId": "111",
    "segmentId": "1",
    "time": 1672158523653,
    "velocity": 111,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71523,
        45.40182
    ]
},
{
    "routeDataPointId": "112",
    "segmentId": "1",
    "time": 1672158523663,
    "velocity": 112,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71509,
        45.40186
    ]
},
{
    "routeDataPointId": "113",
    "segmentId": "1",
    "time": 1672158523673,
    "velocity": 113,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71496,
        45.4019
    ]
},
{
    "routeDataPointId": "114",
    "segmentId": "1",
    "time": 1672158523683,
    "velocity": 114,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7148,
        45.40194
    ]
},
{
    "routeDataPointId": "115",
    "segmentId": "1",
    "time": 1672158523693,
    "velocity": 115,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71479,
        45.40194
    ]
},
{
    "routeDataPointId": "116",
    "segmentId": "1",
    "time": 1672158523703,
    "velocity": 116,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71466,
        45.40198
    ]
},
{
    "routeDataPointId": "117",
    "segmentId": "1",
    "time": 1672158523713,
    "velocity": 117,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71448,
        45.40203
    ]
},
{
    "routeDataPointId": "118",
    "segmentId": "1",
    "time": 1672158523723,
    "velocity": 118,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71436,
        45.40206
    ]
},
{
    "routeDataPointId": "119",
    "segmentId": "1",
    "time": 1672158523733,
    "velocity": 119,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71423,
        45.40209
    ]
},
{
    "routeDataPointId": "120",
    "segmentId": "1",
    "time": 1672158523743,
    "velocity": 120,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71408,
        45.40213
    ]
},
{
    "routeDataPointId": "121",
    "segmentId": "1",
    "time": 1672158523753,
    "velocity": 121,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71394,
        45.40217
    ]
},
{
    "routeDataPointId": "122",
    "segmentId": "1",
    "time": 1672158523763,
    "velocity": 122,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71379,
        45.40221
    ]
},
{
    "routeDataPointId": "123",
    "segmentId": "1",
    "time": 1672158523773,
    "velocity": 123,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71372,
        45.40222
    ]
},
{
    "routeDataPointId": "124",
    "segmentId": "1",
    "time": 1672158523783,
    "velocity": 124,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71365,
        45.40224
    ]
},
{
    "routeDataPointId": "125",
    "segmentId": "1",
    "time": 1672158523793,
    "velocity": 125,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7135,
        45.40228
    ]
},
{
    "routeDataPointId": "126",
    "segmentId": "1",
    "time": 1672158523803,
    "velocity": 126,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71335,
        45.40231
    ]
},
{
    "routeDataPointId": "127",
    "segmentId": "1",
    "time": 1672158523813,
    "velocity": 127,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71322,
        45.40235
    ]
},
{
    "routeDataPointId": "128",
    "segmentId": "1",
    "time": 1672158523823,
    "velocity": 128,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71305,
        45.40239
    ]
},
{
    "routeDataPointId": "129",
    "segmentId": "1",
    "time": 1672158523833,
    "velocity": 129,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7129,
        45.40242
    ]
},
{
    "routeDataPointId": "130",
    "segmentId": "1",
    "time": 1672158523843,
    "velocity": 130,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71277,
        45.40245
    ]
},
{
    "routeDataPointId": "131",
    "segmentId": "1",
    "time": 1672158523853,
    "velocity": 131,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71269,
        45.40247
    ]
},
{
    "routeDataPointId": "132",
    "segmentId": "1",
    "time": 1672158523863,
    "velocity": 132,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71263,
        45.40249
    ]
},
{
    "routeDataPointId": "133",
    "segmentId": "1",
    "time": 1672158523873,
    "velocity": 133,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71249,
        45.40252
    ]
},
{
    "routeDataPointId": "134",
    "segmentId": "1",
    "time": 1672158523883,
    "velocity": 134,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71233,
        45.40255
    ]
},
{
    "routeDataPointId": "135",
    "segmentId": "1",
    "time": 1672158523893,
    "velocity": 135,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71224,
        45.40257
    ]
},
{
    "routeDataPointId": "136",
    "segmentId": "1",
    "time": 1672158523903,
    "velocity": 136,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71223,
        45.40257
    ]
},
{
    "routeDataPointId": "137",
    "segmentId": "1",
    "time": 1672158523913,
    "velocity": 137,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71206,
        45.40261
    ]
},
{
    "routeDataPointId": "138",
    "segmentId": "1",
    "time": 1672158523923,
    "velocity": 138,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71191,
        45.40265
    ]
},
{
    "routeDataPointId": "139",
    "segmentId": "1",
    "time": 1672158523933,
    "velocity": 139,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71176,
        45.40268
    ]
},
{
    "routeDataPointId": "140",
    "segmentId": "1",
    "time": 1672158523943,
    "velocity": 140,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71161,
        45.40271
    ]
},
{
    "routeDataPointId": "141",
    "segmentId": "1",
    "time": 1672158523953,
    "velocity": 141,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71137,
        45.40276
    ]
},
{
    "routeDataPointId": "142",
    "segmentId": "1",
    "time": 1672158523963,
    "velocity": 142,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71116,
        45.4028
    ]
},
{
    "routeDataPointId": "143",
    "segmentId": "1",
    "time": 1672158523973,
    "velocity": 143,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71109,
        45.40282
    ]
},
{
    "routeDataPointId": "144",
    "segmentId": "1",
    "time": 1672158523983,
    "velocity": 144,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71106,
        45.40283
    ]
},
{
    "routeDataPointId": "145",
    "segmentId": "1",
    "time": 1672158523993,
    "velocity": 145,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71082,
        45.40287
    ]
},
{
    "routeDataPointId": "146",
    "segmentId": "1",
    "time": 1672158524003,
    "velocity": 146,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71066,
        45.4029
    ]
},
{
    "routeDataPointId": "147",
    "segmentId": "1",
    "time": 1672158524013,
    "velocity": 147,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71063,
        45.40291
    ]
},
{
    "routeDataPointId": "148",
    "segmentId": "1",
    "time": 1672158524023,
    "velocity": 148,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71028,
        45.40298
    ]
},
{
    "routeDataPointId": "149",
    "segmentId": "1",
    "time": 1672158524033,
    "velocity": 149,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70999,
        45.40304
    ]
},
{
    "routeDataPointId": "150",
    "segmentId": "1",
    "time": 1672158524043,
    "velocity": 150,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70976,
        45.40308
    ]
},
{
    "routeDataPointId": "151",
    "segmentId": "1",
    "time": 1672158524053,
    "velocity": 151,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70926,
        45.40318
    ]
},
{
    "routeDataPointId": "152",
    "segmentId": "1",
    "time": 1672158524063,
    "velocity": 152,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70896,
        45.40323
    ]
},
{
    "routeDataPointId": "153",
    "segmentId": "1",
    "time": 1672158524073,
    "velocity": 153,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70882,
        45.40326
    ]
},
{
    "routeDataPointId": "154",
    "segmentId": "1",
    "time": 1672158524083,
    "velocity": 154,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70871,
        45.40328
    ]
},
{
    "routeDataPointId": "155",
    "segmentId": "1",
    "time": 1672158524093,
    "velocity": 155,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70855,
        45.40331
    ]
},
{
    "routeDataPointId": "156",
    "segmentId": "1",
    "time": 1672158524103,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70834,
        45.40335
    ]
},
{
    "routeDataPointId": "157",
    "segmentId": "1",
    "time": 1672158524113,
    "velocity": 157,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70808,
        45.40341
    ]
},
{
    "routeDataPointId": "158",
    "segmentId": "1",
    "time": 1672158524123,
    "velocity": 158,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70793,
        45.40343
    ]
},
{
    "routeDataPointId": "159",
    "segmentId": "1",
    "time": 1672158524133,
    "velocity": 159,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70778,
        45.40346
    ]
},
{
    "routeDataPointId": "160",
    "segmentId": "1",
    "time": 1672158524143,
    "velocity": 0,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70764,
        45.40349
    ]
},
{
    "routeDataPointId": "161",
    "segmentId": "1",
    "time": 1672158524153,
    "velocity": 1,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70748,
        45.40352
    ]
},
{
    "routeDataPointId": "162",
    "segmentId": "1",
    "time": 1672158524163,
    "velocity": 2,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70733,
        45.40355
    ]
},
{
    "routeDataPointId": "163",
    "segmentId": "1",
    "time": 1672158524173,
    "velocity": 3,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70719,
        45.40358
    ]
},
{
    "routeDataPointId": "164",
    "segmentId": "1",
    "time": 1672158524183,
    "velocity": 4,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70698,
        45.40363
    ]
},
{
    "routeDataPointId": "165",
    "segmentId": "1",
    "time": 1672158524193,
    "velocity": 5,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70677,
        45.40367
    ]
},
{
    "routeDataPointId": "166",
    "segmentId": "1",
    "time": 1672158524203,
    "velocity": 6,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70651,
        45.40372
    ]
},
{
    "routeDataPointId": "167",
    "segmentId": "1",
    "time": 1672158524213,
    "velocity": 7,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70644,
        45.40374
    ]
},
{
    "routeDataPointId": "168",
    "segmentId": "1",
    "time": 1672158524223,
    "velocity": 8,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7063,
        45.40377
    ]
},
{
    "routeDataPointId": "169",
    "segmentId": "1",
    "time": 1672158524233,
    "velocity": 9,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70613,
        45.40381
    ]
},
{
    "routeDataPointId": "170",
    "segmentId": "1",
    "time": 1672158524243,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70557,
        45.40393
    ]
},
{
    "routeDataPointId": "171",
    "segmentId": "1",
    "time": 1672158524253,
    "velocity": 11,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70536,
        45.40398
    ]
},
{
    "routeDataPointId": "172",
    "segmentId": "1",
    "time": 1672158524263,
    "velocity": 12,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70493,
        45.40407
    ]
},
{
    "routeDataPointId": "173",
    "segmentId": "1",
    "time": 1672158524273,
    "velocity": 13,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70443,
        45.40418
    ]
},
{
    "routeDataPointId": "174",
    "segmentId": "1",
    "time": 1672158524283,
    "velocity": 14,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70413,
        45.40425
    ]
},
{
    "routeDataPointId": "175",
    "segmentId": "1",
    "time": 1672158524293,
    "velocity": 15,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70375,
        45.40434
    ]
},
{
    "routeDataPointId": "176",
    "segmentId": "1",
    "time": 1672158524303,
    "velocity": 16,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70327,
        45.40446
    ]
},
{
    "routeDataPointId": "177",
    "segmentId": "1",
    "time": 1672158524313,
    "velocity": 17,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70296,
        45.40454
    ]
},
{
    "routeDataPointId": "178",
    "segmentId": "1",
    "time": 1672158524323,
    "velocity": 18,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7028,
        45.40458
    ]
},
{
    "routeDataPointId": "179",
    "segmentId": "1",
    "time": 1672158524333,
    "velocity": 19,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70266,
        45.40462
    ]
},
{
    "routeDataPointId": "180",
    "segmentId": "1",
    "time": 1672158524343,
    "velocity": 20,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70252,
        45.40465
    ]
},
{
    "routeDataPointId": "181",
    "segmentId": "1",
    "time": 1672158524353,
    "velocity": 21,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70239,
        45.40469
    ]
},
{
    "routeDataPointId": "182",
    "segmentId": "1",
    "time": 1672158524363,
    "velocity": 22,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70224,
        45.40473
    ]
},
{
    "routeDataPointId": "183",
    "segmentId": "1",
    "time": 1672158524373,
    "velocity": 23,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7021,
        45.40477
    ]
},
{
    "routeDataPointId": "184",
    "segmentId": "1",
    "time": 1672158524383,
    "velocity": 24,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70196,
        45.40481
    ]
},
{
    "routeDataPointId": "185",
    "segmentId": "1",
    "time": 1672158524393,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70182,
        45.40485
    ]
},
{
    "routeDataPointId": "186",
    "segmentId": "1",
    "time": 1672158524403,
    "velocity": 26,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70166,
        45.40489
    ]
},
{
    "routeDataPointId": "187",
    "segmentId": "1",
    "time": 1672158524413,
    "velocity": 27,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70153,
        45.40493
    ]
},
{
    "routeDataPointId": "188",
    "segmentId": "1",
    "time": 1672158524423,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7014,
        45.40497
    ]
},
{
    "routeDataPointId": "189",
    "segmentId": "1",
    "time": 1672158524433,
    "velocity": 29,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70124,
        45.40502
    ]
},
{
    "routeDataPointId": "190",
    "segmentId": "1",
    "time": 1672158524443,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70084,
        45.40513
    ]
},
{
    "routeDataPointId": "191",
    "segmentId": "1",
    "time": 1672158524453,
    "velocity": 31,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7004,
        45.40527
    ]
},
{
    "routeDataPointId": "192",
    "segmentId": "1",
    "time": 1672158524463,
    "velocity": 32,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70027,
        45.40531
    ]
},
{
    "routeDataPointId": "193",
    "segmentId": "1",
    "time": 1672158524473,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70002,
        45.40538
    ]
},
{
    "routeDataPointId": "194",
    "segmentId": "1",
    "time": 1672158524483,
    "velocity": 34,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69957,
        45.40553
    ]
},
{
    "routeDataPointId": "195",
    "segmentId": "1",
    "time": 1672158524493,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69943,
        45.40557
    ]
},
{
    "routeDataPointId": "196",
    "segmentId": "1",
    "time": 1672158524503,
    "velocity": 36,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69928,
        45.40562
    ]
},
{
    "routeDataPointId": "197",
    "segmentId": "1",
    "time": 1672158524513,
    "velocity": 37,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69914,
        45.40567
    ]
},
{
    "routeDataPointId": "198",
    "segmentId": "1",
    "time": 1672158524523,
    "velocity": 38,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.699,
        45.40571
    ]
},
{
    "routeDataPointId": "199",
    "segmentId": "1",
    "time": 1672158524533,
    "velocity": 39,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69886,
        45.40576
    ]
},
{
    "routeDataPointId": "200",
    "segmentId": "1",
    "time": 1672158524543,
    "velocity": 40,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69866,
        45.40583
    ]
},
{
    "routeDataPointId": "201",
    "segmentId": "1",
    "time": 1672158524553,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69849,
        45.40589
    ]
},
{
    "routeDataPointId": "202",
    "segmentId": "1",
    "time": 1672158524563,
    "velocity": 42,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69831,
        45.40595
    ]
},
{
    "routeDataPointId": "203",
    "segmentId": "1",
    "time": 1672158524573,
    "velocity": 43,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.69817,
        45.406
    ]
},
{
    "routeDataPointId": "204",
    "segmentId": "1",
    "time": 1672158524583,
    "velocity": 44,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69803,
        45.40605
    ]
},
{
    "routeDataPointId": "205",
    "segmentId": "1",
    "time": 1672158524593,
    "velocity": 45,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69789,
        45.4061
    ]
},
{
    "routeDataPointId": "206",
    "segmentId": "1",
    "time": 1672158524603,
    "velocity": 46,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69776,
        45.40615
    ]
},
{
    "routeDataPointId": "207",
    "segmentId": "1",
    "time": 1672158524613,
    "velocity": 47,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.69762,
        45.4062
    ]
},
{
    "routeDataPointId": "208",
    "segmentId": "1",
    "time": 1672158524623,
    "velocity": 48,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69748,
        45.40625
    ]
},
{
    "routeDataPointId": "209",
    "segmentId": "1",
    "time": 1672158524633,
    "velocity": 49,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69734,
        45.4063
    ]
},
{
    "routeDataPointId": "210",
    "segmentId": "1",
    "time": 1672158524643,
    "velocity": 50,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6972,
        45.40636
    ]
},
{
    "routeDataPointId": "211",
    "segmentId": "1",
    "time": 1672158524653,
    "velocity": 51,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69698,
        45.40644
    ]
},
{
    "routeDataPointId": "212",
    "segmentId": "1",
    "time": 1672158524663,
    "velocity": 52,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6968,
        45.40651
    ]
},
{
    "routeDataPointId": "213",
    "segmentId": "1",
    "time": 1672158524673,
    "velocity": 53,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69666,
        45.40656
    ]
},
{
    "routeDataPointId": "214",
    "segmentId": "1",
    "time": 1672158524683,
    "velocity": 54,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69653,
        45.40661
    ]
},
{
    "routeDataPointId": "215",
    "segmentId": "1",
    "time": 1672158524693,
    "velocity": 55,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6964,
        45.40666
    ]
},
{
    "routeDataPointId": "216",
    "segmentId": "1",
    "time": 1672158524703,
    "velocity": 56,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69626,
        45.40672
    ]
},
{
    "routeDataPointId": "217",
    "segmentId": "1",
    "time": 1672158524713,
    "velocity": 57,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69613,
        45.40677
    ]
},
{
    "routeDataPointId": "218",
    "segmentId": "1",
    "time": 1672158524723,
    "velocity": 58,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.696,
        45.40682
    ]
},
{
    "routeDataPointId": "219",
    "segmentId": "1",
    "time": 1672158524733,
    "velocity": 59,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69586,
        45.40688
    ]
},
{
    "routeDataPointId": "220",
    "segmentId": "1",
    "time": 1672158524743,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69556,
        45.40701
    ]
},
{
    "routeDataPointId": "221",
    "segmentId": "1",
    "time": 1672158524753,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69552,
        45.40702
    ]
},
{
    "routeDataPointId": "222",
    "segmentId": "1",
    "time": 1672158524763,
    "velocity": 62,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69521,
        45.40715
    ]
},
{
    "routeDataPointId": "223",
    "segmentId": "1",
    "time": 1672158524773,
    "velocity": 63,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69508,
        45.40721
    ]
},
{
    "routeDataPointId": "224",
    "segmentId": "1",
    "time": 1672158524783,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69496,
        45.40726
    ]
},
{
    "routeDataPointId": "225",
    "segmentId": "1",
    "time": 1672158524793,
    "velocity": 65,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.69483,
        45.40732
    ]
},
{
    "routeDataPointId": "226",
    "segmentId": "1",
    "time": 1672158524803,
    "velocity": 66,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69468,
        45.40738
    ]
},
{
    "routeDataPointId": "227",
    "segmentId": "1",
    "time": 1672158524813,
    "velocity": 67,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6945,
        45.40746
    ]
},
{
    "routeDataPointId": "228",
    "segmentId": "1",
    "time": 1672158524823,
    "velocity": 68,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69449,
        45.40746
    ]
},
{
    "routeDataPointId": "229",
    "segmentId": "1",
    "time": 1672158524833,
    "velocity": 69,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69438,
        45.40751
    ]
},
{
    "routeDataPointId": "230",
    "segmentId": "1",
    "time": 1672158524843,
    "velocity": 70,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.69423,
        45.40758
    ]
},
{
    "routeDataPointId": "231",
    "segmentId": "1",
    "time": 1672158524853,
    "velocity": 71,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6941,
        45.40764
    ]
},
{
    "routeDataPointId": "232",
    "segmentId": "1",
    "time": 1672158524863,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69397,
        45.4077
    ]
},
{
    "routeDataPointId": "233",
    "segmentId": "1",
    "time": 1672158524873,
    "velocity": 73,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69385,
        45.40775
    ]
},
{
    "routeDataPointId": "234",
    "segmentId": "1",
    "time": 1672158524883,
    "velocity": 74,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69372,
        45.40781
    ]
},
{
    "routeDataPointId": "235",
    "segmentId": "1",
    "time": 1672158524893,
    "velocity": 75,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69358,
        45.40788
    ]
},
{
    "routeDataPointId": "236",
    "segmentId": "1",
    "time": 1672158524903,
    "velocity": 76,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69346,
        45.40793
    ]
},
{
    "routeDataPointId": "237",
    "segmentId": "1",
    "time": 1672158524913,
    "velocity": 77,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69332,
        45.408
    ]
},
{
    "routeDataPointId": "238",
    "segmentId": "1",
    "time": 1672158524923,
    "velocity": 78,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69326,
        45.40803
    ]
},
{
    "routeDataPointId": "239",
    "segmentId": "1",
    "time": 1672158524933,
    "velocity": 79,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69305,
        45.40812
    ]
},
{
    "routeDataPointId": "240",
    "segmentId": "1",
    "time": 1672158524943,
    "velocity": 80,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69281,
        45.40824
    ]
},
{
    "routeDataPointId": "241",
    "segmentId": "1",
    "time": 1672158524953,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69268,
        45.4083
    ]
},
{
    "routeDataPointId": "242",
    "segmentId": "1",
    "time": 1672158524963,
    "velocity": 82,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69256,
        45.40836
    ]
},
{
    "routeDataPointId": "243",
    "segmentId": "1",
    "time": 1672158524973,
    "velocity": 83,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69243,
        45.40842
    ]
},
{
    "routeDataPointId": "244",
    "segmentId": "1",
    "time": 1672158524983,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6923,
        45.40849
    ]
},
{
    "routeDataPointId": "245",
    "segmentId": "1",
    "time": 1672158524993,
    "velocity": 85,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69218,
        45.40855
    ]
},
{
    "routeDataPointId": "246",
    "segmentId": "1",
    "time": 1672158525003,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69216,
        45.40856
    ]
},
{
    "routeDataPointId": "247",
    "segmentId": "1",
    "time": 1672158525013,
    "velocity": 87,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69205,
        45.40861
    ]
},
{
    "routeDataPointId": "248",
    "segmentId": "1",
    "time": 1672158525023,
    "velocity": 88,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69192,
        45.40867
    ]
},
{
    "routeDataPointId": "249",
    "segmentId": "1",
    "time": 1672158525033,
    "velocity": 89,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69182,
        45.40872
    ]
},
{
    "routeDataPointId": "250",
    "segmentId": "1",
    "time": 1672158525043,
    "velocity": 90,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69174,
        45.40876
    ]
},
{
    "routeDataPointId": "251",
    "segmentId": "1",
    "time": 1672158525053,
    "velocity": 91,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69165,
        45.4088
    ]
},
{
    "routeDataPointId": "252",
    "segmentId": "1",
    "time": 1672158525063,
    "velocity": 92,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69154,
        45.40886
    ]
},
{
    "routeDataPointId": "253",
    "segmentId": "1",
    "time": 1672158525073,
    "velocity": 93,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69142,
        45.40892
    ]
},
{
    "routeDataPointId": "254",
    "segmentId": "1",
    "time": 1672158525083,
    "velocity": 94,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6913,
        45.40897
    ]
},
{
    "routeDataPointId": "255",
    "segmentId": "1",
    "time": 1672158525093,
    "velocity": 95,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69129,
        45.40898
    ]
},
{
    "routeDataPointId": "256",
    "segmentId": "1",
    "time": 1672158525103,
    "velocity": 96,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69116,
        45.40904
    ]
},
{
    "routeDataPointId": "257",
    "segmentId": "1",
    "time": 1672158525113,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69105,
        45.40909
    ]
},
{
    "routeDataPointId": "258",
    "segmentId": "1",
    "time": 1672158525123,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69092,
        45.40916
    ]
},
{
    "routeDataPointId": "259",
    "segmentId": "1",
    "time": 1672158525133,
    "velocity": 99,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69079,
        45.40922
    ]
},
{
    "routeDataPointId": "260",
    "segmentId": "1",
    "time": 1672158525143,
    "velocity": 100,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69057,
        45.40933
    ]
},
{
    "routeDataPointId": "261",
    "segmentId": "1",
    "time": 1672158525153,
    "velocity": 101,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69029,
        45.40946
    ]
},
{
    "routeDataPointId": "262",
    "segmentId": "1",
    "time": 1672158525163,
    "velocity": 102,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "foo bar",
    "coordinates": [
        -75.69003,
        45.40958
    ]
},
{
    "routeDataPointId": "263",
    "segmentId": "1",
    "time": 1672158525173,
    "velocity": 103,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68991,
        45.40965
    ]
},
{
    "routeDataPointId": "264",
    "segmentId": "1",
    "time": 1672158525183,
    "velocity": 104,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68978,
        45.40971
    ]
},
{
    "routeDataPointId": "265",
    "segmentId": "1",
    "time": 1672158525193,
    "velocity": 105,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68965,
        45.40977
    ]
},
{
    "routeDataPointId": "266",
    "segmentId": "1",
    "time": 1672158525203,
    "velocity": 106,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68952,
        45.40983
    ]
},
{
    "routeDataPointId": "267",
    "segmentId": "1",
    "time": 1672158525213,
    "velocity": 107,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68939,
        45.40989
    ]
},
{
    "routeDataPointId": "268",
    "segmentId": "1",
    "time": 1672158525223,
    "velocity": 108,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68928,
        45.40994
    ]
},
{
    "routeDataPointId": "269",
    "segmentId": "1",
    "time": 1672158525233,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68922,
        45.40997
    ]
},
{
    "routeDataPointId": "270",
    "segmentId": "1",
    "time": 1672158525243,
    "velocity": 110,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68897,
        45.41008
    ]
},
{
    "routeDataPointId": "271",
    "segmentId": "1",
    "time": 1672158525253,
    "velocity": 111,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68887,
        45.41013
    ]
},
{
    "routeDataPointId": "272",
    "segmentId": "1",
    "time": 1672158525263,
    "velocity": 112,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68871,
        45.4102
    ]
},
{
    "routeDataPointId": "273",
    "segmentId": "1",
    "time": 1672158525273,
    "velocity": 113,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6884,
        45.41034
    ]
},
{
    "routeDataPointId": "274",
    "segmentId": "1",
    "time": 1672158525283,
    "velocity": 114,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68823,
        45.41041
    ]
},
{
    "routeDataPointId": "275",
    "segmentId": "1",
    "time": 1672158525293,
    "velocity": 115,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68811,
        45.41047
    ]
},
{
    "routeDataPointId": "276",
    "segmentId": "1",
    "time": 1672158525303,
    "velocity": 116,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68797,
        45.41052
    ]
},
{
    "routeDataPointId": "277",
    "segmentId": "1",
    "time": 1672158525313,
    "velocity": 117,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68785,
        45.41057
    ]
},
{
    "routeDataPointId": "278",
    "segmentId": "1",
    "time": 1672158525323,
    "velocity": 118,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68771,
        45.41063
    ]
},
{
    "routeDataPointId": "279",
    "segmentId": "1",
    "time": 1672158525333,
    "velocity": 119,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68758,
        45.41069
    ]
},
{
    "routeDataPointId": "280",
    "segmentId": "1",
    "time": 1672158525343,
    "velocity": 120,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68745,
        45.41074
    ]
},
{
    "routeDataPointId": "281",
    "segmentId": "1",
    "time": 1672158525353,
    "velocity": 121,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68732,
        45.4108
    ]
},
{
    "routeDataPointId": "282",
    "segmentId": "1",
    "time": 1672158525363,
    "velocity": 122,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68708,
        45.4109
    ]
},
{
    "routeDataPointId": "283",
    "segmentId": "1",
    "time": 1672158525373,
    "velocity": 123,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68691,
        45.41096
    ]
},
{
    "routeDataPointId": "284",
    "segmentId": "1",
    "time": 1672158525383,
    "velocity": 124,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68679,
        45.41101
    ]
},
{
    "routeDataPointId": "285",
    "segmentId": "1",
    "time": 1672158525393,
    "velocity": 125,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68652,
        45.41112
    ]
},
{
    "routeDataPointId": "286",
    "segmentId": "1",
    "time": 1672158525403,
    "velocity": 126,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68639,
        45.41117
    ]
},
{
    "routeDataPointId": "287",
    "segmentId": "1",
    "time": 1672158525413,
    "velocity": 127,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68628,
        45.41121
    ]
},
{
    "routeDataPointId": "288",
    "segmentId": "1",
    "time": 1672158525423,
    "velocity": 128,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68611,
        45.41128
    ]
},
{
    "routeDataPointId": "289",
    "segmentId": "1",
    "time": 1672158525433,
    "velocity": 129,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68599,
        45.41132
    ]
},
{
    "routeDataPointId": "290",
    "segmentId": "1",
    "time": 1672158525443,
    "velocity": 130,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68584,
        45.41138
    ]
},
{
    "routeDataPointId": "291",
    "segmentId": "1",
    "time": 1672158525453,
    "velocity": 131,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68571,
        45.41143
    ]
},
{
    "routeDataPointId": "292",
    "segmentId": "1",
    "time": 1672158525463,
    "velocity": 132,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68556,
        45.41148
    ]
},
{
    "routeDataPointId": "293",
    "segmentId": "1",
    "time": 1672158525473,
    "velocity": 133,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68538,
        45.41155
    ]
},
{
    "routeDataPointId": "294",
    "segmentId": "1",
    "time": 1672158525483,
    "velocity": 134,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68515,
        45.41163
    ]
},
{
    "routeDataPointId": "295",
    "segmentId": "1",
    "time": 1672158525493,
    "velocity": 135,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68488,
        45.41173
    ]
},
{
    "routeDataPointId": "296",
    "segmentId": "1",
    "time": 1672158525503,
    "velocity": 136,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68475,
        45.41178
    ]
},
{
    "routeDataPointId": "297",
    "segmentId": "1",
    "time": 1672158525513,
    "velocity": 137,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68461,
        45.41183
    ]
},
{
    "routeDataPointId": "298",
    "segmentId": "1",
    "time": 1672158525523,
    "velocity": 138,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68448,
        45.41187
    ]
},
{
    "routeDataPointId": "299",
    "segmentId": "1",
    "time": 1672158525533,
    "velocity": 139,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68434,
        45.41192
    ]
},
{
    "routeDataPointId": "300",
    "segmentId": "1",
    "time": 1672158525543,
    "velocity": 140,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68351,
        45.4122
    ]
},
{
    "routeDataPointId": "301",
    "segmentId": "1",
    "time": 1672158525553,
    "velocity": 141,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68337,
        45.41225
    ]
},
{
    "routeDataPointId": "302",
    "segmentId": "1",
    "time": 1672158525563,
    "velocity": 142,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68309,
        45.41234
    ]
},
{
    "routeDataPointId": "303",
    "segmentId": "1",
    "time": 1672158525573,
    "velocity": 143,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68294,
        45.41239
    ]
},
{
    "routeDataPointId": "304",
    "segmentId": "1",
    "time": 1672158525583,
    "velocity": 144,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68281,
        45.41244
    ]
},
{
    "routeDataPointId": "305",
    "segmentId": "1",
    "time": 1672158525593,
    "velocity": 145,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68268,
        45.41248
    ]
},
{
    "routeDataPointId": "306",
    "segmentId": "1",
    "time": 1672158525603,
    "velocity": 146,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68247,
        45.41255
    ]
},
{
    "routeDataPointId": "307",
    "segmentId": "1",
    "time": 1672158525613,
    "velocity": 147,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68234,
        45.4126
    ]
},
{
    "routeDataPointId": "308",
    "segmentId": "1",
    "time": 1672158525623,
    "velocity": 148,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68207,
        45.41269
    ]
},
{
    "routeDataPointId": "309",
    "segmentId": "1",
    "time": 1672158525633,
    "velocity": 149,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68192,
        45.41273
    ]
},
{
    "routeDataPointId": "310",
    "segmentId": "1",
    "time": 1672158525643,
    "velocity": 150,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68179,
        45.41278
    ]
},
{
    "routeDataPointId": "311",
    "segmentId": "1",
    "time": 1672158525653,
    "velocity": 151,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68164,
        45.41283
    ]
},
{
    "routeDataPointId": "312",
    "segmentId": "1",
    "time": 1672158525663,
    "velocity": 152,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68138,
        45.41292
    ]
},
{
    "routeDataPointId": "313",
    "segmentId": "1",
    "time": 1672158525673,
    "velocity": 153,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68122,
        45.41298
    ]
},
{
    "routeDataPointId": "314",
    "segmentId": "1",
    "time": 1672158525683,
    "velocity": 154,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68109,
        45.41303
    ]
},
{
    "routeDataPointId": "315",
    "segmentId": "1",
    "time": 1672158525693,
    "velocity": 155,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68096,
        45.41307
    ]
},
{
    "routeDataPointId": "316",
    "segmentId": "1",
    "time": 1672158525703,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68082,
        45.41312
    ]
},
{
    "routeDataPointId": "317",
    "segmentId": "1",
    "time": 1672158525713,
    "velocity": 157,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68071,
        45.41317
    ]
},
{
    "routeDataPointId": "318",
    "segmentId": "1",
    "time": 1672158525723,
    "velocity": 158,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68068,
        45.41318
    ]
},
{
    "routeDataPointId": "319",
    "segmentId": "1",
    "time": 1672158525733,
    "velocity": 159,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68054,
        45.41323
    ]
},
{
    "routeDataPointId": "320",
    "segmentId": "1",
    "time": 1672158525743,
    "velocity": 0,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68041,
        45.41329
    ]
},
{
    "routeDataPointId": "321",
    "segmentId": "1",
    "time": 1672158525753,
    "velocity": 1,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68029,
        45.41334
    ]
},
{
    "routeDataPointId": "322",
    "segmentId": "1",
    "time": 1672158525763,
    "velocity": 2,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68004,
        45.41345
    ]
},
{
    "routeDataPointId": "323",
    "segmentId": "1",
    "time": 1672158525773,
    "velocity": 3,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67978,
        45.41356
    ]
},
{
    "routeDataPointId": "324",
    "segmentId": "1",
    "time": 1672158525783,
    "velocity": 4,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67977,
        45.41356
    ]
},
{
    "routeDataPointId": "325",
    "segmentId": "1",
    "time": 1672158525793,
    "velocity": 5,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67963,
        45.41363
    ]
},
{
    "routeDataPointId": "326",
    "segmentId": "1",
    "time": 1672158525803,
    "velocity": 6,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6795,
        45.41369
    ]
},
{
    "routeDataPointId": "327",
    "segmentId": "1",
    "time": 1672158525813,
    "velocity": 7,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67935,
        45.41375
    ]
},
{
    "routeDataPointId": "328",
    "segmentId": "1",
    "time": 1672158525823,
    "velocity": 8,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67923,
        45.41381
    ]
},
{
    "routeDataPointId": "329",
    "segmentId": "1",
    "time": 1672158525833,
    "velocity": 9,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67899,
        45.41392
    ]
},
{
    "routeDataPointId": "330",
    "segmentId": "1",
    "time": 1672158525843,
    "velocity": 10,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67892,
        45.41395
    ]
},
{
    "routeDataPointId": "331",
    "segmentId": "1",
    "time": 1672158525853,
    "velocity": 11,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67885,
        45.41398
    ]
},
{
    "routeDataPointId": "332",
    "segmentId": "1",
    "time": 1672158525863,
    "velocity": 12,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67872,
        45.41404
    ]
},
{
    "routeDataPointId": "333",
    "segmentId": "1",
    "time": 1672158525873,
    "velocity": 13,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6786,
        45.4141
    ]
},
{
    "routeDataPointId": "334",
    "segmentId": "1",
    "time": 1672158525883,
    "velocity": 14,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67847,
        45.41416
    ]
},
{
    "routeDataPointId": "335",
    "segmentId": "1",
    "time": 1672158525893,
    "velocity": 15,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67834,
        45.41422
    ]
},
{
    "routeDataPointId": "336",
    "segmentId": "1",
    "time": 1672158525903,
    "velocity": 16,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67832,
        45.41423
    ]
},
{
    "routeDataPointId": "337",
    "segmentId": "1",
    "time": 1672158525913,
    "velocity": 17,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67821,
        45.41428
    ]
},
{
    "routeDataPointId": "338",
    "segmentId": "1",
    "time": 1672158525923,
    "velocity": 18,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67798,
        45.41439
    ]
},
{
    "routeDataPointId": "339",
    "segmentId": "1",
    "time": 1672158525933,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67756,
        45.41458
    ]
},
{
    "routeDataPointId": "340",
    "segmentId": "1",
    "time": 1672158525943,
    "velocity": 20,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67745,
        45.41463
    ]
},
{
    "routeDataPointId": "341",
    "segmentId": "1",
    "time": 1672158525953,
    "velocity": 21,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67733,
        45.41469
    ]
},
{
    "routeDataPointId": "342",
    "segmentId": "1",
    "time": 1672158525963,
    "velocity": 22,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6772,
        45.41475
    ]
},
{
    "routeDataPointId": "343",
    "segmentId": "1",
    "time": 1672158525973,
    "velocity": 23,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67707,
        45.41481
    ]
},
{
    "routeDataPointId": "344",
    "segmentId": "1",
    "time": 1672158525983,
    "velocity": 24,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67694,
        45.41487
    ]
},
{
    "routeDataPointId": "345",
    "segmentId": "1",
    "time": 1672158525993,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67681,
        45.41493
    ]
},
{
    "routeDataPointId": "346",
    "segmentId": "1",
    "time": 1672158526003,
    "velocity": 26,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67668,
        45.41499
    ]
},
{
    "routeDataPointId": "347",
    "segmentId": "1",
    "time": 1672158526013,
    "velocity": 27,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67656,
        45.41505
    ]
},
{
    "routeDataPointId": "348",
    "segmentId": "1",
    "time": 1672158526023,
    "velocity": 28,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67637,
        45.41514
    ]
},
{
    "routeDataPointId": "349",
    "segmentId": "1",
    "time": 1672158526033,
    "velocity": 29,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67629,
        45.41518
    ]
},
{
    "routeDataPointId": "350",
    "segmentId": "1",
    "time": 1672158526043,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67616,
        45.41524
    ]
},
{
    "routeDataPointId": "351",
    "segmentId": "1",
    "time": 1672158526053,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67601,
        45.41531
    ]
},
{
    "routeDataPointId": "352",
    "segmentId": "1",
    "time": 1672158526063,
    "velocity": 32,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67579,
        45.41541
    ]
},
{
    "routeDataPointId": "353",
    "segmentId": "1",
    "time": 1672158526073,
    "velocity": 33,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67566,
        45.41547
    ]
},
{
    "routeDataPointId": "354",
    "segmentId": "1",
    "time": 1672158526083,
    "velocity": 34,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67554,
        45.41553
    ]
},
{
    "routeDataPointId": "355",
    "segmentId": "1",
    "time": 1672158526093,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67541,
        45.41559
    ]
},
{
    "routeDataPointId": "356",
    "segmentId": "1",
    "time": 1672158526103,
    "velocity": 36,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67527,
        45.41565
    ]
},
{
    "routeDataPointId": "357",
    "segmentId": "1",
    "time": 1672158526113,
    "velocity": 37,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67517,
        45.4157
    ]
},
{
    "routeDataPointId": "358",
    "segmentId": "1",
    "time": 1672158526123,
    "velocity": 38,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67502,
        45.41577
    ]
},
{
    "routeDataPointId": "359",
    "segmentId": "1",
    "time": 1672158526133,
    "velocity": 39,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67489,
        45.41583
    ]
},
{
    "routeDataPointId": "360",
    "segmentId": "1",
    "time": 1672158526143,
    "velocity": 40,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67475,
        45.4159
    ]
},
{
    "routeDataPointId": "361",
    "segmentId": "1",
    "time": 1672158526153,
    "velocity": 41,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67462,
        45.41596
    ]
},
{
    "routeDataPointId": "362",
    "segmentId": "1",
    "time": 1672158526163,
    "velocity": 42,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67449,
        45.41602
    ]
},
{
    "routeDataPointId": "363",
    "segmentId": "1",
    "time": 1672158526173,
    "velocity": 43,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67435,
        45.41609
    ]
},
{
    "routeDataPointId": "364",
    "segmentId": "1",
    "time": 1672158526183,
    "velocity": 44,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67421,
        45.41615
    ]
},
{
    "routeDataPointId": "365",
    "segmentId": "1",
    "time": 1672158526193,
    "velocity": 45,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67408,
        45.41621
    ]
},
{
    "routeDataPointId": "366",
    "segmentId": "1",
    "time": 1672158526203,
    "velocity": 46,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67394,
        45.41627
    ]
},
{
    "routeDataPointId": "367",
    "segmentId": "1",
    "time": 1672158526213,
    "velocity": 47,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67378,
        45.41633
    ]
},
{
    "routeDataPointId": "368",
    "segmentId": "1",
    "time": 1672158526223,
    "velocity": 48,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6736,
        45.41641
    ]
},
{
    "routeDataPointId": "369",
    "segmentId": "1",
    "time": 1672158526233,
    "velocity": 49,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67328,
        45.41653
    ]
},
{
    "routeDataPointId": "370",
    "segmentId": "1",
    "time": 1672158526243,
    "velocity": 50,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67314,
        45.41658
    ]
},
{
    "routeDataPointId": "371",
    "segmentId": "1",
    "time": 1672158526253,
    "velocity": 51,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67301,
        45.41663
    ]
},
{
    "routeDataPointId": "372",
    "segmentId": "1",
    "time": 1672158526263,
    "velocity": 52,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67289,
        45.41667
    ]
},
{
    "routeDataPointId": "373",
    "segmentId": "1",
    "time": 1672158526273,
    "velocity": 53,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67271,
        45.41672
    ]
},
{
    "routeDataPointId": "374",
    "segmentId": "1",
    "time": 1672158526283,
    "velocity": 54,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67259,
        45.41676
    ]
},
{
    "routeDataPointId": "375",
    "segmentId": "1",
    "time": 1672158526293,
    "velocity": 55,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67244,
        45.4168
    ]
},
{
    "routeDataPointId": "376",
    "segmentId": "1",
    "time": 1672158526303,
    "velocity": 56,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6723,
        45.41684
    ]
},
{
    "routeDataPointId": "377",
    "segmentId": "1",
    "time": 1672158526313,
    "velocity": 57,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67214,
        45.41688
    ]
},
{
    "routeDataPointId": "378",
    "segmentId": "1",
    "time": 1672158526323,
    "velocity": 58,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "foo bar",
    "coordinates": [
        -75.672,
        45.41691
    ]
},
{
    "routeDataPointId": "379",
    "segmentId": "1",
    "time": 1672158526333,
    "velocity": 59,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67185,
        45.41694
    ]
},
{
    "routeDataPointId": "380",
    "segmentId": "1",
    "time": 1672158526343,
    "velocity": 60,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67171,
        45.41697
    ]
},
{
    "routeDataPointId": "381",
    "segmentId": "1",
    "time": 1672158526353,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67157,
        45.417
    ]
},
{
    "routeDataPointId": "382",
    "segmentId": "1",
    "time": 1672158526363,
    "velocity": 62,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67143,
        45.41702
    ]
},
{
    "routeDataPointId": "383",
    "segmentId": "1",
    "time": 1672158526373,
    "velocity": 63,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67126,
        45.41705
    ]
},
{
    "routeDataPointId": "384",
    "segmentId": "1",
    "time": 1672158526383,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67111,
        45.41707
    ]
},
{
    "routeDataPointId": "385",
    "segmentId": "1",
    "time": 1672158526393,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67098,
        45.41709
    ]
},
{
    "routeDataPointId": "386",
    "segmentId": "1",
    "time": 1672158526403,
    "velocity": 66,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67078,
        45.41711
    ]
},
{
    "routeDataPointId": "387",
    "segmentId": "1",
    "time": 1672158526413,
    "velocity": 67,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67069,
        45.41712
    ]
},
{
    "routeDataPointId": "388",
    "segmentId": "1",
    "time": 1672158526423,
    "velocity": 68,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67059,
        45.41713
    ]
},
{
    "routeDataPointId": "389",
    "segmentId": "1",
    "time": 1672158526433,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67044,
        45.41714
    ]
},
{
    "routeDataPointId": "390",
    "segmentId": "1",
    "time": 1672158526443,
    "velocity": 70,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67029,
        45.41715
    ]
},
{
    "routeDataPointId": "391",
    "segmentId": "1",
    "time": 1672158526453,
    "velocity": 71,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67014,
        45.41716
    ]
},
{
    "routeDataPointId": "392",
    "segmentId": "1",
    "time": 1672158526463,
    "velocity": 72,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66994,
        45.41717
    ]
},
{
    "routeDataPointId": "393",
    "segmentId": "1",
    "time": 1672158526473,
    "velocity": 73,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66984,
        45.41717
    ]
},
{
    "routeDataPointId": "394",
    "segmentId": "1",
    "time": 1672158526483,
    "velocity": 74,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66967,
        45.41717
    ]
},
{
    "routeDataPointId": "395",
    "segmentId": "1",
    "time": 1672158526493,
    "velocity": 75,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66954,
        45.41717
    ]
},
{
    "routeDataPointId": "396",
    "segmentId": "1",
    "time": 1672158526503,
    "velocity": 76,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66938,
        45.41717
    ]
},
{
    "routeDataPointId": "397",
    "segmentId": "1",
    "time": 1672158526513,
    "velocity": 77,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66931,
        45.41717
    ]
},
{
    "routeDataPointId": "398",
    "segmentId": "1",
    "time": 1672158526523,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66923,
        45.41717
    ]
},
{
    "routeDataPointId": "399",
    "segmentId": "1",
    "time": 1672158526533,
    "velocity": 79,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66893,
        45.41716
    ]
},
{
    "routeDataPointId": "400",
    "segmentId": "1",
    "time": 1672158526543,
    "velocity": 80,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66877,
        45.41714
    ]
},
{
    "routeDataPointId": "401",
    "segmentId": "1",
    "time": 1672158526553,
    "velocity": 81,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66862,
        45.41713
    ]
},
{
    "routeDataPointId": "402",
    "segmentId": "1",
    "time": 1672158526563,
    "velocity": 82,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66847,
        45.41712
    ]
},
{
    "routeDataPointId": "403",
    "segmentId": "1",
    "time": 1672158526573,
    "velocity": 83,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66831,
        45.4171
    ]
},
{
    "routeDataPointId": "404",
    "segmentId": "1",
    "time": 1672158526583,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66815,
        45.41708
    ]
},
{
    "routeDataPointId": "405",
    "segmentId": "1",
    "time": 1672158526593,
    "velocity": 85,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66814,
        45.41708
    ]
},
{
    "routeDataPointId": "406",
    "segmentId": "1",
    "time": 1672158526603,
    "velocity": 86,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66801,
        45.41707
    ]
},
{
    "routeDataPointId": "407",
    "segmentId": "1",
    "time": 1672158526613,
    "velocity": 87,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66785,
        45.41704
    ]
},
{
    "routeDataPointId": "408",
    "segmentId": "1",
    "time": 1672158526623,
    "velocity": 88,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66771,
        45.41703
    ]
},
{
    "routeDataPointId": "409",
    "segmentId": "1",
    "time": 1672158526633,
    "velocity": 89,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66741,
        45.41698
    ]
},
{
    "routeDataPointId": "410",
    "segmentId": "1",
    "time": 1672158526643,
    "velocity": 90,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66732,
        45.41697
    ]
},
{
    "routeDataPointId": "411",
    "segmentId": "1",
    "time": 1672158526653,
    "velocity": 91,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66711,
        45.41694
    ]
},
{
    "routeDataPointId": "412",
    "segmentId": "1",
    "time": 1672158526663,
    "velocity": 92,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6668,
        45.41689
    ]
},
{
    "routeDataPointId": "413",
    "segmentId": "1",
    "time": 1672158526673,
    "velocity": 93,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66665,
        45.41687
    ]
},
{
    "routeDataPointId": "414",
    "segmentId": "1",
    "time": 1672158526683,
    "velocity": 94,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66649,
        45.41685
    ]
},
{
    "routeDataPointId": "415",
    "segmentId": "1",
    "time": 1672158526693,
    "velocity": 95,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66634,
        45.41683
    ]
},
{
    "routeDataPointId": "416",
    "segmentId": "1",
    "time": 1672158526703,
    "velocity": 96,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66614,
        45.41681
    ]
},
{
    "routeDataPointId": "417",
    "segmentId": "1",
    "time": 1672158526713,
    "velocity": 97,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66604,
        45.4168
    ]
},
{
    "routeDataPointId": "418",
    "segmentId": "1",
    "time": 1672158526723,
    "velocity": 98,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66588,
        45.41679
    ]
},
{
    "routeDataPointId": "419",
    "segmentId": "1",
    "time": 1672158526733,
    "velocity": 99,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66574,
        45.41678
    ]
},
{
    "routeDataPointId": "420",
    "segmentId": "1",
    "time": 1672158526743,
    "velocity": 100,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66567,
        45.41677
    ]
},
{
    "routeDataPointId": "421",
    "segmentId": "1",
    "time": 1672158526753,
    "velocity": 101,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66554,
        45.41677
    ]
},
{
    "routeDataPointId": "422",
    "segmentId": "1",
    "time": 1672158526763,
    "velocity": 102,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "foo bar",
    "coordinates": [
        -75.66526,
        45.41676
    ]
},
{
    "routeDataPointId": "423",
    "segmentId": "1",
    "time": 1672158526773,
    "velocity": 103,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6651,
        45.41676
    ]
},
{
    "routeDataPointId": "424",
    "segmentId": "1",
    "time": 1672158526783,
    "velocity": 104,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66482,
        45.41676
    ]
},
{
    "routeDataPointId": "425",
    "segmentId": "1",
    "time": 1672158526793,
    "velocity": 105,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66473,
        45.41676
    ]
},
{
    "routeDataPointId": "426",
    "segmentId": "1",
    "time": 1672158526803,
    "velocity": 106,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66465,
        45.41677
    ]
},
{
    "routeDataPointId": "427",
    "segmentId": "1",
    "time": 1672158526813,
    "velocity": 107,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6645,
        45.41677
    ]
},
{
    "routeDataPointId": "428",
    "segmentId": "1",
    "time": 1672158526823,
    "velocity": 108,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66433,
        45.41678
    ]
},
{
    "routeDataPointId": "429",
    "segmentId": "1",
    "time": 1672158526833,
    "velocity": 109,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66414,
        45.4168
    ]
},
{
    "routeDataPointId": "430",
    "segmentId": "1",
    "time": 1672158526843,
    "velocity": 110,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6638,
        45.41683
    ]
},
{
    "routeDataPointId": "431",
    "segmentId": "1",
    "time": 1672158526853,
    "velocity": 111,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6636,
        45.41684
    ]
},
{
    "routeDataPointId": "432",
    "segmentId": "1",
    "time": 1672158526863,
    "velocity": 112,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66322,
        45.41688
    ]
},
{
    "routeDataPointId": "433",
    "segmentId": "1",
    "time": 1672158526873,
    "velocity": 113,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66284,
        45.41691
    ]
},
{
    "routeDataPointId": "434",
    "segmentId": "1",
    "time": 1672158526883,
    "velocity": 114,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66274,
        45.41692
    ]
},
{
    "routeDataPointId": "435",
    "segmentId": "1",
    "time": 1672158526893,
    "velocity": 115,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66271,
        45.41692
    ]
},
{
    "routeDataPointId": "436",
    "segmentId": "1",
    "time": 1672158526903,
    "velocity": 116,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66252,
        45.41694
    ]
},
{
    "routeDataPointId": "437",
    "segmentId": "1",
    "time": 1672158526913,
    "velocity": 117,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66241,
        45.41695
    ]
},
{
    "routeDataPointId": "438",
    "segmentId": "1",
    "time": 1672158526923,
    "velocity": 118,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6622,
        45.41689
    ]
},
{
    "routeDataPointId": "439",
    "segmentId": "1",
    "time": 1672158526933,
    "velocity": 119,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66219,
        45.41689
    ]
},
{
    "routeDataPointId": "440",
    "segmentId": "1",
    "time": 1672158526943,
    "velocity": 120,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66218,
        45.41689
    ]
},
{
    "routeDataPointId": "441",
    "segmentId": "1",
    "time": 1672158526953,
    "velocity": 121,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66159,
        45.41692
    ]
},
{
    "routeDataPointId": "442",
    "segmentId": "1",
    "time": 1672158526963,
    "velocity": 122,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66145,
        45.41693
    ]
},
{
    "routeDataPointId": "443",
    "segmentId": "1",
    "time": 1672158526973,
    "velocity": 123,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66108,
        45.41695
    ]
},
{
    "routeDataPointId": "444",
    "segmentId": "1",
    "time": 1672158526983,
    "velocity": 124,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66086,
        45.41696
    ]
},
{
    "routeDataPointId": "445",
    "segmentId": "1",
    "time": 1672158526993,
    "velocity": 125,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6607,
        45.41697
    ]
},
{
    "routeDataPointId": "446",
    "segmentId": "1",
    "time": 1672158527003,
    "velocity": 126,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6606,
        45.41697
    ]
},
{
    "routeDataPointId": "447",
    "segmentId": "1",
    "time": 1672158527013,
    "velocity": 127,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6604,
        45.41698
    ]
},
{
    "routeDataPointId": "448",
    "segmentId": "1",
    "time": 1672158527023,
    "velocity": 128,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6603,
        45.41699
    ]
},
{
    "routeDataPointId": "449",
    "segmentId": "1",
    "time": 1672158527033,
    "velocity": 129,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66015,
        45.41699
    ]
},
{
    "routeDataPointId": "450",
    "segmentId": "1",
    "time": 1672158527043,
    "velocity": 130,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65979,
        45.41697
    ]
},
{
    "routeDataPointId": "451",
    "segmentId": "1",
    "time": 1672158527053,
    "velocity": 131,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65975,
        45.41697
    ]
},
{
    "routeDataPointId": "452",
    "segmentId": "1",
    "time": 1672158527063,
    "velocity": 132,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65966,
        45.41696
    ]
},
{
    "routeDataPointId": "453",
    "segmentId": "1",
    "time": 1672158527073,
    "velocity": 133,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65956,
        45.41694
    ]
},
{
    "routeDataPointId": "454",
    "segmentId": "1",
    "time": 1672158527083,
    "velocity": 134,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65941,
        45.41691
    ]
},
{
    "routeDataPointId": "455",
    "segmentId": "1",
    "time": 1672158527093,
    "velocity": 135,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65929,
        45.41688
    ]
},
{
    "routeDataPointId": "456",
    "segmentId": "1",
    "time": 1672158527103,
    "velocity": 136,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65919,
        45.41684
    ]
},
{
    "routeDataPointId": "457",
    "segmentId": "1",
    "time": 1672158527113,
    "velocity": 137,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6591,
        45.4168
    ]
},
{
    "routeDataPointId": "458",
    "segmentId": "1",
    "time": 1672158527123,
    "velocity": 138,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65902,
        45.41676
    ]
},
{
    "routeDataPointId": "459",
    "segmentId": "1",
    "time": 1672158527133,
    "velocity": 139,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65894,
        45.41671
    ]
},
{
    "routeDataPointId": "460",
    "segmentId": "1",
    "time": 1672158527143,
    "velocity": 140,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65887,
        45.41667
    ]
},
{
    "routeDataPointId": "461",
    "segmentId": "1",
    "time": 1672158527153,
    "velocity": 141,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6588,
        45.41662
    ]
},
{
    "routeDataPointId": "462",
    "segmentId": "1",
    "time": 1672158527163,
    "velocity": 142,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65869,
        45.41654
    ]
},
{
    "routeDataPointId": "463",
    "segmentId": "1",
    "time": 1672158527173,
    "velocity": 143,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65857,
        45.41644
    ]
},
{
    "routeDataPointId": "464",
    "segmentId": "1",
    "time": 1672158527183,
    "velocity": 144,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65837,
        45.41628
    ]
},
{
    "routeDataPointId": "465",
    "segmentId": "1",
    "time": 1672158527193,
    "velocity": 145,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65826,
        45.41621
    ]
},
{
    "routeDataPointId": "466",
    "segmentId": "1",
    "time": 1672158527203,
    "velocity": 146,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65817,
        45.41616
    ]
},
{
    "routeDataPointId": "467",
    "segmentId": "1",
    "time": 1672158527213,
    "velocity": 147,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6581,
        45.41612
    ]
},
{
    "routeDataPointId": "468",
    "segmentId": "1",
    "time": 1672158527223,
    "velocity": 148,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65809,
        45.41612
    ]
},
{
    "routeDataPointId": "469",
    "segmentId": "1",
    "time": 1672158527233,
    "velocity": 149,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "foo bar",
    "coordinates": [
        -75.65803,
        45.41609
    ]
},
{
    "routeDataPointId": "470",
    "segmentId": "1",
    "time": 1672158527243,
    "velocity": 150,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65802,
        45.41608
    ]
},
{
    "routeDataPointId": "471",
    "segmentId": "1",
    "time": 1672158527253,
    "velocity": 151,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65795,
        45.41606
    ]
},
{
    "routeDataPointId": "472",
    "segmentId": "1",
    "time": 1672158527263,
    "velocity": 152,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65762,
        45.41599
    ]
},
{
    "routeDataPointId": "473",
    "segmentId": "1",
    "time": 1672158527273,
    "velocity": 153,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6575,
        45.41593
    ]
},
{
    "routeDataPointId": "474",
    "segmentId": "1",
    "time": 1672158527283,
    "velocity": 154,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6572,
        45.41579
    ]
},
{
    "routeDataPointId": "475",
    "segmentId": "1",
    "time": 1672158527293,
    "velocity": 155,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65714,
        45.41575
    ]
},
{
    "routeDataPointId": "476",
    "segmentId": "1",
    "time": 1672158527303,
    "velocity": 156,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6571,
        45.41571
    ]
},
{
    "routeDataPointId": "477",
    "segmentId": "1",
    "time": 1672158527313,
    "velocity": 157,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65706,
        45.41566
    ]
},
{
    "routeDataPointId": "478",
    "segmentId": "1",
    "time": 1672158527323,
    "velocity": 158,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65706,
        45.41565
    ]
},
{
    "routeDataPointId": "479",
    "segmentId": "1",
    "time": 1672158527333,
    "velocity": 159,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65705,
        45.41563
    ]
},
{
    "routeDataPointId": "480",
    "segmentId": "1",
    "time": 1672158527343,
    "velocity": 0,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65704,
        45.4156
    ]
},
{
    "routeDataPointId": "481",
    "segmentId": "1",
    "time": 1672158527353,
    "velocity": 1,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65703,
        45.41557
    ]
},
{
    "routeDataPointId": "482",
    "segmentId": "1",
    "time": 1672158527363,
    "velocity": 2,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65702,
        45.41552
    ]
},
{
    "routeDataPointId": "483",
    "segmentId": "1",
    "time": 1672158527373,
    "velocity": 3,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65701,
        45.41533
    ]
},
{
    "routeDataPointId": "484",
    "segmentId": "1",
    "time": 1672158527383,
    "velocity": 4,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6571,
        45.41511
    ]
},
{
    "routeDataPointId": "485",
    "segmentId": "1",
    "time": 1672158527393,
    "velocity": 5,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65754,
        45.41415
    ]
},
{
    "routeDataPointId": "486",
    "segmentId": "1",
    "time": 1672158527403,
    "velocity": 6,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65769,
        45.41385
    ]
},
{
    "routeDataPointId": "487",
    "segmentId": "1",
    "time": 1672158527413,
    "velocity": 7,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6578,
        45.41364
    ]
},
{
    "routeDataPointId": "488",
    "segmentId": "1",
    "time": 1672158527423,
    "velocity": 8,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65799,
        45.4133
    ]
},
{
    "routeDataPointId": "489",
    "segmentId": "1",
    "time": 1672158527433,
    "velocity": 9,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65821,
        45.41284
    ]
},
{
    "routeDataPointId": "490",
    "segmentId": "1",
    "time": 1672158527443,
    "velocity": 10,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6585,
        45.41225
    ]
},
{
    "routeDataPointId": "491",
    "segmentId": "1",
    "time": 1672158527453,
    "velocity": 11,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65854,
        45.41214
    ]
},
{
    "routeDataPointId": "492",
    "segmentId": "1",
    "time": 1672158527463,
    "velocity": 12,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65857,
        45.41208
    ]
},
{
    "routeDataPointId": "493",
    "segmentId": "1",
    "time": 1672158527473,
    "velocity": 13,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65869,
        45.41189
    ]
},
{
    "routeDataPointId": "494",
    "segmentId": "1",
    "time": 1672158527483,
    "velocity": 14,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65875,
        45.41181
    ]
},
{
    "routeDataPointId": "495",
    "segmentId": "1",
    "time": 1672158527493,
    "velocity": 15,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65879,
        45.41175
    ]
},
{
    "routeDataPointId": "496",
    "segmentId": "1",
    "time": 1672158527503,
    "velocity": 16,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65888,
        45.41163
    ]
},
{
    "routeDataPointId": "497",
    "segmentId": "1",
    "time": 1672158527513,
    "velocity": 17,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65894,
        45.41155
    ]
},
{
    "routeDataPointId": "498",
    "segmentId": "1",
    "time": 1672158527523,
    "velocity": 18,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65901,
        45.41147
    ]
},
{
    "routeDataPointId": "499",
    "segmentId": "1",
    "time": 1672158527533,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65908,
        45.4114
    ]
},
{
    "routeDataPointId": "500",
    "segmentId": "1",
    "time": 1672158527543,
    "velocity": 20,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65915,
        45.41133
    ]
},
{
    "routeDataPointId": "501",
    "segmentId": "1",
    "time": 1672158527553,
    "velocity": 21,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65922,
        45.41127
    ]
},
{
    "routeDataPointId": "502",
    "segmentId": "1",
    "time": 1672158527563,
    "velocity": 22,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6593,
        45.41121
    ]
},
{
    "routeDataPointId": "503",
    "segmentId": "1",
    "time": 1672158527573,
    "velocity": 23,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65939,
        45.41115
    ]
},
{
    "routeDataPointId": "504",
    "segmentId": "1",
    "time": 1672158527583,
    "velocity": 24,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65946,
        45.4111
    ]
},
{
    "routeDataPointId": "505",
    "segmentId": "1",
    "time": 1672158527593,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65965,
        45.41099
    ]
},
{
    "routeDataPointId": "506",
    "segmentId": "1",
    "time": 1672158527603,
    "velocity": 26,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65974,
        45.41095
    ]
},
{
    "routeDataPointId": "507",
    "segmentId": "1",
    "time": 1672158527613,
    "velocity": 27,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65975,
        45.41094
    ]
},
{
    "routeDataPointId": "508",
    "segmentId": "1",
    "time": 1672158527623,
    "velocity": 28,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65983,
        45.4109
    ]
},
{
    "routeDataPointId": "509",
    "segmentId": "1",
    "time": 1672158527633,
    "velocity": 29,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65994,
        45.41086
    ]
},
{
    "routeDataPointId": "510",
    "segmentId": "1",
    "time": 1672158527643,
    "velocity": 30,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65996,
        45.41085
    ]
},
{
    "routeDataPointId": "511",
    "segmentId": "1",
    "time": 1672158527653,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66003,
        45.41082
    ]
},
{
    "routeDataPointId": "512",
    "segmentId": "1",
    "time": 1672158527663,
    "velocity": 32,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66014,
        45.41078
    ]
},
{
    "routeDataPointId": "513",
    "segmentId": "1",
    "time": 1672158527673,
    "velocity": 33,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66018,
        45.41076
    ]
},
{
    "routeDataPointId": "514",
    "segmentId": "1",
    "time": 1672158527683,
    "velocity": 34,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66019,
        45.41076
    ]
},
{
    "routeDataPointId": "515",
    "segmentId": "1",
    "time": 1672158527693,
    "velocity": 35,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "foo bar",
    "coordinates": [
        -75.66027,
        45.41073
    ]
},
{
    "routeDataPointId": "516",
    "segmentId": "1",
    "time": 1672158527704,
    "velocity": 36,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66039,
        45.4107
    ]
},
{
    "routeDataPointId": "517",
    "segmentId": "1",
    "time": 1672158527714,
    "velocity": 37,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66067,
        45.41063
    ]
},
{
    "routeDataPointId": "518",
    "segmentId": "1",
    "time": 1672158527724,
    "velocity": 38,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66078,
        45.41061
    ]
},
{
    "routeDataPointId": "519",
    "segmentId": "1",
    "time": 1672158527734,
    "velocity": 39,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66091,
        45.41059
    ]
},
{
    "routeDataPointId": "520",
    "segmentId": "1",
    "time": 1672158527744,
    "velocity": 40,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66108,
        45.41057
    ]
},
{
    "routeDataPointId": "521",
    "segmentId": "1",
    "time": 1672158527754,
    "velocity": 41,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66116,
        45.41056
    ]
},
{
    "routeDataPointId": "522",
    "segmentId": "1",
    "time": 1672158527764,
    "velocity": 42,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66134,
        45.41055
    ]
},
{
    "routeDataPointId": "523",
    "segmentId": "1",
    "time": 1672158527774,
    "velocity": 43,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66167,
        45.41052
    ]
},
{
    "routeDataPointId": "524",
    "segmentId": "1",
    "time": 1672158527784,
    "velocity": 44,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66208,
        45.41049
    ]
},
{
    "routeDataPointId": "525",
    "segmentId": "1",
    "time": 1672158527794,
    "velocity": 45,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66226,
        45.41048
    ]
},
{
    "routeDataPointId": "526",
    "segmentId": "1",
    "time": 1672158527804,
    "velocity": 46,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66246,
        45.41046
    ]
},
{
    "routeDataPointId": "527",
    "segmentId": "1",
    "time": 1672158527814,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66269,
        45.41043
    ]
},
{
    "routeDataPointId": "528",
    "segmentId": "1",
    "time": 1672158527824,
    "velocity": 48,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6629,
        45.41039
    ]
},
{
    "routeDataPointId": "529",
    "segmentId": "1",
    "time": 1672158527834,
    "velocity": 49,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66312,
        45.41034
    ]
},
{
    "routeDataPointId": "530",
    "segmentId": "1",
    "time": 1672158527844,
    "velocity": 50,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66333,
        45.41028
    ]
},
{
    "routeDataPointId": "531",
    "segmentId": "1",
    "time": 1672158527854,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6635,
        45.41022
    ]
},
{
    "routeDataPointId": "532",
    "segmentId": "1",
    "time": 1672158527864,
    "velocity": 52,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66365,
        45.41017
    ]
},
{
    "routeDataPointId": "533",
    "segmentId": "1",
    "time": 1672158527874,
    "velocity": 53,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66377,
        45.41012
    ]
},
{
    "routeDataPointId": "534",
    "segmentId": "1",
    "time": 1672158527884,
    "velocity": 54,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66391,
        45.41006
    ]
},
{
    "routeDataPointId": "535",
    "segmentId": "1",
    "time": 1672158527894,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66401,
        45.41
    ]
},
{
    "routeDataPointId": "536",
    "segmentId": "1",
    "time": 1672158527904,
    "velocity": 56,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66412,
        45.40994
    ]
},
{
    "routeDataPointId": "537",
    "segmentId": "1",
    "time": 1672158527914,
    "velocity": 57,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66419,
        45.40989
    ]
},
{
    "routeDataPointId": "538",
    "segmentId": "1",
    "time": 1672158527924,
    "velocity": 58,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66425,
        45.40985
    ]
},
{
    "routeDataPointId": "539",
    "segmentId": "1",
    "time": 1672158527934,
    "velocity": 59,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66435,
        45.40977
    ]
},
{
    "routeDataPointId": "540",
    "segmentId": "1",
    "time": 1672158527944,
    "velocity": 60,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66453,
        45.40963
    ]
},
{
    "routeDataPointId": "541",
    "segmentId": "1",
    "time": 1672158527954,
    "velocity": 61,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66464,
        45.40952
    ]
},
{
    "routeDataPointId": "542",
    "segmentId": "1",
    "time": 1672158527964,
    "velocity": 62,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6647,
        45.40945
    ]
},
{
    "routeDataPointId": "543",
    "segmentId": "1",
    "time": 1672158527974,
    "velocity": 63,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66476,
        45.40939
    ]
},
{
    "routeDataPointId": "544",
    "segmentId": "1",
    "time": 1672158527984,
    "velocity": 64,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66482,
        45.40928
    ]
},
{
    "routeDataPointId": "545",
    "segmentId": "1",
    "time": 1672158527994,
    "velocity": 65,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66491,
        45.40919
    ]
},
{
    "routeDataPointId": "546",
    "segmentId": "1",
    "time": 1672158528004,
    "velocity": 66,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66495,
        45.40913
    ]
},
{
    "routeDataPointId": "547",
    "segmentId": "1",
    "time": 1672158528014,
    "velocity": 67,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66503,
        45.40899
    ]
},
{
    "routeDataPointId": "548",
    "segmentId": "1",
    "time": 1672158528024,
    "velocity": 68,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66507,
        45.40898
    ]
},
{
    "routeDataPointId": "549",
    "segmentId": "1",
    "time": 1672158528034,
    "velocity": 69,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66511,
        45.40897
    ]
},
{
    "routeDataPointId": "550",
    "segmentId": "1",
    "time": 1672158528044,
    "velocity": 70,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66519,
        45.40891
    ]
},
{
    "routeDataPointId": "551",
    "segmentId": "1",
    "time": 1672158528054,
    "velocity": 71,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66523,
        45.40887
    ]
},
{
    "routeDataPointId": "552",
    "segmentId": "1",
    "time": 1672158528064,
    "velocity": 72,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66526,
        45.40885
    ]
},
{
    "routeDataPointId": "553",
    "segmentId": "1",
    "time": 1672158528074,
    "velocity": 73,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66531,
        45.40883
    ]
},
{
    "routeDataPointId": "554",
    "segmentId": "1",
    "time": 1672158528084,
    "velocity": 74,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66537,
        45.4088
    ]
},
{
    "routeDataPointId": "555",
    "segmentId": "1",
    "time": 1672158528094,
    "velocity": 75,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66563,
        45.40881
    ]
},
{
    "routeDataPointId": "556",
    "segmentId": "1",
    "time": 1672158528104,
    "velocity": 76,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66573,
        45.40881
    ]
},
{
    "routeDataPointId": "557",
    "segmentId": "1",
    "time": 1672158528114,
    "velocity": 77,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66574,
        45.40881
    ]
},
{
    "routeDataPointId": "558",
    "segmentId": "1",
    "time": 1672158528124,
    "velocity": 78,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66582,
        45.40881
    ]
},
{
    "routeDataPointId": "559",
    "segmentId": "1",
    "time": 1672158528134,
    "velocity": 79,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66591,
        45.40881
    ]
},
{
    "routeDataPointId": "560",
    "segmentId": "1",
    "time": 1672158528144,
    "velocity": 80,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66603,
        45.4088
    ]
},
{
    "routeDataPointId": "561",
    "segmentId": "1",
    "time": 1672158528154,
    "velocity": 81,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66616,
        45.40879
    ]
},
{
    "routeDataPointId": "562",
    "segmentId": "1",
    "time": 1672158528164,
    "velocity": 82,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66625,
        45.40878
    ]
},
{
    "routeDataPointId": "563",
    "segmentId": "1",
    "time": 1672158528174,
    "velocity": 83,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66633,
        45.40877
    ]
},
{
    "routeDataPointId": "564",
    "segmentId": "1",
    "time": 1672158528184,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66636,
        45.40877
    ]
},
{
    "routeDataPointId": "565",
    "segmentId": "1",
    "time": 1672158528194,
    "velocity": 85,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66645,
        45.40875
    ]
},
{
    "routeDataPointId": "566",
    "segmentId": "1",
    "time": 1672158528204,
    "velocity": 86,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66656,
        45.40873
    ]
},
{
    "routeDataPointId": "567",
    "segmentId": "1",
    "time": 1672158528214,
    "velocity": 87,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66668,
        45.40871
    ]
},
{
    "routeDataPointId": "568",
    "segmentId": "1",
    "time": 1672158528224,
    "velocity": 88,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66674,
        45.40869
    ]
},
{
    "routeDataPointId": "569",
    "segmentId": "1",
    "time": 1672158528234,
    "velocity": 89,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66683,
        45.40867
    ]
},
{
    "routeDataPointId": "570",
    "segmentId": "1",
    "time": 1672158528244,
    "velocity": 90,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66684,
        45.40867
    ]
},
{
    "routeDataPointId": "571",
    "segmentId": "1",
    "time": 1672158528254,
    "velocity": 91,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66693,
        45.40865
    ]
},
{
    "routeDataPointId": "572",
    "segmentId": "1",
    "time": 1672158528264,
    "velocity": 92,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66698,
        45.40864
    ]
},
{
    "routeDataPointId": "573",
    "segmentId": "1",
    "time": 1672158528274,
    "velocity": 93,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66703,
        45.40862
    ]
},
{
    "routeDataPointId": "574",
    "segmentId": "1",
    "time": 1672158528284,
    "velocity": 94,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66708,
        45.40859
    ]
},
{
    "routeDataPointId": "575",
    "segmentId": "1",
    "time": 1672158528294,
    "velocity": 95,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66711,
        45.40856
    ]
},
{
    "routeDataPointId": "576",
    "segmentId": "1",
    "time": 1672158528304,
    "velocity": 96,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66714,
        45.40853
    ]
},
{
    "routeDataPointId": "577",
    "segmentId": "1",
    "time": 1672158528314,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66715,
        45.40848
    ]
},
{
    "routeDataPointId": "578",
    "segmentId": "1",
    "time": 1672158528324,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66715,
        45.40844
    ]
},
{
    "routeDataPointId": "579",
    "segmentId": "1",
    "time": 1672158528334,
    "velocity": 99,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66714,
        45.40837
    ]
},
{
    "routeDataPointId": "580",
    "segmentId": "1",
    "time": 1672158528344,
    "velocity": 100,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66713,
        45.40833
    ]
},
{
    "routeDataPointId": "581",
    "segmentId": "1",
    "time": 1672158528354,
    "velocity": 101,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66711,
        45.4083
    ]
},
{
    "routeDataPointId": "582",
    "segmentId": "1",
    "time": 1672158528364,
    "velocity": 102,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66708,
        45.40827
    ]
},
{
    "routeDataPointId": "583",
    "segmentId": "1",
    "time": 1672158528374,
    "velocity": 103,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66706,
        45.40809
    ]
},
{
    "routeDataPointId": "584",
    "segmentId": "1",
    "time": 1672158528384,
    "velocity": 104,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66703,
        45.40778
    ]
},
{
    "routeDataPointId": "585",
    "segmentId": "1",
    "time": 1672158528394,
    "velocity": 105,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66703,
        45.40754
    ]
},
{
    "routeDataPointId": "586",
    "segmentId": "1",
    "time": 1672158528404,
    "velocity": 106,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66703,
        45.40749
    ]
},
{
    "routeDataPointId": "587",
    "segmentId": "1",
    "time": 1672158528414,
    "velocity": 107,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66702,
        45.40732
    ]
},
{
    "routeDataPointId": "588",
    "segmentId": "1",
    "time": 1672158528424,
    "velocity": 108,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66702,
        45.40722
    ]
},
{
    "routeDataPointId": "589",
    "segmentId": "1",
    "time": 1672158528434,
    "velocity": 109,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.667,
        45.4068
    ]
},
{
    "routeDataPointId": "590",
    "segmentId": "1",
    "time": 1672158528444,
    "velocity": 110,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.667,
        45.4061
    ]
},
{
    "routeDataPointId": "591",
    "segmentId": "1",
    "time": 1672158528454,
    "velocity": 111,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.667,
        45.40607
    ]
},
{
    "routeDataPointId": "592",
    "segmentId": "1",
    "time": 1672158528464,
    "velocity": 112,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66699,
        45.40583
    ]
},
{
    "routeDataPointId": "593",
    "segmentId": "1",
    "time": 1672158528474,
    "velocity": 113,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66698,
        45.40561
    ]
},
{
    "routeDataPointId": "594",
    "segmentId": "1",
    "time": 1672158528484,
    "velocity": 114,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66697,
        45.40545
    ]
},
{
    "routeDataPointId": "595",
    "segmentId": "1",
    "time": 1672158528494,
    "velocity": 115,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66696,
        45.40541
    ]
},
{
    "routeDataPointId": "596",
    "segmentId": "1",
    "time": 1672158528504,
    "velocity": 116,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66692,
        45.40521
    ]
},
{
    "routeDataPointId": "597",
    "segmentId": "1",
    "time": 1672158528514,
    "velocity": 117,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66692,
        45.4052
    ]
},
{
    "routeDataPointId": "598",
    "segmentId": "1",
    "time": 1672158528524,
    "velocity": 118,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66691,
        45.40519
    ]
},
{
    "routeDataPointId": "599",
    "segmentId": "1",
    "time": 1672158528534,
    "velocity": 119,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66689,
        45.40511
    ]
},
{
    "routeDataPointId": "600",
    "segmentId": "1",
    "time": 1672158528544,
    "velocity": 120,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66686,
        45.40501
    ]
},
{
    "routeDataPointId": "601",
    "segmentId": "1",
    "time": 1672158528554,
    "velocity": 121,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66685,
        45.40501
    ]
},
{
    "routeDataPointId": "602",
    "segmentId": "1",
    "time": 1672158528564,
    "velocity": 122,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66679,
        45.40488
    ]
},
{
    "routeDataPointId": "603",
    "segmentId": "1",
    "time": 1672158528574,
    "velocity": 123,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66669,
        45.40473
    ]
},
{
    "routeDataPointId": "604",
    "segmentId": "1",
    "time": 1672158528584,
    "velocity": 124,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66655,
        45.40456
    ]
},
{
    "routeDataPointId": "605",
    "segmentId": "1",
    "time": 1672158528594,
    "velocity": 125,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66646,
        45.40448
    ]
},
{
    "routeDataPointId": "606",
    "segmentId": "1",
    "time": 1672158528604,
    "velocity": 126,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66637,
        45.4044
    ]
},
{
    "routeDataPointId": "607",
    "segmentId": "1",
    "time": 1672158528614,
    "velocity": 127,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6662,
        45.40427
    ]
},
{
    "routeDataPointId": "608",
    "segmentId": "1",
    "time": 1672158528624,
    "velocity": 128,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.666,
        45.40415
    ]
},
{
    "routeDataPointId": "609",
    "segmentId": "1",
    "time": 1672158528634,
    "velocity": 129,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66589,
        45.40408
    ]
},
{
    "routeDataPointId": "610",
    "segmentId": "1",
    "time": 1672158528644,
    "velocity": 130,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66579,
        45.40404
    ]
},
{
    "routeDataPointId": "611",
    "segmentId": "1",
    "time": 1672158528654,
    "velocity": 131,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66558,
        45.40395
    ]
},
{
    "routeDataPointId": "612",
    "segmentId": "1",
    "time": 1672158528664,
    "velocity": 132,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66543,
        45.40389
    ]
},
{
    "routeDataPointId": "613",
    "segmentId": "1",
    "time": 1672158528674,
    "velocity": 133,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66535,
        45.40387
    ]
},
{
    "routeDataPointId": "614",
    "segmentId": "1",
    "time": 1672158528684,
    "velocity": 134,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66523,
        45.40383
    ]
},
{
    "routeDataPointId": "615",
    "segmentId": "1",
    "time": 1672158528694,
    "velocity": 135,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66511,
        45.40381
    ]
},
{
    "routeDataPointId": "616",
    "segmentId": "1",
    "time": 1672158528704,
    "velocity": 136,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6651,
        45.40381
    ]
},
{
    "routeDataPointId": "617",
    "segmentId": "1",
    "time": 1672158528714,
    "velocity": 137,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66487,
        45.40375
    ]
},
{
    "routeDataPointId": "618",
    "segmentId": "1",
    "time": 1672158528724,
    "velocity": 138,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66486,
        45.40375
    ]
},
{
    "routeDataPointId": "619",
    "segmentId": "1",
    "time": 1672158528734,
    "velocity": 139,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6647,
        45.40373
    ]
},
{
    "routeDataPointId": "620",
    "segmentId": "1",
    "time": 1672158528744,
    "velocity": 140,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66444,
        45.40371
    ]
},
{
    "routeDataPointId": "621",
    "segmentId": "1",
    "time": 1672158528754,
    "velocity": 141,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66436,
        45.40371
    ]
},
{
    "routeDataPointId": "622",
    "segmentId": "1",
    "time": 1672158528764,
    "velocity": 142,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66421,
        45.4037
    ]
},
{
    "routeDataPointId": "623",
    "segmentId": "1",
    "time": 1672158528774,
    "velocity": 143,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6641,
        45.4037
    ]
},
{
    "routeDataPointId": "624",
    "segmentId": "1",
    "time": 1672158528784,
    "velocity": 144,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66393,
        45.4037
    ]
},
{
    "routeDataPointId": "625",
    "segmentId": "1",
    "time": 1672158528794,
    "velocity": 145,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6638,
        45.40371
    ]
},
{
    "routeDataPointId": "626",
    "segmentId": "1",
    "time": 1672158528804,
    "velocity": 146,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66352,
        45.40372
    ]
},
{
    "routeDataPointId": "627",
    "segmentId": "1",
    "time": 1672158528814,
    "velocity": 147,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66325,
        45.40373
    ]
},
{
    "routeDataPointId": "628",
    "segmentId": "1",
    "time": 1672158528824,
    "velocity": 148,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66314,
        45.40373
    ]
},
{
    "routeDataPointId": "629",
    "segmentId": "1",
    "time": 1672158528834,
    "velocity": 149,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66298,
        45.40373
    ]
},
{
    "routeDataPointId": "630",
    "segmentId": "1",
    "time": 1672158528844,
    "velocity": 150,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66273,
        45.40374
    ]
},
{
    "routeDataPointId": "631",
    "segmentId": "1",
    "time": 1672158528854,
    "velocity": 151,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66221,
        45.40374
    ]
},
{
    "routeDataPointId": "632",
    "segmentId": "1",
    "time": 1672158528864,
    "velocity": 152,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6621,
        45.40374
    ]
},
{
    "routeDataPointId": "633",
    "segmentId": "1",
    "time": 1672158528874,
    "velocity": 153,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66206,
        45.40374
    ]
},
{
    "routeDataPointId": "634",
    "segmentId": "1",
    "time": 1672158528884,
    "velocity": 154,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66201,
        45.40371
    ]
},
{
    "routeDataPointId": "635",
    "segmentId": "1",
    "time": 1672158528894,
    "velocity": 155,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66198,
        45.40369
    ]
},
{
    "routeDataPointId": "636",
    "segmentId": "1",
    "time": 1672158528904,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66197,
        45.40369
    ]
},
{
    "routeDataPointId": "637",
    "segmentId": "1",
    "time": 1672158528914,
    "velocity": 157,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "foo bar",
    "coordinates": [
        -75.66194,
        45.40369
    ]
},
{
    "routeDataPointId": "638",
    "segmentId": "1",
    "time": 1672158528924,
    "velocity": 158,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66191,
        45.40366
    ]
},
{
    "routeDataPointId": "639",
    "segmentId": "1",
    "time": 1672158528934,
    "velocity": 159,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66188,
        45.40366
    ]
},
{
    "routeDataPointId": "640",
    "segmentId": "1",
    "time": 1672158528944,
    "velocity": 0,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66186,
        45.40365
    ]
},
{
    "routeDataPointId": "641",
    "segmentId": "1",
    "time": 1672158528954,
    "velocity": 1,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66157,
        45.4036
    ]
},
{
    "routeDataPointId": "642",
    "segmentId": "1",
    "time": 1672158528964,
    "velocity": 2,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66147,
        45.40357
    ]
},
{
    "routeDataPointId": "643",
    "segmentId": "1",
    "time": 1672158528974,
    "velocity": 3,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66138,
        45.40352
    ]
},
{
    "routeDataPointId": "644",
    "segmentId": "1",
    "time": 1672158528984,
    "velocity": 4,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66131,
        45.40348
    ]
},
{
    "routeDataPointId": "645",
    "segmentId": "1",
    "time": 1672158528994,
    "velocity": 5,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66136,
        45.4034
    ]
},
{
    "routeDataPointId": "646",
    "segmentId": "1",
    "time": 1672158529004,
    "velocity": 6,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66143,
        45.40328
    ]
},
{
    "routeDataPointId": "647",
    "segmentId": "1",
    "time": 1672158529014,
    "velocity": 7,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66153,
        45.40311
    ]
},
{
    "routeDataPointId": "648",
    "segmentId": "1",
    "time": 1672158529024,
    "velocity": 8,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66165,
        45.40292
    ]
},
{
    "routeDataPointId": "649",
    "segmentId": "1",
    "time": 1672158529034,
    "velocity": 9,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66184,
        45.40261
    ]
},
{
    "routeDataPointId": "650",
    "segmentId": "1",
    "time": 1672158529044,
    "velocity": 10,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66192,
        45.40247
    ]
},
{
    "routeDataPointId": "651",
    "segmentId": "1",
    "time": 1672158529054,
    "velocity": 11,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66196,
        45.40241
    ]
},
{
    "routeDataPointId": "652",
    "segmentId": "1",
    "time": 1672158529064,
    "velocity": 12,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6621,
        45.40218
    ]
},
{
    "routeDataPointId": "653",
    "segmentId": "1",
    "time": 1672158529074,
    "velocity": 13,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66217,
        45.40206
    ]
},
{
    "routeDataPointId": "654",
    "segmentId": "1",
    "time": 1672158529084,
    "velocity": 14,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66221,
        45.40196
    ]
},
{
    "routeDataPointId": "655",
    "segmentId": "1",
    "time": 1672158529094,
    "velocity": 15,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66224,
        45.40189
    ]
},
{
    "routeDataPointId": "656",
    "segmentId": "1",
    "time": 1672158529104,
    "velocity": 16,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66227,
        45.40182
    ]
},
{
    "routeDataPointId": "657",
    "segmentId": "1",
    "time": 1672158529114,
    "velocity": 17,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66229,
        45.40174
    ]
},
{
    "routeDataPointId": "658",
    "segmentId": "1",
    "time": 1672158529124,
    "velocity": 18,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66231,
        45.40166
    ]
},
{
    "routeDataPointId": "659",
    "segmentId": "1",
    "time": 1672158529134,
    "velocity": 19,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66231,
        45.40165
    ]
},
{
    "routeDataPointId": "660",
    "segmentId": "1",
    "time": 1672158529144,
    "velocity": 20,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66232,
        45.40156
    ]
},
{
    "routeDataPointId": "661",
    "segmentId": "1",
    "time": 1672158529154,
    "velocity": 21,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66233,
        45.40148
    ]
},
{
    "routeDataPointId": "662",
    "segmentId": "1",
    "time": 1672158529164,
    "velocity": 22,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66233,
        45.40143
    ]
},
{
    "routeDataPointId": "663",
    "segmentId": "1",
    "time": 1672158529174,
    "velocity": 23,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66232,
        45.40129
    ]
},
{
    "routeDataPointId": "664",
    "segmentId": "1",
    "time": 1672158529184,
    "velocity": 24,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66231,
        45.40116
    ]
},
{
    "routeDataPointId": "665",
    "segmentId": "1",
    "time": 1672158529194,
    "velocity": 25,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66229,
        45.401
    ]
},
{
    "routeDataPointId": "666",
    "segmentId": "1",
    "time": 1672158529204,
    "velocity": 26,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66226,
        45.40082
    ]
},
{
    "routeDataPointId": "667",
    "segmentId": "1",
    "time": 1672158529214,
    "velocity": 27,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66225,
        45.40076
    ]
},
{
    "routeDataPointId": "668",
    "segmentId": "1",
    "time": 1672158529224,
    "velocity": 28,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66218,
        45.40051
    ]
},
{
    "routeDataPointId": "669",
    "segmentId": "1",
    "time": 1672158529234,
    "velocity": 29,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66213,
        45.40031
    ]
},
{
    "routeDataPointId": "670",
    "segmentId": "1",
    "time": 1672158529244,
    "velocity": 30,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66212,
        45.40028
    ]
},
{
    "routeDataPointId": "671",
    "segmentId": "1",
    "time": 1672158529254,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6621,
        45.40022
    ]
},
{
    "routeDataPointId": "672",
    "segmentId": "1",
    "time": 1672158529264,
    "velocity": 32,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66205,
        45.40005
    ]
},
{
    "routeDataPointId": "673",
    "segmentId": "1",
    "time": 1672158529274,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66199,
        45.39984
    ]
},
{
    "routeDataPointId": "674",
    "segmentId": "1",
    "time": 1672158529284,
    "velocity": 34,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66193,
        45.39958
    ]
},
{
    "routeDataPointId": "675",
    "segmentId": "1",
    "time": 1672158529294,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66191,
        45.39953
    ]
},
{
    "routeDataPointId": "676",
    "segmentId": "1",
    "time": 1672158529304,
    "velocity": 36,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66181,
        45.39923
    ]
},
{
    "routeDataPointId": "677",
    "segmentId": "1",
    "time": 1672158529314,
    "velocity": 37,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66176,
        45.39906
    ]
},
{
    "routeDataPointId": "678",
    "segmentId": "1",
    "time": 1672158529324,
    "velocity": 38,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66175,
        45.39903
    ]
},
{
    "routeDataPointId": "679",
    "segmentId": "1",
    "time": 1672158529334,
    "velocity": 39,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66172,
        45.39891
    ]
},
{
    "routeDataPointId": "680",
    "segmentId": "1",
    "time": 1672158529344,
    "velocity": 40,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6617,
        45.39881
    ]
},
{
    "routeDataPointId": "681",
    "segmentId": "1",
    "time": 1672158529354,
    "velocity": 41,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66169,
        45.39873
    ]
},
{
    "routeDataPointId": "682",
    "segmentId": "1",
    "time": 1672158529364,
    "velocity": 42,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66168,
        45.39866
    ]
},
{
    "routeDataPointId": "683",
    "segmentId": "1",
    "time": 1672158529374,
    "velocity": 43,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66168,
        45.39859
    ]
},
{
    "routeDataPointId": "684",
    "segmentId": "1",
    "time": 1672158529384,
    "velocity": 44,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66167,
        45.39852
    ]
},
{
    "routeDataPointId": "685",
    "segmentId": "1",
    "time": 1672158529394,
    "velocity": 45,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66123,
        45.39849
    ]
},
{
    "routeDataPointId": "686",
    "segmentId": "1",
    "time": 1672158529404,
    "velocity": 46,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66064,
        45.39847
    ]
},
{
    "routeDataPointId": "687",
    "segmentId": "1",
    "time": 1672158529414,
    "velocity": 47,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66051,
        45.39847
    ]
},
{
    "routeDataPointId": "688",
    "segmentId": "1",
    "time": 1672158529424,
    "velocity": 48,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66024,
        45.39849
    ]
},
{
    "routeDataPointId": "689",
    "segmentId": "1",
    "time": 1672158529434,
    "velocity": 49,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66015,
        45.3985
    ]
},
{
    "routeDataPointId": "690",
    "segmentId": "1",
    "time": 1672158529444,
    "velocity": 50,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65995,
        45.39854
    ]
},
{
    "routeDataPointId": "691",
    "segmentId": "1",
    "time": 1672158529454,
    "velocity": 51,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65979,
        45.39855
    ]
},
{
    "routeDataPointId": "692",
    "segmentId": "1",
    "time": 1672158529464,
    "velocity": 52,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65932,
        45.39859
    ]
},
{
    "routeDataPointId": "693",
    "segmentId": "1",
    "time": 1672158529474,
    "velocity": 53,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65916,
        45.3986
    ]
},
{
    "routeDataPointId": "694",
    "segmentId": "1",
    "time": 1672158529484,
    "velocity": 54,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65873,
        45.39863
    ]
},
{
    "routeDataPointId": "695",
    "segmentId": "1",
    "time": 1672158529494,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65816,
        45.39866
    ]
},
{
    "routeDataPointId": "696",
    "segmentId": "1",
    "time": 1672158529504,
    "velocity": 56,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65804,
        45.39867
    ]
},
{
    "routeDataPointId": "697",
    "segmentId": "1",
    "time": 1672158529514,
    "velocity": 57,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65723,
        45.39872
    ]
},
{
    "routeDataPointId": "698",
    "segmentId": "1",
    "time": 1672158529524,
    "velocity": 58,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65688,
        45.39874
    ]
},
{
    "routeDataPointId": "699",
    "segmentId": "1",
    "time": 1672158529534,
    "velocity": 59,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65648,
        45.39877
    ]
},
{
    "routeDataPointId": "700",
    "segmentId": "1",
    "time": 1672158529544,
    "velocity": 60,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65612,
        45.39879
    ]
},
{
    "routeDataPointId": "701",
    "segmentId": "1",
    "time": 1672158529554,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65572,
        45.39882
    ]
},
{
    "routeDataPointId": "702",
    "segmentId": "1",
    "time": 1672158529564,
    "velocity": 62,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65558,
        45.39883
    ]
},
{
    "routeDataPointId": "703",
    "segmentId": "1",
    "time": 1672158529574,
    "velocity": 63,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65536,
        45.39885
    ]
},
{
    "routeDataPointId": "704",
    "segmentId": "1",
    "time": 1672158529584,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65531,
        45.39885
    ]
},
{
    "routeDataPointId": "705",
    "segmentId": "1",
    "time": 1672158529594,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65437,
        45.39892
    ]
},
{
    "routeDataPointId": "706",
    "segmentId": "1",
    "time": 1672158529604,
    "velocity": 66,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65409,
        45.39893
    ]
},
{
    "routeDataPointId": "707",
    "segmentId": "1",
    "time": 1672158529614,
    "velocity": 67,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65362,
        45.39897
    ]
},
{
    "routeDataPointId": "708",
    "segmentId": "1",
    "time": 1672158529624,
    "velocity": 68,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65292,
        45.39902
    ]
},
{
    "routeDataPointId": "709",
    "segmentId": "1",
    "time": 1672158529634,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6528,
        45.39903
    ]
},
{
    "routeDataPointId": "710",
    "segmentId": "1",
    "time": 1672158529644,
    "velocity": 70,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65115,
        45.39914
    ]
},
{
    "routeDataPointId": "711",
    "segmentId": "1",
    "time": 1672158529654,
    "velocity": 71,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.64983,
        45.39924
    ]
},
{
    "routeDataPointId": "712",
    "segmentId": "1",
    "time": 1672158529664,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.64966,
        45.39925
    ]
},
{
    "routeDataPointId": "713",
    "segmentId": "1",
    "time": 1672158529674,
    "velocity": 73,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.64862,
        45.39933
    ]
},
{
    "routeDataPointId": "714",
    "segmentId": "1",
    "time": 1672158529684,
    "velocity": 74,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.64833,
        45.39935
    ]
},
{
    "routeDataPointId": "715",
    "segmentId": "1",
    "time": 1672158529694,
    "velocity": 75,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.64794,
        45.39932
    ]
},
{
    "routeDataPointId": "716",
    "segmentId": "1",
    "time": 1672158529704,
    "velocity": 76,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.64771,
        45.39933
    ]
},
{
    "routeDataPointId": "717",
    "segmentId": "1",
    "time": 1672158529714,
    "velocity": 77,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.64772,
        45.39943
    ]
},
{
    "routeDataPointId": "718",
    "segmentId": "1",
    "time": 1672158529724,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.64779,
        45.39968
    ]
},
{
    "routeDataPointId": "719",
    "segmentId": "1",
    "time": 1672158529734,
    "velocity": 79,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.64785,
        45.39991
    ]
},
{
    "routeDataPointId": "720",
    "segmentId": "1",
    "time": 1672158529744,
    "velocity": 80,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.64787,
        45.39998
    ]
},
{
    "routeDataPointId": "721",
    "segmentId": "1",
    "time": 1672158529754,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.64788,
        45.4
    ]
},
{
    "routeDataPointId": "722",
    "segmentId": "1",
    "time": 1672158529764,
    "velocity": 82,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.64789,
        45.40002
    ]
},
{
    "routeDataPointId": "723",
    "segmentId": "1",
    "time": 1672158529774,
    "velocity": 83,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.64795,
        45.40006
    ]
},
{
    "routeDataPointId": "724",
    "segmentId": "1",
    "time": 1672158529784,
    "velocity": 84,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.64796,
        45.4002
    ]
},
{
    "routeDataPointId": "725",
    "segmentId": "1",
    "time": 1672158529794,
    "velocity": 85,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.64777,
        45.40032
    ]
},
{
    "routeDataPointId": "726",
    "segmentId": "1",
    "time": 1672158529804,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.64771,
        45.40036
    ]
}
]

export const dpsOttToTo: RouteMeasurementDataPoint[] = 
[
{
    "routeDataPointId": "0",
    "segmentId": "1",
    "time": 1672158522546,
    "velocity": 0,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6508,
        45.39982
    ]
},
{
    "routeDataPointId": "1",
    "segmentId": "1",
    "time": 1672158522556,
    "velocity": 1,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65077,
        45.39962
    ]
},
{
    "routeDataPointId": "2",
    "segmentId": "1",
    "time": 1672158522566,
    "velocity": 2,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65299,
        45.39946
    ]
},
{
    "routeDataPointId": "3",
    "segmentId": "1",
    "time": 1672158522576,
    "velocity": 3,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65295,
        45.3992
    ]
},
{
    "routeDataPointId": "4",
    "segmentId": "1",
    "time": 1672158522586,
    "velocity": 4,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65295,
        45.39918
    ]
},
{
    "routeDataPointId": "5",
    "segmentId": "1",
    "time": 1672158522596,
    "velocity": 5,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65292,
        45.39902
    ]
},
{
    "routeDataPointId": "6",
    "segmentId": "1",
    "time": 1672158522606,
    "velocity": 6,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65409,
        45.39893
    ]
},
{
    "routeDataPointId": "7",
    "segmentId": "1",
    "time": 1672158522616,
    "velocity": 7,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65437,
        45.39892
    ]
},
{
    "routeDataPointId": "8",
    "segmentId": "1",
    "time": 1672158522626,
    "velocity": 8,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65531,
        45.39885
    ]
},
{
    "routeDataPointId": "9",
    "segmentId": "1",
    "time": 1672158522636,
    "velocity": 9,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65536,
        45.39885
    ]
},
{
    "routeDataPointId": "10",
    "segmentId": "1",
    "time": 1672158522646,
    "velocity": 10,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "foo bar",
    "coordinates": [
        -75.65612,
        45.39879
    ]
},
{
    "routeDataPointId": "11",
    "segmentId": "1",
    "time": 1672158522656,
    "velocity": 11,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65932,
        45.39859
    ]
},
{
    "routeDataPointId": "12",
    "segmentId": "1",
    "time": 1672158522666,
    "velocity": 12,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65995,
        45.39854
    ]
},
{
    "routeDataPointId": "13",
    "segmentId": "1",
    "time": 1672158522676,
    "velocity": 13,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66022,
        45.39855
    ]
},
{
    "routeDataPointId": "14",
    "segmentId": "1",
    "time": 1672158522686,
    "velocity": 14,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66039,
        45.39855
    ]
},
{
    "routeDataPointId": "15",
    "segmentId": "1",
    "time": 1672158522696,
    "velocity": 15,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66047,
        45.39854
    ]
},
{
    "routeDataPointId": "16",
    "segmentId": "1",
    "time": 1672158522706,
    "velocity": 16,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66049,
        45.39854
    ]
},
{
    "routeDataPointId": "17",
    "segmentId": "1",
    "time": 1672158522716,
    "velocity": 17,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66066,
        45.39856
    ]
},
{
    "routeDataPointId": "18",
    "segmentId": "1",
    "time": 1672158522726,
    "velocity": 18,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66076,
        45.39856
    ]
},
{
    "routeDataPointId": "19",
    "segmentId": "1",
    "time": 1672158522736,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66126,
        45.39862
    ]
},
{
    "routeDataPointId": "20",
    "segmentId": "1",
    "time": 1672158522746,
    "velocity": 20,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6615,
        45.39874
    ]
},
{
    "routeDataPointId": "21",
    "segmentId": "1",
    "time": 1672158522756,
    "velocity": 21,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66154,
        45.39877
    ]
},
{
    "routeDataPointId": "22",
    "segmentId": "1",
    "time": 1672158522766,
    "velocity": 22,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66175,
        45.39903
    ]
},
{
    "routeDataPointId": "23",
    "segmentId": "1",
    "time": 1672158522776,
    "velocity": 23,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66191,
        45.39953
    ]
},
{
    "routeDataPointId": "24",
    "segmentId": "1",
    "time": 1672158522786,
    "velocity": 24,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66193,
        45.39958
    ]
},
{
    "routeDataPointId": "25",
    "segmentId": "1",
    "time": 1672158522796,
    "velocity": 25,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66199,
        45.39984
    ]
},
{
    "routeDataPointId": "26",
    "segmentId": "1",
    "time": 1672158522806,
    "velocity": 26,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6621,
        45.40022
    ]
},
{
    "routeDataPointId": "27",
    "segmentId": "1",
    "time": 1672158522816,
    "velocity": 27,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66213,
        45.40031
    ]
},
{
    "routeDataPointId": "28",
    "segmentId": "1",
    "time": 1672158522826,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66225,
        45.40076
    ]
},
{
    "routeDataPointId": "29",
    "segmentId": "1",
    "time": 1672158522836,
    "velocity": 29,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66229,
        45.401
    ]
},
{
    "routeDataPointId": "30",
    "segmentId": "1",
    "time": 1672158522846,
    "velocity": 30,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66231,
        45.40116
    ]
},
{
    "routeDataPointId": "31",
    "segmentId": "1",
    "time": 1672158522856,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66233,
        45.40143
    ]
},
{
    "routeDataPointId": "32",
    "segmentId": "1",
    "time": 1672158522866,
    "velocity": 32,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66233,
        45.40148
    ]
},
{
    "routeDataPointId": "33",
    "segmentId": "1",
    "time": 1672158522876,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66231,
        45.40165
    ]
},
{
    "routeDataPointId": "34",
    "segmentId": "1",
    "time": 1672158522886,
    "velocity": 34,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66231,
        45.40166
    ]
},
{
    "routeDataPointId": "35",
    "segmentId": "1",
    "time": 1672158522896,
    "velocity": 35,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66227,
        45.40182
    ]
},
{
    "routeDataPointId": "36",
    "segmentId": "1",
    "time": 1672158522906,
    "velocity": 36,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66217,
        45.40206
    ]
},
{
    "routeDataPointId": "37",
    "segmentId": "1",
    "time": 1672158522916,
    "velocity": 37,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66196,
        45.40241
    ]
},
{
    "routeDataPointId": "38",
    "segmentId": "1",
    "time": 1672158522926,
    "velocity": 38,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66192,
        45.40247
    ]
},
{
    "routeDataPointId": "39",
    "segmentId": "1",
    "time": 1672158522936,
    "velocity": 39,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66184,
        45.40261
    ]
},
{
    "routeDataPointId": "40",
    "segmentId": "1",
    "time": 1672158522946,
    "velocity": 40,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66153,
        45.40311
    ]
},
{
    "routeDataPointId": "41",
    "segmentId": "1",
    "time": 1672158522956,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66124,
        45.4036
    ]
},
{
    "routeDataPointId": "42",
    "segmentId": "1",
    "time": 1672158522966,
    "velocity": 42,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66099,
        45.40395
    ]
},
{
    "routeDataPointId": "43",
    "segmentId": "1",
    "time": 1672158522976,
    "velocity": 43,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6607,
        45.40443
    ]
},
{
    "routeDataPointId": "44",
    "segmentId": "1",
    "time": 1672158522986,
    "velocity": 44,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66064,
        45.40451
    ]
},
{
    "routeDataPointId": "45",
    "segmentId": "1",
    "time": 1672158522996,
    "velocity": 45,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66043,
        45.40484
    ]
},
{
    "routeDataPointId": "46",
    "segmentId": "1",
    "time": 1672158523006,
    "velocity": 46,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6602,
        45.40526
    ]
},
{
    "routeDataPointId": "47",
    "segmentId": "1",
    "time": 1672158523016,
    "velocity": 47,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65895,
        45.40728
    ]
},
{
    "routeDataPointId": "48",
    "segmentId": "1",
    "time": 1672158523026,
    "velocity": 48,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65893,
        45.40734
    ]
},
{
    "routeDataPointId": "49",
    "segmentId": "1",
    "time": 1672158523036,
    "velocity": 49,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6586,
        45.40784
    ]
},
{
    "routeDataPointId": "50",
    "segmentId": "1",
    "time": 1672158523046,
    "velocity": 50,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65855,
        45.40794
    ]
},
{
    "routeDataPointId": "51",
    "segmentId": "1",
    "time": 1672158523056,
    "velocity": 51,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65846,
        45.40806
    ]
},
{
    "routeDataPointId": "52",
    "segmentId": "1",
    "time": 1672158523066,
    "velocity": 52,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65812,
        45.4086
    ]
},
{
    "routeDataPointId": "53",
    "segmentId": "1",
    "time": 1672158523076,
    "velocity": 53,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65762,
        45.40954
    ]
},
{
    "routeDataPointId": "54",
    "segmentId": "1",
    "time": 1672158523086,
    "velocity": 54,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65733,
        45.41004
    ]
},
{
    "routeDataPointId": "55",
    "segmentId": "1",
    "time": 1672158523096,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65726,
        45.41008
    ]
},
{
    "routeDataPointId": "56",
    "segmentId": "1",
    "time": 1672158523106,
    "velocity": 56,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65722,
        45.41012
    ]
},
{
    "routeDataPointId": "57",
    "segmentId": "1",
    "time": 1672158523116,
    "velocity": 57,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65699,
        45.41045
    ]
},
{
    "routeDataPointId": "58",
    "segmentId": "1",
    "time": 1672158523126,
    "velocity": 58,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65693,
        45.41051
    ]
},
{
    "routeDataPointId": "59",
    "segmentId": "1",
    "time": 1672158523136,
    "velocity": 59,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65688,
        45.41057
    ]
},
{
    "routeDataPointId": "60",
    "segmentId": "1",
    "time": 1672158523146,
    "velocity": 60,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65677,
        45.41069
    ]
},
{
    "routeDataPointId": "61",
    "segmentId": "1",
    "time": 1672158523156,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65657,
        45.41087
    ]
},
{
    "routeDataPointId": "62",
    "segmentId": "1",
    "time": 1672158523166,
    "velocity": 62,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65595,
        45.41131
    ]
},
{
    "routeDataPointId": "63",
    "segmentId": "1",
    "time": 1672158523176,
    "velocity": 63,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65587,
        45.41136
    ]
},
{
    "routeDataPointId": "64",
    "segmentId": "1",
    "time": 1672158523186,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6558,
        45.41142
    ]
},
{
    "routeDataPointId": "65",
    "segmentId": "1",
    "time": 1672158523196,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65575,
        45.41148
    ]
},
{
    "routeDataPointId": "66",
    "segmentId": "1",
    "time": 1672158523206,
    "velocity": 66,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65563,
        45.41165
    ]
},
{
    "routeDataPointId": "67",
    "segmentId": "1",
    "time": 1672158523216,
    "velocity": 67,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65561,
        45.4117
    ]
},
{
    "routeDataPointId": "68",
    "segmentId": "1",
    "time": 1672158523226,
    "velocity": 68,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65558,
        45.41187
    ]
},
{
    "routeDataPointId": "69",
    "segmentId": "1",
    "time": 1672158523236,
    "velocity": 69,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65691,
        45.41204
    ]
},
{
    "routeDataPointId": "70",
    "segmentId": "1",
    "time": 1672158523246,
    "velocity": 70,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6572,
        45.41209
    ]
},
{
    "routeDataPointId": "71",
    "segmentId": "1",
    "time": 1672158523256,
    "velocity": 71,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65744,
        45.41216
    ]
},
{
    "routeDataPointId": "72",
    "segmentId": "1",
    "time": 1672158523266,
    "velocity": 72,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65756,
        45.4122
    ]
},
{
    "routeDataPointId": "73",
    "segmentId": "1",
    "time": 1672158523276,
    "velocity": 73,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65763,
        45.41223
    ]
},
{
    "routeDataPointId": "74",
    "segmentId": "1",
    "time": 1672158523286,
    "velocity": 74,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65766,
        45.41224
    ]
},
{
    "routeDataPointId": "75",
    "segmentId": "1",
    "time": 1672158523296,
    "velocity": 75,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6577,
        45.41226
    ]
},
{
    "routeDataPointId": "76",
    "segmentId": "1",
    "time": 1672158523306,
    "velocity": 76,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65775,
        45.41229
    ]
},
{
    "routeDataPointId": "77",
    "segmentId": "1",
    "time": 1672158523316,
    "velocity": 77,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65779,
        45.41232
    ]
},
{
    "routeDataPointId": "78",
    "segmentId": "1",
    "time": 1672158523326,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65783,
        45.41234
    ]
},
{
    "routeDataPointId": "79",
    "segmentId": "1",
    "time": 1672158523336,
    "velocity": 79,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65791,
        45.41242
    ]
},
{
    "routeDataPointId": "80",
    "segmentId": "1",
    "time": 1672158523346,
    "velocity": 80,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65794,
        45.41246
    ]
},
{
    "routeDataPointId": "81",
    "segmentId": "1",
    "time": 1672158523356,
    "velocity": 81,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65797,
        45.41252
    ]
},
{
    "routeDataPointId": "82",
    "segmentId": "1",
    "time": 1672158523366,
    "velocity": 82,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65802,
        45.41264
    ]
},
{
    "routeDataPointId": "83",
    "segmentId": "1",
    "time": 1672158523376,
    "velocity": 83,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65803,
        45.4127
    ]
},
{
    "routeDataPointId": "84",
    "segmentId": "1",
    "time": 1672158523386,
    "velocity": 84,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65803,
        45.41278
    ]
},
{
    "routeDataPointId": "85",
    "segmentId": "1",
    "time": 1672158523396,
    "velocity": 85,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65797,
        45.41287
    ]
},
{
    "routeDataPointId": "86",
    "segmentId": "1",
    "time": 1672158523406,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65762,
        45.4136
    ]
},
{
    "routeDataPointId": "87",
    "segmentId": "1",
    "time": 1672158523416,
    "velocity": 87,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65754,
        45.41381
    ]
},
{
    "routeDataPointId": "88",
    "segmentId": "1",
    "time": 1672158523426,
    "velocity": 88,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65717,
        45.4146
    ]
},
{
    "routeDataPointId": "89",
    "segmentId": "1",
    "time": 1672158523436,
    "velocity": 89,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6571,
        45.41473
    ]
},
{
    "routeDataPointId": "90",
    "segmentId": "1",
    "time": 1672158523446,
    "velocity": 90,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65686,
        45.41524
    ]
},
{
    "routeDataPointId": "91",
    "segmentId": "1",
    "time": 1672158523456,
    "velocity": 91,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65684,
        45.41529
    ]
},
{
    "routeDataPointId": "92",
    "segmentId": "1",
    "time": 1672158523466,
    "velocity": 92,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65676,
        45.41546
    ]
},
{
    "routeDataPointId": "93",
    "segmentId": "1",
    "time": 1672158523476,
    "velocity": 93,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65672,
        45.41553
    ]
},
{
    "routeDataPointId": "94",
    "segmentId": "1",
    "time": 1672158523486,
    "velocity": 94,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65671,
        45.41554
    ]
},
{
    "routeDataPointId": "95",
    "segmentId": "1",
    "time": 1672158523496,
    "velocity": 95,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65662,
        45.41579
    ]
},
{
    "routeDataPointId": "96",
    "segmentId": "1",
    "time": 1672158523506,
    "velocity": 96,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65653,
        45.41612
    ]
},
{
    "routeDataPointId": "97",
    "segmentId": "1",
    "time": 1672158523516,
    "velocity": 97,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6565,
        45.41627
    ]
},
{
    "routeDataPointId": "98",
    "segmentId": "1",
    "time": 1672158523526,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6565,
        45.41635
    ]
},
{
    "routeDataPointId": "99",
    "segmentId": "1",
    "time": 1672158523536,
    "velocity": 99,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65649,
        45.41644
    ]
},
{
    "routeDataPointId": "100",
    "segmentId": "1",
    "time": 1672158523546,
    "velocity": 100,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65649,
        45.41652
    ]
},
{
    "routeDataPointId": "101",
    "segmentId": "1",
    "time": 1672158523556,
    "velocity": 101,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6565,
        45.41662
    ]
},
{
    "routeDataPointId": "102",
    "segmentId": "1",
    "time": 1672158523566,
    "velocity": 102,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65651,
        45.41687
    ]
},
{
    "routeDataPointId": "103",
    "segmentId": "1",
    "time": 1672158523576,
    "velocity": 103,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65656,
        45.41764
    ]
},
{
    "routeDataPointId": "104",
    "segmentId": "1",
    "time": 1672158523586,
    "velocity": 104,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65656,
        45.41767
    ]
},
{
    "routeDataPointId": "105",
    "segmentId": "1",
    "time": 1672158523596,
    "velocity": 105,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65662,
        45.41846
    ]
},
{
    "routeDataPointId": "106",
    "segmentId": "1",
    "time": 1672158523606,
    "velocity": 106,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65662,
        45.41851
    ]
},
{
    "routeDataPointId": "107",
    "segmentId": "1",
    "time": 1672158523616,
    "velocity": 107,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65663,
        45.41857
    ]
},
{
    "routeDataPointId": "108",
    "segmentId": "1",
    "time": 1672158523626,
    "velocity": 108,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65664,
        45.41876
    ]
},
{
    "routeDataPointId": "109",
    "segmentId": "1",
    "time": 1672158523636,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65666,
        45.41883
    ]
},
{
    "routeDataPointId": "110",
    "segmentId": "1",
    "time": 1672158523646,
    "velocity": 110,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65659,
        45.41892
    ]
},
{
    "routeDataPointId": "111",
    "segmentId": "1",
    "time": 1672158523656,
    "velocity": 111,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65658,
        45.41894
    ]
},
{
    "routeDataPointId": "112",
    "segmentId": "1",
    "time": 1672158523666,
    "velocity": 112,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65656,
        45.419
    ]
},
{
    "routeDataPointId": "113",
    "segmentId": "1",
    "time": 1672158523676,
    "velocity": 113,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65652,
        45.41908
    ]
},
{
    "routeDataPointId": "114",
    "segmentId": "1",
    "time": 1672158523686,
    "velocity": 114,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6565,
        45.4191
    ]
},
{
    "routeDataPointId": "115",
    "segmentId": "1",
    "time": 1672158523696,
    "velocity": 115,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65648,
        45.41913
    ]
},
{
    "routeDataPointId": "116",
    "segmentId": "1",
    "time": 1672158523706,
    "velocity": 116,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65646,
        45.41915
    ]
},
{
    "routeDataPointId": "117",
    "segmentId": "1",
    "time": 1672158523716,
    "velocity": 117,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65644,
        45.41918
    ]
},
{
    "routeDataPointId": "118",
    "segmentId": "1",
    "time": 1672158523726,
    "velocity": 118,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65642,
        45.4192
    ]
},
{
    "routeDataPointId": "119",
    "segmentId": "1",
    "time": 1672158523736,
    "velocity": 119,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65638,
        45.41923
    ]
},
{
    "routeDataPointId": "120",
    "segmentId": "1",
    "time": 1672158523746,
    "velocity": 120,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65623,
        45.41932
    ]
},
{
    "routeDataPointId": "121",
    "segmentId": "1",
    "time": 1672158523756,
    "velocity": 121,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65616,
        45.41935
    ]
},
{
    "routeDataPointId": "122",
    "segmentId": "1",
    "time": 1672158523766,
    "velocity": 122,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65603,
        45.41939
    ]
},
{
    "routeDataPointId": "123",
    "segmentId": "1",
    "time": 1672158523776,
    "velocity": 123,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65592,
        45.41941
    ]
},
{
    "routeDataPointId": "124",
    "segmentId": "1",
    "time": 1672158523786,
    "velocity": 124,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65584,
        45.41942
    ]
},
{
    "routeDataPointId": "125",
    "segmentId": "1",
    "time": 1672158523796,
    "velocity": 125,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6557,
        45.41942
    ]
},
{
    "routeDataPointId": "126",
    "segmentId": "1",
    "time": 1672158523806,
    "velocity": 126,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65555,
        45.4194
    ]
},
{
    "routeDataPointId": "127",
    "segmentId": "1",
    "time": 1672158523816,
    "velocity": 127,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65539,
        45.41936
    ]
},
{
    "routeDataPointId": "128",
    "segmentId": "1",
    "time": 1672158523826,
    "velocity": 128,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65532,
        45.41933
    ]
},
{
    "routeDataPointId": "129",
    "segmentId": "1",
    "time": 1672158523836,
    "velocity": 129,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65518,
        45.41925
    ]
},
{
    "routeDataPointId": "130",
    "segmentId": "1",
    "time": 1672158523846,
    "velocity": 130,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65507,
        45.41916
    ]
},
{
    "routeDataPointId": "131",
    "segmentId": "1",
    "time": 1672158523856,
    "velocity": 131,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65499,
        45.41903
    ]
},
{
    "routeDataPointId": "132",
    "segmentId": "1",
    "time": 1672158523866,
    "velocity": 132,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65499,
        45.41901
    ]
},
{
    "routeDataPointId": "133",
    "segmentId": "1",
    "time": 1672158523876,
    "velocity": 133,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65498,
        45.41901
    ]
},
{
    "routeDataPointId": "134",
    "segmentId": "1",
    "time": 1672158523886,
    "velocity": 134,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65497,
        45.41897
    ]
},
{
    "routeDataPointId": "135",
    "segmentId": "1",
    "time": 1672158523896,
    "velocity": 135,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65496,
        45.4189
    ]
},
{
    "routeDataPointId": "136",
    "segmentId": "1",
    "time": 1672158523906,
    "velocity": 136,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65496,
        45.4188
    ]
},
{
    "routeDataPointId": "137",
    "segmentId": "1",
    "time": 1672158523916,
    "velocity": 137,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65498,
        45.41875
    ]
},
{
    "routeDataPointId": "138",
    "segmentId": "1",
    "time": 1672158523926,
    "velocity": 138,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.655,
        45.41868
    ]
},
{
    "routeDataPointId": "139",
    "segmentId": "1",
    "time": 1672158523936,
    "velocity": 139,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65506,
        45.41858
    ]
},
{
    "routeDataPointId": "140",
    "segmentId": "1",
    "time": 1672158523946,
    "velocity": 140,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65516,
        45.41848
    ]
},
{
    "routeDataPointId": "141",
    "segmentId": "1",
    "time": 1672158523956,
    "velocity": 141,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65527,
        45.41839
    ]
},
{
    "routeDataPointId": "142",
    "segmentId": "1",
    "time": 1672158523966,
    "velocity": 142,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "foo bar",
    "coordinates": [
        -75.65542,
        45.41829
    ]
},
{
    "routeDataPointId": "143",
    "segmentId": "1",
    "time": 1672158523976,
    "velocity": 143,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6556,
        45.41819
    ]
},
{
    "routeDataPointId": "144",
    "segmentId": "1",
    "time": 1672158523986,
    "velocity": 144,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65585,
        45.41808
    ]
},
{
    "routeDataPointId": "145",
    "segmentId": "1",
    "time": 1672158523996,
    "velocity": 145,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65596,
        45.41802
    ]
},
{
    "routeDataPointId": "146",
    "segmentId": "1",
    "time": 1672158524006,
    "velocity": 146,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65612,
        45.41796
    ]
},
{
    "routeDataPointId": "147",
    "segmentId": "1",
    "time": 1672158524016,
    "velocity": 147,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65625,
        45.41792
    ]
},
{
    "routeDataPointId": "148",
    "segmentId": "1",
    "time": 1672158524026,
    "velocity": 148,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65637,
        45.41787
    ]
},
{
    "routeDataPointId": "149",
    "segmentId": "1",
    "time": 1672158524036,
    "velocity": 149,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65662,
        45.4178
    ]
},
{
    "routeDataPointId": "150",
    "segmentId": "1",
    "time": 1672158524046,
    "velocity": 150,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6568,
        45.41774
    ]
},
{
    "routeDataPointId": "151",
    "segmentId": "1",
    "time": 1672158524056,
    "velocity": 151,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65707,
        45.41768
    ]
},
{
    "routeDataPointId": "152",
    "segmentId": "1",
    "time": 1672158524066,
    "velocity": 152,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65708,
        45.41767
    ]
},
{
    "routeDataPointId": "153",
    "segmentId": "1",
    "time": 1672158524076,
    "velocity": 153,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65719,
        45.4176
    ]
},
{
    "routeDataPointId": "154",
    "segmentId": "1",
    "time": 1672158524086,
    "velocity": 154,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65743,
        45.41756
    ]
},
{
    "routeDataPointId": "155",
    "segmentId": "1",
    "time": 1672158524096,
    "velocity": 155,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65796,
        45.41749
    ]
},
{
    "routeDataPointId": "156",
    "segmentId": "1",
    "time": 1672158524106,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65834,
        45.41746
    ]
},
{
    "routeDataPointId": "157",
    "segmentId": "1",
    "time": 1672158524116,
    "velocity": 157,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65848,
        45.41744
    ]
},
{
    "routeDataPointId": "158",
    "segmentId": "1",
    "time": 1672158524126,
    "velocity": 158,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66077,
        45.41724
    ]
},
{
    "routeDataPointId": "159",
    "segmentId": "1",
    "time": 1672158524136,
    "velocity": 159,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66097,
        45.41723
    ]
},
{
    "routeDataPointId": "160",
    "segmentId": "1",
    "time": 1672158524146,
    "velocity": 0,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66261,
        45.41709
    ]
},
{
    "routeDataPointId": "161",
    "segmentId": "1",
    "time": 1672158524156,
    "velocity": 1,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66276,
        45.41707
    ]
},
{
    "routeDataPointId": "162",
    "segmentId": "1",
    "time": 1672158524166,
    "velocity": 2,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66306,
        45.41705
    ]
},
{
    "routeDataPointId": "163",
    "segmentId": "1",
    "time": 1672158524176,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66367,
        45.41699
    ]
},
{
    "routeDataPointId": "164",
    "segmentId": "1",
    "time": 1672158524186,
    "velocity": 4,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66459,
        45.41692
    ]
},
{
    "routeDataPointId": "165",
    "segmentId": "1",
    "time": 1672158524196,
    "velocity": 5,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66474,
        45.41692
    ]
},
{
    "routeDataPointId": "166",
    "segmentId": "1",
    "time": 1672158524206,
    "velocity": 6,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66492,
        45.41691
    ]
},
{
    "routeDataPointId": "167",
    "segmentId": "1",
    "time": 1672158524216,
    "velocity": 7,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66524,
        45.41691
    ]
},
{
    "routeDataPointId": "168",
    "segmentId": "1",
    "time": 1672158524226,
    "velocity": 8,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66537,
        45.41692
    ]
},
{
    "routeDataPointId": "169",
    "segmentId": "1",
    "time": 1672158524236,
    "velocity": 9,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66551,
        45.41692
    ]
},
{
    "routeDataPointId": "170",
    "segmentId": "1",
    "time": 1672158524246,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66612,
        45.41696
    ]
},
{
    "routeDataPointId": "171",
    "segmentId": "1",
    "time": 1672158524256,
    "velocity": 11,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66615,
        45.41697
    ]
},
{
    "routeDataPointId": "172",
    "segmentId": "1",
    "time": 1672158524266,
    "velocity": 12,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66645,
        45.417
    ]
},
{
    "routeDataPointId": "173",
    "segmentId": "1",
    "time": 1672158524276,
    "velocity": 13,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66717,
        45.4171
    ]
},
{
    "routeDataPointId": "174",
    "segmentId": "1",
    "time": 1672158524286,
    "velocity": 14,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6674,
        45.41714
    ]
},
{
    "routeDataPointId": "175",
    "segmentId": "1",
    "time": 1672158524296,
    "velocity": 15,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66861,
        45.41729
    ]
},
{
    "routeDataPointId": "176",
    "segmentId": "1",
    "time": 1672158524306,
    "velocity": 16,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66929,
        45.41733
    ]
},
{
    "routeDataPointId": "177",
    "segmentId": "1",
    "time": 1672158524316,
    "velocity": 17,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66974,
        45.41733
    ]
},
{
    "routeDataPointId": "178",
    "segmentId": "1",
    "time": 1672158524326,
    "velocity": 18,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66993,
        45.41732
    ]
},
{
    "routeDataPointId": "179",
    "segmentId": "1",
    "time": 1672158524336,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67009,
        45.41732
    ]
},
{
    "routeDataPointId": "180",
    "segmentId": "1",
    "time": 1672158524346,
    "velocity": 20,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67069,
        45.41728
    ]
},
{
    "routeDataPointId": "181",
    "segmentId": "1",
    "time": 1672158524356,
    "velocity": 21,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67158,
        45.41716
    ]
},
{
    "routeDataPointId": "182",
    "segmentId": "1",
    "time": 1672158524366,
    "velocity": 22,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67216,
        45.41704
    ]
},
{
    "routeDataPointId": "183",
    "segmentId": "1",
    "time": 1672158524376,
    "velocity": 23,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67255,
        45.41694
    ]
},
{
    "routeDataPointId": "184",
    "segmentId": "1",
    "time": 1672158524386,
    "velocity": 24,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67304,
        45.41679
    ]
},
{
    "routeDataPointId": "185",
    "segmentId": "1",
    "time": 1672158524396,
    "velocity": 25,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67333,
        45.41669
    ]
},
{
    "routeDataPointId": "186",
    "segmentId": "1",
    "time": 1672158524406,
    "velocity": 26,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67346,
        45.41664
    ]
},
{
    "routeDataPointId": "187",
    "segmentId": "1",
    "time": 1672158524416,
    "velocity": 27,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67361,
        45.41659
    ]
},
{
    "routeDataPointId": "188",
    "segmentId": "1",
    "time": 1672158524426,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6741,
        45.41638
    ]
},
{
    "routeDataPointId": "189",
    "segmentId": "1",
    "time": 1672158524436,
    "velocity": 29,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67422,
        45.41632
    ]
},
{
    "routeDataPointId": "190",
    "segmentId": "1",
    "time": 1672158524446,
    "velocity": 30,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67435,
        45.41627
    ]
},
{
    "routeDataPointId": "191",
    "segmentId": "1",
    "time": 1672158524456,
    "velocity": 31,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67442,
        45.41623
    ]
},
{
    "routeDataPointId": "192",
    "segmentId": "1",
    "time": 1672158524466,
    "velocity": 32,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67459,
        45.41615
    ]
},
{
    "routeDataPointId": "193",
    "segmentId": "1",
    "time": 1672158524476,
    "velocity": 33,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67478,
        45.41607
    ]
},
{
    "routeDataPointId": "194",
    "segmentId": "1",
    "time": 1672158524486,
    "velocity": 34,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67497,
        45.41597
    ]
},
{
    "routeDataPointId": "195",
    "segmentId": "1",
    "time": 1672158524496,
    "velocity": 35,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67599,
        45.4155
    ]
},
{
    "routeDataPointId": "196",
    "segmentId": "1",
    "time": 1672158524506,
    "velocity": 36,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67611,
        45.41544
    ]
},
{
    "routeDataPointId": "197",
    "segmentId": "1",
    "time": 1672158524516,
    "velocity": 37,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67634,
        45.41534
    ]
},
{
    "routeDataPointId": "198",
    "segmentId": "1",
    "time": 1672158524526,
    "velocity": 38,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67662,
        45.4152
    ]
},
{
    "routeDataPointId": "199",
    "segmentId": "1",
    "time": 1672158524536,
    "velocity": 39,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67676,
        45.41514
    ]
},
{
    "routeDataPointId": "200",
    "segmentId": "1",
    "time": 1672158524546,
    "velocity": 40,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67688,
        45.41508
    ]
},
{
    "routeDataPointId": "201",
    "segmentId": "1",
    "time": 1672158524556,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67699,
        45.41504
    ]
},
{
    "routeDataPointId": "202",
    "segmentId": "1",
    "time": 1672158524566,
    "velocity": 42,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67713,
        45.41497
    ]
},
{
    "routeDataPointId": "203",
    "segmentId": "1",
    "time": 1672158524576,
    "velocity": 43,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67765,
        45.41473
    ]
},
{
    "routeDataPointId": "204",
    "segmentId": "1",
    "time": 1672158524586,
    "velocity": 44,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67778,
        45.41466
    ]
},
{
    "routeDataPointId": "205",
    "segmentId": "1",
    "time": 1672158524596,
    "velocity": 45,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67791,
        45.41461
    ]
},
{
    "routeDataPointId": "206",
    "segmentId": "1",
    "time": 1672158524606,
    "velocity": 46,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6783,
        45.41442
    ]
},
{
    "routeDataPointId": "207",
    "segmentId": "1",
    "time": 1672158524616,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67842,
        45.41437
    ]
},
{
    "routeDataPointId": "208",
    "segmentId": "1",
    "time": 1672158524626,
    "velocity": 48,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67867,
        45.41425
    ]
},
{
    "routeDataPointId": "209",
    "segmentId": "1",
    "time": 1672158524636,
    "velocity": 49,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67894,
        45.41413
    ]
},
{
    "routeDataPointId": "210",
    "segmentId": "1",
    "time": 1672158524646,
    "velocity": 50,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67906,
        45.41407
    ]
},
{
    "routeDataPointId": "211",
    "segmentId": "1",
    "time": 1672158524656,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67907,
        45.41407
    ]
},
{
    "routeDataPointId": "212",
    "segmentId": "1",
    "time": 1672158524666,
    "velocity": 52,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6793,
        45.41396
    ]
},
{
    "routeDataPointId": "213",
    "segmentId": "1",
    "time": 1672158524676,
    "velocity": 53,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67944,
        45.4139
    ]
},
{
    "routeDataPointId": "214",
    "segmentId": "1",
    "time": 1672158524686,
    "velocity": 54,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67949,
        45.41387
    ]
},
{
    "routeDataPointId": "215",
    "segmentId": "1",
    "time": 1672158524696,
    "velocity": 55,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6799,
        45.41368
    ]
},
{
    "routeDataPointId": "216",
    "segmentId": "1",
    "time": 1672158524706,
    "velocity": 56,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68024,
        45.41354
    ]
},
{
    "routeDataPointId": "217",
    "segmentId": "1",
    "time": 1672158524716,
    "velocity": 57,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6803,
        45.41351
    ]
},
{
    "routeDataPointId": "218",
    "segmentId": "1",
    "time": 1672158524726,
    "velocity": 58,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68114,
        45.41318
    ]
},
{
    "routeDataPointId": "219",
    "segmentId": "1",
    "time": 1672158524736,
    "velocity": 59,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68174,
        45.41296
    ]
},
{
    "routeDataPointId": "220",
    "segmentId": "1",
    "time": 1672158524746,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68265,
        45.41266
    ]
},
{
    "routeDataPointId": "221",
    "segmentId": "1",
    "time": 1672158524756,
    "velocity": 61,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68267,
        45.41265
    ]
},
{
    "routeDataPointId": "222",
    "segmentId": "1",
    "time": 1672158524766,
    "velocity": 62,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68347,
        45.41238
    ]
},
{
    "routeDataPointId": "223",
    "segmentId": "1",
    "time": 1672158524776,
    "velocity": 63,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68376,
        45.41229
    ]
},
{
    "routeDataPointId": "224",
    "segmentId": "1",
    "time": 1672158524786,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68458,
        45.41201
    ]
},
{
    "routeDataPointId": "225",
    "segmentId": "1",
    "time": 1672158524796,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68476,
        45.41194
    ]
},
{
    "routeDataPointId": "226",
    "segmentId": "1",
    "time": 1672158524806,
    "velocity": 66,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68531,
        45.41175
    ]
},
{
    "routeDataPointId": "227",
    "segmentId": "1",
    "time": 1672158524816,
    "velocity": 67,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68568,
        45.41161
    ]
},
{
    "routeDataPointId": "228",
    "segmentId": "1",
    "time": 1672158524826,
    "velocity": 68,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68583,
        45.41156
    ]
},
{
    "routeDataPointId": "229",
    "segmentId": "1",
    "time": 1672158524836,
    "velocity": 69,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68595,
        45.41151
    ]
},
{
    "routeDataPointId": "230",
    "segmentId": "1",
    "time": 1672158524846,
    "velocity": 70,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68622,
        45.41141
    ]
},
{
    "routeDataPointId": "231",
    "segmentId": "1",
    "time": 1672158524856,
    "velocity": 71,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68636,
        45.41135
    ]
},
{
    "routeDataPointId": "232",
    "segmentId": "1",
    "time": 1672158524866,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68662,
        45.41125
    ]
},
{
    "routeDataPointId": "233",
    "segmentId": "1",
    "time": 1672158524876,
    "velocity": 73,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68677,
        45.4112
    ]
},
{
    "routeDataPointId": "234",
    "segmentId": "1",
    "time": 1672158524886,
    "velocity": 74,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68695,
        45.41112
    ]
},
{
    "routeDataPointId": "235",
    "segmentId": "1",
    "time": 1672158524896,
    "velocity": 75,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68719,
        45.41103
    ]
},
{
    "routeDataPointId": "236",
    "segmentId": "1",
    "time": 1672158524906,
    "velocity": 76,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68796,
        45.41071
    ]
},
{
    "routeDataPointId": "237",
    "segmentId": "1",
    "time": 1672158524916,
    "velocity": 77,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68823,
        45.41059
    ]
},
{
    "routeDataPointId": "238",
    "segmentId": "1",
    "time": 1672158524926,
    "velocity": 78,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68836,
        45.41054
    ]
},
{
    "routeDataPointId": "239",
    "segmentId": "1",
    "time": 1672158524936,
    "velocity": 79,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68862,
        45.41042
    ]
},
{
    "routeDataPointId": "240",
    "segmentId": "1",
    "time": 1672158524946,
    "velocity": 80,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68875,
        45.41037
    ]
},
{
    "routeDataPointId": "241",
    "segmentId": "1",
    "time": 1672158524956,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68886,
        45.41031
    ]
},
{
    "routeDataPointId": "242",
    "segmentId": "1",
    "time": 1672158524966,
    "velocity": 82,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68901,
        45.41025
    ]
},
{
    "routeDataPointId": "243",
    "segmentId": "1",
    "time": 1672158524976,
    "velocity": 83,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69004,
        45.40977
    ]
},
{
    "routeDataPointId": "244",
    "segmentId": "1",
    "time": 1672158524986,
    "velocity": 84,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.69017,
        45.4097
    ]
},
{
    "routeDataPointId": "245",
    "segmentId": "1",
    "time": 1672158524996,
    "velocity": 85,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69027,
        45.40966
    ]
},
{
    "routeDataPointId": "246",
    "segmentId": "1",
    "time": 1672158525006,
    "velocity": 86,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.69042,
        45.40958
    ]
},
{
    "routeDataPointId": "247",
    "segmentId": "1",
    "time": 1672158525016,
    "velocity": 87,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69054,
        45.40953
    ]
},
{
    "routeDataPointId": "248",
    "segmentId": "1",
    "time": 1672158525026,
    "velocity": 88,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69079,
        45.4094
    ]
},
{
    "routeDataPointId": "249",
    "segmentId": "1",
    "time": 1672158525036,
    "velocity": 89,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.69156,
        45.40903
    ]
},
{
    "routeDataPointId": "250",
    "segmentId": "1",
    "time": 1672158525046,
    "velocity": 90,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69168,
        45.40898
    ]
},
{
    "routeDataPointId": "251",
    "segmentId": "1",
    "time": 1672158525056,
    "velocity": 91,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69181,
        45.40891
    ]
},
{
    "routeDataPointId": "252",
    "segmentId": "1",
    "time": 1672158525066,
    "velocity": 92,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69245,
        45.4086
    ]
},
{
    "routeDataPointId": "253",
    "segmentId": "1",
    "time": 1672158525076,
    "velocity": 93,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69248,
        45.40859
    ]
},
{
    "routeDataPointId": "254",
    "segmentId": "1",
    "time": 1672158525086,
    "velocity": 94,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69313,
        45.40827
    ]
},
{
    "routeDataPointId": "255",
    "segmentId": "1",
    "time": 1672158525096,
    "velocity": 95,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69327,
        45.40821
    ]
},
{
    "routeDataPointId": "256",
    "segmentId": "1",
    "time": 1672158525106,
    "velocity": 96,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69366,
        45.40802
    ]
},
{
    "routeDataPointId": "257",
    "segmentId": "1",
    "time": 1672158525116,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69404,
        45.40785
    ]
},
{
    "routeDataPointId": "258",
    "segmentId": "1",
    "time": 1672158525126,
    "velocity": 98,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69416,
        45.40779
    ]
},
{
    "routeDataPointId": "259",
    "segmentId": "1",
    "time": 1672158525136,
    "velocity": 99,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69509,
        45.40738
    ]
},
{
    "routeDataPointId": "260",
    "segmentId": "1",
    "time": 1672158525146,
    "velocity": 100,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69522,
        45.40733
    ]
},
{
    "routeDataPointId": "261",
    "segmentId": "1",
    "time": 1672158525156,
    "velocity": 101,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69594,
        45.40702
    ]
},
{
    "routeDataPointId": "262",
    "segmentId": "1",
    "time": 1672158525166,
    "velocity": 102,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69706,
        45.40658
    ]
},
{
    "routeDataPointId": "263",
    "segmentId": "1",
    "time": 1672158525176,
    "velocity": 103,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69721,
        45.40653
    ]
},
{
    "routeDataPointId": "264",
    "segmentId": "1",
    "time": 1672158525186,
    "velocity": 104,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.69735,
        45.40647
    ]
},
{
    "routeDataPointId": "265",
    "segmentId": "1",
    "time": 1672158525196,
    "velocity": 105,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69761,
        45.40637
    ]
},
{
    "routeDataPointId": "266",
    "segmentId": "1",
    "time": 1672158525206,
    "velocity": 106,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69821,
        45.40616
    ]
},
{
    "routeDataPointId": "267",
    "segmentId": "1",
    "time": 1672158525216,
    "velocity": 107,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69842,
        45.40608
    ]
},
{
    "routeDataPointId": "268",
    "segmentId": "1",
    "time": 1672158525226,
    "velocity": 108,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6985,
        45.40606
    ]
},
{
    "routeDataPointId": "269",
    "segmentId": "1",
    "time": 1672158525236,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69863,
        45.40601
    ]
},
{
    "routeDataPointId": "270",
    "segmentId": "1",
    "time": 1672158525246,
    "velocity": 110,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69955,
        45.4057
    ]
},
{
    "routeDataPointId": "271",
    "segmentId": "1",
    "time": 1672158525256,
    "velocity": 111,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69969,
        45.40566
    ]
},
{
    "routeDataPointId": "272",
    "segmentId": "1",
    "time": 1672158525266,
    "velocity": 112,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70082,
        45.4053
    ]
},
{
    "routeDataPointId": "273",
    "segmentId": "1",
    "time": 1672158525276,
    "velocity": 113,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70165,
        45.40506
    ]
},
{
    "routeDataPointId": "274",
    "segmentId": "1",
    "time": 1672158525286,
    "velocity": 114,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70181,
        45.40502
    ]
},
{
    "routeDataPointId": "275",
    "segmentId": "1",
    "time": 1672158525296,
    "velocity": 115,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70217,
        45.40491
    ]
},
{
    "routeDataPointId": "276",
    "segmentId": "1",
    "time": 1672158525306,
    "velocity": 116,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70252,
        45.40482
    ]
},
{
    "routeDataPointId": "277",
    "segmentId": "1",
    "time": 1672158525316,
    "velocity": 117,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70265,
        45.40478
    ]
},
{
    "routeDataPointId": "278",
    "segmentId": "1",
    "time": 1672158525326,
    "velocity": 118,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7031,
        45.40466
    ]
},
{
    "routeDataPointId": "279",
    "segmentId": "1",
    "time": 1672158525336,
    "velocity": 119,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70324,
        45.40463
    ]
},
{
    "routeDataPointId": "280",
    "segmentId": "1",
    "time": 1672158525346,
    "velocity": 120,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70337,
        45.40459
    ]
},
{
    "routeDataPointId": "281",
    "segmentId": "1",
    "time": 1672158525356,
    "velocity": 121,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70403,
        45.40443
    ]
},
{
    "routeDataPointId": "282",
    "segmentId": "1",
    "time": 1672158525366,
    "velocity": 122,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7064,
        45.40391
    ]
},
{
    "routeDataPointId": "283",
    "segmentId": "1",
    "time": 1672158525376,
    "velocity": 123,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7066,
        45.40386
    ]
},
{
    "routeDataPointId": "284",
    "segmentId": "1",
    "time": 1672158525386,
    "velocity": 124,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70715,
        45.40375
    ]
},
{
    "routeDataPointId": "285",
    "segmentId": "1",
    "time": 1672158525396,
    "velocity": 125,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70726,
        45.40372
    ]
},
{
    "routeDataPointId": "286",
    "segmentId": "1",
    "time": 1672158525406,
    "velocity": 126,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70867,
        45.40345
    ]
},
{
    "routeDataPointId": "287",
    "segmentId": "1",
    "time": 1672158525416,
    "velocity": 127,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7088,
        45.40342
    ]
},
{
    "routeDataPointId": "288",
    "segmentId": "1",
    "time": 1672158525426,
    "velocity": 128,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70926,
        45.40333
    ]
},
{
    "routeDataPointId": "289",
    "segmentId": "1",
    "time": 1672158525436,
    "velocity": 129,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7094,
        45.40331
    ]
},
{
    "routeDataPointId": "290",
    "segmentId": "1",
    "time": 1672158525446,
    "velocity": 130,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71039,
        45.40311
    ]
},
{
    "routeDataPointId": "291",
    "segmentId": "1",
    "time": 1672158525456,
    "velocity": 131,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71079,
        45.40304
    ]
},
{
    "routeDataPointId": "292",
    "segmentId": "1",
    "time": 1672158525466,
    "velocity": 132,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71154,
        45.40288
    ]
},
{
    "routeDataPointId": "293",
    "segmentId": "1",
    "time": 1672158525476,
    "velocity": 133,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71191,
        45.40281
    ]
},
{
    "routeDataPointId": "294",
    "segmentId": "1",
    "time": 1672158525486,
    "velocity": 134,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71206,
        45.40277
    ]
},
{
    "routeDataPointId": "295",
    "segmentId": "1",
    "time": 1672158525496,
    "velocity": 135,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71314,
        45.40253
    ]
},
{
    "routeDataPointId": "296",
    "segmentId": "1",
    "time": 1672158525506,
    "velocity": 136,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71328,
        45.40249
    ]
},
{
    "routeDataPointId": "297",
    "segmentId": "1",
    "time": 1672158525516,
    "velocity": 137,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71339,
        45.40247
    ]
},
{
    "routeDataPointId": "298",
    "segmentId": "1",
    "time": 1672158525526,
    "velocity": 138,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71345,
        45.40245
    ]
},
{
    "routeDataPointId": "299",
    "segmentId": "1",
    "time": 1672158525536,
    "velocity": 139,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7136,
        45.40241
    ]
},
{
    "routeDataPointId": "300",
    "segmentId": "1",
    "time": 1672158525546,
    "velocity": 140,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71387,
        45.40235
    ]
},
{
    "routeDataPointId": "301",
    "segmentId": "1",
    "time": 1672158525556,
    "velocity": 141,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71441,
        45.40221
    ]
},
{
    "routeDataPointId": "302",
    "segmentId": "1",
    "time": 1672158525566,
    "velocity": 142,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71603,
        45.40176
    ]
},
{
    "routeDataPointId": "303",
    "segmentId": "1",
    "time": 1672158525576,
    "velocity": 143,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71658,
        45.40159
    ]
},
{
    "routeDataPointId": "304",
    "segmentId": "1",
    "time": 1672158525586,
    "velocity": 144,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71666,
        45.40157
    ]
},
{
    "routeDataPointId": "305",
    "segmentId": "1",
    "time": 1672158525596,
    "velocity": 145,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71686,
        45.4015
    ]
},
{
    "routeDataPointId": "306",
    "segmentId": "1",
    "time": 1672158525606,
    "velocity": 146,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71721,
        45.4014
    ]
},
{
    "routeDataPointId": "307",
    "segmentId": "1",
    "time": 1672158525616,
    "velocity": 147,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71771,
        45.40123
    ]
},
{
    "routeDataPointId": "308",
    "segmentId": "1",
    "time": 1672158525626,
    "velocity": 148,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.718,
        45.40114
    ]
},
{
    "routeDataPointId": "309",
    "segmentId": "1",
    "time": 1672158525636,
    "velocity": 149,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7191,
        45.40076
    ]
},
{
    "routeDataPointId": "310",
    "segmentId": "1",
    "time": 1672158525646,
    "velocity": 150,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7192,
        45.40072
    ]
},
{
    "routeDataPointId": "311",
    "segmentId": "1",
    "time": 1672158525656,
    "velocity": 151,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71922,
        45.40071
    ]
},
{
    "routeDataPointId": "312",
    "segmentId": "1",
    "time": 1672158525666,
    "velocity": 152,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71937,
        45.40066
    ]
},
{
    "routeDataPointId": "313",
    "segmentId": "1",
    "time": 1672158525676,
    "velocity": 153,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71951,
        45.4006
    ]
},
{
    "routeDataPointId": "314",
    "segmentId": "1",
    "time": 1672158525686,
    "velocity": 154,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71978,
        45.40051
    ]
},
{
    "routeDataPointId": "315",
    "segmentId": "1",
    "time": 1672158525696,
    "velocity": 155,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7213,
        45.39991
    ]
},
{
    "routeDataPointId": "316",
    "segmentId": "1",
    "time": 1672158525706,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72151,
        45.39982
    ]
},
{
    "routeDataPointId": "317",
    "segmentId": "1",
    "time": 1672158525716,
    "velocity": 157,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72164,
        45.39977
    ]
},
{
    "routeDataPointId": "318",
    "segmentId": "1",
    "time": 1672158525726,
    "velocity": 158,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72177,
        45.39971
    ]
},
{
    "routeDataPointId": "319",
    "segmentId": "1",
    "time": 1672158525736,
    "velocity": 159,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72204,
        45.3996
    ]
},
{
    "routeDataPointId": "320",
    "segmentId": "1",
    "time": 1672158525746,
    "velocity": 0,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72334,
        45.39902
    ]
},
{
    "routeDataPointId": "321",
    "segmentId": "1",
    "time": 1672158525756,
    "velocity": 1,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72346,
        45.39896
    ]
},
{
    "routeDataPointId": "322",
    "segmentId": "1",
    "time": 1672158525766,
    "velocity": 2,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72388,
        45.39877
    ]
},
{
    "routeDataPointId": "323",
    "segmentId": "1",
    "time": 1672158525776,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72423,
        45.3986
    ]
},
{
    "routeDataPointId": "324",
    "segmentId": "1",
    "time": 1672158525786,
    "velocity": 4,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72451,
        45.39848
    ]
},
{
    "routeDataPointId": "325",
    "segmentId": "1",
    "time": 1672158525796,
    "velocity": 5,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72462,
        45.39842
    ]
},
{
    "routeDataPointId": "326",
    "segmentId": "1",
    "time": 1672158525806,
    "velocity": 6,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72474,
        45.39837
    ]
},
{
    "routeDataPointId": "327",
    "segmentId": "1",
    "time": 1672158525816,
    "velocity": 7,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72487,
        45.3983
    ]
},
{
    "routeDataPointId": "328",
    "segmentId": "1",
    "time": 1672158525826,
    "velocity": 8,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72526,
        45.39813
    ]
},
{
    "routeDataPointId": "329",
    "segmentId": "1",
    "time": 1672158525836,
    "velocity": 9,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7259,
        45.39783
    ]
},
{
    "routeDataPointId": "330",
    "segmentId": "1",
    "time": 1672158525846,
    "velocity": 10,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72616,
        45.3977
    ]
},
{
    "routeDataPointId": "331",
    "segmentId": "1",
    "time": 1672158525856,
    "velocity": 11,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7262,
        45.39769
    ]
},
{
    "routeDataPointId": "332",
    "segmentId": "1",
    "time": 1672158525866,
    "velocity": 12,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72743,
        45.39711
    ]
},
{
    "routeDataPointId": "333",
    "segmentId": "1",
    "time": 1672158525876,
    "velocity": 13,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72766,
        45.39699
    ]
},
{
    "routeDataPointId": "334",
    "segmentId": "1",
    "time": 1672158525886,
    "velocity": 14,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72791,
        45.39684
    ]
},
{
    "routeDataPointId": "335",
    "segmentId": "1",
    "time": 1672158525896,
    "velocity": 15,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72803,
        45.39678
    ]
},
{
    "routeDataPointId": "336",
    "segmentId": "1",
    "time": 1672158525906,
    "velocity": 16,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72835,
        45.39657
    ]
},
{
    "routeDataPointId": "337",
    "segmentId": "1",
    "time": 1672158525916,
    "velocity": 17,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72874,
        45.3963
    ]
},
{
    "routeDataPointId": "338",
    "segmentId": "1",
    "time": 1672158525926,
    "velocity": 18,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72887,
        45.3962
    ]
},
{
    "routeDataPointId": "339",
    "segmentId": "1",
    "time": 1672158525936,
    "velocity": 19,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72929,
        45.39585
    ]
},
{
    "routeDataPointId": "340",
    "segmentId": "1",
    "time": 1672158525946,
    "velocity": 20,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72936,
        45.39578
    ]
},
{
    "routeDataPointId": "341",
    "segmentId": "1",
    "time": 1672158525956,
    "velocity": 21,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72945,
        45.39571
    ]
},
{
    "routeDataPointId": "342",
    "segmentId": "1",
    "time": 1672158525966,
    "velocity": 22,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "foo bar",
    "coordinates": [
        -75.72958,
        45.39558
    ]
},
{
    "routeDataPointId": "343",
    "segmentId": "1",
    "time": 1672158525976,
    "velocity": 23,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72991,
        45.39521
    ]
},
{
    "routeDataPointId": "344",
    "segmentId": "1",
    "time": 1672158525986,
    "velocity": 24,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73006,
        45.39502
    ]
},
{
    "routeDataPointId": "345",
    "segmentId": "1",
    "time": 1672158525996,
    "velocity": 25,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73015,
        45.39492
    ]
},
{
    "routeDataPointId": "346",
    "segmentId": "1",
    "time": 1672158526006,
    "velocity": 26,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73051,
        45.39446
    ]
},
{
    "routeDataPointId": "347",
    "segmentId": "1",
    "time": 1672158526016,
    "velocity": 27,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73052,
        45.39446
    ]
},
{
    "routeDataPointId": "348",
    "segmentId": "1",
    "time": 1672158526026,
    "velocity": 28,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73104,
        45.3938
    ]
},
{
    "routeDataPointId": "349",
    "segmentId": "1",
    "time": 1672158526036,
    "velocity": 29,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73106,
        45.39377
    ]
},
{
    "routeDataPointId": "350",
    "segmentId": "1",
    "time": 1672158526046,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73119,
        45.39361
    ]
},
{
    "routeDataPointId": "351",
    "segmentId": "1",
    "time": 1672158526056,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73127,
        45.39352
    ]
},
{
    "routeDataPointId": "352",
    "segmentId": "1",
    "time": 1672158526066,
    "velocity": 32,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7315,
        45.39323
    ]
},
{
    "routeDataPointId": "353",
    "segmentId": "1",
    "time": 1672158526076,
    "velocity": 33,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73158,
        45.39314
    ]
},
{
    "routeDataPointId": "354",
    "segmentId": "1",
    "time": 1672158526086,
    "velocity": 34,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73169,
        45.39299
    ]
},
{
    "routeDataPointId": "355",
    "segmentId": "1",
    "time": 1672158526096,
    "velocity": 35,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73188,
        45.39276
    ]
},
{
    "routeDataPointId": "356",
    "segmentId": "1",
    "time": 1672158526106,
    "velocity": 36,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73195,
        45.39266
    ]
},
{
    "routeDataPointId": "357",
    "segmentId": "1",
    "time": 1672158526116,
    "velocity": 37,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7321,
        45.39248
    ]
},
{
    "routeDataPointId": "358",
    "segmentId": "1",
    "time": 1672158526126,
    "velocity": 38,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73217,
        45.39238
    ]
},
{
    "routeDataPointId": "359",
    "segmentId": "1",
    "time": 1672158526136,
    "velocity": 39,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73225,
        45.39229
    ]
},
{
    "routeDataPointId": "360",
    "segmentId": "1",
    "time": 1672158526146,
    "velocity": 40,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73232,
        45.39219
    ]
},
{
    "routeDataPointId": "361",
    "segmentId": "1",
    "time": 1672158526156,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7324,
        45.3921
    ]
},
{
    "routeDataPointId": "362",
    "segmentId": "1",
    "time": 1672158526166,
    "velocity": 42,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73247,
        45.392
    ]
},
{
    "routeDataPointId": "363",
    "segmentId": "1",
    "time": 1672158526176,
    "velocity": 43,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73254,
        45.39191
    ]
},
{
    "routeDataPointId": "364",
    "segmentId": "1",
    "time": 1672158526186,
    "velocity": 44,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73262,
        45.39182
    ]
},
{
    "routeDataPointId": "365",
    "segmentId": "1",
    "time": 1672158526196,
    "velocity": 45,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73269,
        45.39172
    ]
},
{
    "routeDataPointId": "366",
    "segmentId": "1",
    "time": 1672158526206,
    "velocity": 46,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73306,
        45.39125
    ]
},
{
    "routeDataPointId": "367",
    "segmentId": "1",
    "time": 1672158526216,
    "velocity": 47,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73313,
        45.39115
    ]
},
{
    "routeDataPointId": "368",
    "segmentId": "1",
    "time": 1672158526226,
    "velocity": 48,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73321,
        45.39106
    ]
},
{
    "routeDataPointId": "369",
    "segmentId": "1",
    "time": 1672158526236,
    "velocity": 49,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73328,
        45.39096
    ]
},
{
    "routeDataPointId": "370",
    "segmentId": "1",
    "time": 1672158526246,
    "velocity": 50,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73335,
        45.39087
    ]
},
{
    "routeDataPointId": "371",
    "segmentId": "1",
    "time": 1672158526256,
    "velocity": 51,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73339,
        45.39083
    ]
},
{
    "routeDataPointId": "372",
    "segmentId": "1",
    "time": 1672158526266,
    "velocity": 52,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7335,
        45.39068
    ]
},
{
    "routeDataPointId": "373",
    "segmentId": "1",
    "time": 1672158526276,
    "velocity": 53,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73359,
        45.39057
    ]
},
{
    "routeDataPointId": "374",
    "segmentId": "1",
    "time": 1672158526286,
    "velocity": 54,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73379,
        45.39029
    ]
},
{
    "routeDataPointId": "375",
    "segmentId": "1",
    "time": 1672158526296,
    "velocity": 55,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73391,
        45.39015
    ]
},
{
    "routeDataPointId": "376",
    "segmentId": "1",
    "time": 1672158526306,
    "velocity": 56,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73455,
        45.38933
    ]
},
{
    "routeDataPointId": "377",
    "segmentId": "1",
    "time": 1672158526316,
    "velocity": 57,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73462,
        45.38923
    ]
},
{
    "routeDataPointId": "378",
    "segmentId": "1",
    "time": 1672158526326,
    "velocity": 58,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73481,
        45.38899
    ]
},
{
    "routeDataPointId": "379",
    "segmentId": "1",
    "time": 1672158526336,
    "velocity": 59,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73489,
        45.38891
    ]
},
{
    "routeDataPointId": "380",
    "segmentId": "1",
    "time": 1672158526346,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73494,
        45.38885
    ]
},
{
    "routeDataPointId": "381",
    "segmentId": "1",
    "time": 1672158526356,
    "velocity": 61,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73496,
        45.38882
    ]
},
{
    "routeDataPointId": "382",
    "segmentId": "1",
    "time": 1672158526366,
    "velocity": 62,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73504,
        45.38872
    ]
},
{
    "routeDataPointId": "383",
    "segmentId": "1",
    "time": 1672158526376,
    "velocity": 63,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73593,
        45.38773
    ]
},
{
    "routeDataPointId": "384",
    "segmentId": "1",
    "time": 1672158526386,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73609,
        45.38757
    ]
},
{
    "routeDataPointId": "385",
    "segmentId": "1",
    "time": 1672158526396,
    "velocity": 65,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7361,
        45.38755
    ]
},
{
    "routeDataPointId": "386",
    "segmentId": "1",
    "time": 1672158526406,
    "velocity": 66,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73643,
        45.38722
    ]
},
{
    "routeDataPointId": "387",
    "segmentId": "1",
    "time": 1672158526416,
    "velocity": 67,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73787,
        45.38588
    ]
},
{
    "routeDataPointId": "388",
    "segmentId": "1",
    "time": 1672158526426,
    "velocity": 68,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7382,
        45.38559
    ]
},
{
    "routeDataPointId": "389",
    "segmentId": "1",
    "time": 1672158526436,
    "velocity": 69,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7399,
        45.38404
    ]
},
{
    "routeDataPointId": "390",
    "segmentId": "1",
    "time": 1672158526446,
    "velocity": 70,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73996,
        45.38398
    ]
},
{
    "routeDataPointId": "391",
    "segmentId": "1",
    "time": 1672158526456,
    "velocity": 71,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73997,
        45.38398
    ]
},
{
    "routeDataPointId": "392",
    "segmentId": "1",
    "time": 1672158526466,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74002,
        45.38393
    ]
},
{
    "routeDataPointId": "393",
    "segmentId": "1",
    "time": 1672158526476,
    "velocity": 73,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74258,
        45.38158
    ]
},
{
    "routeDataPointId": "394",
    "segmentId": "1",
    "time": 1672158526486,
    "velocity": 74,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74281,
        45.38138
    ]
},
{
    "routeDataPointId": "395",
    "segmentId": "1",
    "time": 1672158526496,
    "velocity": 75,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74294,
        45.38125
    ]
},
{
    "routeDataPointId": "396",
    "segmentId": "1",
    "time": 1672158526506,
    "velocity": 76,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74301,
        45.3812
    ]
},
{
    "routeDataPointId": "397",
    "segmentId": "1",
    "time": 1672158526516,
    "velocity": 77,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74307,
        45.38114
    ]
},
{
    "routeDataPointId": "398",
    "segmentId": "1",
    "time": 1672158526526,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74827,
        45.37639
    ]
},
{
    "routeDataPointId": "399",
    "segmentId": "1",
    "time": 1672158526536,
    "velocity": 79,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74844,
        45.37622
    ]
},
{
    "routeDataPointId": "400",
    "segmentId": "1",
    "time": 1672158526546,
    "velocity": 80,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74856,
        45.37612
    ]
},
{
    "routeDataPointId": "401",
    "segmentId": "1",
    "time": 1672158526556,
    "velocity": 81,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.75304,
        45.37201
    ]
},
{
    "routeDataPointId": "402",
    "segmentId": "1",
    "time": 1672158526566,
    "velocity": 82,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.75376,
        45.37131
    ]
},
{
    "routeDataPointId": "403",
    "segmentId": "1",
    "time": 1672158526576,
    "velocity": 83,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7541,
        45.371
    ]
},
{
    "routeDataPointId": "404",
    "segmentId": "1",
    "time": 1672158526586,
    "velocity": 84,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75574,
        45.36945
    ]
},
{
    "routeDataPointId": "405",
    "segmentId": "1",
    "time": 1672158526596,
    "velocity": 85,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.75843,
        45.36685
    ]
},
{
    "routeDataPointId": "406",
    "segmentId": "1",
    "time": 1672158526606,
    "velocity": 86,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.75873,
        45.36659
    ]
},
{
    "routeDataPointId": "407",
    "segmentId": "1",
    "time": 1672158526616,
    "velocity": 87,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.75875,
        45.36657
    ]
},
{
    "routeDataPointId": "408",
    "segmentId": "1",
    "time": 1672158526626,
    "velocity": 88,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.75918,
        45.36624
    ]
},
{
    "routeDataPointId": "409",
    "segmentId": "1",
    "time": 1672158526636,
    "velocity": 89,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.75941,
        45.36608
    ]
},
{
    "routeDataPointId": "410",
    "segmentId": "1",
    "time": 1672158526646,
    "velocity": 90,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.75968,
        45.36591
    ]
},
{
    "routeDataPointId": "411",
    "segmentId": "1",
    "time": 1672158526656,
    "velocity": 91,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.76021,
        45.3656
    ]
},
{
    "routeDataPointId": "412",
    "segmentId": "1",
    "time": 1672158526666,
    "velocity": 92,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.76024,
        45.36559
    ]
},
{
    "routeDataPointId": "413",
    "segmentId": "1",
    "time": 1672158526676,
    "velocity": 93,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.76167,
        45.36483
    ]
},
{
    "routeDataPointId": "414",
    "segmentId": "1",
    "time": 1672158526686,
    "velocity": 94,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.76212,
        45.36458
    ]
},
{
    "routeDataPointId": "415",
    "segmentId": "1",
    "time": 1672158526696,
    "velocity": 95,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.76235,
        45.36446
    ]
},
{
    "routeDataPointId": "416",
    "segmentId": "1",
    "time": 1672158526706,
    "velocity": 96,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.76258,
        45.36433
    ]
},
{
    "routeDataPointId": "417",
    "segmentId": "1",
    "time": 1672158526716,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.76306,
        45.36408
    ]
},
{
    "routeDataPointId": "418",
    "segmentId": "1",
    "time": 1672158526726,
    "velocity": 98,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.76309,
        45.36406
    ]
},
{
    "routeDataPointId": "419",
    "segmentId": "1",
    "time": 1672158526736,
    "velocity": 99,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.76588,
        45.36256
    ]
},
{
    "routeDataPointId": "420",
    "segmentId": "1",
    "time": 1672158526746,
    "velocity": 100,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.76603,
        45.3625
    ]
},
{
    "routeDataPointId": "421",
    "segmentId": "1",
    "time": 1672158526756,
    "velocity": 101,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.76631,
        45.36232
    ]
},
{
    "routeDataPointId": "422",
    "segmentId": "1",
    "time": 1672158526766,
    "velocity": 102,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.76741,
        45.36173
    ]
},
{
    "routeDataPointId": "423",
    "segmentId": "1",
    "time": 1672158526776,
    "velocity": 103,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.76809,
        45.36138
    ]
},
{
    "routeDataPointId": "424",
    "segmentId": "1",
    "time": 1672158526786,
    "velocity": 104,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.76818,
        45.3613
    ]
},
{
    "routeDataPointId": "425",
    "segmentId": "1",
    "time": 1672158526796,
    "velocity": 105,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.77617,
        45.35699
    ]
},
{
    "routeDataPointId": "426",
    "segmentId": "1",
    "time": 1672158526806,
    "velocity": 106,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7763,
        45.35694
    ]
},
{
    "routeDataPointId": "427",
    "segmentId": "1",
    "time": 1672158526816,
    "velocity": 107,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79353,
        45.34763
    ]
},
{
    "routeDataPointId": "428",
    "segmentId": "1",
    "time": 1672158526826,
    "velocity": 108,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79386,
        45.34746
    ]
},
{
    "routeDataPointId": "429",
    "segmentId": "1",
    "time": 1672158526836,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79455,
        45.34714
    ]
},
{
    "routeDataPointId": "430",
    "segmentId": "1",
    "time": 1672158526846,
    "velocity": 110,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79496,
        45.34698
    ]
},
{
    "routeDataPointId": "431",
    "segmentId": "1",
    "time": 1672158526856,
    "velocity": 111,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79563,
        45.34675
    ]
},
{
    "routeDataPointId": "432",
    "segmentId": "1",
    "time": 1672158526866,
    "velocity": 112,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79633,
        45.34654
    ]
},
{
    "routeDataPointId": "433",
    "segmentId": "1",
    "time": 1672158526876,
    "velocity": 113,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79647,
        45.34651
    ]
},
{
    "routeDataPointId": "434",
    "segmentId": "1",
    "time": 1672158526886,
    "velocity": 114,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79648,
        45.34651
    ]
},
{
    "routeDataPointId": "435",
    "segmentId": "1",
    "time": 1672158526896,
    "velocity": 115,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79694,
        45.34639
    ]
},
{
    "routeDataPointId": "436",
    "segmentId": "1",
    "time": 1672158526906,
    "velocity": 116,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79706,
        45.34637
    ]
},
{
    "routeDataPointId": "437",
    "segmentId": "1",
    "time": 1672158526916,
    "velocity": 117,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79733,
        45.34631
    ]
},
{
    "routeDataPointId": "438",
    "segmentId": "1",
    "time": 1672158526926,
    "velocity": 118,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79755,
        45.34627
    ]
},
{
    "routeDataPointId": "439",
    "segmentId": "1",
    "time": 1672158526936,
    "velocity": 119,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79777,
        45.34624
    ]
},
{
    "routeDataPointId": "440",
    "segmentId": "1",
    "time": 1672158526946,
    "velocity": 120,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79794,
        45.34621
    ]
},
{
    "routeDataPointId": "441",
    "segmentId": "1",
    "time": 1672158526956,
    "velocity": 121,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79824,
        45.34617
    ]
},
{
    "routeDataPointId": "442",
    "segmentId": "1",
    "time": 1672158526966,
    "velocity": 122,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79929,
        45.34606
    ]
},
{
    "routeDataPointId": "443",
    "segmentId": "1",
    "time": 1672158526976,
    "velocity": 123,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79989,
        45.34602
    ]
},
{
    "routeDataPointId": "444",
    "segmentId": "1",
    "time": 1672158526986,
    "velocity": 124,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80212,
        45.34583
    ]
},
{
    "routeDataPointId": "445",
    "segmentId": "1",
    "time": 1672158526996,
    "velocity": 125,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8073,
        45.34545
    ]
},
{
    "routeDataPointId": "446",
    "segmentId": "1",
    "time": 1672158527006,
    "velocity": 126,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80769,
        45.34541
    ]
},
{
    "routeDataPointId": "447",
    "segmentId": "1",
    "time": 1672158527016,
    "velocity": 127,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80797,
        45.34539
    ]
},
{
    "routeDataPointId": "448",
    "segmentId": "1",
    "time": 1672158527026,
    "velocity": 128,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80803,
        45.34538
    ]
},
{
    "routeDataPointId": "449",
    "segmentId": "1",
    "time": 1672158527036,
    "velocity": 129,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80937,
        45.34524
    ]
},
{
    "routeDataPointId": "450",
    "segmentId": "1",
    "time": 1672158527046,
    "velocity": 130,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.81008,
        45.34513
    ]
},
{
    "routeDataPointId": "451",
    "segmentId": "1",
    "time": 1672158527056,
    "velocity": 131,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81019,
        45.34503
    ]
},
{
    "routeDataPointId": "452",
    "segmentId": "1",
    "time": 1672158527066,
    "velocity": 132,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.81114,
        45.34482
    ]
},
{
    "routeDataPointId": "453",
    "segmentId": "1",
    "time": 1672158527076,
    "velocity": 133,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.81123,
        45.34479
    ]
},
{
    "routeDataPointId": "454",
    "segmentId": "1",
    "time": 1672158527086,
    "velocity": 134,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81159,
        45.3447
    ]
},
{
    "routeDataPointId": "455",
    "segmentId": "1",
    "time": 1672158527096,
    "velocity": 135,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81247,
        45.34444
    ]
},
{
    "routeDataPointId": "456",
    "segmentId": "1",
    "time": 1672158527106,
    "velocity": 136,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81314,
        45.34418
    ]
},
{
    "routeDataPointId": "457",
    "segmentId": "1",
    "time": 1672158527116,
    "velocity": 137,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81344,
        45.34404
    ]
},
{
    "routeDataPointId": "458",
    "segmentId": "1",
    "time": 1672158527126,
    "velocity": 138,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81359,
        45.34396
    ]
},
{
    "routeDataPointId": "459",
    "segmentId": "1",
    "time": 1672158527136,
    "velocity": 139,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81375,
        45.34386
    ]
},
{
    "routeDataPointId": "460",
    "segmentId": "1",
    "time": 1672158527146,
    "velocity": 140,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.81381,
        45.34383
    ]
},
{
    "routeDataPointId": "461",
    "segmentId": "1",
    "time": 1672158527156,
    "velocity": 141,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.81394,
        45.34375
    ]
},
{
    "routeDataPointId": "462",
    "segmentId": "1",
    "time": 1672158527166,
    "velocity": 142,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.81425,
        45.34354
    ]
},
{
    "routeDataPointId": "463",
    "segmentId": "1",
    "time": 1672158527176,
    "velocity": 143,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81449,
        45.34334
    ]
},
{
    "routeDataPointId": "464",
    "segmentId": "1",
    "time": 1672158527186,
    "velocity": 144,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "foo bar",
    "coordinates": [
        -75.81478,
        45.34306
    ]
},
{
    "routeDataPointId": "465",
    "segmentId": "1",
    "time": 1672158527196,
    "velocity": 145,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8149,
        45.34292
    ]
},
{
    "routeDataPointId": "466",
    "segmentId": "1",
    "time": 1672158527206,
    "velocity": 146,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.81513,
        45.34262
    ]
},
{
    "routeDataPointId": "467",
    "segmentId": "1",
    "time": 1672158527216,
    "velocity": 147,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81521,
        45.3425
    ]
},
{
    "routeDataPointId": "468",
    "segmentId": "1",
    "time": 1672158527226,
    "velocity": 148,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.81531,
        45.34232
    ]
},
{
    "routeDataPointId": "469",
    "segmentId": "1",
    "time": 1672158527236,
    "velocity": 149,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.8155,
        45.34192
    ]
},
{
    "routeDataPointId": "470",
    "segmentId": "1",
    "time": 1672158527246,
    "velocity": 150,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.8156,
        45.34159
    ]
},
{
    "routeDataPointId": "471",
    "segmentId": "1",
    "time": 1672158527256,
    "velocity": 151,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81563,
        45.34145
    ]
},
{
    "routeDataPointId": "472",
    "segmentId": "1",
    "time": 1672158527266,
    "velocity": 152,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.81566,
        45.34119
    ]
},
{
    "routeDataPointId": "473",
    "segmentId": "1",
    "time": 1672158527276,
    "velocity": 153,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.81566,
        45.34106
    ]
},
{
    "routeDataPointId": "474",
    "segmentId": "1",
    "time": 1672158527286,
    "velocity": 154,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.81567,
        45.34084
    ]
},
{
    "routeDataPointId": "475",
    "segmentId": "1",
    "time": 1672158527296,
    "velocity": 155,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.81566,
        45.34083
    ]
},
{
    "routeDataPointId": "476",
    "segmentId": "1",
    "time": 1672158527306,
    "velocity": 156,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81564,
        45.34066
    ]
},
{
    "routeDataPointId": "477",
    "segmentId": "1",
    "time": 1672158527316,
    "velocity": 157,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81563,
        45.34052
    ]
},
{
    "routeDataPointId": "478",
    "segmentId": "1",
    "time": 1672158527326,
    "velocity": 158,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.81558,
        45.3403
    ]
},
{
    "routeDataPointId": "479",
    "segmentId": "1",
    "time": 1672158527336,
    "velocity": 159,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81552,
        45.3401
    ]
},
{
    "routeDataPointId": "480",
    "segmentId": "1",
    "time": 1672158527346,
    "velocity": 0,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.81539,
        45.33978
    ]
},
{
    "routeDataPointId": "481",
    "segmentId": "1",
    "time": 1672158527356,
    "velocity": 1,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.81529,
        45.33959
    ]
},
{
    "routeDataPointId": "482",
    "segmentId": "1",
    "time": 1672158527366,
    "velocity": 2,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81527,
        45.33956
    ]
},
{
    "routeDataPointId": "483",
    "segmentId": "1",
    "time": 1672158527376,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81521,
        45.33944
    ]
},
{
    "routeDataPointId": "484",
    "segmentId": "1",
    "time": 1672158527386,
    "velocity": 4,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.81506,
        45.33919
    ]
},
{
    "routeDataPointId": "485",
    "segmentId": "1",
    "time": 1672158527396,
    "velocity": 5,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.81499,
        45.3391
    ]
},
{
    "routeDataPointId": "486",
    "segmentId": "1",
    "time": 1672158527406,
    "velocity": 6,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.81485,
        45.3389
    ]
},
{
    "routeDataPointId": "487",
    "segmentId": "1",
    "time": 1672158527416,
    "velocity": 7,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81478,
        45.33881
    ]
},
{
    "routeDataPointId": "488",
    "segmentId": "1",
    "time": 1672158527426,
    "velocity": 8,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81464,
        45.33861
    ]
},
{
    "routeDataPointId": "489",
    "segmentId": "1",
    "time": 1672158527436,
    "velocity": 9,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81446,
        45.33838
    ]
},
{
    "routeDataPointId": "490",
    "segmentId": "1",
    "time": 1672158527446,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.81443,
        45.33833
    ]
},
{
    "routeDataPointId": "491",
    "segmentId": "1",
    "time": 1672158527456,
    "velocity": 11,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.81435,
        45.33824
    ]
},
{
    "routeDataPointId": "492",
    "segmentId": "1",
    "time": 1672158527466,
    "velocity": 12,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81417,
        45.33798
    ]
},
{
    "routeDataPointId": "493",
    "segmentId": "1",
    "time": 1672158527476,
    "velocity": 13,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.81414,
        45.33795
    ]
},
{
    "routeDataPointId": "494",
    "segmentId": "1",
    "time": 1672158527486,
    "velocity": 14,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81407,
        45.33786
    ]
},
{
    "routeDataPointId": "495",
    "segmentId": "1",
    "time": 1672158527496,
    "velocity": 15,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.814,
        45.33776
    ]
},
{
    "routeDataPointId": "496",
    "segmentId": "1",
    "time": 1672158527506,
    "velocity": 16,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81393,
        45.33767
    ]
},
{
    "routeDataPointId": "497",
    "segmentId": "1",
    "time": 1672158527516,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81386,
        45.33757
    ]
},
{
    "routeDataPointId": "498",
    "segmentId": "1",
    "time": 1672158527526,
    "velocity": 18,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81379,
        45.33748
    ]
},
{
    "routeDataPointId": "499",
    "segmentId": "1",
    "time": 1672158527536,
    "velocity": 19,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.81372,
        45.33738
    ]
},
{
    "routeDataPointId": "500",
    "segmentId": "1",
    "time": 1672158527546,
    "velocity": 20,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.81365,
        45.33729
    ]
},
{
    "routeDataPointId": "501",
    "segmentId": "1",
    "time": 1672158527556,
    "velocity": 21,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81358,
        45.33719
    ]
},
{
    "routeDataPointId": "502",
    "segmentId": "1",
    "time": 1672158527566,
    "velocity": 22,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.81344,
        45.33701
    ]
},
{
    "routeDataPointId": "503",
    "segmentId": "1",
    "time": 1672158527576,
    "velocity": 23,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81337,
        45.33691
    ]
},
{
    "routeDataPointId": "504",
    "segmentId": "1",
    "time": 1672158527586,
    "velocity": 24,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8133,
        45.33682
    ]
},
{
    "routeDataPointId": "505",
    "segmentId": "1",
    "time": 1672158527596,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.81328,
        45.33678
    ]
},
{
    "routeDataPointId": "506",
    "segmentId": "1",
    "time": 1672158527606,
    "velocity": 26,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.81323,
        45.33672
    ]
},
{
    "routeDataPointId": "507",
    "segmentId": "1",
    "time": 1672158527616,
    "velocity": 27,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.81316,
        45.33662
    ]
},
{
    "routeDataPointId": "508",
    "segmentId": "1",
    "time": 1672158527626,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.81309,
        45.33653
    ]
},
{
    "routeDataPointId": "509",
    "segmentId": "1",
    "time": 1672158527636,
    "velocity": 29,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.81296,
        45.33634
    ]
},
{
    "routeDataPointId": "510",
    "segmentId": "1",
    "time": 1672158527646,
    "velocity": 30,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81288,
        45.33624
    ]
},
{
    "routeDataPointId": "511",
    "segmentId": "1",
    "time": 1672158527656,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.81281,
        45.33614
    ]
},
{
    "routeDataPointId": "512",
    "segmentId": "1",
    "time": 1672158527666,
    "velocity": 32,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81267,
        45.33596
    ]
},
{
    "routeDataPointId": "513",
    "segmentId": "1",
    "time": 1672158527676,
    "velocity": 33,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81176,
        45.33472
    ]
},
{
    "routeDataPointId": "514",
    "segmentId": "1",
    "time": 1672158527686,
    "velocity": 34,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.81172,
        45.33466
    ]
},
{
    "routeDataPointId": "515",
    "segmentId": "1",
    "time": 1672158527696,
    "velocity": 35,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.81162,
        45.33453
    ]
},
{
    "routeDataPointId": "516",
    "segmentId": "1",
    "time": 1672158527706,
    "velocity": 36,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81155,
        45.33443
    ]
},
{
    "routeDataPointId": "517",
    "segmentId": "1",
    "time": 1672158527716,
    "velocity": 37,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.81148,
        45.33434
    ]
},
{
    "routeDataPointId": "518",
    "segmentId": "1",
    "time": 1672158527726,
    "velocity": 38,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.81141,
        45.33424
    ]
},
{
    "routeDataPointId": "519",
    "segmentId": "1",
    "time": 1672158527736,
    "velocity": 39,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.81135,
        45.33414
    ]
},
{
    "routeDataPointId": "520",
    "segmentId": "1",
    "time": 1672158527746,
    "velocity": 40,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.81128,
        45.33405
    ]
},
{
    "routeDataPointId": "521",
    "segmentId": "1",
    "time": 1672158527756,
    "velocity": 41,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.81121,
        45.33395
    ]
},
{
    "routeDataPointId": "522",
    "segmentId": "1",
    "time": 1672158527766,
    "velocity": 42,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.81114,
        45.33386
    ]
},
{
    "routeDataPointId": "523",
    "segmentId": "1",
    "time": 1672158527776,
    "velocity": 43,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81085,
        45.33343
    ]
},
{
    "routeDataPointId": "524",
    "segmentId": "1",
    "time": 1672158527786,
    "velocity": 44,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.81074,
        45.33328
    ]
},
{
    "routeDataPointId": "525",
    "segmentId": "1",
    "time": 1672158527796,
    "velocity": 45,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81068,
        45.33318
    ]
},
{
    "routeDataPointId": "526",
    "segmentId": "1",
    "time": 1672158527806,
    "velocity": 46,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.81061,
        45.33309
    ]
},
{
    "routeDataPointId": "527",
    "segmentId": "1",
    "time": 1672158527816,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.81054,
        45.33299
    ]
},
{
    "routeDataPointId": "528",
    "segmentId": "1",
    "time": 1672158527826,
    "velocity": 48,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.81048,
        45.33289
    ]
},
{
    "routeDataPointId": "529",
    "segmentId": "1",
    "time": 1672158527836,
    "velocity": 49,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81044,
        45.33284
    ]
},
{
    "routeDataPointId": "530",
    "segmentId": "1",
    "time": 1672158527846,
    "velocity": 50,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.81042,
        45.3328
    ]
},
{
    "routeDataPointId": "531",
    "segmentId": "1",
    "time": 1672158527856,
    "velocity": 51,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81035,
        45.3327
    ]
},
{
    "routeDataPointId": "532",
    "segmentId": "1",
    "time": 1672158527866,
    "velocity": 52,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.81026,
        45.33255
    ]
},
{
    "routeDataPointId": "533",
    "segmentId": "1",
    "time": 1672158527876,
    "velocity": 53,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.81022,
        45.3325
    ]
},
{
    "routeDataPointId": "534",
    "segmentId": "1",
    "time": 1672158527886,
    "velocity": 54,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81016,
        45.33241
    ]
},
{
    "routeDataPointId": "535",
    "segmentId": "1",
    "time": 1672158527896,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.8101,
        45.33231
    ]
},
{
    "routeDataPointId": "536",
    "segmentId": "1",
    "time": 1672158527906,
    "velocity": 56,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.81003,
        45.33221
    ]
},
{
    "routeDataPointId": "537",
    "segmentId": "1",
    "time": 1672158527916,
    "velocity": 57,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80997,
        45.33211
    ]
},
{
    "routeDataPointId": "538",
    "segmentId": "1",
    "time": 1672158527926,
    "velocity": 58,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80991,
        45.33202
    ]
},
{
    "routeDataPointId": "539",
    "segmentId": "1",
    "time": 1672158527936,
    "velocity": 59,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80985,
        45.33192
    ]
},
{
    "routeDataPointId": "540",
    "segmentId": "1",
    "time": 1672158527946,
    "velocity": 60,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80972,
        45.33173
    ]
},
{
    "routeDataPointId": "541",
    "segmentId": "1",
    "time": 1672158527956,
    "velocity": 61,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80968,
        45.33165
    ]
},
{
    "routeDataPointId": "542",
    "segmentId": "1",
    "time": 1672158527966,
    "velocity": 62,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80947,
        45.33134
    ]
},
{
    "routeDataPointId": "543",
    "segmentId": "1",
    "time": 1672158527976,
    "velocity": 63,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80935,
        45.33114
    ]
},
{
    "routeDataPointId": "544",
    "segmentId": "1",
    "time": 1672158527986,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80928,
        45.33104
    ]
},
{
    "routeDataPointId": "545",
    "segmentId": "1",
    "time": 1672158527996,
    "velocity": 65,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80922,
        45.33094
    ]
},
{
    "routeDataPointId": "546",
    "segmentId": "1",
    "time": 1672158528006,
    "velocity": 66,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80916,
        45.33085
    ]
},
{
    "routeDataPointId": "547",
    "segmentId": "1",
    "time": 1672158528016,
    "velocity": 67,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8091,
        45.33074
    ]
},
{
    "routeDataPointId": "548",
    "segmentId": "1",
    "time": 1672158528026,
    "velocity": 68,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80904,
        45.33065
    ]
},
{
    "routeDataPointId": "549",
    "segmentId": "1",
    "time": 1672158528036,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80851,
        45.32976
    ]
},
{
    "routeDataPointId": "550",
    "segmentId": "1",
    "time": 1672158528046,
    "velocity": 70,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80846,
        45.32966
    ]
},
{
    "routeDataPointId": "551",
    "segmentId": "1",
    "time": 1672158528056,
    "velocity": 71,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.8084,
        45.32956
    ]
},
{
    "routeDataPointId": "552",
    "segmentId": "1",
    "time": 1672158528066,
    "velocity": 72,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80834,
        45.32947
    ]
},
{
    "routeDataPointId": "553",
    "segmentId": "1",
    "time": 1672158528076,
    "velocity": 73,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80823,
        45.32926
    ]
},
{
    "routeDataPointId": "554",
    "segmentId": "1",
    "time": 1672158528086,
    "velocity": 74,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80812,
        45.32907
    ]
},
{
    "routeDataPointId": "555",
    "segmentId": "1",
    "time": 1672158528096,
    "velocity": 75,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80812,
        45.32906
    ]
},
{
    "routeDataPointId": "556",
    "segmentId": "1",
    "time": 1672158528106,
    "velocity": 76,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80806,
        45.32897
    ]
},
{
    "routeDataPointId": "557",
    "segmentId": "1",
    "time": 1672158528116,
    "velocity": 77,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80796,
        45.32877
    ]
},
{
    "routeDataPointId": "558",
    "segmentId": "1",
    "time": 1672158528126,
    "velocity": 78,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80784,
        45.32857
    ]
},
{
    "routeDataPointId": "559",
    "segmentId": "1",
    "time": 1672158528136,
    "velocity": 79,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80763,
        45.32817
    ]
},
{
    "routeDataPointId": "560",
    "segmentId": "1",
    "time": 1672158528146,
    "velocity": 80,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80757,
        45.32807
    ]
},
{
    "routeDataPointId": "561",
    "segmentId": "1",
    "time": 1672158528156,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80742,
        45.32777
    ]
},
{
    "routeDataPointId": "562",
    "segmentId": "1",
    "time": 1672158528166,
    "velocity": 82,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80736,
        45.32767
    ]
},
{
    "routeDataPointId": "563",
    "segmentId": "1",
    "time": 1672158528176,
    "velocity": 83,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80731,
        45.32756
    ]
},
{
    "routeDataPointId": "564",
    "segmentId": "1",
    "time": 1672158528186,
    "velocity": 84,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80726,
        45.32747
    ]
},
{
    "routeDataPointId": "565",
    "segmentId": "1",
    "time": 1672158528196,
    "velocity": 85,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80716,
        45.32726
    ]
},
{
    "routeDataPointId": "566",
    "segmentId": "1",
    "time": 1672158528206,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8071,
        45.32716
    ]
},
{
    "routeDataPointId": "567",
    "segmentId": "1",
    "time": 1672158528216,
    "velocity": 87,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.807,
        45.32697
    ]
},
{
    "routeDataPointId": "568",
    "segmentId": "1",
    "time": 1672158528226,
    "velocity": 88,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80695,
        45.32686
    ]
},
{
    "routeDataPointId": "569",
    "segmentId": "1",
    "time": 1672158528236,
    "velocity": 89,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80691,
        45.32676
    ]
},
{
    "routeDataPointId": "570",
    "segmentId": "1",
    "time": 1672158528246,
    "velocity": 90,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80687,
        45.3267
    ]
},
{
    "routeDataPointId": "571",
    "segmentId": "1",
    "time": 1672158528256,
    "velocity": 91,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80686,
        45.32666
    ]
},
{
    "routeDataPointId": "572",
    "segmentId": "1",
    "time": 1672158528266,
    "velocity": 92,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8068,
        45.32656
    ]
},
{
    "routeDataPointId": "573",
    "segmentId": "1",
    "time": 1672158528276,
    "velocity": 93,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80676,
        45.32646
    ]
},
{
    "routeDataPointId": "574",
    "segmentId": "1",
    "time": 1672158528286,
    "velocity": 94,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80645,
        45.32583
    ]
},
{
    "routeDataPointId": "575",
    "segmentId": "1",
    "time": 1672158528296,
    "velocity": 95,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80636,
        45.32563
    ]
},
{
    "routeDataPointId": "576",
    "segmentId": "1",
    "time": 1672158528306,
    "velocity": 96,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80633,
        45.32554
    ]
},
{
    "routeDataPointId": "577",
    "segmentId": "1",
    "time": 1672158528316,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80628,
        45.32543
    ]
},
{
    "routeDataPointId": "578",
    "segmentId": "1",
    "time": 1672158528326,
    "velocity": 98,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.8062,
        45.32522
    ]
},
{
    "routeDataPointId": "579",
    "segmentId": "1",
    "time": 1672158528336,
    "velocity": 99,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80617,
        45.32512
    ]
},
{
    "routeDataPointId": "580",
    "segmentId": "1",
    "time": 1672158528346,
    "velocity": 100,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80615,
        45.32508
    ]
},
{
    "routeDataPointId": "581",
    "segmentId": "1",
    "time": 1672158528356,
    "velocity": 101,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80614,
        45.32502
    ]
},
{
    "routeDataPointId": "582",
    "segmentId": "1",
    "time": 1672158528366,
    "velocity": 102,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.8061,
        45.32491
    ]
},
{
    "routeDataPointId": "583",
    "segmentId": "1",
    "time": 1672158528376,
    "velocity": 103,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80604,
        45.3247
    ]
},
{
    "routeDataPointId": "584",
    "segmentId": "1",
    "time": 1672158528386,
    "velocity": 104,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80602,
        45.32459
    ]
},
{
    "routeDataPointId": "585",
    "segmentId": "1",
    "time": 1672158528396,
    "velocity": 105,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80596,
        45.32439
    ]
},
{
    "routeDataPointId": "586",
    "segmentId": "1",
    "time": 1672158528406,
    "velocity": 106,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80596,
        45.32437
    ]
},
{
    "routeDataPointId": "587",
    "segmentId": "1",
    "time": 1672158528416,
    "velocity": 107,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.8059,
        45.32407
    ]
},
{
    "routeDataPointId": "588",
    "segmentId": "1",
    "time": 1672158528426,
    "velocity": 108,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80584,
        45.32343
    ]
},
{
    "routeDataPointId": "589",
    "segmentId": "1",
    "time": 1672158528436,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80584,
        45.32334
    ]
},
{
    "routeDataPointId": "590",
    "segmentId": "1",
    "time": 1672158528446,
    "velocity": 110,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80583,
        45.32321
    ]
},
{
    "routeDataPointId": "591",
    "segmentId": "1",
    "time": 1672158528456,
    "velocity": 111,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80583,
        45.323
    ]
},
{
    "routeDataPointId": "592",
    "segmentId": "1",
    "time": 1672158528466,
    "velocity": 112,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80584,
        45.32289
    ]
},
{
    "routeDataPointId": "593",
    "segmentId": "1",
    "time": 1672158528476,
    "velocity": 113,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80584,
        45.32236
    ]
},
{
    "routeDataPointId": "594",
    "segmentId": "1",
    "time": 1672158528486,
    "velocity": 114,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80585,
        45.32225
    ]
},
{
    "routeDataPointId": "595",
    "segmentId": "1",
    "time": 1672158528496,
    "velocity": 115,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80585,
        45.32203
    ]
},
{
    "routeDataPointId": "596",
    "segmentId": "1",
    "time": 1672158528506,
    "velocity": 116,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80586,
        45.32192
    ]
},
{
    "routeDataPointId": "597",
    "segmentId": "1",
    "time": 1672158528516,
    "velocity": 117,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80586,
        45.3216
    ]
},
{
    "routeDataPointId": "598",
    "segmentId": "1",
    "time": 1672158528526,
    "velocity": 118,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80587,
        45.32149
    ]
},
{
    "routeDataPointId": "599",
    "segmentId": "1",
    "time": 1672158528536,
    "velocity": 119,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80587,
        45.32119
    ]
},
{
    "routeDataPointId": "600",
    "segmentId": "1",
    "time": 1672158528546,
    "velocity": 120,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80589,
        45.32083
    ]
},
{
    "routeDataPointId": "601",
    "segmentId": "1",
    "time": 1672158528556,
    "velocity": 121,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80589,
        45.32005
    ]
},
{
    "routeDataPointId": "602",
    "segmentId": "1",
    "time": 1672158528566,
    "velocity": 122,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80587,
        45.31977
    ]
},
{
    "routeDataPointId": "603",
    "segmentId": "1",
    "time": 1672158528576,
    "velocity": 123,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80585,
        45.3196
    ]
},
{
    "routeDataPointId": "604",
    "segmentId": "1",
    "time": 1672158528586,
    "velocity": 124,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80585,
        45.31958
    ]
},
{
    "routeDataPointId": "605",
    "segmentId": "1",
    "time": 1672158528596,
    "velocity": 125,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80577,
        45.31902
    ]
},
{
    "routeDataPointId": "606",
    "segmentId": "1",
    "time": 1672158528606,
    "velocity": 126,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80566,
        45.31857
    ]
},
{
    "routeDataPointId": "607",
    "segmentId": "1",
    "time": 1672158528616,
    "velocity": 127,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80558,
        45.31831
    ]
},
{
    "routeDataPointId": "608",
    "segmentId": "1",
    "time": 1672158528626,
    "velocity": 128,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80541,
        45.31783
    ]
},
{
    "routeDataPointId": "609",
    "segmentId": "1",
    "time": 1672158528636,
    "velocity": 129,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80535,
        45.3177
    ]
},
{
    "routeDataPointId": "610",
    "segmentId": "1",
    "time": 1672158528646,
    "velocity": 130,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80528,
        45.31753
    ]
},
{
    "routeDataPointId": "611",
    "segmentId": "1",
    "time": 1672158528656,
    "velocity": 131,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80518,
        45.31734
    ]
},
{
    "routeDataPointId": "612",
    "segmentId": "1",
    "time": 1672158528666,
    "velocity": 132,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80511,
        45.31717
    ]
},
{
    "routeDataPointId": "613",
    "segmentId": "1",
    "time": 1672158528676,
    "velocity": 133,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80498,
        45.31694
    ]
},
{
    "routeDataPointId": "614",
    "segmentId": "1",
    "time": 1672158528686,
    "velocity": 134,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80491,
        45.31683
    ]
},
{
    "routeDataPointId": "615",
    "segmentId": "1",
    "time": 1672158528696,
    "velocity": 135,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80486,
        45.31673
    ]
},
{
    "routeDataPointId": "616",
    "segmentId": "1",
    "time": 1672158528706,
    "velocity": 136,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8048,
        45.31663
    ]
},
{
    "routeDataPointId": "617",
    "segmentId": "1",
    "time": 1672158528716,
    "velocity": 137,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80436,
        45.316
    ]
},
{
    "routeDataPointId": "618",
    "segmentId": "1",
    "time": 1672158528726,
    "velocity": 138,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80406,
        45.31562
    ]
},
{
    "routeDataPointId": "619",
    "segmentId": "1",
    "time": 1672158528736,
    "velocity": 139,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80356,
        45.31502
    ]
},
{
    "routeDataPointId": "620",
    "segmentId": "1",
    "time": 1672158528746,
    "velocity": 140,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80346,
        45.31489
    ]
},
{
    "routeDataPointId": "621",
    "segmentId": "1",
    "time": 1672158528756,
    "velocity": 141,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80271,
        45.31398
    ]
},
{
    "routeDataPointId": "622",
    "segmentId": "1",
    "time": 1672158528766,
    "velocity": 142,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80257,
        45.3138
    ]
},
{
    "routeDataPointId": "623",
    "segmentId": "1",
    "time": 1672158528776,
    "velocity": 143,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80242,
        45.31362
    ]
},
{
    "routeDataPointId": "624",
    "segmentId": "1",
    "time": 1672158528786,
    "velocity": 144,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80233,
        45.31352
    ]
},
{
    "routeDataPointId": "625",
    "segmentId": "1",
    "time": 1672158528796,
    "velocity": 145,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "foo bar",
    "coordinates": [
        -75.80226,
        45.31343
    ]
},
{
    "routeDataPointId": "626",
    "segmentId": "1",
    "time": 1672158528806,
    "velocity": 146,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80218,
        45.31334
    ]
},
{
    "routeDataPointId": "627",
    "segmentId": "1",
    "time": 1672158528816,
    "velocity": 147,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80179,
        45.31286
    ]
},
{
    "routeDataPointId": "628",
    "segmentId": "1",
    "time": 1672158528826,
    "velocity": 148,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80173,
        45.31278
    ]
},
{
    "routeDataPointId": "629",
    "segmentId": "1",
    "time": 1672158528836,
    "velocity": 149,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80165,
        45.31269
    ]
},
{
    "routeDataPointId": "630",
    "segmentId": "1",
    "time": 1672158528846,
    "velocity": 150,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80163,
        45.31266
    ]
},
{
    "routeDataPointId": "631",
    "segmentId": "1",
    "time": 1672158528856,
    "velocity": 151,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80149,
        45.3125
    ]
},
{
    "routeDataPointId": "632",
    "segmentId": "1",
    "time": 1672158528866,
    "velocity": 152,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80063,
        45.31146
    ]
},
{
    "routeDataPointId": "633",
    "segmentId": "1",
    "time": 1672158528876,
    "velocity": 153,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80057,
        45.31138
    ]
},
{
    "routeDataPointId": "634",
    "segmentId": "1",
    "time": 1672158528886,
    "velocity": 154,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.8004,
        45.31118
    ]
},
{
    "routeDataPointId": "635",
    "segmentId": "1",
    "time": 1672158528896,
    "velocity": 155,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80027,
        45.31101
    ]
},
{
    "routeDataPointId": "636",
    "segmentId": "1",
    "time": 1672158528906,
    "velocity": 156,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8001,
        45.31081
    ]
},
{
    "routeDataPointId": "637",
    "segmentId": "1",
    "time": 1672158528916,
    "velocity": 157,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80004,
        45.31073
    ]
},
{
    "routeDataPointId": "638",
    "segmentId": "1",
    "time": 1672158528926,
    "velocity": 158,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79988,
        45.31054
    ]
},
{
    "routeDataPointId": "639",
    "segmentId": "1",
    "time": 1672158528936,
    "velocity": 159,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7998,
        45.31043
    ]
},
{
    "routeDataPointId": "640",
    "segmentId": "1",
    "time": 1672158528946,
    "velocity": 0,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79975,
        45.31038
    ]
},
{
    "routeDataPointId": "641",
    "segmentId": "1",
    "time": 1672158528956,
    "velocity": 1,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79944,
        45.31
    ]
},
{
    "routeDataPointId": "642",
    "segmentId": "1",
    "time": 1672158528966,
    "velocity": 2,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79943,
        45.30998
    ]
},
{
    "routeDataPointId": "643",
    "segmentId": "1",
    "time": 1672158528976,
    "velocity": 3,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79906,
        45.30954
    ]
},
{
    "routeDataPointId": "644",
    "segmentId": "1",
    "time": 1672158528986,
    "velocity": 4,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79904,
        45.30951
    ]
},
{
    "routeDataPointId": "645",
    "segmentId": "1",
    "time": 1672158528996,
    "velocity": 5,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79767,
        45.30784
    ]
},
{
    "routeDataPointId": "646",
    "segmentId": "1",
    "time": 1672158529006,
    "velocity": 6,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79754,
        45.30769
    ]
},
{
    "routeDataPointId": "647",
    "segmentId": "1",
    "time": 1672158529016,
    "velocity": 7,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79659,
        45.30653
    ]
},
{
    "routeDataPointId": "648",
    "segmentId": "1",
    "time": 1672158529026,
    "velocity": 8,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79645,
        45.30635
    ]
},
{
    "routeDataPointId": "649",
    "segmentId": "1",
    "time": 1672158529036,
    "velocity": 9,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79613,
        45.30597
    ]
},
{
    "routeDataPointId": "650",
    "segmentId": "1",
    "time": 1672158529046,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79591,
        45.30569
    ]
},
{
    "routeDataPointId": "651",
    "segmentId": "1",
    "time": 1672158529056,
    "velocity": 11,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79568,
        45.30542
    ]
},
{
    "routeDataPointId": "652",
    "segmentId": "1",
    "time": 1672158529066,
    "velocity": 12,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79552,
        45.30522
    ]
},
{
    "routeDataPointId": "653",
    "segmentId": "1",
    "time": 1672158529076,
    "velocity": 13,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79529,
        45.30495
    ]
},
{
    "routeDataPointId": "654",
    "segmentId": "1",
    "time": 1672158529086,
    "velocity": 14,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79522,
        45.30486
    ]
},
{
    "routeDataPointId": "655",
    "segmentId": "1",
    "time": 1672158529096,
    "velocity": 15,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79518,
        45.3048
    ]
},
{
    "routeDataPointId": "656",
    "segmentId": "1",
    "time": 1672158529106,
    "velocity": 16,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79514,
        45.30476
    ]
},
{
    "routeDataPointId": "657",
    "segmentId": "1",
    "time": 1672158529116,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79468,
        45.30421
    ]
},
{
    "routeDataPointId": "658",
    "segmentId": "1",
    "time": 1672158529126,
    "velocity": 18,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79446,
        45.30393
    ]
},
{
    "routeDataPointId": "659",
    "segmentId": "1",
    "time": 1672158529136,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7943,
        45.30375
    ]
},
{
    "routeDataPointId": "660",
    "segmentId": "1",
    "time": 1672158529146,
    "velocity": 20,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79416,
        45.30357
    ]
},
{
    "routeDataPointId": "661",
    "segmentId": "1",
    "time": 1672158529156,
    "velocity": 21,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.794,
        45.30338
    ]
},
{
    "routeDataPointId": "662",
    "segmentId": "1",
    "time": 1672158529166,
    "velocity": 22,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79369,
        45.30299
    ]
},
{
    "routeDataPointId": "663",
    "segmentId": "1",
    "time": 1672158529176,
    "velocity": 23,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79358,
        45.30286
    ]
},
{
    "routeDataPointId": "664",
    "segmentId": "1",
    "time": 1672158529186,
    "velocity": 24,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79354,
        45.3028
    ]
},
{
    "routeDataPointId": "665",
    "segmentId": "1",
    "time": 1672158529196,
    "velocity": 25,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79334,
        45.30254
    ]
},
{
    "routeDataPointId": "666",
    "segmentId": "1",
    "time": 1672158529206,
    "velocity": 26,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79333,
        45.30251
    ]
},
{
    "routeDataPointId": "667",
    "segmentId": "1",
    "time": 1672158529216,
    "velocity": 27,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79327,
        45.30242
    ]
},
{
    "routeDataPointId": "668",
    "segmentId": "1",
    "time": 1672158529226,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7932,
        45.30233
    ]
},
{
    "routeDataPointId": "669",
    "segmentId": "1",
    "time": 1672158529236,
    "velocity": 29,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79315,
        45.30224
    ]
},
{
    "routeDataPointId": "670",
    "segmentId": "1",
    "time": 1672158529246,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7931,
        45.30216
    ]
},
{
    "routeDataPointId": "671",
    "segmentId": "1",
    "time": 1672158529256,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79292,
        45.30183
    ]
},
{
    "routeDataPointId": "672",
    "segmentId": "1",
    "time": 1672158529266,
    "velocity": 32,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79287,
        45.30172
    ]
},
{
    "routeDataPointId": "673",
    "segmentId": "1",
    "time": 1672158529276,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79283,
        45.30162
    ]
},
{
    "routeDataPointId": "674",
    "segmentId": "1",
    "time": 1672158529286,
    "velocity": 34,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79274,
        45.30142
    ]
},
{
    "routeDataPointId": "675",
    "segmentId": "1",
    "time": 1672158529296,
    "velocity": 35,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79271,
        45.3013
    ]
},
{
    "routeDataPointId": "676",
    "segmentId": "1",
    "time": 1672158529306,
    "velocity": 36,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79267,
        45.30121
    ]
},
{
    "routeDataPointId": "677",
    "segmentId": "1",
    "time": 1672158529316,
    "velocity": 37,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79261,
        45.301
    ]
},
{
    "routeDataPointId": "678",
    "segmentId": "1",
    "time": 1672158529326,
    "velocity": 38,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79256,
        45.30079
    ]
},
{
    "routeDataPointId": "679",
    "segmentId": "1",
    "time": 1672158529336,
    "velocity": 39,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79249,
        45.30045
    ]
},
{
    "routeDataPointId": "680",
    "segmentId": "1",
    "time": 1672158529346,
    "velocity": 40,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79246,
        45.30014
    ]
},
{
    "routeDataPointId": "681",
    "segmentId": "1",
    "time": 1672158529356,
    "velocity": 41,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79246,
        45.30004
    ]
},
{
    "routeDataPointId": "682",
    "segmentId": "1",
    "time": 1672158529366,
    "velocity": 42,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79245,
        45.29995
    ]
},
{
    "routeDataPointId": "683",
    "segmentId": "1",
    "time": 1672158529376,
    "velocity": 43,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79245,
        45.29969
    ]
},
{
    "routeDataPointId": "684",
    "segmentId": "1",
    "time": 1672158529386,
    "velocity": 44,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79247,
        45.2995
    ]
},
{
    "routeDataPointId": "685",
    "segmentId": "1",
    "time": 1672158529396,
    "velocity": 45,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79247,
        45.2994
    ]
},
{
    "routeDataPointId": "686",
    "segmentId": "1",
    "time": 1672158529406,
    "velocity": 46,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79249,
        45.29929
    ]
},
{
    "routeDataPointId": "687",
    "segmentId": "1",
    "time": 1672158529416,
    "velocity": 47,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79251,
        45.29908
    ]
},
{
    "routeDataPointId": "688",
    "segmentId": "1",
    "time": 1672158529426,
    "velocity": 48,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79253,
        45.29902
    ]
},
{
    "routeDataPointId": "689",
    "segmentId": "1",
    "time": 1672158529436,
    "velocity": 49,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79254,
        45.29895
    ]
},
{
    "routeDataPointId": "690",
    "segmentId": "1",
    "time": 1672158529446,
    "velocity": 50,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79258,
        45.29876
    ]
},
{
    "routeDataPointId": "691",
    "segmentId": "1",
    "time": 1672158529456,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79264,
        45.29855
    ]
},
{
    "routeDataPointId": "692",
    "segmentId": "1",
    "time": 1672158529466,
    "velocity": 52,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79264,
        45.29854
    ]
},
{
    "routeDataPointId": "693",
    "segmentId": "1",
    "time": 1672158529476,
    "velocity": 53,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79267,
        45.29844
    ]
},
{
    "routeDataPointId": "694",
    "segmentId": "1",
    "time": 1672158529486,
    "velocity": 54,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79279,
        45.29813
    ]
},
{
    "routeDataPointId": "695",
    "segmentId": "1",
    "time": 1672158529496,
    "velocity": 55,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79282,
        45.29803
    ]
},
{
    "routeDataPointId": "696",
    "segmentId": "1",
    "time": 1672158529506,
    "velocity": 56,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79292,
        45.29782
    ]
},
{
    "routeDataPointId": "697",
    "segmentId": "1",
    "time": 1672158529516,
    "velocity": 57,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79297,
        45.29773
    ]
},
{
    "routeDataPointId": "698",
    "segmentId": "1",
    "time": 1672158529526,
    "velocity": 58,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79302,
        45.29762
    ]
},
{
    "routeDataPointId": "699",
    "segmentId": "1",
    "time": 1672158529536,
    "velocity": 59,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79308,
        45.29751
    ]
},
{
    "routeDataPointId": "700",
    "segmentId": "1",
    "time": 1672158529546,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79314,
        45.29742
    ]
},
{
    "routeDataPointId": "701",
    "segmentId": "1",
    "time": 1672158529556,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79331,
        45.29714
    ]
},
{
    "routeDataPointId": "702",
    "segmentId": "1",
    "time": 1672158529566,
    "velocity": 62,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79339,
        45.29704
    ]
},
{
    "routeDataPointId": "703",
    "segmentId": "1",
    "time": 1672158529576,
    "velocity": 63,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79346,
        45.29693
    ]
},
{
    "routeDataPointId": "704",
    "segmentId": "1",
    "time": 1672158529586,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79354,
        45.29684
    ]
},
{
    "routeDataPointId": "705",
    "segmentId": "1",
    "time": 1672158529596,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7936,
        45.29676
    ]
},
{
    "routeDataPointId": "706",
    "segmentId": "1",
    "time": 1672158529606,
    "velocity": 66,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79368,
        45.29667
    ]
},
{
    "routeDataPointId": "707",
    "segmentId": "1",
    "time": 1672158529616,
    "velocity": 67,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79376,
        45.29657
    ]
},
{
    "routeDataPointId": "708",
    "segmentId": "1",
    "time": 1672158529626,
    "velocity": 68,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79385,
        45.29647
    ]
},
{
    "routeDataPointId": "709",
    "segmentId": "1",
    "time": 1672158529636,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.794,
        45.29632
    ]
},
{
    "routeDataPointId": "710",
    "segmentId": "1",
    "time": 1672158529646,
    "velocity": 70,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79409,
        45.29622
    ]
},
{
    "routeDataPointId": "711",
    "segmentId": "1",
    "time": 1672158529656,
    "velocity": 71,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79417,
        45.29615
    ]
},
{
    "routeDataPointId": "712",
    "segmentId": "1",
    "time": 1672158529666,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79429,
        45.29603
    ]
},
{
    "routeDataPointId": "713",
    "segmentId": "1",
    "time": 1672158529676,
    "velocity": 73,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79448,
        45.29586
    ]
},
{
    "routeDataPointId": "714",
    "segmentId": "1",
    "time": 1672158529686,
    "velocity": 74,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79458,
        45.29579
    ]
},
{
    "routeDataPointId": "715",
    "segmentId": "1",
    "time": 1672158529696,
    "velocity": 75,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79464,
        45.29573
    ]
},
{
    "routeDataPointId": "716",
    "segmentId": "1",
    "time": 1672158529706,
    "velocity": 76,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79469,
        45.2957
    ]
},
{
    "routeDataPointId": "717",
    "segmentId": "1",
    "time": 1672158529716,
    "velocity": 77,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79477,
        45.29563
    ]
},
{
    "routeDataPointId": "718",
    "segmentId": "1",
    "time": 1672158529726,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79498,
        45.29547
    ]
},
{
    "routeDataPointId": "719",
    "segmentId": "1",
    "time": 1672158529736,
    "velocity": 79,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7952,
        45.29532
    ]
},
{
    "routeDataPointId": "720",
    "segmentId": "1",
    "time": 1672158529746,
    "velocity": 80,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79542,
        45.29516
    ]
},
{
    "routeDataPointId": "721",
    "segmentId": "1",
    "time": 1672158529756,
    "velocity": 81,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79552,
        45.2951
    ]
},
{
    "routeDataPointId": "722",
    "segmentId": "1",
    "time": 1672158529766,
    "velocity": 82,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79564,
        45.29501
    ]
},
{
    "routeDataPointId": "723",
    "segmentId": "1",
    "time": 1672158529776,
    "velocity": 83,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79629,
        45.29456
    ]
},
{
    "routeDataPointId": "724",
    "segmentId": "1",
    "time": 1672158529786,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7964,
        45.29449
    ]
},
{
    "routeDataPointId": "725",
    "segmentId": "1",
    "time": 1672158529796,
    "velocity": 85,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79651,
        45.29441
    ]
},
{
    "routeDataPointId": "726",
    "segmentId": "1",
    "time": 1672158529806,
    "velocity": 86,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79662,
        45.29434
    ]
},
{
    "routeDataPointId": "727",
    "segmentId": "1",
    "time": 1672158529816,
    "velocity": 87,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79684,
        45.29418
    ]
},
{
    "routeDataPointId": "728",
    "segmentId": "1",
    "time": 1672158529826,
    "velocity": 88,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79685,
        45.29417
    ]
},
{
    "routeDataPointId": "729",
    "segmentId": "1",
    "time": 1672158529836,
    "velocity": 89,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79781,
        45.29351
    ]
},
{
    "routeDataPointId": "730",
    "segmentId": "1",
    "time": 1672158529846,
    "velocity": 90,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79789,
        45.29345
    ]
},
{
    "routeDataPointId": "731",
    "segmentId": "1",
    "time": 1672158529856,
    "velocity": 91,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79847,
        45.29305
    ]
},
{
    "routeDataPointId": "732",
    "segmentId": "1",
    "time": 1672158529866,
    "velocity": 92,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79858,
        45.29298
    ]
},
{
    "routeDataPointId": "733",
    "segmentId": "1",
    "time": 1672158529876,
    "velocity": 93,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7989,
        45.29275
    ]
},
{
    "routeDataPointId": "734",
    "segmentId": "1",
    "time": 1672158529886,
    "velocity": 94,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79924,
        45.29252
    ]
},
{
    "routeDataPointId": "735",
    "segmentId": "1",
    "time": 1672158529896,
    "velocity": 95,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79935,
        45.29244
    ]
},
{
    "routeDataPointId": "736",
    "segmentId": "1",
    "time": 1672158529906,
    "velocity": 96,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79974,
        45.29218
    ]
},
{
    "routeDataPointId": "737",
    "segmentId": "1",
    "time": 1672158529916,
    "velocity": 97,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79988,
        45.29207
    ]
},
{
    "routeDataPointId": "738",
    "segmentId": "1",
    "time": 1672158529926,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79999,
        45.292
    ]
},
{
    "routeDataPointId": "739",
    "segmentId": "1",
    "time": 1672158529936,
    "velocity": 99,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80032,
        45.29177
    ]
},
{
    "routeDataPointId": "740",
    "segmentId": "1",
    "time": 1672158529946,
    "velocity": 100,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80043,
        45.2917
    ]
},
{
    "routeDataPointId": "741",
    "segmentId": "1",
    "time": 1672158529956,
    "velocity": 101,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80065,
        45.29154
    ]
},
{
    "routeDataPointId": "742",
    "segmentId": "1",
    "time": 1672158529966,
    "velocity": 102,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80086,
        45.2914
    ]
},
{
    "routeDataPointId": "743",
    "segmentId": "1",
    "time": 1672158529976,
    "velocity": 103,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.8014,
        45.29102
    ]
},
{
    "routeDataPointId": "744",
    "segmentId": "1",
    "time": 1672158529986,
    "velocity": 104,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80151,
        45.29095
    ]
},
{
    "routeDataPointId": "745",
    "segmentId": "1",
    "time": 1672158529996,
    "velocity": 105,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80173,
        45.29079
    ]
},
{
    "routeDataPointId": "746",
    "segmentId": "1",
    "time": 1672158530006,
    "velocity": 106,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80206,
        45.29057
    ]
},
{
    "routeDataPointId": "747",
    "segmentId": "1",
    "time": 1672158530016,
    "velocity": 107,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80271,
        45.2901
    ]
},
{
    "routeDataPointId": "748",
    "segmentId": "1",
    "time": 1672158530026,
    "velocity": 108,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.803,
        45.28987
    ]
},
{
    "routeDataPointId": "749",
    "segmentId": "1",
    "time": 1672158530036,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80325,
        45.28965
    ]
},
{
    "routeDataPointId": "750",
    "segmentId": "1",
    "time": 1672158530046,
    "velocity": 110,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80328,
        45.28963
    ]
},
{
    "routeDataPointId": "751",
    "segmentId": "1",
    "time": 1672158530056,
    "velocity": 111,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80358,
        45.28935
    ]
},
{
    "routeDataPointId": "752",
    "segmentId": "1",
    "time": 1672158530066,
    "velocity": 112,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80391,
        45.28902
    ]
},
{
    "routeDataPointId": "753",
    "segmentId": "1",
    "time": 1672158530076,
    "velocity": 113,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.804,
        45.28892
    ]
},
{
    "routeDataPointId": "754",
    "segmentId": "1",
    "time": 1672158530086,
    "velocity": 114,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80408,
        45.28882
    ]
},
{
    "routeDataPointId": "755",
    "segmentId": "1",
    "time": 1672158530096,
    "velocity": 115,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80424,
        45.28864
    ]
},
{
    "routeDataPointId": "756",
    "segmentId": "1",
    "time": 1672158530106,
    "velocity": 116,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80453,
        45.28827
    ]
},
{
    "routeDataPointId": "757",
    "segmentId": "1",
    "time": 1672158530116,
    "velocity": 117,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.8046,
        45.28816
    ]
},
{
    "routeDataPointId": "758",
    "segmentId": "1",
    "time": 1672158530126,
    "velocity": 118,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80466,
        45.28808
    ]
},
{
    "routeDataPointId": "759",
    "segmentId": "1",
    "time": 1672158530136,
    "velocity": 119,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80485,
        45.28778
    ]
},
{
    "routeDataPointId": "760",
    "segmentId": "1",
    "time": 1672158530146,
    "velocity": 120,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80492,
        45.28768
    ]
},
{
    "routeDataPointId": "761",
    "segmentId": "1",
    "time": 1672158530156,
    "velocity": 121,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80503,
        45.28747
    ]
},
{
    "routeDataPointId": "762",
    "segmentId": "1",
    "time": 1672158530166,
    "velocity": 122,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80509,
        45.28737
    ]
},
{
    "routeDataPointId": "763",
    "segmentId": "1",
    "time": 1672158530176,
    "velocity": 123,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80524,
        45.28706
    ]
},
{
    "routeDataPointId": "764",
    "segmentId": "1",
    "time": 1672158530186,
    "velocity": 124,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80528,
        45.28696
    ]
},
{
    "routeDataPointId": "765",
    "segmentId": "1",
    "time": 1672158530196,
    "velocity": 125,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80533,
        45.28687
    ]
},
{
    "routeDataPointId": "766",
    "segmentId": "1",
    "time": 1672158530206,
    "velocity": 126,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80536,
        45.28677
    ]
},
{
    "routeDataPointId": "767",
    "segmentId": "1",
    "time": 1672158530216,
    "velocity": 127,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80541,
        45.28665
    ]
},
{
    "routeDataPointId": "768",
    "segmentId": "1",
    "time": 1672158530226,
    "velocity": 128,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80555,
        45.28624
    ]
},
{
    "routeDataPointId": "769",
    "segmentId": "1",
    "time": 1672158530236,
    "velocity": 129,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80562,
        45.286
    ]
},
{
    "routeDataPointId": "770",
    "segmentId": "1",
    "time": 1672158530246,
    "velocity": 130,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80564,
        45.2859
    ]
},
{
    "routeDataPointId": "771",
    "segmentId": "1",
    "time": 1672158530256,
    "velocity": 131,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80567,
        45.2858
    ]
},
{
    "routeDataPointId": "772",
    "segmentId": "1",
    "time": 1672158530266,
    "velocity": 132,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80569,
        45.28568
    ]
},
{
    "routeDataPointId": "773",
    "segmentId": "1",
    "time": 1672158530276,
    "velocity": 133,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80571,
        45.28559
    ]
},
{
    "routeDataPointId": "774",
    "segmentId": "1",
    "time": 1672158530286,
    "velocity": 134,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80578,
        45.28513
    ]
},
{
    "routeDataPointId": "775",
    "segmentId": "1",
    "time": 1672158530296,
    "velocity": 135,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.8058,
        45.28492
    ]
},
{
    "routeDataPointId": "776",
    "segmentId": "1",
    "time": 1672158530306,
    "velocity": 136,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8058,
        45.28481
    ]
},
{
    "routeDataPointId": "777",
    "segmentId": "1",
    "time": 1672158530316,
    "velocity": 137,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80581,
        45.28469
    ]
},
{
    "routeDataPointId": "778",
    "segmentId": "1",
    "time": 1672158530326,
    "velocity": 138,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80581,
        45.28421
    ]
},
{
    "routeDataPointId": "779",
    "segmentId": "1",
    "time": 1672158530336,
    "velocity": 139,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.8058,
        45.28417
    ]
},
{
    "routeDataPointId": "780",
    "segmentId": "1",
    "time": 1672158530346,
    "velocity": 140,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80577,
        45.28381
    ]
},
{
    "routeDataPointId": "781",
    "segmentId": "1",
    "time": 1672158530356,
    "velocity": 141,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "foo bar",
    "coordinates": [
        -75.80576,
        45.28376
    ]
},
{
    "routeDataPointId": "782",
    "segmentId": "1",
    "time": 1672158530366,
    "velocity": 142,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80576,
        45.28371
    ]
},
{
    "routeDataPointId": "783",
    "segmentId": "1",
    "time": 1672158530376,
    "velocity": 143,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80574,
        45.2836
    ]
},
{
    "routeDataPointId": "784",
    "segmentId": "1",
    "time": 1672158530386,
    "velocity": 144,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80574,
        45.28359
    ]
},
{
    "routeDataPointId": "785",
    "segmentId": "1",
    "time": 1672158530396,
    "velocity": 145,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8057,
        45.28338
    ]
},
{
    "routeDataPointId": "786",
    "segmentId": "1",
    "time": 1672158530406,
    "velocity": 146,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80567,
        45.28327
    ]
},
{
    "routeDataPointId": "787",
    "segmentId": "1",
    "time": 1672158530416,
    "velocity": 147,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80565,
        45.28316
    ]
},
{
    "routeDataPointId": "788",
    "segmentId": "1",
    "time": 1672158530426,
    "velocity": 148,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80563,
        45.28309
    ]
},
{
    "routeDataPointId": "789",
    "segmentId": "1",
    "time": 1672158530436,
    "velocity": 149,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80562,
        45.28304
    ]
},
{
    "routeDataPointId": "790",
    "segmentId": "1",
    "time": 1672158530446,
    "velocity": 150,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80556,
        45.28283
    ]
},
{
    "routeDataPointId": "791",
    "segmentId": "1",
    "time": 1672158530456,
    "velocity": 151,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80552,
        45.28271
    ]
},
{
    "routeDataPointId": "792",
    "segmentId": "1",
    "time": 1672158530466,
    "velocity": 152,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "foo bar",
    "coordinates": [
        -75.8055,
        45.28262
    ]
},
{
    "routeDataPointId": "793",
    "segmentId": "1",
    "time": 1672158530476,
    "velocity": 153,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80549,
        45.28262
    ]
},
{
    "routeDataPointId": "794",
    "segmentId": "1",
    "time": 1672158530486,
    "velocity": 154,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80548,
        45.28256
    ]
},
{
    "routeDataPointId": "795",
    "segmentId": "1",
    "time": 1672158530496,
    "velocity": 155,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80538,
        45.2823
    ]
},
{
    "routeDataPointId": "796",
    "segmentId": "1",
    "time": 1672158530506,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80535,
        45.28224
    ]
},
{
    "routeDataPointId": "797",
    "segmentId": "1",
    "time": 1672158530516,
    "velocity": 157,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80534,
        45.28219
    ]
},
{
    "routeDataPointId": "798",
    "segmentId": "1",
    "time": 1672158530526,
    "velocity": 158,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.80529,
        45.28209
    ]
},
{
    "routeDataPointId": "799",
    "segmentId": "1",
    "time": 1672158530536,
    "velocity": 159,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80526,
        45.28201
    ]
},
{
    "routeDataPointId": "800",
    "segmentId": "1",
    "time": 1672158530546,
    "velocity": 0,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.8051,
        45.28167
    ]
},
{
    "routeDataPointId": "801",
    "segmentId": "1",
    "time": 1672158530556,
    "velocity": 1,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "foo bar",
    "coordinates": [
        -75.80504,
        45.28156
    ]
},
{
    "routeDataPointId": "802",
    "segmentId": "1",
    "time": 1672158530566,
    "velocity": 2,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.8047,
        45.281
    ]
},
{
    "routeDataPointId": "803",
    "segmentId": "1",
    "time": 1672158530576,
    "velocity": 3,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.8044,
        45.28058
    ]
},
{
    "routeDataPointId": "804",
    "segmentId": "1",
    "time": 1672158530586,
    "velocity": 4,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80431,
        45.28047
    ]
},
{
    "routeDataPointId": "805",
    "segmentId": "1",
    "time": 1672158530596,
    "velocity": 5,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80424,
        45.28037
    ]
},
{
    "routeDataPointId": "806",
    "segmentId": "1",
    "time": 1672158530606,
    "velocity": 6,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80409,
        45.2802
    ]
},
{
    "routeDataPointId": "807",
    "segmentId": "1",
    "time": 1672158530616,
    "velocity": 7,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80401,
        45.2801
    ]
},
{
    "routeDataPointId": "808",
    "segmentId": "1",
    "time": 1672158530626,
    "velocity": 8,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80393,
        45.28001
    ]
},
{
    "routeDataPointId": "809",
    "segmentId": "1",
    "time": 1672158530636,
    "velocity": 9,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80384,
        45.27992
    ]
},
{
    "routeDataPointId": "810",
    "segmentId": "1",
    "time": 1672158530646,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80368,
        45.27973
    ]
},
{
    "routeDataPointId": "811",
    "segmentId": "1",
    "time": 1672158530656,
    "velocity": 11,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80367,
        45.27971
    ]
},
{
    "routeDataPointId": "812",
    "segmentId": "1",
    "time": 1672158530666,
    "velocity": 12,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8036,
        45.27964
    ]
},
{
    "routeDataPointId": "813",
    "segmentId": "1",
    "time": 1672158530676,
    "velocity": 13,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.80304,
        45.27897
    ]
},
{
    "routeDataPointId": "814",
    "segmentId": "1",
    "time": 1672158530686,
    "velocity": 14,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.8028,
        45.2787
    ]
},
{
    "routeDataPointId": "815",
    "segmentId": "1",
    "time": 1672158530696,
    "velocity": 15,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.80272,
        45.2786
    ]
},
{
    "routeDataPointId": "816",
    "segmentId": "1",
    "time": 1672158530706,
    "velocity": 16,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80247,
        45.27832
    ]
},
{
    "routeDataPointId": "817",
    "segmentId": "1",
    "time": 1672158530716,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.8024,
        45.27823
    ]
},
{
    "routeDataPointId": "818",
    "segmentId": "1",
    "time": 1672158530726,
    "velocity": 18,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.80215,
        45.27795
    ]
},
{
    "routeDataPointId": "819",
    "segmentId": "1",
    "time": 1672158530736,
    "velocity": 19,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80215,
        45.27794
    ]
},
{
    "routeDataPointId": "820",
    "segmentId": "1",
    "time": 1672158530746,
    "velocity": 20,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "foo bar",
    "coordinates": [
        -75.80199,
        45.27776
    ]
},
{
    "routeDataPointId": "821",
    "segmentId": "1",
    "time": 1672158530756,
    "velocity": 21,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80191,
        45.27766
    ]
},
{
    "routeDataPointId": "822",
    "segmentId": "1",
    "time": 1672158530766,
    "velocity": 22,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "foo bar",
    "coordinates": [
        -75.80175,
        45.27748
    ]
},
{
    "routeDataPointId": "823",
    "segmentId": "1",
    "time": 1672158530776,
    "velocity": 23,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.80167,
        45.27738
    ]
},
{
    "routeDataPointId": "824",
    "segmentId": "1",
    "time": 1672158530786,
    "velocity": 24,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.80086,
        45.27645
    ]
},
{
    "routeDataPointId": "825",
    "segmentId": "1",
    "time": 1672158530796,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80071,
        45.27626
    ]
},
{
    "routeDataPointId": "826",
    "segmentId": "1",
    "time": 1672158530806,
    "velocity": 26,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.80062,
        45.27617
    ]
},
{
    "routeDataPointId": "827",
    "segmentId": "1",
    "time": 1672158530816,
    "velocity": 27,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80056,
        45.27609
    ]
},
{
    "routeDataPointId": "828",
    "segmentId": "1",
    "time": 1672158530826,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.8004,
        45.2759
    ]
},
{
    "routeDataPointId": "829",
    "segmentId": "1",
    "time": 1672158530836,
    "velocity": 29,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.80035,
        45.27585
    ]
},
{
    "routeDataPointId": "830",
    "segmentId": "1",
    "time": 1672158530846,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79992,
        45.27534
    ]
},
{
    "routeDataPointId": "831",
    "segmentId": "1",
    "time": 1672158530856,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79991,
        45.27534
    ]
},
{
    "routeDataPointId": "832",
    "segmentId": "1",
    "time": 1672158530866,
    "velocity": 32,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79976,
        45.27515
    ]
},
{
    "routeDataPointId": "833",
    "segmentId": "1",
    "time": 1672158530876,
    "velocity": 33,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79959,
        45.27496
    ]
},
{
    "routeDataPointId": "834",
    "segmentId": "1",
    "time": 1672158530886,
    "velocity": 34,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7988,
        45.27403
    ]
},
{
    "routeDataPointId": "835",
    "segmentId": "1",
    "time": 1672158530896,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7987,
        45.27392
    ]
},
{
    "routeDataPointId": "836",
    "segmentId": "1",
    "time": 1672158530906,
    "velocity": 36,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79862,
        45.27382
    ]
},
{
    "routeDataPointId": "837",
    "segmentId": "1",
    "time": 1672158530916,
    "velocity": 37,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79833,
        45.27349
    ]
},
{
    "routeDataPointId": "838",
    "segmentId": "1",
    "time": 1672158530926,
    "velocity": 38,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "foo bar",
    "coordinates": [
        -75.7983,
        45.27346
    ]
},
{
    "routeDataPointId": "839",
    "segmentId": "1",
    "time": 1672158530936,
    "velocity": 39,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79815,
        45.27327
    ]
},
{
    "routeDataPointId": "840",
    "segmentId": "1",
    "time": 1672158530946,
    "velocity": 40,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79805,
        45.27317
    ]
},
{
    "routeDataPointId": "841",
    "segmentId": "1",
    "time": 1672158530956,
    "velocity": 41,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79789,
        45.27297
    ]
},
{
    "routeDataPointId": "842",
    "segmentId": "1",
    "time": 1672158530966,
    "velocity": 42,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79782,
        45.2729
    ]
},
{
    "routeDataPointId": "843",
    "segmentId": "1",
    "time": 1672158530976,
    "velocity": 43,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "foo bar",
    "coordinates": [
        -75.79764,
        45.27268
    ]
},
{
    "routeDataPointId": "844",
    "segmentId": "1",
    "time": 1672158530986,
    "velocity": 44,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79758,
        45.27262
    ]
},
{
    "routeDataPointId": "845",
    "segmentId": "1",
    "time": 1672158530996,
    "velocity": 45,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.797,
        45.27194
    ]
},
{
    "routeDataPointId": "846",
    "segmentId": "1",
    "time": 1672158531006,
    "velocity": 46,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79697,
        45.27191
    ]
},
{
    "routeDataPointId": "847",
    "segmentId": "1",
    "time": 1672158531016,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79685,
        45.27176
    ]
},
{
    "routeDataPointId": "848",
    "segmentId": "1",
    "time": 1672158531026,
    "velocity": 48,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79676,
        45.27167
    ]
},
{
    "routeDataPointId": "849",
    "segmentId": "1",
    "time": 1672158531036,
    "velocity": 49,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79661,
        45.27148
    ]
},
{
    "routeDataPointId": "850",
    "segmentId": "1",
    "time": 1672158531046,
    "velocity": 50,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79653,
        45.27139
    ]
},
{
    "routeDataPointId": "851",
    "segmentId": "1",
    "time": 1672158531056,
    "velocity": 51,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79644,
        45.2713
    ]
},
{
    "routeDataPointId": "852",
    "segmentId": "1",
    "time": 1672158531066,
    "velocity": 52,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79628,
        45.2711
    ]
},
{
    "routeDataPointId": "853",
    "segmentId": "1",
    "time": 1672158531076,
    "velocity": 53,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79588,
        45.27065
    ]
},
{
    "routeDataPointId": "854",
    "segmentId": "1",
    "time": 1672158531086,
    "velocity": 54,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79588,
        45.27064
    ]
},
{
    "routeDataPointId": "855",
    "segmentId": "1",
    "time": 1672158531096,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7958,
        45.27055
    ]
},
{
    "routeDataPointId": "856",
    "segmentId": "1",
    "time": 1672158531106,
    "velocity": 56,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79572,
        45.27045
    ]
},
{
    "routeDataPointId": "857",
    "segmentId": "1",
    "time": 1672158531116,
    "velocity": 57,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79467,
        45.26924
    ]
},
{
    "routeDataPointId": "858",
    "segmentId": "1",
    "time": 1672158531126,
    "velocity": 58,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7946,
        45.26915
    ]
},
{
    "routeDataPointId": "859",
    "segmentId": "1",
    "time": 1672158531136,
    "velocity": 59,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79426,
        45.26876
    ]
},
{
    "routeDataPointId": "860",
    "segmentId": "1",
    "time": 1672158531146,
    "velocity": 60,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79426,
        45.26875
    ]
},
{
    "routeDataPointId": "861",
    "segmentId": "1",
    "time": 1672158531156,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79403,
        45.26849
    ]
},
{
    "routeDataPointId": "862",
    "segmentId": "1",
    "time": 1672158531166,
    "velocity": 62,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79379,
        45.2682
    ]
},
{
    "routeDataPointId": "863",
    "segmentId": "1",
    "time": 1672158531176,
    "velocity": 63,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79337,
        45.26773
    ]
},
{
    "routeDataPointId": "864",
    "segmentId": "1",
    "time": 1672158531186,
    "velocity": 64,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79329,
        45.26763
    ]
},
{
    "routeDataPointId": "865",
    "segmentId": "1",
    "time": 1672158531196,
    "velocity": 65,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79321,
        45.26754
    ]
},
{
    "routeDataPointId": "866",
    "segmentId": "1",
    "time": 1672158531206,
    "velocity": 66,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79305,
        45.26734
    ]
},
{
    "routeDataPointId": "867",
    "segmentId": "1",
    "time": 1672158531216,
    "velocity": 67,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79289,
        45.26717
    ]
},
{
    "routeDataPointId": "868",
    "segmentId": "1",
    "time": 1672158531226,
    "velocity": 68,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79234,
        45.26652
    ]
},
{
    "routeDataPointId": "869",
    "segmentId": "1",
    "time": 1672158531236,
    "velocity": 69,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79232,
        45.26649
    ]
},
{
    "routeDataPointId": "870",
    "segmentId": "1",
    "time": 1672158531246,
    "velocity": 70,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79217,
        45.26632
    ]
},
{
    "routeDataPointId": "871",
    "segmentId": "1",
    "time": 1672158531256,
    "velocity": 71,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79209,
        45.26622
    ]
},
{
    "routeDataPointId": "872",
    "segmentId": "1",
    "time": 1672158531266,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.792,
        45.26612
    ]
},
{
    "routeDataPointId": "873",
    "segmentId": "1",
    "time": 1672158531276,
    "velocity": 73,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79192,
        45.26602
    ]
},
{
    "routeDataPointId": "874",
    "segmentId": "1",
    "time": 1672158531286,
    "velocity": 74,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79184,
        45.26593
    ]
},
{
    "routeDataPointId": "875",
    "segmentId": "1",
    "time": 1672158531296,
    "velocity": 75,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79177,
        45.26584
    ]
},
{
    "routeDataPointId": "876",
    "segmentId": "1",
    "time": 1672158531306,
    "velocity": 76,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.79169,
        45.26575
    ]
},
{
    "routeDataPointId": "877",
    "segmentId": "1",
    "time": 1672158531316,
    "velocity": 77,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79146,
        45.26547
    ]
},
{
    "routeDataPointId": "878",
    "segmentId": "1",
    "time": 1672158531326,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79136,
        45.26536
    ]
},
{
    "routeDataPointId": "879",
    "segmentId": "1",
    "time": 1672158531336,
    "velocity": 79,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.79122,
        45.26518
    ]
},
{
    "routeDataPointId": "880",
    "segmentId": "1",
    "time": 1672158531346,
    "velocity": 80,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79121,
        45.26517
    ]
},
{
    "routeDataPointId": "881",
    "segmentId": "1",
    "time": 1672158531356,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.79114,
        45.26507
    ]
},
{
    "routeDataPointId": "882",
    "segmentId": "1",
    "time": 1672158531366,
    "velocity": 82,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79099,
        45.26488
    ]
},
{
    "routeDataPointId": "883",
    "segmentId": "1",
    "time": 1672158531376,
    "velocity": 83,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.79093,
        45.26479
    ]
},
{
    "routeDataPointId": "884",
    "segmentId": "1",
    "time": 1672158531386,
    "velocity": 84,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.79086,
        45.2647
    ]
},
{
    "routeDataPointId": "885",
    "segmentId": "1",
    "time": 1672158531396,
    "velocity": 85,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79065,
        45.26439
    ]
},
{
    "routeDataPointId": "886",
    "segmentId": "1",
    "time": 1672158531406,
    "velocity": 86,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79058,
        45.2643
    ]
},
{
    "routeDataPointId": "887",
    "segmentId": "1",
    "time": 1672158531416,
    "velocity": 87,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79052,
        45.2642
    ]
},
{
    "routeDataPointId": "888",
    "segmentId": "1",
    "time": 1672158531426,
    "velocity": 88,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.79045,
        45.2641
    ]
},
{
    "routeDataPointId": "889",
    "segmentId": "1",
    "time": 1672158531436,
    "velocity": 89,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79015,
        45.26362
    ]
},
{
    "routeDataPointId": "890",
    "segmentId": "1",
    "time": 1672158531446,
    "velocity": 90,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.79012,
        45.26358
    ]
},
{
    "routeDataPointId": "891",
    "segmentId": "1",
    "time": 1672158531456,
    "velocity": 91,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.79008,
        45.2635
    ]
},
{
    "routeDataPointId": "892",
    "segmentId": "1",
    "time": 1672158531466,
    "velocity": 92,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7899,
        45.26319
    ]
},
{
    "routeDataPointId": "893",
    "segmentId": "1",
    "time": 1672158531476,
    "velocity": 93,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.78978,
        45.263
    ]
},
{
    "routeDataPointId": "894",
    "segmentId": "1",
    "time": 1672158531486,
    "velocity": 94,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.78967,
        45.2628
    ]
},
{
    "routeDataPointId": "895",
    "segmentId": "1",
    "time": 1672158531496,
    "velocity": 95,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.78929,
        45.26215
    ]
},
{
    "routeDataPointId": "896",
    "segmentId": "1",
    "time": 1672158531506,
    "velocity": 96,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.78924,
        45.26205
    ]
},
{
    "routeDataPointId": "897",
    "segmentId": "1",
    "time": 1672158531516,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.78908,
        45.26177
    ]
},
{
    "routeDataPointId": "898",
    "segmentId": "1",
    "time": 1672158531526,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.78907,
        45.26174
    ]
},
{
    "routeDataPointId": "899",
    "segmentId": "1",
    "time": 1672158531536,
    "velocity": 99,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "foo bar",
    "coordinates": [
        -75.78884,
        45.26135
    ]
},
{
    "routeDataPointId": "900",
    "segmentId": "1",
    "time": 1672158531546,
    "velocity": 100,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.78883,
        45.26134
    ]
},
{
    "routeDataPointId": "901",
    "segmentId": "1",
    "time": 1672158531556,
    "velocity": 101,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.78836,
        45.26051
    ]
},
{
    "routeDataPointId": "902",
    "segmentId": "1",
    "time": 1672158531566,
    "velocity": 102,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7883,
        45.26042
    ]
},
{
    "routeDataPointId": "903",
    "segmentId": "1",
    "time": 1672158531576,
    "velocity": 103,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.78818,
        45.26021
    ]
},
{
    "routeDataPointId": "904",
    "segmentId": "1",
    "time": 1672158531586,
    "velocity": 104,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.78807,
        45.26
    ]
},
{
    "routeDataPointId": "905",
    "segmentId": "1",
    "time": 1672158531596,
    "velocity": 105,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.78801,
        45.25991
    ]
},
{
    "routeDataPointId": "906",
    "segmentId": "1",
    "time": 1672158531606,
    "velocity": 106,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.78734,
        45.25873
    ]
},
{
    "routeDataPointId": "907",
    "segmentId": "1",
    "time": 1672158531616,
    "velocity": 107,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.78731,
        45.25869
    ]
},
{
    "routeDataPointId": "908",
    "segmentId": "1",
    "time": 1672158531626,
    "velocity": 108,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.78726,
        45.25859
    ]
},
{
    "routeDataPointId": "909",
    "segmentId": "1",
    "time": 1672158531636,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.78626,
        45.25685
    ]
},
{
    "routeDataPointId": "910",
    "segmentId": "1",
    "time": 1672158531646,
    "velocity": 110,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.78621,
        45.25677
    ]
},
{
    "routeDataPointId": "911",
    "segmentId": "1",
    "time": 1672158531656,
    "velocity": 111,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.78591,
        45.25624
    ]
},
{
    "routeDataPointId": "912",
    "segmentId": "1",
    "time": 1672158531666,
    "velocity": 112,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.78585,
        45.25615
    ]
},
{
    "routeDataPointId": "913",
    "segmentId": "1",
    "time": 1672158531676,
    "velocity": 113,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.78559,
        45.25568
    ]
},
{
    "routeDataPointId": "914",
    "segmentId": "1",
    "time": 1672158531686,
    "velocity": 114,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7855,
        45.25553
    ]
},
{
    "routeDataPointId": "915",
    "segmentId": "1",
    "time": 1672158531696,
    "velocity": 115,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.78547,
        45.25549
    ]
},
{
    "routeDataPointId": "916",
    "segmentId": "1",
    "time": 1672158531706,
    "velocity": 116,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.78529,
        45.25516
    ]
},
{
    "routeDataPointId": "917",
    "segmentId": "1",
    "time": 1672158531716,
    "velocity": 117,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.78505,
        45.25476
    ]
},
{
    "routeDataPointId": "918",
    "segmentId": "1",
    "time": 1672158531726,
    "velocity": 118,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7847,
        45.25413
    ]
},
{
    "routeDataPointId": "919",
    "segmentId": "1",
    "time": 1672158531736,
    "velocity": 119,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.78469,
        45.25412
    ]
},
{
    "routeDataPointId": "920",
    "segmentId": "1",
    "time": 1672158531746,
    "velocity": 120,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.78463,
        45.25401
    ]
},
{
    "routeDataPointId": "921",
    "segmentId": "1",
    "time": 1672158531756,
    "velocity": 121,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.78457,
        45.25392
    ]
},
{
    "routeDataPointId": "922",
    "segmentId": "1",
    "time": 1672158531766,
    "velocity": 122,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.78452,
        45.25382
    ]
},
{
    "routeDataPointId": "923",
    "segmentId": "1",
    "time": 1672158531776,
    "velocity": 123,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7841,
        45.2531
    ]
},
{
    "routeDataPointId": "924",
    "segmentId": "1",
    "time": 1672158531786,
    "velocity": 124,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.78405,
        45.253
    ]
},
{
    "routeDataPointId": "925",
    "segmentId": "1",
    "time": 1672158531796,
    "velocity": 125,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.78358,
        45.25218
    ]
},
{
    "routeDataPointId": "926",
    "segmentId": "1",
    "time": 1672158531806,
    "velocity": 126,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.78347,
        45.252
    ]
},
{
    "routeDataPointId": "927",
    "segmentId": "1",
    "time": 1672158531816,
    "velocity": 127,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7834,
        45.25187
    ]
},
{
    "routeDataPointId": "928",
    "segmentId": "1",
    "time": 1672158531826,
    "velocity": 128,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.78316,
        45.25146
    ]
},
{
    "routeDataPointId": "929",
    "segmentId": "1",
    "time": 1672158531836,
    "velocity": 129,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.78311,
        45.25136
    ]
},
{
    "routeDataPointId": "930",
    "segmentId": "1",
    "time": 1672158531846,
    "velocity": 130,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.78305,
        45.25126
    ]
},
{
    "routeDataPointId": "931",
    "segmentId": "1",
    "time": 1672158531856,
    "velocity": 131,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.78297,
        45.25114
    ]
},
{
    "routeDataPointId": "932",
    "segmentId": "1",
    "time": 1672158531866,
    "velocity": 132,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.78286,
        45.25095
    ]
},
{
    "routeDataPointId": "933",
    "segmentId": "1",
    "time": 1672158531876,
    "velocity": 133,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.78246,
        45.25036
    ]
},
{
    "routeDataPointId": "934",
    "segmentId": "1",
    "time": 1672158531886,
    "velocity": 134,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.78238,
        45.25027
    ]
},
{
    "routeDataPointId": "935",
    "segmentId": "1",
    "time": 1672158531896,
    "velocity": 135,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7823,
        45.25017
    ]
},
{
    "routeDataPointId": "936",
    "segmentId": "1",
    "time": 1672158531906,
    "velocity": 136,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.78223,
        45.25007
    ]
},
{
    "routeDataPointId": "937",
    "segmentId": "1",
    "time": 1672158531916,
    "velocity": 137,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.78215,
        45.24998
    ]
},
{
    "routeDataPointId": "938",
    "segmentId": "1",
    "time": 1672158531926,
    "velocity": 138,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.78207,
        45.24988
    ]
},
{
    "routeDataPointId": "939",
    "segmentId": "1",
    "time": 1672158531936,
    "velocity": 139,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.78169,
        45.24946
    ]
},
{
    "routeDataPointId": "940",
    "segmentId": "1",
    "time": 1672158531946,
    "velocity": 140,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.78156,
        45.24933
    ]
},
{
    "routeDataPointId": "941",
    "segmentId": "1",
    "time": 1672158531956,
    "velocity": 141,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.78146,
        45.24924
    ]
},
{
    "routeDataPointId": "942",
    "segmentId": "1",
    "time": 1672158531966,
    "velocity": 142,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.78138,
        45.24916
    ]
},
{
    "routeDataPointId": "943",
    "segmentId": "1",
    "time": 1672158531976,
    "velocity": 143,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.78118,
        45.24898
    ]
},
{
    "routeDataPointId": "944",
    "segmentId": "1",
    "time": 1672158531986,
    "velocity": 144,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.78114,
        45.24894
    ]
},
{
    "routeDataPointId": "945",
    "segmentId": "1",
    "time": 1672158531996,
    "velocity": 145,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.78078,
        45.24863
    ]
},
{
    "routeDataPointId": "946",
    "segmentId": "1",
    "time": 1672158532006,
    "velocity": 146,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.78067,
        45.24855
    ]
},
{
    "routeDataPointId": "947",
    "segmentId": "1",
    "time": 1672158532016,
    "velocity": 147,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.78053,
        45.24843
    ]
},
{
    "routeDataPointId": "948",
    "segmentId": "1",
    "time": 1672158532026,
    "velocity": 148,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.78016,
        45.24816
    ]
},
{
    "routeDataPointId": "949",
    "segmentId": "1",
    "time": 1672158532036,
    "velocity": 149,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.77994,
        45.24801
    ]
},
{
    "routeDataPointId": "950",
    "segmentId": "1",
    "time": 1672158532046,
    "velocity": 150,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.77993,
        45.248
    ]
},
{
    "routeDataPointId": "951",
    "segmentId": "1",
    "time": 1672158532056,
    "velocity": 151,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.77981,
        45.24792
    ]
},
{
    "routeDataPointId": "952",
    "segmentId": "1",
    "time": 1672158532066,
    "velocity": 152,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.77969,
        45.24785
    ]
},
{
    "routeDataPointId": "953",
    "segmentId": "1",
    "time": 1672158532076,
    "velocity": 153,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.77923,
        45.24756
    ]
},
{
    "routeDataPointId": "954",
    "segmentId": "1",
    "time": 1672158532086,
    "velocity": 154,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.77874,
        45.24729
    ]
},
{
    "routeDataPointId": "955",
    "segmentId": "1",
    "time": 1672158532096,
    "velocity": 155,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.77863,
        45.24724
    ]
},
{
    "routeDataPointId": "956",
    "segmentId": "1",
    "time": 1672158532106,
    "velocity": 156,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.77849,
        45.24716
    ]
},
{
    "routeDataPointId": "957",
    "segmentId": "1",
    "time": 1672158532116,
    "velocity": 157,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.77824,
        45.24704
    ]
},
{
    "routeDataPointId": "958",
    "segmentId": "1",
    "time": 1672158532126,
    "velocity": 158,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.77797,
        45.24692
    ]
},
{
    "routeDataPointId": "959",
    "segmentId": "1",
    "time": 1672158532136,
    "velocity": 159,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.77789,
        45.24688
    ]
},
{
    "routeDataPointId": "960",
    "segmentId": "1",
    "time": 1672158532146,
    "velocity": 0,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.77769,
        45.2468
    ]
},
{
    "routeDataPointId": "961",
    "segmentId": "1",
    "time": 1672158532156,
    "velocity": 1,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.77757,
        45.24674
    ]
},
{
    "routeDataPointId": "962",
    "segmentId": "1",
    "time": 1672158532166,
    "velocity": 2,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.77718,
        45.24659
    ]
},
{
    "routeDataPointId": "963",
    "segmentId": "1",
    "time": 1672158532176,
    "velocity": 3,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.77706,
        45.24655
    ]
},
{
    "routeDataPointId": "964",
    "segmentId": "1",
    "time": 1672158532186,
    "velocity": 4,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.77684,
        45.24646
    ]
},
{
    "routeDataPointId": "965",
    "segmentId": "1",
    "time": 1672158532196,
    "velocity": 5,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.77665,
        45.2464
    ]
},
{
    "routeDataPointId": "966",
    "segmentId": "1",
    "time": 1672158532206,
    "velocity": 6,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.77634,
        45.24629
    ]
},
{
    "routeDataPointId": "967",
    "segmentId": "1",
    "time": 1672158532216,
    "velocity": 7,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.77605,
        45.2462
    ]
},
{
    "routeDataPointId": "968",
    "segmentId": "1",
    "time": 1672158532226,
    "velocity": 8,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.77575,
        45.24612
    ]
},
{
    "routeDataPointId": "969",
    "segmentId": "1",
    "time": 1672158532236,
    "velocity": 9,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.77563,
        45.24608
    ]
},
{
    "routeDataPointId": "970",
    "segmentId": "1",
    "time": 1672158532246,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.77518,
        45.24597
    ]
},
{
    "routeDataPointId": "971",
    "segmentId": "1",
    "time": 1672158532256,
    "velocity": 11,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.77503,
        45.24594
    ]
},
{
    "routeDataPointId": "972",
    "segmentId": "1",
    "time": 1672158532266,
    "velocity": 12,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.77489,
        45.2459
    ]
},
{
    "routeDataPointId": "973",
    "segmentId": "1",
    "time": 1672158532276,
    "velocity": 13,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.77458,
        45.24584
    ]
},
{
    "routeDataPointId": "974",
    "segmentId": "1",
    "time": 1672158532286,
    "velocity": 14,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.77445,
        45.24582
    ]
},
{
    "routeDataPointId": "975",
    "segmentId": "1",
    "time": 1672158532296,
    "velocity": 15,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.77428,
        45.24578
    ]
},
{
    "routeDataPointId": "976",
    "segmentId": "1",
    "time": 1672158532306,
    "velocity": 16,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.77367,
        45.24568
    ]
},
{
    "routeDataPointId": "977",
    "segmentId": "1",
    "time": 1672158532316,
    "velocity": 17,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.77328,
        45.24563
    ]
},
{
    "routeDataPointId": "978",
    "segmentId": "1",
    "time": 1672158532326,
    "velocity": 18,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.77323,
        45.24562
    ]
},
{
    "routeDataPointId": "979",
    "segmentId": "1",
    "time": 1672158532336,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.77246,
        45.24552
    ]
},
{
    "routeDataPointId": "980",
    "segmentId": "1",
    "time": 1672158532346,
    "velocity": 20,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.77217,
        45.24549
    ]
},
{
    "routeDataPointId": "981",
    "segmentId": "1",
    "time": 1672158532356,
    "velocity": 21,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.76634,
        45.24475
    ]
},
{
    "routeDataPointId": "982",
    "segmentId": "1",
    "time": 1672158532366,
    "velocity": 22,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.76574,
        45.24466
    ]
},
{
    "routeDataPointId": "983",
    "segmentId": "1",
    "time": 1672158532376,
    "velocity": 23,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.76558,
        45.24463
    ]
},
{
    "routeDataPointId": "984",
    "segmentId": "1",
    "time": 1672158532386,
    "velocity": 24,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.76542,
        45.24461
    ]
},
{
    "routeDataPointId": "985",
    "segmentId": "1",
    "time": 1672158532396,
    "velocity": 25,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.76469,
        45.24446
    ]
},
{
    "routeDataPointId": "986",
    "segmentId": "1",
    "time": 1672158532406,
    "velocity": 26,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7638,
        45.24424
    ]
},
{
    "routeDataPointId": "987",
    "segmentId": "1",
    "time": 1672158532416,
    "velocity": 27,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.76353,
        45.24416
    ]
},
{
    "routeDataPointId": "988",
    "segmentId": "1",
    "time": 1672158532426,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.76339,
        45.24411
    ]
},
{
    "routeDataPointId": "989",
    "segmentId": "1",
    "time": 1672158532436,
    "velocity": 29,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7631,
        45.24402
    ]
},
{
    "routeDataPointId": "990",
    "segmentId": "1",
    "time": 1672158532446,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.76241,
        45.24377
    ]
},
{
    "routeDataPointId": "991",
    "segmentId": "1",
    "time": 1672158532456,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.76214,
        45.24366
    ]
},
{
    "routeDataPointId": "992",
    "segmentId": "1",
    "time": 1672158532466,
    "velocity": 32,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.76201,
        45.2436
    ]
},
{
    "routeDataPointId": "993",
    "segmentId": "1",
    "time": 1672158532476,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.76174,
        45.24349
    ]
},
{
    "routeDataPointId": "994",
    "segmentId": "1",
    "time": 1672158532486,
    "velocity": 34,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.76161,
        45.24343
    ]
},
{
    "routeDataPointId": "995",
    "segmentId": "1",
    "time": 1672158532496,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.76106,
        45.24315
    ]
},
{
    "routeDataPointId": "996",
    "segmentId": "1",
    "time": 1672158532506,
    "velocity": 36,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.76097,
        45.24311
    ]
},
{
    "routeDataPointId": "997",
    "segmentId": "1",
    "time": 1672158532516,
    "velocity": 37,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.76062,
        45.24292
    ]
},
{
    "routeDataPointId": "998",
    "segmentId": "1",
    "time": 1672158532526,
    "velocity": 38,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.76025,
        45.2427
    ]
},
{
    "routeDataPointId": "999",
    "segmentId": "1",
    "time": 1672158532536,
    "velocity": 39,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.75979,
        45.24241
    ]
},
{
    "routeDataPointId": "1000",
    "segmentId": "1",
    "time": 1672158532546,
    "velocity": 40,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7597,
        45.24234
    ]
},
{
    "routeDataPointId": "1001",
    "segmentId": "1",
    "time": 1672158532556,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75925,
        45.24202
    ]
},
{
    "routeDataPointId": "1002",
    "segmentId": "1",
    "time": 1672158532566,
    "velocity": 42,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75915,
        45.24193
    ]
},
{
    "routeDataPointId": "1003",
    "segmentId": "1",
    "time": 1672158532576,
    "velocity": 43,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.75896,
        45.24178
    ]
},
{
    "routeDataPointId": "1004",
    "segmentId": "1",
    "time": 1672158532586,
    "velocity": 44,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.75886,
        45.24169
    ]
},
{
    "routeDataPointId": "1005",
    "segmentId": "1",
    "time": 1672158532596,
    "velocity": 45,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75876,
        45.24161
    ]
},
{
    "routeDataPointId": "1006",
    "segmentId": "1",
    "time": 1672158532606,
    "velocity": 46,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75857,
        45.24144
    ]
},
{
    "routeDataPointId": "1007",
    "segmentId": "1",
    "time": 1672158532616,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75848,
        45.24135
    ]
},
{
    "routeDataPointId": "1008",
    "segmentId": "1",
    "time": 1672158532626,
    "velocity": 48,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75845,
        45.24133
    ]
},
{
    "routeDataPointId": "1009",
    "segmentId": "1",
    "time": 1672158532636,
    "velocity": 49,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75838,
        45.24127
    ]
},
{
    "routeDataPointId": "1010",
    "segmentId": "1",
    "time": 1672158532646,
    "velocity": 50,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7583,
        45.24118
    ]
},
{
    "routeDataPointId": "1011",
    "segmentId": "1",
    "time": 1672158532656,
    "velocity": 51,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.75821,
        45.2411
    ]
},
{
    "routeDataPointId": "1012",
    "segmentId": "1",
    "time": 1672158532666,
    "velocity": 52,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75803,
        45.2409
    ]
},
{
    "routeDataPointId": "1013",
    "segmentId": "1",
    "time": 1672158532676,
    "velocity": 53,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.75795,
        45.24082
    ]
},
{
    "routeDataPointId": "1014",
    "segmentId": "1",
    "time": 1672158532686,
    "velocity": 54,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75787,
        45.24072
    ]
},
{
    "routeDataPointId": "1015",
    "segmentId": "1",
    "time": 1672158532696,
    "velocity": 55,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "foo bar",
    "coordinates": [
        -75.75778,
        45.24063
    ]
},
{
    "routeDataPointId": "1016",
    "segmentId": "1",
    "time": 1672158532706,
    "velocity": 56,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75763,
        45.24045
    ]
},
{
    "routeDataPointId": "1017",
    "segmentId": "1",
    "time": 1672158532716,
    "velocity": 57,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75749,
        45.24027
    ]
},
{
    "routeDataPointId": "1018",
    "segmentId": "1",
    "time": 1672158532726,
    "velocity": 58,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75747,
        45.24024
    ]
},
{
    "routeDataPointId": "1019",
    "segmentId": "1",
    "time": 1672158532736,
    "velocity": 59,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7574,
        45.24015
    ]
},
{
    "routeDataPointId": "1020",
    "segmentId": "1",
    "time": 1672158532746,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75739,
        45.24013
    ]
},
{
    "routeDataPointId": "1021",
    "segmentId": "1",
    "time": 1672158532756,
    "velocity": 61,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75735,
        45.24008
    ]
},
{
    "routeDataPointId": "1022",
    "segmentId": "1",
    "time": 1672158532766,
    "velocity": 62,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75733,
        45.24006
    ]
},
{
    "routeDataPointId": "1023",
    "segmentId": "1",
    "time": 1672158532776,
    "velocity": 63,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.75705,
        45.23966
    ]
},
{
    "routeDataPointId": "1024",
    "segmentId": "1",
    "time": 1672158532786,
    "velocity": 64,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.75692,
        45.23946
    ]
},
{
    "routeDataPointId": "1025",
    "segmentId": "1",
    "time": 1672158532796,
    "velocity": 65,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75599,
        45.23793
    ]
},
{
    "routeDataPointId": "1026",
    "segmentId": "1",
    "time": 1672158532806,
    "velocity": 66,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75589,
        45.23778
    ]
},
{
    "routeDataPointId": "1027",
    "segmentId": "1",
    "time": 1672158532816,
    "velocity": 67,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75553,
        45.23719
    ]
},
{
    "routeDataPointId": "1028",
    "segmentId": "1",
    "time": 1672158532826,
    "velocity": 68,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7555,
        45.23713
    ]
},
{
    "routeDataPointId": "1029",
    "segmentId": "1",
    "time": 1672158532836,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75537,
        45.23692
    ]
},
{
    "routeDataPointId": "1030",
    "segmentId": "1",
    "time": 1672158532846,
    "velocity": 70,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75532,
        45.23685
    ]
},
{
    "routeDataPointId": "1031",
    "segmentId": "1",
    "time": 1672158532856,
    "velocity": 71,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75499,
        45.23629
    ]
},
{
    "routeDataPointId": "1032",
    "segmentId": "1",
    "time": 1672158532866,
    "velocity": 72,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.75496,
        45.23626
    ]
},
{
    "routeDataPointId": "1033",
    "segmentId": "1",
    "time": 1672158532876,
    "velocity": 73,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75452,
        45.23552
    ]
},
{
    "routeDataPointId": "1034",
    "segmentId": "1",
    "time": 1672158532886,
    "velocity": 74,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75439,
        45.23532
    ]
},
{
    "routeDataPointId": "1035",
    "segmentId": "1",
    "time": 1672158532896,
    "velocity": 75,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75395,
        45.23459
    ]
},
{
    "routeDataPointId": "1036",
    "segmentId": "1",
    "time": 1672158532906,
    "velocity": 76,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.75391,
        45.23453
    ]
},
{
    "routeDataPointId": "1037",
    "segmentId": "1",
    "time": 1672158532916,
    "velocity": 77,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75379,
        45.23433
    ]
},
{
    "routeDataPointId": "1038",
    "segmentId": "1",
    "time": 1672158532926,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75371,
        45.23421
    ]
},
{
    "routeDataPointId": "1039",
    "segmentId": "1",
    "time": 1672158532936,
    "velocity": 79,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.75355,
        45.23393
    ]
},
{
    "routeDataPointId": "1040",
    "segmentId": "1",
    "time": 1672158532946,
    "velocity": 80,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75347,
        45.23381
    ]
},
{
    "routeDataPointId": "1041",
    "segmentId": "1",
    "time": 1672158532956,
    "velocity": 81,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7532,
        45.23337
    ]
},
{
    "routeDataPointId": "1042",
    "segmentId": "1",
    "time": 1672158532966,
    "velocity": 82,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.75306,
        45.23312
    ]
},
{
    "routeDataPointId": "1043",
    "segmentId": "1",
    "time": 1672158532976,
    "velocity": 83,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.75298,
        45.233
    ]
},
{
    "routeDataPointId": "1044",
    "segmentId": "1",
    "time": 1672158532986,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75286,
        45.23279
    ]
},
{
    "routeDataPointId": "1045",
    "segmentId": "1",
    "time": 1672158532996,
    "velocity": 85,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.75273,
        45.2326
    ]
},
{
    "routeDataPointId": "1046",
    "segmentId": "1",
    "time": 1672158533006,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7526,
        45.23237
    ]
},
{
    "routeDataPointId": "1047",
    "segmentId": "1",
    "time": 1672158533016,
    "velocity": 87,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "foo bar",
    "coordinates": [
        -75.75249,
        45.23219
    ]
},
{
    "routeDataPointId": "1048",
    "segmentId": "1",
    "time": 1672158533026,
    "velocity": 88,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75244,
        45.23212
    ]
},
{
    "routeDataPointId": "1049",
    "segmentId": "1",
    "time": 1672158533036,
    "velocity": 89,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.75151,
        45.23058
    ]
},
{
    "routeDataPointId": "1050",
    "segmentId": "1",
    "time": 1672158533046,
    "velocity": 90,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75144,
        45.23048
    ]
},
{
    "routeDataPointId": "1051",
    "segmentId": "1",
    "time": 1672158533056,
    "velocity": 91,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75144,
        45.23047
    ]
},
{
    "routeDataPointId": "1052",
    "segmentId": "1",
    "time": 1672158533066,
    "velocity": 92,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.75088,
        45.22957
    ]
},
{
    "routeDataPointId": "1053",
    "segmentId": "1",
    "time": 1672158533077,
    "velocity": 93,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75082,
        45.22946
    ]
},
{
    "routeDataPointId": "1054",
    "segmentId": "1",
    "time": 1672158533087,
    "velocity": 94,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75076,
        45.22937
    ]
},
{
    "routeDataPointId": "1055",
    "segmentId": "1",
    "time": 1672158533097,
    "velocity": 95,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7507,
        45.22927
    ]
},
{
    "routeDataPointId": "1056",
    "segmentId": "1",
    "time": 1672158533107,
    "velocity": 96,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.75063,
        45.22917
    ]
},
{
    "routeDataPointId": "1057",
    "segmentId": "1",
    "time": 1672158533117,
    "velocity": 97,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.75051,
        45.22896
    ]
},
{
    "routeDataPointId": "1058",
    "segmentId": "1",
    "time": 1672158533127,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.75045,
        45.22887
    ]
},
{
    "routeDataPointId": "1059",
    "segmentId": "1",
    "time": 1672158533137,
    "velocity": 99,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.75039,
        45.22876
    ]
},
{
    "routeDataPointId": "1060",
    "segmentId": "1",
    "time": 1672158533147,
    "velocity": 100,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7503,
        45.22861
    ]
},
{
    "routeDataPointId": "1061",
    "segmentId": "1",
    "time": 1672158533157,
    "velocity": 101,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.75027,
        45.22857
    ]
},
{
    "routeDataPointId": "1062",
    "segmentId": "1",
    "time": 1672158533167,
    "velocity": 102,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.75003,
        45.22818
    ]
},
{
    "routeDataPointId": "1063",
    "segmentId": "1",
    "time": 1672158533177,
    "velocity": 103,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.75003,
        45.22817
    ]
},
{
    "routeDataPointId": "1064",
    "segmentId": "1",
    "time": 1672158533187,
    "velocity": 104,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74853,
        45.2257
    ]
},
{
    "routeDataPointId": "1065",
    "segmentId": "1",
    "time": 1672158533197,
    "velocity": 105,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74847,
        45.22561
    ]
},
{
    "routeDataPointId": "1066",
    "segmentId": "1",
    "time": 1672158533207,
    "velocity": 106,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74763,
        45.22422
    ]
},
{
    "routeDataPointId": "1067",
    "segmentId": "1",
    "time": 1672158533217,
    "velocity": 107,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74762,
        45.22422
    ]
},
{
    "routeDataPointId": "1068",
    "segmentId": "1",
    "time": 1672158533227,
    "velocity": 108,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74691,
        45.22304
    ]
},
{
    "routeDataPointId": "1069",
    "segmentId": "1",
    "time": 1672158533237,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74678,
        45.22284
    ]
},
{
    "routeDataPointId": "1070",
    "segmentId": "1",
    "time": 1672158533247,
    "velocity": 110,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74676,
        45.2228
    ]
},
{
    "routeDataPointId": "1071",
    "segmentId": "1",
    "time": 1672158533257,
    "velocity": 111,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74649,
        45.22236
    ]
},
{
    "routeDataPointId": "1072",
    "segmentId": "1",
    "time": 1672158533267,
    "velocity": 112,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74643,
        45.22225
    ]
},
{
    "routeDataPointId": "1073",
    "segmentId": "1",
    "time": 1672158533277,
    "velocity": 113,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74636,
        45.22215
    ]
},
{
    "routeDataPointId": "1074",
    "segmentId": "1",
    "time": 1672158533287,
    "velocity": 114,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74618,
        45.22185
    ]
},
{
    "routeDataPointId": "1075",
    "segmentId": "1",
    "time": 1672158533297,
    "velocity": 115,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74612,
        45.22176
    ]
},
{
    "routeDataPointId": "1076",
    "segmentId": "1",
    "time": 1672158533307,
    "velocity": 116,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74606,
        45.22166
    ]
},
{
    "routeDataPointId": "1077",
    "segmentId": "1",
    "time": 1672158533317,
    "velocity": 117,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74606,
        45.22165
    ]
},
{
    "routeDataPointId": "1078",
    "segmentId": "1",
    "time": 1672158533327,
    "velocity": 118,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.746,
        45.22156
    ]
},
{
    "routeDataPointId": "1079",
    "segmentId": "1",
    "time": 1672158533337,
    "velocity": 119,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74588,
        45.22136
    ]
},
{
    "routeDataPointId": "1080",
    "segmentId": "1",
    "time": 1672158533347,
    "velocity": 120,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74582,
        45.22127
    ]
},
{
    "routeDataPointId": "1081",
    "segmentId": "1",
    "time": 1672158533357,
    "velocity": 121,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7457,
        45.22106
    ]
},
{
    "routeDataPointId": "1082",
    "segmentId": "1",
    "time": 1672158533367,
    "velocity": 122,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74564,
        45.22097
    ]
},
{
    "routeDataPointId": "1083",
    "segmentId": "1",
    "time": 1672158533377,
    "velocity": 123,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74535,
        45.22049
    ]
},
{
    "routeDataPointId": "1084",
    "segmentId": "1",
    "time": 1672158533387,
    "velocity": 124,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74534,
        45.22048
    ]
},
{
    "routeDataPointId": "1085",
    "segmentId": "1",
    "time": 1672158533397,
    "velocity": 125,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74522,
        45.22027
    ]
},
{
    "routeDataPointId": "1086",
    "segmentId": "1",
    "time": 1672158533407,
    "velocity": 126,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "foo bar",
    "coordinates": [
        -75.74516,
        45.22018
    ]
},
{
    "routeDataPointId": "1087",
    "segmentId": "1",
    "time": 1672158533417,
    "velocity": 127,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7451,
        45.22007
    ]
},
{
    "routeDataPointId": "1088",
    "segmentId": "1",
    "time": 1672158533427,
    "velocity": 128,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74504,
        45.21998
    ]
},
{
    "routeDataPointId": "1089",
    "segmentId": "1",
    "time": 1672158533437,
    "velocity": 129,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74492,
        45.21978
    ]
},
{
    "routeDataPointId": "1090",
    "segmentId": "1",
    "time": 1672158533447,
    "velocity": 130,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74489,
        45.21974
    ]
},
{
    "routeDataPointId": "1091",
    "segmentId": "1",
    "time": 1672158533457,
    "velocity": 131,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74486,
        45.21968
    ]
},
{
    "routeDataPointId": "1092",
    "segmentId": "1",
    "time": 1672158533467,
    "velocity": 132,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7448,
        45.21959
    ]
},
{
    "routeDataPointId": "1093",
    "segmentId": "1",
    "time": 1672158533477,
    "velocity": 133,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74474,
        45.21948
    ]
},
{
    "routeDataPointId": "1094",
    "segmentId": "1",
    "time": 1672158533487,
    "velocity": 134,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74457,
        45.21921
    ]
},
{
    "routeDataPointId": "1095",
    "segmentId": "1",
    "time": 1672158533497,
    "velocity": 135,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74456,
        45.21919
    ]
},
{
    "routeDataPointId": "1096",
    "segmentId": "1",
    "time": 1672158533507,
    "velocity": 136,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74432,
        45.21879
    ]
},
{
    "routeDataPointId": "1097",
    "segmentId": "1",
    "time": 1672158533517,
    "velocity": 137,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74426,
        45.2187
    ]
},
{
    "routeDataPointId": "1098",
    "segmentId": "1",
    "time": 1672158533527,
    "velocity": 138,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7442,
        45.21859
    ]
},
{
    "routeDataPointId": "1099",
    "segmentId": "1",
    "time": 1672158533537,
    "velocity": 139,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74403,
        45.21832
    ]
},
{
    "routeDataPointId": "1100",
    "segmentId": "1",
    "time": 1672158533547,
    "velocity": 140,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74401,
        45.2183
    ]
},
{
    "routeDataPointId": "1101",
    "segmentId": "1",
    "time": 1672158533557,
    "velocity": 141,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74389,
        45.2181
    ]
},
{
    "routeDataPointId": "1102",
    "segmentId": "1",
    "time": 1672158533567,
    "velocity": 142,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74382,
        45.21801
    ]
},
{
    "routeDataPointId": "1103",
    "segmentId": "1",
    "time": 1672158533577,
    "velocity": 143,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74376,
        45.21791
    ]
},
{
    "routeDataPointId": "1104",
    "segmentId": "1",
    "time": 1672158533587,
    "velocity": 144,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74342,
        45.21742
    ]
},
{
    "routeDataPointId": "1105",
    "segmentId": "1",
    "time": 1672158533597,
    "velocity": 145,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74341,
        45.2174
    ]
},
{
    "routeDataPointId": "1106",
    "segmentId": "1",
    "time": 1672158533607,
    "velocity": 146,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74336,
        45.21732
    ]
},
{
    "routeDataPointId": "1107",
    "segmentId": "1",
    "time": 1672158533617,
    "velocity": 147,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74329,
        45.21723
    ]
},
{
    "routeDataPointId": "1108",
    "segmentId": "1",
    "time": 1672158533627,
    "velocity": 148,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74322,
        45.21713
    ]
},
{
    "routeDataPointId": "1109",
    "segmentId": "1",
    "time": 1672158533637,
    "velocity": 149,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74315,
        45.21704
    ]
},
{
    "routeDataPointId": "1110",
    "segmentId": "1",
    "time": 1672158533647,
    "velocity": 150,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74308,
        45.21694
    ]
},
{
    "routeDataPointId": "1111",
    "segmentId": "1",
    "time": 1672158533657,
    "velocity": 151,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74301,
        45.21685
    ]
},
{
    "routeDataPointId": "1112",
    "segmentId": "1",
    "time": 1672158533667,
    "velocity": 152,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74294,
        45.21675
    ]
},
{
    "routeDataPointId": "1113",
    "segmentId": "1",
    "time": 1672158533677,
    "velocity": 153,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74289,
        45.21669
    ]
},
{
    "routeDataPointId": "1114",
    "segmentId": "1",
    "time": 1672158533687,
    "velocity": 154,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74286,
        45.21666
    ]
},
{
    "routeDataPointId": "1115",
    "segmentId": "1",
    "time": 1672158533697,
    "velocity": 155,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7428,
        45.21657
    ]
},
{
    "routeDataPointId": "1116",
    "segmentId": "1",
    "time": 1672158533707,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74272,
        45.21647
    ]
},
{
    "routeDataPointId": "1117",
    "segmentId": "1",
    "time": 1672158533717,
    "velocity": 157,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74265,
        45.21637
    ]
},
{
    "routeDataPointId": "1118",
    "segmentId": "1",
    "time": 1672158533727,
    "velocity": 158,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74261,
        45.21633
    ]
},
{
    "routeDataPointId": "1119",
    "segmentId": "1",
    "time": 1672158533737,
    "velocity": 159,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74257,
        45.21628
    ]
},
{
    "routeDataPointId": "1120",
    "segmentId": "1",
    "time": 1672158533747,
    "velocity": 0,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7425,
        45.21618
    ]
},
{
    "routeDataPointId": "1121",
    "segmentId": "1",
    "time": 1672158533757,
    "velocity": 1,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.74242,
        45.21609
    ]
},
{
    "routeDataPointId": "1122",
    "segmentId": "1",
    "time": 1672158533767,
    "velocity": 2,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74229,
        45.21593
    ]
},
{
    "routeDataPointId": "1123",
    "segmentId": "1",
    "time": 1672158533777,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7422,
        45.21581
    ]
},
{
    "routeDataPointId": "1124",
    "segmentId": "1",
    "time": 1672158533787,
    "velocity": 4,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74212,
        45.21572
    ]
},
{
    "routeDataPointId": "1125",
    "segmentId": "1",
    "time": 1672158533797,
    "velocity": 5,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74205,
        45.21562
    ]
},
{
    "routeDataPointId": "1126",
    "segmentId": "1",
    "time": 1672158533807,
    "velocity": 6,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74197,
        45.21553
    ]
},
{
    "routeDataPointId": "1127",
    "segmentId": "1",
    "time": 1672158533817,
    "velocity": 7,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74174,
        45.21525
    ]
},
{
    "routeDataPointId": "1128",
    "segmentId": "1",
    "time": 1672158533827,
    "velocity": 8,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74173,
        45.21524
    ]
},
{
    "routeDataPointId": "1129",
    "segmentId": "1",
    "time": 1672158533837,
    "velocity": 9,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.74159,
        45.21506
    ]
},
{
    "routeDataPointId": "1130",
    "segmentId": "1",
    "time": 1672158533847,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74143,
        45.21487
    ]
},
{
    "routeDataPointId": "1131",
    "segmentId": "1",
    "time": 1672158533857,
    "velocity": 11,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74137,
        45.21481
    ]
},
{
    "routeDataPointId": "1132",
    "segmentId": "1",
    "time": 1672158533867,
    "velocity": 12,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74136,
        45.21479
    ]
},
{
    "routeDataPointId": "1133",
    "segmentId": "1",
    "time": 1672158533877,
    "velocity": 13,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.74128,
        45.2147
    ]
},
{
    "routeDataPointId": "1134",
    "segmentId": "1",
    "time": 1672158533887,
    "velocity": 14,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74121,
        45.2146
    ]
},
{
    "routeDataPointId": "1135",
    "segmentId": "1",
    "time": 1672158533897,
    "velocity": 15,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74113,
        45.21451
    ]
},
{
    "routeDataPointId": "1136",
    "segmentId": "1",
    "time": 1672158533907,
    "velocity": 16,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74106,
        45.21442
    ]
},
{
    "routeDataPointId": "1137",
    "segmentId": "1",
    "time": 1672158533917,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.74097,
        45.21432
    ]
},
{
    "routeDataPointId": "1138",
    "segmentId": "1",
    "time": 1672158533927,
    "velocity": 18,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7409,
        45.21423
    ]
},
{
    "routeDataPointId": "1139",
    "segmentId": "1",
    "time": 1672158533937,
    "velocity": 19,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74067,
        45.21396
    ]
},
{
    "routeDataPointId": "1140",
    "segmentId": "1",
    "time": 1672158533947,
    "velocity": 20,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.74044,
        45.21367
    ]
},
{
    "routeDataPointId": "1141",
    "segmentId": "1",
    "time": 1672158533957,
    "velocity": 21,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.74036,
        45.21358
    ]
},
{
    "routeDataPointId": "1142",
    "segmentId": "1",
    "time": 1672158533967,
    "velocity": 22,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.74021,
        45.21339
    ]
},
{
    "routeDataPointId": "1143",
    "segmentId": "1",
    "time": 1672158533977,
    "velocity": 23,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.74013,
        45.2133
    ]
},
{
    "routeDataPointId": "1144",
    "segmentId": "1",
    "time": 1672158533987,
    "velocity": 24,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73998,
        45.21311
    ]
},
{
    "routeDataPointId": "1145",
    "segmentId": "1",
    "time": 1672158533997,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73993,
        45.21306
    ]
},
{
    "routeDataPointId": "1146",
    "segmentId": "1",
    "time": 1672158534007,
    "velocity": 26,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73976,
        45.21284
    ]
},
{
    "routeDataPointId": "1147",
    "segmentId": "1",
    "time": 1672158534017,
    "velocity": 27,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73973,
        45.21281
    ]
},
{
    "routeDataPointId": "1148",
    "segmentId": "1",
    "time": 1672158534027,
    "velocity": 28,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73953,
        45.21256
    ]
},
{
    "routeDataPointId": "1149",
    "segmentId": "1",
    "time": 1672158534037,
    "velocity": 29,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73945,
        45.21247
    ]
},
{
    "routeDataPointId": "1150",
    "segmentId": "1",
    "time": 1672158534047,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73937,
        45.21237
    ]
},
{
    "routeDataPointId": "1151",
    "segmentId": "1",
    "time": 1672158534057,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73929,
        45.21228
    ]
},
{
    "routeDataPointId": "1152",
    "segmentId": "1",
    "time": 1672158534067,
    "velocity": 32,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73922,
        45.21219
    ]
},
{
    "routeDataPointId": "1153",
    "segmentId": "1",
    "time": 1672158534077,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73914,
        45.2121
    ]
},
{
    "routeDataPointId": "1154",
    "segmentId": "1",
    "time": 1672158534087,
    "velocity": 34,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73891,
        45.21181
    ]
},
{
    "routeDataPointId": "1155",
    "segmentId": "1",
    "time": 1672158534097,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73883,
        45.21172
    ]
},
{
    "routeDataPointId": "1156",
    "segmentId": "1",
    "time": 1672158534107,
    "velocity": 36,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73876,
        45.21163
    ]
},
{
    "routeDataPointId": "1157",
    "segmentId": "1",
    "time": 1672158534117,
    "velocity": 37,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73868,
        45.21154
    ]
},
{
    "routeDataPointId": "1158",
    "segmentId": "1",
    "time": 1672158534127,
    "velocity": 38,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73853,
        45.21135
    ]
},
{
    "routeDataPointId": "1159",
    "segmentId": "1",
    "time": 1672158534137,
    "velocity": 39,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73846,
        45.21127
    ]
},
{
    "routeDataPointId": "1160",
    "segmentId": "1",
    "time": 1672158534147,
    "velocity": 40,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73845,
        45.21125
    ]
},
{
    "routeDataPointId": "1161",
    "segmentId": "1",
    "time": 1672158534157,
    "velocity": 41,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73829,
        45.21107
    ]
},
{
    "routeDataPointId": "1162",
    "segmentId": "1",
    "time": 1672158534167,
    "velocity": 42,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73811,
        45.21084
    ]
},
{
    "routeDataPointId": "1163",
    "segmentId": "1",
    "time": 1672158534177,
    "velocity": 43,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73806,
        45.21079
    ]
},
{
    "routeDataPointId": "1164",
    "segmentId": "1",
    "time": 1672158534187,
    "velocity": 44,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73784,
        45.21051
    ]
},
{
    "routeDataPointId": "1165",
    "segmentId": "1",
    "time": 1672158534197,
    "velocity": 45,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73776,
        45.21042
    ]
},
{
    "routeDataPointId": "1166",
    "segmentId": "1",
    "time": 1672158534207,
    "velocity": 46,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73769,
        45.21033
    ]
},
{
    "routeDataPointId": "1167",
    "segmentId": "1",
    "time": 1672158534217,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73761,
        45.21024
    ]
},
{
    "routeDataPointId": "1168",
    "segmentId": "1",
    "time": 1672158534227,
    "velocity": 48,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73738,
        45.20995
    ]
},
{
    "routeDataPointId": "1169",
    "segmentId": "1",
    "time": 1672158534237,
    "velocity": 49,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7373,
        45.20986
    ]
},
{
    "routeDataPointId": "1170",
    "segmentId": "1",
    "time": 1672158534247,
    "velocity": 50,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "foo bar",
    "coordinates": [
        -75.73729,
        45.20984
    ]
},
{
    "routeDataPointId": "1171",
    "segmentId": "1",
    "time": 1672158534257,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73722,
        45.20977
    ]
},
{
    "routeDataPointId": "1172",
    "segmentId": "1",
    "time": 1672158534267,
    "velocity": 52,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73707,
        45.20958
    ]
},
{
    "routeDataPointId": "1173",
    "segmentId": "1",
    "time": 1672158534277,
    "velocity": 53,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73699,
        45.20949
    ]
},
{
    "routeDataPointId": "1174",
    "segmentId": "1",
    "time": 1672158534287,
    "velocity": 54,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73669,
        45.20911
    ]
},
{
    "routeDataPointId": "1175",
    "segmentId": "1",
    "time": 1672158534297,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73663,
        45.20904
    ]
},
{
    "routeDataPointId": "1176",
    "segmentId": "1",
    "time": 1672158534307,
    "velocity": 56,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73661,
        45.20902
    ]
},
{
    "routeDataPointId": "1177",
    "segmentId": "1",
    "time": 1672158534317,
    "velocity": 57,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73646,
        45.20883
    ]
},
{
    "routeDataPointId": "1178",
    "segmentId": "1",
    "time": 1672158534327,
    "velocity": 58,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73638,
        45.20874
    ]
},
{
    "routeDataPointId": "1179",
    "segmentId": "1",
    "time": 1672158534337,
    "velocity": 59,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73631,
        45.20865
    ]
},
{
    "routeDataPointId": "1180",
    "segmentId": "1",
    "time": 1672158534347,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73623,
        45.20856
    ]
},
{
    "routeDataPointId": "1181",
    "segmentId": "1",
    "time": 1672158534357,
    "velocity": 61,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73615,
        45.20846
    ]
},
{
    "routeDataPointId": "1182",
    "segmentId": "1",
    "time": 1672158534367,
    "velocity": 62,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73607,
        45.20837
    ]
},
{
    "routeDataPointId": "1183",
    "segmentId": "1",
    "time": 1672158534377,
    "velocity": 63,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.736,
        45.20828
    ]
},
{
    "routeDataPointId": "1184",
    "segmentId": "1",
    "time": 1672158534387,
    "velocity": 64,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73598,
        45.20825
    ]
},
{
    "routeDataPointId": "1185",
    "segmentId": "1",
    "time": 1672158534397,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73584,
        45.20809
    ]
},
{
    "routeDataPointId": "1186",
    "segmentId": "1",
    "time": 1672158534407,
    "velocity": 66,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73569,
        45.2079
    ]
},
{
    "routeDataPointId": "1187",
    "segmentId": "1",
    "time": 1672158534417,
    "velocity": 67,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73562,
        45.20782
    ]
},
{
    "routeDataPointId": "1188",
    "segmentId": "1",
    "time": 1672158534427,
    "velocity": 68,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73547,
        45.20763
    ]
},
{
    "routeDataPointId": "1189",
    "segmentId": "1",
    "time": 1672158534437,
    "velocity": 69,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73544,
        45.2076
    ]
},
{
    "routeDataPointId": "1190",
    "segmentId": "1",
    "time": 1672158534447,
    "velocity": 70,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73539,
        45.20753
    ]
},
{
    "routeDataPointId": "1191",
    "segmentId": "1",
    "time": 1672158534457,
    "velocity": 71,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73523,
        45.20735
    ]
},
{
    "routeDataPointId": "1192",
    "segmentId": "1",
    "time": 1672158534467,
    "velocity": 72,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73508,
        45.20716
    ]
},
{
    "routeDataPointId": "1193",
    "segmentId": "1",
    "time": 1672158534477,
    "velocity": 73,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.735,
        45.20707
    ]
},
{
    "routeDataPointId": "1194",
    "segmentId": "1",
    "time": 1672158534487,
    "velocity": 74,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73485,
        45.20688
    ]
},
{
    "routeDataPointId": "1195",
    "segmentId": "1",
    "time": 1672158534497,
    "velocity": 75,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73484,
        45.20686
    ]
},
{
    "routeDataPointId": "1196",
    "segmentId": "1",
    "time": 1672158534507,
    "velocity": 76,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73477,
        45.20679
    ]
},
{
    "routeDataPointId": "1197",
    "segmentId": "1",
    "time": 1672158534517,
    "velocity": 77,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73455,
        45.20651
    ]
},
{
    "routeDataPointId": "1198",
    "segmentId": "1",
    "time": 1672158534527,
    "velocity": 78,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73447,
        45.20642
    ]
},
{
    "routeDataPointId": "1199",
    "segmentId": "1",
    "time": 1672158534537,
    "velocity": 79,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7344,
        45.20633
    ]
},
{
    "routeDataPointId": "1200",
    "segmentId": "1",
    "time": 1672158534547,
    "velocity": 80,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73432,
        45.20624
    ]
},
{
    "routeDataPointId": "1201",
    "segmentId": "1",
    "time": 1672158534557,
    "velocity": 81,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73417,
        45.20605
    ]
},
{
    "routeDataPointId": "1202",
    "segmentId": "1",
    "time": 1672158534567,
    "velocity": 82,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73409,
        45.20596
    ]
},
{
    "routeDataPointId": "1203",
    "segmentId": "1",
    "time": 1672158534577,
    "velocity": 83,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73394,
        45.20577
    ]
},
{
    "routeDataPointId": "1204",
    "segmentId": "1",
    "time": 1672158534587,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73386,
        45.20568
    ]
},
{
    "routeDataPointId": "1205",
    "segmentId": "1",
    "time": 1672158534597,
    "velocity": 85,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73371,
        45.20549
    ]
},
{
    "routeDataPointId": "1206",
    "segmentId": "1",
    "time": 1672158534607,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73363,
        45.2054
    ]
},
{
    "routeDataPointId": "1207",
    "segmentId": "1",
    "time": 1672158534617,
    "velocity": 87,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73355,
        45.2053
    ]
},
{
    "routeDataPointId": "1208",
    "segmentId": "1",
    "time": 1672158534627,
    "velocity": 88,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73347,
        45.20521
    ]
},
{
    "routeDataPointId": "1209",
    "segmentId": "1",
    "time": 1672158534637,
    "velocity": 89,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73339,
        45.2051
    ]
},
{
    "routeDataPointId": "1210",
    "segmentId": "1",
    "time": 1672158534647,
    "velocity": 90,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73324,
        45.20493
    ]
},
{
    "routeDataPointId": "1211",
    "segmentId": "1",
    "time": 1672158534657,
    "velocity": 91,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73317,
        45.20484
    ]
},
{
    "routeDataPointId": "1212",
    "segmentId": "1",
    "time": 1672158534667,
    "velocity": 92,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73309,
        45.20475
    ]
},
{
    "routeDataPointId": "1213",
    "segmentId": "1",
    "time": 1672158534677,
    "velocity": 93,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73294,
        45.20456
    ]
},
{
    "routeDataPointId": "1214",
    "segmentId": "1",
    "time": 1672158534687,
    "velocity": 94,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73286,
        45.20447
    ]
},
{
    "routeDataPointId": "1215",
    "segmentId": "1",
    "time": 1672158534697,
    "velocity": 95,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73279,
        45.20438
    ]
},
{
    "routeDataPointId": "1216",
    "segmentId": "1",
    "time": 1672158534707,
    "velocity": 96,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7327,
        45.20428
    ]
},
{
    "routeDataPointId": "1217",
    "segmentId": "1",
    "time": 1672158534717,
    "velocity": 97,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73256,
        45.2041
    ]
},
{
    "routeDataPointId": "1218",
    "segmentId": "1",
    "time": 1672158534727,
    "velocity": 98,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73248,
        45.20401
    ]
},
{
    "routeDataPointId": "1219",
    "segmentId": "1",
    "time": 1672158534737,
    "velocity": 99,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7324,
        45.20391
    ]
},
{
    "routeDataPointId": "1220",
    "segmentId": "1",
    "time": 1672158534747,
    "velocity": 100,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73233,
        45.20381
    ]
},
{
    "routeDataPointId": "1221",
    "segmentId": "1",
    "time": 1672158534757,
    "velocity": 101,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73225,
        45.20372
    ]
},
{
    "routeDataPointId": "1222",
    "segmentId": "1",
    "time": 1672158534767,
    "velocity": 102,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73218,
        45.20363
    ]
},
{
    "routeDataPointId": "1223",
    "segmentId": "1",
    "time": 1672158534777,
    "velocity": 103,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73202,
        45.20345
    ]
},
{
    "routeDataPointId": "1224",
    "segmentId": "1",
    "time": 1672158534787,
    "velocity": 104,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.73187,
        45.20326
    ]
},
{
    "routeDataPointId": "1225",
    "segmentId": "1",
    "time": 1672158534797,
    "velocity": 105,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73179,
        45.20317
    ]
},
{
    "routeDataPointId": "1226",
    "segmentId": "1",
    "time": 1672158534807,
    "velocity": 106,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73164,
        45.20298
    ]
},
{
    "routeDataPointId": "1227",
    "segmentId": "1",
    "time": 1672158534817,
    "velocity": 107,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.73156,
        45.20289
    ]
},
{
    "routeDataPointId": "1228",
    "segmentId": "1",
    "time": 1672158534827,
    "velocity": 108,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73141,
        45.2027
    ]
},
{
    "routeDataPointId": "1229",
    "segmentId": "1",
    "time": 1672158534837,
    "velocity": 109,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73133,
        45.20261
    ]
},
{
    "routeDataPointId": "1230",
    "segmentId": "1",
    "time": 1672158534847,
    "velocity": 110,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73125,
        45.2025
    ]
},
{
    "routeDataPointId": "1231",
    "segmentId": "1",
    "time": 1672158534857,
    "velocity": 111,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73113,
        45.20236
    ]
},
{
    "routeDataPointId": "1232",
    "segmentId": "1",
    "time": 1672158534867,
    "velocity": 112,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7311,
        45.20233
    ]
},
{
    "routeDataPointId": "1233",
    "segmentId": "1",
    "time": 1672158534877,
    "velocity": 113,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73103,
        45.20223
    ]
},
{
    "routeDataPointId": "1234",
    "segmentId": "1",
    "time": 1672158534887,
    "velocity": 114,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73087,
        45.20205
    ]
},
{
    "routeDataPointId": "1235",
    "segmentId": "1",
    "time": 1672158534897,
    "velocity": 115,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.73081,
        45.20197
    ]
},
{
    "routeDataPointId": "1236",
    "segmentId": "1",
    "time": 1672158534907,
    "velocity": 116,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73079,
        45.20195
    ]
},
{
    "routeDataPointId": "1237",
    "segmentId": "1",
    "time": 1672158534917,
    "velocity": 117,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73072,
        45.20186
    ]
},
{
    "routeDataPointId": "1238",
    "segmentId": "1",
    "time": 1672158534927,
    "velocity": 118,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.73064,
        45.20177
    ]
},
{
    "routeDataPointId": "1239",
    "segmentId": "1",
    "time": 1672158534937,
    "velocity": 119,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.73057,
        45.20167
    ]
},
{
    "routeDataPointId": "1240",
    "segmentId": "1",
    "time": 1672158534947,
    "velocity": 120,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.73049,
        45.20158
    ]
},
{
    "routeDataPointId": "1241",
    "segmentId": "1",
    "time": 1672158534957,
    "velocity": 121,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.73027,
        45.2013
    ]
},
{
    "routeDataPointId": "1242",
    "segmentId": "1",
    "time": 1672158534967,
    "velocity": 122,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.73011,
        45.20112
    ]
},
{
    "routeDataPointId": "1243",
    "segmentId": "1",
    "time": 1672158534977,
    "velocity": 123,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72998,
        45.20095
    ]
},
{
    "routeDataPointId": "1244",
    "segmentId": "1",
    "time": 1672158534987,
    "velocity": 124,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72996,
        45.20094
    ]
},
{
    "routeDataPointId": "1245",
    "segmentId": "1",
    "time": 1672158534997,
    "velocity": 125,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72988,
        45.20084
    ]
},
{
    "routeDataPointId": "1246",
    "segmentId": "1",
    "time": 1672158535007,
    "velocity": 126,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7298,
        45.20075
    ]
},
{
    "routeDataPointId": "1247",
    "segmentId": "1",
    "time": 1672158535017,
    "velocity": 127,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72973,
        45.20065
    ]
},
{
    "routeDataPointId": "1248",
    "segmentId": "1",
    "time": 1672158535027,
    "velocity": 128,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72965,
        45.20056
    ]
},
{
    "routeDataPointId": "1249",
    "segmentId": "1",
    "time": 1672158535037,
    "velocity": 129,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72962,
        45.20052
    ]
},
{
    "routeDataPointId": "1250",
    "segmentId": "1",
    "time": 1672158535047,
    "velocity": 130,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72957,
        45.20047
    ]
},
{
    "routeDataPointId": "1251",
    "segmentId": "1",
    "time": 1672158535057,
    "velocity": 131,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72927,
        45.20009
    ]
},
{
    "routeDataPointId": "1252",
    "segmentId": "1",
    "time": 1672158535067,
    "velocity": 132,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72911,
        45.19991
    ]
},
{
    "routeDataPointId": "1253",
    "segmentId": "1",
    "time": 1672158535077,
    "velocity": 133,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72904,
        45.19982
    ]
},
{
    "routeDataPointId": "1254",
    "segmentId": "1",
    "time": 1672158535087,
    "velocity": 134,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72896,
        45.19973
    ]
},
{
    "routeDataPointId": "1255",
    "segmentId": "1",
    "time": 1672158535097,
    "velocity": 135,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72881,
        45.19954
    ]
},
{
    "routeDataPointId": "1256",
    "segmentId": "1",
    "time": 1672158535107,
    "velocity": 136,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72879,
        45.19952
    ]
},
{
    "routeDataPointId": "1257",
    "segmentId": "1",
    "time": 1672158535117,
    "velocity": 137,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72873,
        45.19945
    ]
},
{
    "routeDataPointId": "1258",
    "segmentId": "1",
    "time": 1672158535127,
    "velocity": 138,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72866,
        45.19935
    ]
},
{
    "routeDataPointId": "1259",
    "segmentId": "1",
    "time": 1672158535137,
    "velocity": 139,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72858,
        45.19926
    ]
},
{
    "routeDataPointId": "1260",
    "segmentId": "1",
    "time": 1672158535147,
    "velocity": 140,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7285,
        45.19916
    ]
},
{
    "routeDataPointId": "1261",
    "segmentId": "1",
    "time": 1672158535157,
    "velocity": 141,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72842,
        45.19907
    ]
},
{
    "routeDataPointId": "1262",
    "segmentId": "1",
    "time": 1672158535167,
    "velocity": 142,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72832,
        45.19894
    ]
},
{
    "routeDataPointId": "1263",
    "segmentId": "1",
    "time": 1672158535177,
    "velocity": 143,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72827,
        45.19889
    ]
},
{
    "routeDataPointId": "1264",
    "segmentId": "1",
    "time": 1672158535187,
    "velocity": 144,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72804,
        45.19861
    ]
},
{
    "routeDataPointId": "1265",
    "segmentId": "1",
    "time": 1672158535197,
    "velocity": 145,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72797,
        45.19851
    ]
},
{
    "routeDataPointId": "1266",
    "segmentId": "1",
    "time": 1672158535207,
    "velocity": 146,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72789,
        45.19842
    ]
},
{
    "routeDataPointId": "1267",
    "segmentId": "1",
    "time": 1672158535217,
    "velocity": 147,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72783,
        45.19836
    ]
},
{
    "routeDataPointId": "1268",
    "segmentId": "1",
    "time": 1672158535227,
    "velocity": 148,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72781,
        45.19833
    ]
},
{
    "routeDataPointId": "1269",
    "segmentId": "1",
    "time": 1672158535237,
    "velocity": 149,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72766,
        45.19814
    ]
},
{
    "routeDataPointId": "1270",
    "segmentId": "1",
    "time": 1672158535247,
    "velocity": 150,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72762,
        45.1981
    ]
},
{
    "routeDataPointId": "1271",
    "segmentId": "1",
    "time": 1672158535257,
    "velocity": 151,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72736,
        45.19777
    ]
},
{
    "routeDataPointId": "1272",
    "segmentId": "1",
    "time": 1672158535267,
    "velocity": 152,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7272,
        45.19759
    ]
},
{
    "routeDataPointId": "1273",
    "segmentId": "1",
    "time": 1672158535277,
    "velocity": 153,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72714,
        45.19751
    ]
},
{
    "routeDataPointId": "1274",
    "segmentId": "1",
    "time": 1672158535287,
    "velocity": 154,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72712,
        45.19749
    ]
},
{
    "routeDataPointId": "1275",
    "segmentId": "1",
    "time": 1672158535297,
    "velocity": 155,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.7269,
        45.19721
    ]
},
{
    "routeDataPointId": "1276",
    "segmentId": "1",
    "time": 1672158535307,
    "velocity": 156,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72677,
        45.19706
    ]
},
{
    "routeDataPointId": "1277",
    "segmentId": "1",
    "time": 1672158535317,
    "velocity": 157,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72675,
        45.19703
    ]
},
{
    "routeDataPointId": "1278",
    "segmentId": "1",
    "time": 1672158535327,
    "velocity": 158,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72667,
        45.19694
    ]
},
{
    "routeDataPointId": "1279",
    "segmentId": "1",
    "time": 1672158535337,
    "velocity": 159,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72659,
        45.19684
    ]
},
{
    "routeDataPointId": "1280",
    "segmentId": "1",
    "time": 1672158535347,
    "velocity": 0,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72651,
        45.19675
    ]
},
{
    "routeDataPointId": "1281",
    "segmentId": "1",
    "time": 1672158535357,
    "velocity": 1,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72641,
        45.19662
    ]
},
{
    "routeDataPointId": "1282",
    "segmentId": "1",
    "time": 1672158535367,
    "velocity": 2,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72636,
        45.19657
    ]
},
{
    "routeDataPointId": "1283",
    "segmentId": "1",
    "time": 1672158535377,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72613,
        45.19628
    ]
},
{
    "routeDataPointId": "1284",
    "segmentId": "1",
    "time": 1672158535387,
    "velocity": 4,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72605,
        45.19619
    ]
},
{
    "routeDataPointId": "1285",
    "segmentId": "1",
    "time": 1672158535397,
    "velocity": 5,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7259,
        45.196
    ]
},
{
    "routeDataPointId": "1286",
    "segmentId": "1",
    "time": 1672158535407,
    "velocity": 6,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72582,
        45.19591
    ]
},
{
    "routeDataPointId": "1287",
    "segmentId": "1",
    "time": 1672158535417,
    "velocity": 7,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72568,
        45.19573
    ]
},
{
    "routeDataPointId": "1288",
    "segmentId": "1",
    "time": 1672158535427,
    "velocity": 8,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72565,
        45.1957
    ]
},
{
    "routeDataPointId": "1289",
    "segmentId": "1",
    "time": 1672158535437,
    "velocity": 9,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72552,
        45.19554
    ]
},
{
    "routeDataPointId": "1290",
    "segmentId": "1",
    "time": 1672158535447,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72544,
        45.19545
    ]
},
{
    "routeDataPointId": "1291",
    "segmentId": "1",
    "time": 1672158535457,
    "velocity": 11,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72529,
        45.19526
    ]
},
{
    "routeDataPointId": "1292",
    "segmentId": "1",
    "time": 1672158535467,
    "velocity": 12,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72521,
        45.19517
    ]
},
{
    "routeDataPointId": "1293",
    "segmentId": "1",
    "time": 1672158535477,
    "velocity": 13,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72514,
        45.19507
    ]
},
{
    "routeDataPointId": "1294",
    "segmentId": "1",
    "time": 1672158535487,
    "velocity": 14,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72509,
        45.19501
    ]
},
{
    "routeDataPointId": "1295",
    "segmentId": "1",
    "time": 1672158535497,
    "velocity": 15,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72506,
        45.19498
    ]
},
{
    "routeDataPointId": "1296",
    "segmentId": "1",
    "time": 1672158535507,
    "velocity": 16,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72499,
        45.19489
    ]
},
{
    "routeDataPointId": "1297",
    "segmentId": "1",
    "time": 1672158535517,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72492,
        45.19479
    ]
},
{
    "routeDataPointId": "1298",
    "segmentId": "1",
    "time": 1672158535527,
    "velocity": 18,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72484,
        45.1947
    ]
},
{
    "routeDataPointId": "1299",
    "segmentId": "1",
    "time": 1672158535537,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72478,
        45.1946
    ]
},
{
    "routeDataPointId": "1300",
    "segmentId": "1",
    "time": 1672158535547,
    "velocity": 20,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7247,
        45.19451
    ]
},
{
    "routeDataPointId": "1301",
    "segmentId": "1",
    "time": 1672158535557,
    "velocity": 21,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72469,
        45.19448
    ]
},
{
    "routeDataPointId": "1302",
    "segmentId": "1",
    "time": 1672158535567,
    "velocity": 22,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72464,
        45.19442
    ]
},
{
    "routeDataPointId": "1303",
    "segmentId": "1",
    "time": 1672158535577,
    "velocity": 23,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72436,
        45.19403
    ]
},
{
    "routeDataPointId": "1304",
    "segmentId": "1",
    "time": 1672158535587,
    "velocity": 24,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7243,
        45.19393
    ]
},
{
    "routeDataPointId": "1305",
    "segmentId": "1",
    "time": 1672158535597,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72423,
        45.19383
    ]
},
{
    "routeDataPointId": "1306",
    "segmentId": "1",
    "time": 1672158535607,
    "velocity": 26,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72416,
        45.19374
    ]
},
{
    "routeDataPointId": "1307",
    "segmentId": "1",
    "time": 1672158535617,
    "velocity": 27,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72404,
        45.19354
    ]
},
{
    "routeDataPointId": "1308",
    "segmentId": "1",
    "time": 1672158535627,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72397,
        45.19345
    ]
},
{
    "routeDataPointId": "1309",
    "segmentId": "1",
    "time": 1672158535637,
    "velocity": 29,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72391,
        45.19335
    ]
},
{
    "routeDataPointId": "1310",
    "segmentId": "1",
    "time": 1672158535647,
    "velocity": 30,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72384,
        45.19325
    ]
},
{
    "routeDataPointId": "1311",
    "segmentId": "1",
    "time": 1672158535657,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72377,
        45.19313
    ]
},
{
    "routeDataPointId": "1312",
    "segmentId": "1",
    "time": 1672158535667,
    "velocity": 32,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72372,
        45.19306
    ]
},
{
    "routeDataPointId": "1313",
    "segmentId": "1",
    "time": 1672158535677,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7236,
        45.19285
    ]
},
{
    "routeDataPointId": "1314",
    "segmentId": "1",
    "time": 1672158535687,
    "velocity": 34,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72357,
        45.19282
    ]
},
{
    "routeDataPointId": "1315",
    "segmentId": "1",
    "time": 1672158535697,
    "velocity": 35,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72353,
        45.19276
    ]
},
{
    "routeDataPointId": "1316",
    "segmentId": "1",
    "time": 1672158535707,
    "velocity": 36,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72341,
        45.19256
    ]
},
{
    "routeDataPointId": "1317",
    "segmentId": "1",
    "time": 1672158535717,
    "velocity": 37,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72339,
        45.19254
    ]
},
{
    "routeDataPointId": "1318",
    "segmentId": "1",
    "time": 1672158535727,
    "velocity": 38,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72334,
        45.19247
    ]
},
{
    "routeDataPointId": "1319",
    "segmentId": "1",
    "time": 1672158535737,
    "velocity": 39,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72316,
        45.19217
    ]
},
{
    "routeDataPointId": "1320",
    "segmentId": "1",
    "time": 1672158535747,
    "velocity": 40,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72309,
        45.19207
    ]
},
{
    "routeDataPointId": "1321",
    "segmentId": "1",
    "time": 1672158535757,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72303,
        45.19197
    ]
},
{
    "routeDataPointId": "1322",
    "segmentId": "1",
    "time": 1672158535767,
    "velocity": 42,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72296,
        45.19188
    ]
},
{
    "routeDataPointId": "1323",
    "segmentId": "1",
    "time": 1672158535777,
    "velocity": 43,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72272,
        45.19149
    ]
},
{
    "routeDataPointId": "1324",
    "segmentId": "1",
    "time": 1672158535787,
    "velocity": 44,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72265,
        45.19139
    ]
},
{
    "routeDataPointId": "1325",
    "segmentId": "1",
    "time": 1672158535797,
    "velocity": 45,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72259,
        45.19129
    ]
},
{
    "routeDataPointId": "1326",
    "segmentId": "1",
    "time": 1672158535807,
    "velocity": 46,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72252,
        45.1912
    ]
},
{
    "routeDataPointId": "1327",
    "segmentId": "1",
    "time": 1672158535817,
    "velocity": 47,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72249,
        45.19115
    ]
},
{
    "routeDataPointId": "1328",
    "segmentId": "1",
    "time": 1672158535827,
    "velocity": 48,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72246,
        45.19109
    ]
},
{
    "routeDataPointId": "1329",
    "segmentId": "1",
    "time": 1672158535837,
    "velocity": 49,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72233,
        45.1909
    ]
},
{
    "routeDataPointId": "1330",
    "segmentId": "1",
    "time": 1672158535847,
    "velocity": 50,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72232,
        45.19088
    ]
},
{
    "routeDataPointId": "1331",
    "segmentId": "1",
    "time": 1672158535857,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72227,
        45.1908
    ]
},
{
    "routeDataPointId": "1332",
    "segmentId": "1",
    "time": 1672158535867,
    "velocity": 52,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.7222,
        45.1907
    ]
},
{
    "routeDataPointId": "1333",
    "segmentId": "1",
    "time": 1672158535877,
    "velocity": 53,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72213,
        45.19061
    ]
},
{
    "routeDataPointId": "1334",
    "segmentId": "1",
    "time": 1672158535887,
    "velocity": 54,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72199,
        45.19041
    ]
},
{
    "routeDataPointId": "1335",
    "segmentId": "1",
    "time": 1672158535897,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72185,
        45.19023
    ]
},
{
    "routeDataPointId": "1336",
    "segmentId": "1",
    "time": 1672158535907,
    "velocity": 56,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72178,
        45.19013
    ]
},
{
    "routeDataPointId": "1337",
    "segmentId": "1",
    "time": 1672158535917,
    "velocity": 57,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72172,
        45.19007
    ]
},
{
    "routeDataPointId": "1338",
    "segmentId": "1",
    "time": 1672158535927,
    "velocity": 58,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7217,
        45.19004
    ]
},
{
    "routeDataPointId": "1339",
    "segmentId": "1",
    "time": 1672158535937,
    "velocity": 59,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72155,
        45.18985
    ]
},
{
    "routeDataPointId": "1340",
    "segmentId": "1",
    "time": 1672158535947,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.72153,
        45.18983
    ]
},
{
    "routeDataPointId": "1341",
    "segmentId": "1",
    "time": 1672158535957,
    "velocity": 61,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.72125,
        45.18951
    ]
},
{
    "routeDataPointId": "1342",
    "segmentId": "1",
    "time": 1672158535967,
    "velocity": 62,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.72096,
        45.18922
    ]
},
{
    "routeDataPointId": "1343",
    "segmentId": "1",
    "time": 1672158535977,
    "velocity": 63,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.72078,
        45.18906
    ]
},
{
    "routeDataPointId": "1344",
    "segmentId": "1",
    "time": 1672158535987,
    "velocity": 64,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.72069,
        45.18897
    ]
},
{
    "routeDataPointId": "1345",
    "segmentId": "1",
    "time": 1672158535997,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7205,
        45.1888
    ]
},
{
    "routeDataPointId": "1346",
    "segmentId": "1",
    "time": 1672158536007,
    "velocity": 66,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.7204,
        45.18872
    ]
},
{
    "routeDataPointId": "1347",
    "segmentId": "1",
    "time": 1672158536017,
    "velocity": 67,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.72031,
        45.18863
    ]
},
{
    "routeDataPointId": "1348",
    "segmentId": "1",
    "time": 1672158536027,
    "velocity": 68,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.72004,
        45.18841
    ]
},
{
    "routeDataPointId": "1349",
    "segmentId": "1",
    "time": 1672158536037,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.72001,
        45.18839
    ]
},
{
    "routeDataPointId": "1350",
    "segmentId": "1",
    "time": 1672158536047,
    "velocity": 70,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71971,
        45.18815
    ]
},
{
    "routeDataPointId": "1351",
    "segmentId": "1",
    "time": 1672158536057,
    "velocity": 71,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71961,
        45.18806
    ]
},
{
    "routeDataPointId": "1352",
    "segmentId": "1",
    "time": 1672158536067,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71954,
        45.18801
    ]
},
{
    "routeDataPointId": "1353",
    "segmentId": "1",
    "time": 1672158536077,
    "velocity": 73,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71942,
        45.1879
    ]
},
{
    "routeDataPointId": "1354",
    "segmentId": "1",
    "time": 1672158536087,
    "velocity": 74,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71931,
        45.18782
    ]
},
{
    "routeDataPointId": "1355",
    "segmentId": "1",
    "time": 1672158536097,
    "velocity": 75,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71921,
        45.18774
    ]
},
{
    "routeDataPointId": "1356",
    "segmentId": "1",
    "time": 1672158536107,
    "velocity": 76,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71919,
        45.18772
    ]
},
{
    "routeDataPointId": "1357",
    "segmentId": "1",
    "time": 1672158536117,
    "velocity": 77,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71891,
        45.18749
    ]
},
{
    "routeDataPointId": "1358",
    "segmentId": "1",
    "time": 1672158536127,
    "velocity": 78,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71884,
        45.18744
    ]
},
{
    "routeDataPointId": "1359",
    "segmentId": "1",
    "time": 1672158536137,
    "velocity": 79,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71881,
        45.18741
    ]
},
{
    "routeDataPointId": "1360",
    "segmentId": "1",
    "time": 1672158536147,
    "velocity": 80,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71851,
        45.18717
    ]
},
{
    "routeDataPointId": "1361",
    "segmentId": "1",
    "time": 1672158536157,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71825,
        45.18695
    ]
},
{
    "routeDataPointId": "1362",
    "segmentId": "1",
    "time": 1672158536167,
    "velocity": 82,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71822,
        45.18692
    ]
},
{
    "routeDataPointId": "1363",
    "segmentId": "1",
    "time": 1672158536177,
    "velocity": 83,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7176,
        45.18642
    ]
},
{
    "routeDataPointId": "1364",
    "segmentId": "1",
    "time": 1672158536187,
    "velocity": 84,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71751,
        45.18634
    ]
},
{
    "routeDataPointId": "1365",
    "segmentId": "1",
    "time": 1672158536197,
    "velocity": 85,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71731,
        45.18618
    ]
},
{
    "routeDataPointId": "1366",
    "segmentId": "1",
    "time": 1672158536207,
    "velocity": 86,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71721,
        45.18609
    ]
},
{
    "routeDataPointId": "1367",
    "segmentId": "1",
    "time": 1672158536217,
    "velocity": 87,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71711,
        45.18601
    ]
},
{
    "routeDataPointId": "1368",
    "segmentId": "1",
    "time": 1672158536227,
    "velocity": 88,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71702,
        45.18593
    ]
},
{
    "routeDataPointId": "1369",
    "segmentId": "1",
    "time": 1672158536237,
    "velocity": 89,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71701,
        45.18593
    ]
},
{
    "routeDataPointId": "1370",
    "segmentId": "1",
    "time": 1672158536247,
    "velocity": 90,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71685,
        45.18579
    ]
},
{
    "routeDataPointId": "1371",
    "segmentId": "1",
    "time": 1672158536257,
    "velocity": 91,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71682,
        45.18577
    ]
},
{
    "routeDataPointId": "1372",
    "segmentId": "1",
    "time": 1672158536267,
    "velocity": 92,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71662,
        45.18561
    ]
},
{
    "routeDataPointId": "1373",
    "segmentId": "1",
    "time": 1672158536277,
    "velocity": 93,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71652,
        45.18552
    ]
},
{
    "routeDataPointId": "1374",
    "segmentId": "1",
    "time": 1672158536287,
    "velocity": 94,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71642,
        45.18545
    ]
},
{
    "routeDataPointId": "1375",
    "segmentId": "1",
    "time": 1672158536297,
    "velocity": 95,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71641,
        45.18543
    ]
},
{
    "routeDataPointId": "1376",
    "segmentId": "1",
    "time": 1672158536307,
    "velocity": 96,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71623,
        45.18529
    ]
},
{
    "routeDataPointId": "1377",
    "segmentId": "1",
    "time": 1672158536317,
    "velocity": 97,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71613,
        45.1852
    ]
},
{
    "routeDataPointId": "1378",
    "segmentId": "1",
    "time": 1672158536327,
    "velocity": 98,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71605,
        45.18514
    ]
},
{
    "routeDataPointId": "1379",
    "segmentId": "1",
    "time": 1672158536337,
    "velocity": 99,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71603,
        45.18512
    ]
},
{
    "routeDataPointId": "1380",
    "segmentId": "1",
    "time": 1672158536347,
    "velocity": 100,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71576,
        45.1849
    ]
},
{
    "routeDataPointId": "1381",
    "segmentId": "1",
    "time": 1672158536357,
    "velocity": 101,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71573,
        45.18488
    ]
},
{
    "routeDataPointId": "1382",
    "segmentId": "1",
    "time": 1672158536367,
    "velocity": 102,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71563,
        45.1848
    ]
},
{
    "routeDataPointId": "1383",
    "segmentId": "1",
    "time": 1672158536378,
    "velocity": 103,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71554,
        45.18472
    ]
},
{
    "routeDataPointId": "1384",
    "segmentId": "1",
    "time": 1672158536388,
    "velocity": 104,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71544,
        45.18464
    ]
},
{
    "routeDataPointId": "1385",
    "segmentId": "1",
    "time": 1672158536398,
    "velocity": 105,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71534,
        45.18455
    ]
},
{
    "routeDataPointId": "1386",
    "segmentId": "1",
    "time": 1672158536408,
    "velocity": 106,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71526,
        45.18449
    ]
},
{
    "routeDataPointId": "1387",
    "segmentId": "1",
    "time": 1672158536418,
    "velocity": 107,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71524,
        45.18447
    ]
},
{
    "routeDataPointId": "1388",
    "segmentId": "1",
    "time": 1672158536428,
    "velocity": 108,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71494,
        45.18423
    ]
},
{
    "routeDataPointId": "1389",
    "segmentId": "1",
    "time": 1672158536438,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71485,
        45.18415
    ]
},
{
    "routeDataPointId": "1390",
    "segmentId": "1",
    "time": 1672158536448,
    "velocity": 110,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71465,
        45.18399
    ]
},
{
    "routeDataPointId": "1391",
    "segmentId": "1",
    "time": 1672158536458,
    "velocity": 111,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71456,
        45.18391
    ]
},
{
    "routeDataPointId": "1392",
    "segmentId": "1",
    "time": 1672158536468,
    "velocity": 112,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71406,
        45.18351
    ]
},
{
    "routeDataPointId": "1393",
    "segmentId": "1",
    "time": 1672158536478,
    "velocity": 113,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71387,
        45.18334
    ]
},
{
    "routeDataPointId": "1394",
    "segmentId": "1",
    "time": 1672158536488,
    "velocity": 114,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71357,
        45.1831
    ]
},
{
    "routeDataPointId": "1395",
    "segmentId": "1",
    "time": 1672158536498,
    "velocity": 115,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71348,
        45.18302
    ]
},
{
    "routeDataPointId": "1396",
    "segmentId": "1",
    "time": 1672158536508,
    "velocity": 116,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.71339,
        45.18295
    ]
},
{
    "routeDataPointId": "1397",
    "segmentId": "1",
    "time": 1672158536518,
    "velocity": 117,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71338,
        45.18294
    ]
},
{
    "routeDataPointId": "1398",
    "segmentId": "1",
    "time": 1672158536528,
    "velocity": 118,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71318,
        45.18278
    ]
},
{
    "routeDataPointId": "1399",
    "segmentId": "1",
    "time": 1672158536538,
    "velocity": 119,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71308,
        45.18269
    ]
},
{
    "routeDataPointId": "1400",
    "segmentId": "1",
    "time": 1672158536548,
    "velocity": 120,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71278,
        45.18245
    ]
},
{
    "routeDataPointId": "1401",
    "segmentId": "1",
    "time": 1672158536558,
    "velocity": 121,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71269,
        45.18237
    ]
},
{
    "routeDataPointId": "1402",
    "segmentId": "1",
    "time": 1672158536568,
    "velocity": 122,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71258,
        45.18229
    ]
},
{
    "routeDataPointId": "1403",
    "segmentId": "1",
    "time": 1672158536578,
    "velocity": 123,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "foo bar",
    "coordinates": [
        -75.71249,
        45.18221
    ]
},
{
    "routeDataPointId": "1404",
    "segmentId": "1",
    "time": 1672158536588,
    "velocity": 124,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71246,
        45.18219
    ]
},
{
    "routeDataPointId": "1405",
    "segmentId": "1",
    "time": 1672158536598,
    "velocity": 125,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71229,
        45.18205
    ]
},
{
    "routeDataPointId": "1406",
    "segmentId": "1",
    "time": 1672158536608,
    "velocity": 126,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71219,
        45.18196
    ]
},
{
    "routeDataPointId": "1407",
    "segmentId": "1",
    "time": 1672158536618,
    "velocity": 127,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71209,
        45.18189
    ]
},
{
    "routeDataPointId": "1408",
    "segmentId": "1",
    "time": 1672158536628,
    "velocity": 128,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71199,
        45.1818
    ]
},
{
    "routeDataPointId": "1409",
    "segmentId": "1",
    "time": 1672158536638,
    "velocity": 129,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71179,
        45.18164
    ]
},
{
    "routeDataPointId": "1410",
    "segmentId": "1",
    "time": 1672158536648,
    "velocity": 130,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71175,
        45.1816
    ]
},
{
    "routeDataPointId": "1411",
    "segmentId": "1",
    "time": 1672158536658,
    "velocity": 131,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.7111,
        45.18108
    ]
},
{
    "routeDataPointId": "1412",
    "segmentId": "1",
    "time": 1672158536668,
    "velocity": 132,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71098,
        45.18097
    ]
},
{
    "routeDataPointId": "1413",
    "segmentId": "1",
    "time": 1672158536678,
    "velocity": 133,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.71091,
        45.18092
    ]
},
{
    "routeDataPointId": "1414",
    "segmentId": "1",
    "time": 1672158536688,
    "velocity": 134,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71081,
        45.18084
    ]
},
{
    "routeDataPointId": "1415",
    "segmentId": "1",
    "time": 1672158536698,
    "velocity": 135,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71071,
        45.18075
    ]
},
{
    "routeDataPointId": "1416",
    "segmentId": "1",
    "time": 1672158536708,
    "velocity": 136,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.71063,
        45.18069
    ]
},
{
    "routeDataPointId": "1417",
    "segmentId": "1",
    "time": 1672158536718,
    "velocity": 137,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.71052,
        45.18059
    ]
},
{
    "routeDataPointId": "1418",
    "segmentId": "1",
    "time": 1672158536728,
    "velocity": 138,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.71022,
        45.18035
    ]
},
{
    "routeDataPointId": "1419",
    "segmentId": "1",
    "time": 1672158536738,
    "velocity": 139,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.71017,
        45.1803
    ]
},
{
    "routeDataPointId": "1420",
    "segmentId": "1",
    "time": 1672158536748,
    "velocity": 140,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.71012,
        45.18027
    ]
},
{
    "routeDataPointId": "1421",
    "segmentId": "1",
    "time": 1672158536758,
    "velocity": 141,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.71003,
        45.18019
    ]
},
{
    "routeDataPointId": "1422",
    "segmentId": "1",
    "time": 1672158536768,
    "velocity": 142,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70972,
        45.17994
    ]
},
{
    "routeDataPointId": "1423",
    "segmentId": "1",
    "time": 1672158536778,
    "velocity": 143,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70963,
        45.17986
    ]
},
{
    "routeDataPointId": "1424",
    "segmentId": "1",
    "time": 1672158536788,
    "velocity": 144,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70923,
        45.17954
    ]
},
{
    "routeDataPointId": "1425",
    "segmentId": "1",
    "time": 1672158536798,
    "velocity": 145,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70897,
        45.17932
    ]
},
{
    "routeDataPointId": "1426",
    "segmentId": "1",
    "time": 1672158536808,
    "velocity": 146,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70894,
        45.1793
    ]
},
{
    "routeDataPointId": "1427",
    "segmentId": "1",
    "time": 1672158536818,
    "velocity": 147,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70874,
        45.17914
    ]
},
{
    "routeDataPointId": "1428",
    "segmentId": "1",
    "time": 1672158536828,
    "velocity": 148,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70855,
        45.17897
    ]
},
{
    "routeDataPointId": "1429",
    "segmentId": "1",
    "time": 1672158536838,
    "velocity": 149,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70844,
        45.17889
    ]
},
{
    "routeDataPointId": "1430",
    "segmentId": "1",
    "time": 1672158536848,
    "velocity": 150,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70835,
        45.17881
    ]
},
{
    "routeDataPointId": "1431",
    "segmentId": "1",
    "time": 1672158536858,
    "velocity": 151,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70795,
        45.17849
    ]
},
{
    "routeDataPointId": "1432",
    "segmentId": "1",
    "time": 1672158536868,
    "velocity": 152,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70786,
        45.17841
    ]
},
{
    "routeDataPointId": "1433",
    "segmentId": "1",
    "time": 1672158536878,
    "velocity": 153,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70776,
        45.17833
    ]
},
{
    "routeDataPointId": "1434",
    "segmentId": "1",
    "time": 1672158536888,
    "velocity": 154,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70773,
        45.1783
    ]
},
{
    "routeDataPointId": "1435",
    "segmentId": "1",
    "time": 1672158536898,
    "velocity": 155,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70766,
        45.17824
    ]
},
{
    "routeDataPointId": "1436",
    "segmentId": "1",
    "time": 1672158536908,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70755,
        45.17816
    ]
},
{
    "routeDataPointId": "1437",
    "segmentId": "1",
    "time": 1672158536918,
    "velocity": 157,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70746,
        45.17808
    ]
},
{
    "routeDataPointId": "1438",
    "segmentId": "1",
    "time": 1672158536928,
    "velocity": 158,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70736,
        45.178
    ]
},
{
    "routeDataPointId": "1439",
    "segmentId": "1",
    "time": 1672158536938,
    "velocity": 159,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70727,
        45.17792
    ]
},
{
    "routeDataPointId": "1440",
    "segmentId": "1",
    "time": 1672158536948,
    "velocity": 0,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70716,
        45.17784
    ]
},
{
    "routeDataPointId": "1441",
    "segmentId": "1",
    "time": 1672158536958,
    "velocity": 1,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70707,
        45.17776
    ]
},
{
    "routeDataPointId": "1442",
    "segmentId": "1",
    "time": 1672158536968,
    "velocity": 2,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70686,
        45.17759
    ]
},
{
    "routeDataPointId": "1443",
    "segmentId": "1",
    "time": 1672158536978,
    "velocity": 3,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70683,
        45.17756
    ]
},
{
    "routeDataPointId": "1444",
    "segmentId": "1",
    "time": 1672158536988,
    "velocity": 4,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70647,
        45.17727
    ]
},
{
    "routeDataPointId": "1445",
    "segmentId": "1",
    "time": 1672158536998,
    "velocity": 5,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70638,
        45.17719
    ]
},
{
    "routeDataPointId": "1446",
    "segmentId": "1",
    "time": 1672158537008,
    "velocity": 6,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.70598,
        45.17687
    ]
},
{
    "routeDataPointId": "1447",
    "segmentId": "1",
    "time": 1672158537018,
    "velocity": 7,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70588,
        45.17678
    ]
},
{
    "routeDataPointId": "1448",
    "segmentId": "1",
    "time": 1672158537028,
    "velocity": 8,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70558,
        45.17654
    ]
},
{
    "routeDataPointId": "1449",
    "segmentId": "1",
    "time": 1672158537038,
    "velocity": 9,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70549,
        45.17646
    ]
},
{
    "routeDataPointId": "1450",
    "segmentId": "1",
    "time": 1672158537048,
    "velocity": 10,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70529,
        45.1763
    ]
},
{
    "routeDataPointId": "1451",
    "segmentId": "1",
    "time": 1672158537058,
    "velocity": 11,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.7052,
        45.17622
    ]
},
{
    "routeDataPointId": "1452",
    "segmentId": "1",
    "time": 1672158537068,
    "velocity": 12,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70493,
        45.176
    ]
},
{
    "routeDataPointId": "1453",
    "segmentId": "1",
    "time": 1672158537078,
    "velocity": 13,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.7049,
        45.17597
    ]
},
{
    "routeDataPointId": "1454",
    "segmentId": "1",
    "time": 1672158537088,
    "velocity": 14,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.7046,
        45.17573
    ]
},
{
    "routeDataPointId": "1455",
    "segmentId": "1",
    "time": 1672158537098,
    "velocity": 15,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70451,
        45.17565
    ]
},
{
    "routeDataPointId": "1456",
    "segmentId": "1",
    "time": 1672158537108,
    "velocity": 16,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7044,
        45.17557
    ]
},
{
    "routeDataPointId": "1457",
    "segmentId": "1",
    "time": 1672158537118,
    "velocity": 17,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70431,
        45.17549
    ]
},
{
    "routeDataPointId": "1458",
    "segmentId": "1",
    "time": 1672158537128,
    "velocity": 18,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70401,
        45.17525
    ]
},
{
    "routeDataPointId": "1459",
    "segmentId": "1",
    "time": 1672158537138,
    "velocity": 19,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.70392,
        45.17517
    ]
},
{
    "routeDataPointId": "1460",
    "segmentId": "1",
    "time": 1672158537148,
    "velocity": 20,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.70378,
        45.17506
    ]
},
{
    "routeDataPointId": "1461",
    "segmentId": "1",
    "time": 1672158537158,
    "velocity": 21,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70372,
        45.175
    ]
},
{
    "routeDataPointId": "1462",
    "segmentId": "1",
    "time": 1672158537168,
    "velocity": 22,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70352,
        45.17485
    ]
},
{
    "routeDataPointId": "1463",
    "segmentId": "1",
    "time": 1672158537178,
    "velocity": 23,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70322,
        45.17459
    ]
},
{
    "routeDataPointId": "1464",
    "segmentId": "1",
    "time": 1672158537188,
    "velocity": 24,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.70313,
        45.17452
    ]
},
{
    "routeDataPointId": "1465",
    "segmentId": "1",
    "time": 1672158537198,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.70303,
        45.17443
    ]
},
{
    "routeDataPointId": "1466",
    "segmentId": "1",
    "time": 1672158537208,
    "velocity": 26,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.7025,
        45.17401
    ]
},
{
    "routeDataPointId": "1467",
    "segmentId": "1",
    "time": 1672158537218,
    "velocity": 27,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.70234,
        45.17387
    ]
},
{
    "routeDataPointId": "1468",
    "segmentId": "1",
    "time": 1672158537228,
    "velocity": 28,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70155,
        45.17322
    ]
},
{
    "routeDataPointId": "1469",
    "segmentId": "1",
    "time": 1672158537238,
    "velocity": 29,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.70117,
        45.17292
    ]
},
{
    "routeDataPointId": "1470",
    "segmentId": "1",
    "time": 1672158537248,
    "velocity": 30,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.70096,
        45.17273
    ]
},
{
    "routeDataPointId": "1471",
    "segmentId": "1",
    "time": 1672158537258,
    "velocity": 31,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69759,
        45.16998
    ]
},
{
    "routeDataPointId": "1472",
    "segmentId": "1",
    "time": 1672158537268,
    "velocity": 32,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69679,
        45.1693
    ]
},
{
    "routeDataPointId": "1473",
    "segmentId": "1",
    "time": 1672158537278,
    "velocity": 33,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69668,
        45.16922
    ]
},
{
    "routeDataPointId": "1474",
    "segmentId": "1",
    "time": 1672158537288,
    "velocity": 34,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69659,
        45.16914
    ]
},
{
    "routeDataPointId": "1475",
    "segmentId": "1",
    "time": 1672158537298,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "foo bar",
    "coordinates": [
        -75.69656,
        45.16912
    ]
},
{
    "routeDataPointId": "1476",
    "segmentId": "1",
    "time": 1672158537308,
    "velocity": 36,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69629,
        45.1689
    ]
},
{
    "routeDataPointId": "1477",
    "segmentId": "1",
    "time": 1672158537318,
    "velocity": 37,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6962,
        45.16882
    ]
},
{
    "routeDataPointId": "1478",
    "segmentId": "1",
    "time": 1672158537328,
    "velocity": 38,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.696,
        45.16866
    ]
},
{
    "routeDataPointId": "1479",
    "segmentId": "1",
    "time": 1672158537338,
    "velocity": 39,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6959,
        45.16857
    ]
},
{
    "routeDataPointId": "1480",
    "segmentId": "1",
    "time": 1672158537348,
    "velocity": 40,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6958,
        45.16849
    ]
},
{
    "routeDataPointId": "1481",
    "segmentId": "1",
    "time": 1672158537358,
    "velocity": 41,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.69578,
        45.16848
    ]
},
{
    "routeDataPointId": "1482",
    "segmentId": "1",
    "time": 1672158537368,
    "velocity": 42,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6956,
        45.16832
    ]
},
{
    "routeDataPointId": "1483",
    "segmentId": "1",
    "time": 1672158537378,
    "velocity": 43,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6953,
        45.16808
    ]
},
{
    "routeDataPointId": "1484",
    "segmentId": "1",
    "time": 1672158537388,
    "velocity": 44,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69527,
        45.16806
    ]
},
{
    "routeDataPointId": "1485",
    "segmentId": "1",
    "time": 1672158537398,
    "velocity": 45,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69521,
        45.168
    ]
},
{
    "routeDataPointId": "1486",
    "segmentId": "1",
    "time": 1672158537408,
    "velocity": 46,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.69471,
        45.1676
    ]
},
{
    "routeDataPointId": "1487",
    "segmentId": "1",
    "time": 1672158537418,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69461,
        45.16751
    ]
},
{
    "routeDataPointId": "1488",
    "segmentId": "1",
    "time": 1672158537428,
    "velocity": 48,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69411,
        45.16711
    ]
},
{
    "routeDataPointId": "1489",
    "segmentId": "1",
    "time": 1672158537438,
    "velocity": 49,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69402,
        45.16703
    ]
},
{
    "routeDataPointId": "1490",
    "segmentId": "1",
    "time": 1672158537448,
    "velocity": 50,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69392,
        45.16695
    ]
},
{
    "routeDataPointId": "1491",
    "segmentId": "1",
    "time": 1672158537458,
    "velocity": 51,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6939,
        45.16693
    ]
},
{
    "routeDataPointId": "1492",
    "segmentId": "1",
    "time": 1672158537468,
    "velocity": 52,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69372,
        45.16679
    ]
},
{
    "routeDataPointId": "1493",
    "segmentId": "1",
    "time": 1672158537478,
    "velocity": 53,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69353,
        45.16662
    ]
},
{
    "routeDataPointId": "1494",
    "segmentId": "1",
    "time": 1672158537488,
    "velocity": 54,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69313,
        45.1663
    ]
},
{
    "routeDataPointId": "1495",
    "segmentId": "1",
    "time": 1672158537498,
    "velocity": 55,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69304,
        45.16622
    ]
},
{
    "routeDataPointId": "1496",
    "segmentId": "1",
    "time": 1672158537508,
    "velocity": 56,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69293,
        45.16614
    ]
},
{
    "routeDataPointId": "1497",
    "segmentId": "1",
    "time": 1672158537518,
    "velocity": 57,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69285,
        45.16607
    ]
},
{
    "routeDataPointId": "1498",
    "segmentId": "1",
    "time": 1672158537528,
    "velocity": 58,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69283,
        45.16606
    ]
},
{
    "routeDataPointId": "1499",
    "segmentId": "1",
    "time": 1672158537538,
    "velocity": 59,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69263,
        45.16589
    ]
},
{
    "routeDataPointId": "1500",
    "segmentId": "1",
    "time": 1672158537548,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6926,
        45.16586
    ]
},
{
    "routeDataPointId": "1501",
    "segmentId": "1",
    "time": 1672158537558,
    "velocity": 61,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69244,
        45.16573
    ]
},
{
    "routeDataPointId": "1502",
    "segmentId": "1",
    "time": 1672158537568,
    "velocity": 62,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.69235,
        45.16565
    ]
},
{
    "routeDataPointId": "1503",
    "segmentId": "1",
    "time": 1672158537578,
    "velocity": 63,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.69226,
        45.16558
    ]
},
{
    "routeDataPointId": "1504",
    "segmentId": "1",
    "time": 1672158537588,
    "velocity": 64,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69224,
        45.16557
    ]
},
{
    "routeDataPointId": "1505",
    "segmentId": "1",
    "time": 1672158537598,
    "velocity": 65,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69214,
        45.16549
    ]
},
{
    "routeDataPointId": "1506",
    "segmentId": "1",
    "time": 1672158537608,
    "velocity": 66,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69195,
        45.16532
    ]
},
{
    "routeDataPointId": "1507",
    "segmentId": "1",
    "time": 1672158537618,
    "velocity": 67,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69155,
        45.165
    ]
},
{
    "routeDataPointId": "1508",
    "segmentId": "1",
    "time": 1672158537628,
    "velocity": 68,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69146,
        45.16492
    ]
},
{
    "routeDataPointId": "1509",
    "segmentId": "1",
    "time": 1672158537638,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69116,
        45.16468
    ]
},
{
    "routeDataPointId": "1510",
    "segmentId": "1",
    "time": 1672158537648,
    "velocity": 70,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69112,
        45.16464
    ]
},
{
    "routeDataPointId": "1511",
    "segmentId": "1",
    "time": 1672158537658,
    "velocity": 71,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.69106,
        45.16459
    ]
},
{
    "routeDataPointId": "1512",
    "segmentId": "1",
    "time": 1672158537668,
    "velocity": 72,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.69096,
        45.16452
    ]
},
{
    "routeDataPointId": "1513",
    "segmentId": "1",
    "time": 1672158537678,
    "velocity": 73,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "foo bar",
    "coordinates": [
        -75.69087,
        45.16443
    ]
},
{
    "routeDataPointId": "1514",
    "segmentId": "1",
    "time": 1672158537688,
    "velocity": 74,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69077,
        45.16435
    ]
},
{
    "routeDataPointId": "1515",
    "segmentId": "1",
    "time": 1672158537698,
    "velocity": 75,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.69066,
        45.16427
    ]
},
{
    "routeDataPointId": "1516",
    "segmentId": "1",
    "time": 1672158537708,
    "velocity": 76,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.69057,
        45.16419
    ]
},
{
    "routeDataPointId": "1517",
    "segmentId": "1",
    "time": 1672158537718,
    "velocity": 77,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69037,
        45.16403
    ]
},
{
    "routeDataPointId": "1518",
    "segmentId": "1",
    "time": 1672158537728,
    "velocity": 78,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6903,
        45.16396
    ]
},
{
    "routeDataPointId": "1519",
    "segmentId": "1",
    "time": 1672158537738,
    "velocity": 79,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69027,
        45.16394
    ]
},
{
    "routeDataPointId": "1520",
    "segmentId": "1",
    "time": 1672158537748,
    "velocity": 80,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.69018,
        45.16386
    ]
},
{
    "routeDataPointId": "1521",
    "segmentId": "1",
    "time": 1672158537758,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.69008,
        45.16378
    ]
},
{
    "routeDataPointId": "1522",
    "segmentId": "1",
    "time": 1672158537768,
    "velocity": 82,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68992,
        45.16364
    ]
},
{
    "routeDataPointId": "1523",
    "segmentId": "1",
    "time": 1672158537778,
    "velocity": 83,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68989,
        45.16361
    ]
},
{
    "routeDataPointId": "1524",
    "segmentId": "1",
    "time": 1672158537788,
    "velocity": 84,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68979,
        45.16353
    ]
},
{
    "routeDataPointId": "1525",
    "segmentId": "1",
    "time": 1672158537798,
    "velocity": 85,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6897,
        45.16345
    ]
},
{
    "routeDataPointId": "1526",
    "segmentId": "1",
    "time": 1672158537808,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68952,
        45.16327
    ]
},
{
    "routeDataPointId": "1527",
    "segmentId": "1",
    "time": 1672158537818,
    "velocity": 87,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68945,
        45.16322
    ]
},
{
    "routeDataPointId": "1528",
    "segmentId": "1",
    "time": 1672158537828,
    "velocity": 88,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68925,
        45.16302
    ]
},
{
    "routeDataPointId": "1529",
    "segmentId": "1",
    "time": 1672158537838,
    "velocity": 89,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68922,
        45.163
    ]
},
{
    "routeDataPointId": "1530",
    "segmentId": "1",
    "time": 1672158537848,
    "velocity": 90,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68916,
        45.16293
    ]
},
{
    "routeDataPointId": "1531",
    "segmentId": "1",
    "time": 1672158537858,
    "velocity": 91,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68907,
        45.16284
    ]
},
{
    "routeDataPointId": "1532",
    "segmentId": "1",
    "time": 1672158537868,
    "velocity": 92,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68898,
        45.16276
    ]
},
{
    "routeDataPointId": "1533",
    "segmentId": "1",
    "time": 1672158537878,
    "velocity": 93,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68891,
        45.16268
    ]
},
{
    "routeDataPointId": "1534",
    "segmentId": "1",
    "time": 1672158537888,
    "velocity": 94,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68881,
        45.16258
    ]
},
{
    "routeDataPointId": "1535",
    "segmentId": "1",
    "time": 1672158537898,
    "velocity": 95,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68873,
        45.16249
    ]
},
{
    "routeDataPointId": "1536",
    "segmentId": "1",
    "time": 1672158537908,
    "velocity": 96,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68856,
        45.16232
    ]
},
{
    "routeDataPointId": "1537",
    "segmentId": "1",
    "time": 1672158537918,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68848,
        45.16222
    ]
},
{
    "routeDataPointId": "1538",
    "segmentId": "1",
    "time": 1672158537928,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68845,
        45.1622
    ]
},
{
    "routeDataPointId": "1539",
    "segmentId": "1",
    "time": 1672158537938,
    "velocity": 99,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68832,
        45.16204
    ]
},
{
    "routeDataPointId": "1540",
    "segmentId": "1",
    "time": 1672158537948,
    "velocity": 100,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68808,
        45.16177
    ]
},
{
    "routeDataPointId": "1541",
    "segmentId": "1",
    "time": 1672158537958,
    "velocity": 101,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68805,
        45.16174
    ]
},
{
    "routeDataPointId": "1542",
    "segmentId": "1",
    "time": 1672158537968,
    "velocity": 102,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68793,
        45.16159
    ]
},
{
    "routeDataPointId": "1543",
    "segmentId": "1",
    "time": 1672158537978,
    "velocity": 103,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68786,
        45.16149
    ]
},
{
    "routeDataPointId": "1544",
    "segmentId": "1",
    "time": 1672158537988,
    "velocity": 104,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68778,
        45.1614
    ]
},
{
    "routeDataPointId": "1545",
    "segmentId": "1",
    "time": 1672158537998,
    "velocity": 105,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68772,
        45.16132
    ]
},
{
    "routeDataPointId": "1546",
    "segmentId": "1",
    "time": 1672158538008,
    "velocity": 106,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68771,
        45.16131
    ]
},
{
    "routeDataPointId": "1547",
    "segmentId": "1",
    "time": 1672158538018,
    "velocity": 107,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68764,
        45.16121
    ]
},
{
    "routeDataPointId": "1548",
    "segmentId": "1",
    "time": 1672158538028,
    "velocity": 108,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68756,
        45.16112
    ]
},
{
    "routeDataPointId": "1549",
    "segmentId": "1",
    "time": 1672158538038,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68743,
        45.16093
    ]
},
{
    "routeDataPointId": "1550",
    "segmentId": "1",
    "time": 1672158538048,
    "velocity": 110,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68735,
        45.16083
    ]
},
{
    "routeDataPointId": "1551",
    "segmentId": "1",
    "time": 1672158538058,
    "velocity": 111,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6873,
        45.16075
    ]
},
{
    "routeDataPointId": "1552",
    "segmentId": "1",
    "time": 1672158538068,
    "velocity": 112,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68729,
        45.16074
    ]
},
{
    "routeDataPointId": "1553",
    "segmentId": "1",
    "time": 1672158538078,
    "velocity": 113,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68722,
        45.16064
    ]
},
{
    "routeDataPointId": "1554",
    "segmentId": "1",
    "time": 1672158538088,
    "velocity": 114,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68715,
        45.16055
    ]
},
{
    "routeDataPointId": "1555",
    "segmentId": "1",
    "time": 1672158538098,
    "velocity": 115,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68712,
        45.16049
    ]
},
{
    "routeDataPointId": "1556",
    "segmentId": "1",
    "time": 1672158538108,
    "velocity": 116,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68696,
        45.16026
    ]
},
{
    "routeDataPointId": "1557",
    "segmentId": "1",
    "time": 1672158538118,
    "velocity": 117,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68672,
        45.15986
    ]
},
{
    "routeDataPointId": "1558",
    "segmentId": "1",
    "time": 1672158538128,
    "velocity": 118,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68666,
        45.15977
    ]
},
{
    "routeDataPointId": "1559",
    "segmentId": "1",
    "time": 1672158538138,
    "velocity": 119,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6866,
        45.15967
    ]
},
{
    "routeDataPointId": "1560",
    "segmentId": "1",
    "time": 1672158538148,
    "velocity": 120,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68654,
        45.15955
    ]
},
{
    "routeDataPointId": "1561",
    "segmentId": "1",
    "time": 1672158538158,
    "velocity": 121,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68649,
        45.15947
    ]
},
{
    "routeDataPointId": "1562",
    "segmentId": "1",
    "time": 1672158538168,
    "velocity": 122,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68644,
        45.15937
    ]
},
{
    "routeDataPointId": "1563",
    "segmentId": "1",
    "time": 1672158538178,
    "velocity": 123,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68636,
        45.15924
    ]
},
{
    "routeDataPointId": "1564",
    "segmentId": "1",
    "time": 1672158538188,
    "velocity": 124,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68633,
        45.15917
    ]
},
{
    "routeDataPointId": "1565",
    "segmentId": "1",
    "time": 1672158538198,
    "velocity": 125,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68623,
        45.15897
    ]
},
{
    "routeDataPointId": "1566",
    "segmentId": "1",
    "time": 1672158538208,
    "velocity": 126,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68617,
        45.15887
    ]
},
{
    "routeDataPointId": "1567",
    "segmentId": "1",
    "time": 1672158538218,
    "velocity": 127,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68613,
        45.15877
    ]
},
{
    "routeDataPointId": "1568",
    "segmentId": "1",
    "time": 1672158538228,
    "velocity": 128,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68598,
        45.15846
    ]
},
{
    "routeDataPointId": "1569",
    "segmentId": "1",
    "time": 1672158538238,
    "velocity": 129,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68586,
        45.15816
    ]
},
{
    "routeDataPointId": "1570",
    "segmentId": "1",
    "time": 1672158538248,
    "velocity": 130,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68582,
        45.15808
    ]
},
{
    "routeDataPointId": "1571",
    "segmentId": "1",
    "time": 1672158538258,
    "velocity": 131,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68581,
        45.15805
    ]
},
{
    "routeDataPointId": "1572",
    "segmentId": "1",
    "time": 1672158538268,
    "velocity": 132,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68552,
        45.15734
    ]
},
{
    "routeDataPointId": "1573",
    "segmentId": "1",
    "time": 1672158538278,
    "velocity": 133,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68547,
        45.15723
    ]
},
{
    "routeDataPointId": "1574",
    "segmentId": "1",
    "time": 1672158538288,
    "velocity": 134,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68539,
        45.15703
    ]
},
{
    "routeDataPointId": "1575",
    "segmentId": "1",
    "time": 1672158538298,
    "velocity": 135,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68534,
        45.15692
    ]
},
{
    "routeDataPointId": "1576",
    "segmentId": "1",
    "time": 1672158538308,
    "velocity": 136,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68522,
        45.15662
    ]
},
{
    "routeDataPointId": "1577",
    "segmentId": "1",
    "time": 1672158538318,
    "velocity": 137,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68514,
        45.15644
    ]
},
{
    "routeDataPointId": "1578",
    "segmentId": "1",
    "time": 1672158538328,
    "velocity": 138,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68509,
        45.15631
    ]
},
{
    "routeDataPointId": "1579",
    "segmentId": "1",
    "time": 1672158538338,
    "velocity": 139,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68504,
        45.15621
    ]
},
{
    "routeDataPointId": "1580",
    "segmentId": "1",
    "time": 1672158538348,
    "velocity": 140,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.685,
        45.1561
    ]
},
{
    "routeDataPointId": "1581",
    "segmentId": "1",
    "time": 1672158538358,
    "velocity": 141,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68497,
        45.156
    ]
},
{
    "routeDataPointId": "1582",
    "segmentId": "1",
    "time": 1672158538368,
    "velocity": 142,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68492,
        45.1559
    ]
},
{
    "routeDataPointId": "1583",
    "segmentId": "1",
    "time": 1672158538378,
    "velocity": 143,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6848,
        45.15559
    ]
},
{
    "routeDataPointId": "1584",
    "segmentId": "1",
    "time": 1672158538388,
    "velocity": 144,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68475,
        45.15549
    ]
},
{
    "routeDataPointId": "1585",
    "segmentId": "1",
    "time": 1672158538398,
    "velocity": 145,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68471,
        45.15538
    ]
},
{
    "routeDataPointId": "1586",
    "segmentId": "1",
    "time": 1672158538408,
    "velocity": 146,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68469,
        45.15534
    ]
},
{
    "routeDataPointId": "1587",
    "segmentId": "1",
    "time": 1672158538418,
    "velocity": 147,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68459,
        45.15508
    ]
},
{
    "routeDataPointId": "1588",
    "segmentId": "1",
    "time": 1672158538428,
    "velocity": 148,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68454,
        45.15497
    ]
},
{
    "routeDataPointId": "1589",
    "segmentId": "1",
    "time": 1672158538438,
    "velocity": 149,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68451,
        45.15489
    ]
},
{
    "routeDataPointId": "1590",
    "segmentId": "1",
    "time": 1672158538448,
    "velocity": 150,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68446,
        45.15478
    ]
},
{
    "routeDataPointId": "1591",
    "segmentId": "1",
    "time": 1672158538458,
    "velocity": 151,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68441,
        45.15464
    ]
},
{
    "routeDataPointId": "1592",
    "segmentId": "1",
    "time": 1672158538468,
    "velocity": 152,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68437,
        45.15457
    ]
},
{
    "routeDataPointId": "1593",
    "segmentId": "1",
    "time": 1672158538478,
    "velocity": 153,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68433,
        45.15446
    ]
},
{
    "routeDataPointId": "1594",
    "segmentId": "1",
    "time": 1672158538488,
    "velocity": 154,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68429,
        45.15437
    ]
},
{
    "routeDataPointId": "1595",
    "segmentId": "1",
    "time": 1672158538498,
    "velocity": 155,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68429,
        45.15436
    ]
},
{
    "routeDataPointId": "1596",
    "segmentId": "1",
    "time": 1672158538508,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68425,
        45.15425
    ]
},
{
    "routeDataPointId": "1597",
    "segmentId": "1",
    "time": 1672158538518,
    "velocity": 157,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6842,
        45.15415
    ]
},
{
    "routeDataPointId": "1598",
    "segmentId": "1",
    "time": 1672158538528,
    "velocity": 158,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68416,
        45.15405
    ]
},
{
    "routeDataPointId": "1599",
    "segmentId": "1",
    "time": 1672158538538,
    "velocity": 159,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68411,
        45.15394
    ]
},
{
    "routeDataPointId": "1600",
    "segmentId": "1",
    "time": 1672158538548,
    "velocity": 0,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68408,
        45.15386
    ]
},
{
    "routeDataPointId": "1601",
    "segmentId": "1",
    "time": 1672158538558,
    "velocity": 1,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68408,
        45.15384
    ]
},
{
    "routeDataPointId": "1602",
    "segmentId": "1",
    "time": 1672158538568,
    "velocity": 2,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68399,
        45.15364
    ]
},
{
    "routeDataPointId": "1603",
    "segmentId": "1",
    "time": 1672158538578,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6839,
        45.15342
    ]
},
{
    "routeDataPointId": "1604",
    "segmentId": "1",
    "time": 1672158538588,
    "velocity": 4,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68389,
        45.15339
    ]
},
{
    "routeDataPointId": "1605",
    "segmentId": "1",
    "time": 1672158538598,
    "velocity": 5,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68386,
        45.15332
    ]
},
{
    "routeDataPointId": "1606",
    "segmentId": "1",
    "time": 1672158538608,
    "velocity": 6,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68381,
        45.15322
    ]
},
{
    "routeDataPointId": "1607",
    "segmentId": "1",
    "time": 1672158538618,
    "velocity": 7,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68377,
        45.15309
    ]
},
{
    "routeDataPointId": "1608",
    "segmentId": "1",
    "time": 1672158538628,
    "velocity": 8,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68373,
        45.15301
    ]
},
{
    "routeDataPointId": "1609",
    "segmentId": "1",
    "time": 1672158538638,
    "velocity": 9,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68364,
        45.15278
    ]
},
{
    "routeDataPointId": "1610",
    "segmentId": "1",
    "time": 1672158538648,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68359,
        45.15267
    ]
},
{
    "routeDataPointId": "1611",
    "segmentId": "1",
    "time": 1672158538658,
    "velocity": 11,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68312,
        45.15153
    ]
},
{
    "routeDataPointId": "1612",
    "segmentId": "1",
    "time": 1672158538668,
    "velocity": 12,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6831,
        45.15147
    ]
},
{
    "routeDataPointId": "1613",
    "segmentId": "1",
    "time": 1672158538678,
    "velocity": 13,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68296,
        45.15115
    ]
},
{
    "routeDataPointId": "1614",
    "segmentId": "1",
    "time": 1672158538688,
    "velocity": 14,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68276,
        45.15066
    ]
},
{
    "routeDataPointId": "1615",
    "segmentId": "1",
    "time": 1672158538698,
    "velocity": 15,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6827,
        45.15049
    ]
},
{
    "routeDataPointId": "1616",
    "segmentId": "1",
    "time": 1672158538708,
    "velocity": 16,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.68262,
        45.15032
    ]
},
{
    "routeDataPointId": "1617",
    "segmentId": "1",
    "time": 1672158538718,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68261,
        45.15028
    ]
},
{
    "routeDataPointId": "1618",
    "segmentId": "1",
    "time": 1672158538728,
    "velocity": 18,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68257,
        45.1502
    ]
},
{
    "routeDataPointId": "1619",
    "segmentId": "1",
    "time": 1672158538738,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68256,
        45.15016
    ]
},
{
    "routeDataPointId": "1620",
    "segmentId": "1",
    "time": 1672158538748,
    "velocity": 20,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68242,
        45.14982
    ]
},
{
    "routeDataPointId": "1621",
    "segmentId": "1",
    "time": 1672158538758,
    "velocity": 21,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6824,
        45.14978
    ]
},
{
    "routeDataPointId": "1622",
    "segmentId": "1",
    "time": 1672158538768,
    "velocity": 22,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68234,
        45.14962
    ]
},
{
    "routeDataPointId": "1623",
    "segmentId": "1",
    "time": 1672158538778,
    "velocity": 23,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68227,
        45.14948
    ]
},
{
    "routeDataPointId": "1624",
    "segmentId": "1",
    "time": 1672158538788,
    "velocity": 24,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68221,
        45.14931
    ]
},
{
    "routeDataPointId": "1625",
    "segmentId": "1",
    "time": 1672158538798,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68212,
        45.14911
    ]
},
{
    "routeDataPointId": "1626",
    "segmentId": "1",
    "time": 1672158538808,
    "velocity": 26,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6821,
        45.14905
    ]
},
{
    "routeDataPointId": "1627",
    "segmentId": "1",
    "time": 1672158538818,
    "velocity": 27,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68208,
        45.14902
    ]
},
{
    "routeDataPointId": "1628",
    "segmentId": "1",
    "time": 1672158538828,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68208,
        45.149
    ]
},
{
    "routeDataPointId": "1629",
    "segmentId": "1",
    "time": 1672158538838,
    "velocity": 29,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68203,
        45.1489
    ]
},
{
    "routeDataPointId": "1630",
    "segmentId": "1",
    "time": 1672158538848,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68199,
        45.14878
    ]
},
{
    "routeDataPointId": "1631",
    "segmentId": "1",
    "time": 1672158538858,
    "velocity": 31,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68196,
        45.14872
    ]
},
{
    "routeDataPointId": "1632",
    "segmentId": "1",
    "time": 1672158538868,
    "velocity": 32,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68191,
        45.14859
    ]
},
{
    "routeDataPointId": "1633",
    "segmentId": "1",
    "time": 1672158538878,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.68187,
        45.1485
    ]
},
{
    "routeDataPointId": "1634",
    "segmentId": "1",
    "time": 1672158538888,
    "velocity": 34,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68183,
        45.14839
    ]
},
{
    "routeDataPointId": "1635",
    "segmentId": "1",
    "time": 1672158538898,
    "velocity": 35,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68162,
        45.14788
    ]
},
{
    "routeDataPointId": "1636",
    "segmentId": "1",
    "time": 1672158538908,
    "velocity": 36,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68157,
        45.14777
    ]
},
{
    "routeDataPointId": "1637",
    "segmentId": "1",
    "time": 1672158538918,
    "velocity": 37,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68145,
        45.14746
    ]
},
{
    "routeDataPointId": "1638",
    "segmentId": "1",
    "time": 1672158538928,
    "velocity": 38,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68136,
        45.14726
    ]
},
{
    "routeDataPointId": "1639",
    "segmentId": "1",
    "time": 1672158538938,
    "velocity": 39,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.68132,
        45.14716
    ]
},
{
    "routeDataPointId": "1640",
    "segmentId": "1",
    "time": 1672158538948,
    "velocity": 40,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68123,
        45.14696
    ]
},
{
    "routeDataPointId": "1641",
    "segmentId": "1",
    "time": 1672158538958,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68115,
        45.14676
    ]
},
{
    "routeDataPointId": "1642",
    "segmentId": "1",
    "time": 1672158538968,
    "velocity": 42,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6811,
        45.14665
    ]
},
{
    "routeDataPointId": "1643",
    "segmentId": "1",
    "time": 1672158538978,
    "velocity": 43,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "foo bar",
    "coordinates": [
        -75.68101,
        45.14641
    ]
},
{
    "routeDataPointId": "1644",
    "segmentId": "1",
    "time": 1672158538988,
    "velocity": 44,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68097,
        45.14633
    ]
},
{
    "routeDataPointId": "1645",
    "segmentId": "1",
    "time": 1672158538998,
    "velocity": 45,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.68089,
        45.14612
    ]
},
{
    "routeDataPointId": "1646",
    "segmentId": "1",
    "time": 1672158539008,
    "velocity": 46,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6806,
        45.14542
    ]
},
{
    "routeDataPointId": "1647",
    "segmentId": "1",
    "time": 1672158539018,
    "velocity": 47,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "foo bar",
    "coordinates": [
        -75.68052,
        45.14521
    ]
},
{
    "routeDataPointId": "1648",
    "segmentId": "1",
    "time": 1672158539028,
    "velocity": 48,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.68047,
        45.1451
    ]
},
{
    "routeDataPointId": "1649",
    "segmentId": "1",
    "time": 1672158539038,
    "velocity": 49,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.68027,
        45.1446
    ]
},
{
    "routeDataPointId": "1650",
    "segmentId": "1",
    "time": 1672158539048,
    "velocity": 50,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.68022,
        45.14449
    ]
},
{
    "routeDataPointId": "1651",
    "segmentId": "1",
    "time": 1672158539058,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6801,
        45.14418
    ]
},
{
    "routeDataPointId": "1652",
    "segmentId": "1",
    "time": 1672158539068,
    "velocity": 52,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.68005,
        45.14408
    ]
},
{
    "routeDataPointId": "1653",
    "segmentId": "1",
    "time": 1672158539078,
    "velocity": 53,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67993,
        45.14377
    ]
},
{
    "routeDataPointId": "1654",
    "segmentId": "1",
    "time": 1672158539088,
    "velocity": 54,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67988,
        45.14367
    ]
},
{
    "routeDataPointId": "1655",
    "segmentId": "1",
    "time": 1672158539098,
    "velocity": 55,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67976,
        45.14336
    ]
},
{
    "routeDataPointId": "1656",
    "segmentId": "1",
    "time": 1672158539108,
    "velocity": 56,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67971,
        45.14326
    ]
},
{
    "routeDataPointId": "1657",
    "segmentId": "1",
    "time": 1672158539118,
    "velocity": 57,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67959,
        45.14295
    ]
},
{
    "routeDataPointId": "1658",
    "segmentId": "1",
    "time": 1672158539128,
    "velocity": 58,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67957,
        45.14292
    ]
},
{
    "routeDataPointId": "1659",
    "segmentId": "1",
    "time": 1672158539138,
    "velocity": 59,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67955,
        45.14285
    ]
},
{
    "routeDataPointId": "1660",
    "segmentId": "1",
    "time": 1672158539148,
    "velocity": 60,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67951,
        45.14275
    ]
},
{
    "routeDataPointId": "1661",
    "segmentId": "1",
    "time": 1672158539158,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67946,
        45.14265
    ]
},
{
    "routeDataPointId": "1662",
    "segmentId": "1",
    "time": 1672158539168,
    "velocity": 62,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67934,
        45.14234
    ]
},
{
    "routeDataPointId": "1663",
    "segmentId": "1",
    "time": 1672158539178,
    "velocity": 63,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67929,
        45.14224
    ]
},
{
    "routeDataPointId": "1664",
    "segmentId": "1",
    "time": 1672158539188,
    "velocity": 64,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67925,
        45.14213
    ]
},
{
    "routeDataPointId": "1665",
    "segmentId": "1",
    "time": 1672158539198,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67916,
        45.14193
    ]
},
{
    "routeDataPointId": "1666",
    "segmentId": "1",
    "time": 1672158539208,
    "velocity": 66,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67912,
        45.14181
    ]
},
{
    "routeDataPointId": "1667",
    "segmentId": "1",
    "time": 1672158539218,
    "velocity": 67,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67902,
        45.14156
    ]
},
{
    "routeDataPointId": "1668",
    "segmentId": "1",
    "time": 1672158539228,
    "velocity": 68,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67899,
        45.14151
    ]
},
{
    "routeDataPointId": "1669",
    "segmentId": "1",
    "time": 1672158539238,
    "velocity": 69,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67896,
        45.14141
    ]
},
{
    "routeDataPointId": "1670",
    "segmentId": "1",
    "time": 1672158539248,
    "velocity": 70,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67884,
        45.1411
    ]
},
{
    "routeDataPointId": "1671",
    "segmentId": "1",
    "time": 1672158539258,
    "velocity": 71,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67879,
        45.141
    ]
},
{
    "routeDataPointId": "1672",
    "segmentId": "1",
    "time": 1672158539268,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67871,
        45.14079
    ]
},
{
    "routeDataPointId": "1673",
    "segmentId": "1",
    "time": 1672158539278,
    "velocity": 73,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67867,
        45.14071
    ]
},
{
    "routeDataPointId": "1674",
    "segmentId": "1",
    "time": 1672158539288,
    "velocity": 74,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67867,
        45.14069
    ]
},
{
    "routeDataPointId": "1675",
    "segmentId": "1",
    "time": 1672158539298,
    "velocity": 75,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67859,
        45.14049
    ]
},
{
    "routeDataPointId": "1676",
    "segmentId": "1",
    "time": 1672158539308,
    "velocity": 76,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67854,
        45.14038
    ]
},
{
    "routeDataPointId": "1677",
    "segmentId": "1",
    "time": 1672158539318,
    "velocity": 77,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67846,
        45.14018
    ]
},
{
    "routeDataPointId": "1678",
    "segmentId": "1",
    "time": 1672158539328,
    "velocity": 78,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67836,
        45.13998
    ]
},
{
    "routeDataPointId": "1679",
    "segmentId": "1",
    "time": 1672158539338,
    "velocity": 79,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67832,
        45.13986
    ]
},
{
    "routeDataPointId": "1680",
    "segmentId": "1",
    "time": 1672158539348,
    "velocity": 80,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67823,
        45.13966
    ]
},
{
    "routeDataPointId": "1681",
    "segmentId": "1",
    "time": 1672158539358,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67811,
        45.13936
    ]
},
{
    "routeDataPointId": "1682",
    "segmentId": "1",
    "time": 1672158539368,
    "velocity": 82,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67806,
        45.13925
    ]
},
{
    "routeDataPointId": "1683",
    "segmentId": "1",
    "time": 1672158539378,
    "velocity": 83,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67804,
        45.13919
    ]
},
{
    "routeDataPointId": "1684",
    "segmentId": "1",
    "time": 1672158539388,
    "velocity": 84,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67802,
        45.13915
    ]
},
{
    "routeDataPointId": "1685",
    "segmentId": "1",
    "time": 1672158539398,
    "velocity": 85,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67759,
        45.13812
    ]
},
{
    "routeDataPointId": "1686",
    "segmentId": "1",
    "time": 1672158539408,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67756,
        45.13803
    ]
},
{
    "routeDataPointId": "1687",
    "segmentId": "1",
    "time": 1672158539418,
    "velocity": 87,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67751,
        45.13792
    ]
},
{
    "routeDataPointId": "1688",
    "segmentId": "1",
    "time": 1672158539428,
    "velocity": 88,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67747,
        45.13781
    ]
},
{
    "routeDataPointId": "1689",
    "segmentId": "1",
    "time": 1672158539438,
    "velocity": 89,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67742,
        45.13771
    ]
},
{
    "routeDataPointId": "1690",
    "segmentId": "1",
    "time": 1672158539448,
    "velocity": 90,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67722,
        45.13721
    ]
},
{
    "routeDataPointId": "1691",
    "segmentId": "1",
    "time": 1672158539458,
    "velocity": 91,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6772,
        45.13717
    ]
},
{
    "routeDataPointId": "1692",
    "segmentId": "1",
    "time": 1672158539468,
    "velocity": 92,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67709,
        45.13689
    ]
},
{
    "routeDataPointId": "1693",
    "segmentId": "1",
    "time": 1672158539478,
    "velocity": 93,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67704,
        45.13678
    ]
},
{
    "routeDataPointId": "1694",
    "segmentId": "1",
    "time": 1672158539488,
    "velocity": 94,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67687,
        45.13636
    ]
},
{
    "routeDataPointId": "1695",
    "segmentId": "1",
    "time": 1672158539498,
    "velocity": 95,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67673,
        45.13604
    ]
},
{
    "routeDataPointId": "1696",
    "segmentId": "1",
    "time": 1672158539508,
    "velocity": 96,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6767,
        45.13594
    ]
},
{
    "routeDataPointId": "1697",
    "segmentId": "1",
    "time": 1672158539518,
    "velocity": 97,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67665,
        45.13584
    ]
},
{
    "routeDataPointId": "1698",
    "segmentId": "1",
    "time": 1672158539528,
    "velocity": 98,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67657,
        45.13563
    ]
},
{
    "routeDataPointId": "1699",
    "segmentId": "1",
    "time": 1672158539538,
    "velocity": 99,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67652,
        45.13553
    ]
},
{
    "routeDataPointId": "1700",
    "segmentId": "1",
    "time": 1672158539548,
    "velocity": 100,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67644,
        45.13531
    ]
},
{
    "routeDataPointId": "1701",
    "segmentId": "1",
    "time": 1672158539558,
    "velocity": 101,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6763,
        45.135
    ]
},
{
    "routeDataPointId": "1702",
    "segmentId": "1",
    "time": 1672158539568,
    "velocity": 102,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67627,
        45.13489
    ]
},
{
    "routeDataPointId": "1703",
    "segmentId": "1",
    "time": 1672158539578,
    "velocity": 103,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67619,
        45.13469
    ]
},
{
    "routeDataPointId": "1704",
    "segmentId": "1",
    "time": 1672158539588,
    "velocity": 104,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67614,
        45.13458
    ]
},
{
    "routeDataPointId": "1705",
    "segmentId": "1",
    "time": 1672158539598,
    "velocity": 105,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6761,
        45.13448
    ]
},
{
    "routeDataPointId": "1706",
    "segmentId": "1",
    "time": 1672158539608,
    "velocity": 106,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67605,
        45.13437
    ]
},
{
    "routeDataPointId": "1707",
    "segmentId": "1",
    "time": 1672158539618,
    "velocity": 107,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67597,
        45.13417
    ]
},
{
    "routeDataPointId": "1708",
    "segmentId": "1",
    "time": 1672158539628,
    "velocity": 108,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67596,
        45.13415
    ]
},
{
    "routeDataPointId": "1709",
    "segmentId": "1",
    "time": 1672158539638,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67589,
        45.13395
    ]
},
{
    "routeDataPointId": "1710",
    "segmentId": "1",
    "time": 1672158539648,
    "velocity": 110,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67576,
        45.13364
    ]
},
{
    "routeDataPointId": "1711",
    "segmentId": "1",
    "time": 1672158539658,
    "velocity": 111,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67568,
        45.13343
    ]
},
{
    "routeDataPointId": "1712",
    "segmentId": "1",
    "time": 1672158539668,
    "velocity": 112,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67563,
        45.13332
    ]
},
{
    "routeDataPointId": "1713",
    "segmentId": "1",
    "time": 1672158539678,
    "velocity": 113,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67562,
        45.13327
    ]
},
{
    "routeDataPointId": "1714",
    "segmentId": "1",
    "time": 1672158539688,
    "velocity": 114,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6756,
        45.13322
    ]
},
{
    "routeDataPointId": "1715",
    "segmentId": "1",
    "time": 1672158539698,
    "velocity": 115,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67557,
        45.13311
    ]
},
{
    "routeDataPointId": "1716",
    "segmentId": "1",
    "time": 1672158539708,
    "velocity": 116,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67553,
        45.133
    ]
},
{
    "routeDataPointId": "1717",
    "segmentId": "1",
    "time": 1672158539718,
    "velocity": 117,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67535,
        45.13237
    ]
},
{
    "routeDataPointId": "1718",
    "segmentId": "1",
    "time": 1672158539728,
    "velocity": 118,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6753,
        45.13215
    ]
},
{
    "routeDataPointId": "1719",
    "segmentId": "1",
    "time": 1672158539738,
    "velocity": 119,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67527,
        45.13204
    ]
},
{
    "routeDataPointId": "1720",
    "segmentId": "1",
    "time": 1672158539748,
    "velocity": 120,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67525,
        45.13193
    ]
},
{
    "routeDataPointId": "1721",
    "segmentId": "1",
    "time": 1672158539758,
    "velocity": 121,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6752,
        45.13173
    ]
},
{
    "routeDataPointId": "1722",
    "segmentId": "1",
    "time": 1672158539768,
    "velocity": 122,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6752,
        45.1317
    ]
},
{
    "routeDataPointId": "1723",
    "segmentId": "1",
    "time": 1672158539778,
    "velocity": 123,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67518,
        45.13161
    ]
},
{
    "routeDataPointId": "1724",
    "segmentId": "1",
    "time": 1672158539788,
    "velocity": 124,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67517,
        45.13152
    ]
},
{
    "routeDataPointId": "1725",
    "segmentId": "1",
    "time": 1672158539798,
    "velocity": 125,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67512,
        45.13128
    ]
},
{
    "routeDataPointId": "1726",
    "segmentId": "1",
    "time": 1672158539808,
    "velocity": 126,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67509,
        45.1311
    ]
},
{
    "routeDataPointId": "1727",
    "segmentId": "1",
    "time": 1672158539818,
    "velocity": 127,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67507,
        45.13092
    ]
},
{
    "routeDataPointId": "1728",
    "segmentId": "1",
    "time": 1672158539828,
    "velocity": 128,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67506,
        45.13077
    ]
},
{
    "routeDataPointId": "1729",
    "segmentId": "1",
    "time": 1672158539838,
    "velocity": 129,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67501,
        45.1303
    ]
},
{
    "routeDataPointId": "1730",
    "segmentId": "1",
    "time": 1672158539848,
    "velocity": 130,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67499,
        45.12984
    ]
},
{
    "routeDataPointId": "1731",
    "segmentId": "1",
    "time": 1672158539858,
    "velocity": 131,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67499,
        45.12943
    ]
},
{
    "routeDataPointId": "1732",
    "segmentId": "1",
    "time": 1672158539868,
    "velocity": 132,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.675,
        45.12933
    ]
},
{
    "routeDataPointId": "1733",
    "segmentId": "1",
    "time": 1672158539878,
    "velocity": 133,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.675,
        45.12912
    ]
},
{
    "routeDataPointId": "1734",
    "segmentId": "1",
    "time": 1672158539888,
    "velocity": 134,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67501,
        45.12888
    ]
},
{
    "routeDataPointId": "1735",
    "segmentId": "1",
    "time": 1672158539898,
    "velocity": 135,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67504,
        45.12856
    ]
},
{
    "routeDataPointId": "1736",
    "segmentId": "1",
    "time": 1672158539908,
    "velocity": 136,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67506,
        45.12845
    ]
},
{
    "routeDataPointId": "1737",
    "segmentId": "1",
    "time": 1672158539918,
    "velocity": 137,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67508,
        45.12824
    ]
},
{
    "routeDataPointId": "1738",
    "segmentId": "1",
    "time": 1672158539928,
    "velocity": 138,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67511,
        45.12804
    ]
},
{
    "routeDataPointId": "1739",
    "segmentId": "1",
    "time": 1672158539938,
    "velocity": 139,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67512,
        45.12791
    ]
},
{
    "routeDataPointId": "1740",
    "segmentId": "1",
    "time": 1672158539948,
    "velocity": 140,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67514,
        45.1278
    ]
},
{
    "routeDataPointId": "1741",
    "segmentId": "1",
    "time": 1672158539958,
    "velocity": 141,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "foo bar",
    "coordinates": [
        -75.67515,
        45.12769
    ]
},
{
    "routeDataPointId": "1742",
    "segmentId": "1",
    "time": 1672158539968,
    "velocity": 142,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67517,
        45.12759
    ]
},
{
    "routeDataPointId": "1743",
    "segmentId": "1",
    "time": 1672158539978,
    "velocity": 143,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6752,
        45.12736
    ]
},
{
    "routeDataPointId": "1744",
    "segmentId": "1",
    "time": 1672158539988,
    "velocity": 144,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67522,
        45.12715
    ]
},
{
    "routeDataPointId": "1745",
    "segmentId": "1",
    "time": 1672158539998,
    "velocity": 145,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67533,
        45.12638
    ]
},
{
    "routeDataPointId": "1746",
    "segmentId": "1",
    "time": 1672158540008,
    "velocity": 146,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67534,
        45.12626
    ]
},
{
    "routeDataPointId": "1747",
    "segmentId": "1",
    "time": 1672158540018,
    "velocity": 147,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67538,
        45.12593
    ]
},
{
    "routeDataPointId": "1748",
    "segmentId": "1",
    "time": 1672158540028,
    "velocity": 148,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6754,
        45.12583
    ]
},
{
    "routeDataPointId": "1749",
    "segmentId": "1",
    "time": 1672158540038,
    "velocity": 149,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67542,
        45.12569
    ]
},
{
    "routeDataPointId": "1750",
    "segmentId": "1",
    "time": 1672158540048,
    "velocity": 150,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67544,
        45.12549
    ]
},
{
    "routeDataPointId": "1751",
    "segmentId": "1",
    "time": 1672158540058,
    "velocity": 151,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67546,
        45.12538
    ]
},
{
    "routeDataPointId": "1752",
    "segmentId": "1",
    "time": 1672158540068,
    "velocity": 152,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67551,
        45.12496
    ]
},
{
    "routeDataPointId": "1753",
    "segmentId": "1",
    "time": 1672158540078,
    "velocity": 153,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67559,
        45.12442
    ]
},
{
    "routeDataPointId": "1754",
    "segmentId": "1",
    "time": 1672158540088,
    "velocity": 154,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67561,
        45.12422
    ]
},
{
    "routeDataPointId": "1755",
    "segmentId": "1",
    "time": 1672158540098,
    "velocity": 155,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6758,
        45.12281
    ]
},
{
    "routeDataPointId": "1756",
    "segmentId": "1",
    "time": 1672158540108,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67595,
        45.12181
    ]
},
{
    "routeDataPointId": "1757",
    "segmentId": "1",
    "time": 1672158540118,
    "velocity": 157,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.676,
        45.12138
    ]
},
{
    "routeDataPointId": "1758",
    "segmentId": "1",
    "time": 1672158540128,
    "velocity": 158,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67602,
        45.12092
    ]
},
{
    "routeDataPointId": "1759",
    "segmentId": "1",
    "time": 1672158540138,
    "velocity": 159,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67602,
        45.12038
    ]
},
{
    "routeDataPointId": "1760",
    "segmentId": "1",
    "time": 1672158540148,
    "velocity": 0,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67598,
        45.11995
    ]
},
{
    "routeDataPointId": "1761",
    "segmentId": "1",
    "time": 1672158540158,
    "velocity": 1,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67593,
        45.11963
    ]
},
{
    "routeDataPointId": "1762",
    "segmentId": "1",
    "time": 1672158540168,
    "velocity": 2,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67585,
        45.1192
    ]
},
{
    "routeDataPointId": "1763",
    "segmentId": "1",
    "time": 1672158540178,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67579,
        45.11897
    ]
},
{
    "routeDataPointId": "1764",
    "segmentId": "1",
    "time": 1672158540188,
    "velocity": 4,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67577,
        45.11887
    ]
},
{
    "routeDataPointId": "1765",
    "segmentId": "1",
    "time": 1672158540198,
    "velocity": 5,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67571,
        45.11866
    ]
},
{
    "routeDataPointId": "1766",
    "segmentId": "1",
    "time": 1672158540208,
    "velocity": 6,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67563,
        45.11844
    ]
},
{
    "routeDataPointId": "1767",
    "segmentId": "1",
    "time": 1672158540218,
    "velocity": 7,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67556,
        45.11822
    ]
},
{
    "routeDataPointId": "1768",
    "segmentId": "1",
    "time": 1672158540228,
    "velocity": 8,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67539,
        45.11782
    ]
},
{
    "routeDataPointId": "1769",
    "segmentId": "1",
    "time": 1672158540238,
    "velocity": 9,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67517,
        45.1174
    ]
},
{
    "routeDataPointId": "1770",
    "segmentId": "1",
    "time": 1672158540248,
    "velocity": 10,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67485,
        45.11685
    ]
},
{
    "routeDataPointId": "1771",
    "segmentId": "1",
    "time": 1672158540258,
    "velocity": 11,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67455,
        45.11641
    ]
},
{
    "routeDataPointId": "1772",
    "segmentId": "1",
    "time": 1672158540268,
    "velocity": 12,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.67425,
        45.11602
    ]
},
{
    "routeDataPointId": "1773",
    "segmentId": "1",
    "time": 1672158540278,
    "velocity": 13,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.67417,
        45.11593
    ]
},
{
    "routeDataPointId": "1774",
    "segmentId": "1",
    "time": 1672158540288,
    "velocity": 14,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67409,
        45.11583
    ]
},
{
    "routeDataPointId": "1775",
    "segmentId": "1",
    "time": 1672158540298,
    "velocity": 15,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.67376,
        45.11546
    ]
},
{
    "routeDataPointId": "1776",
    "segmentId": "1",
    "time": 1672158540308,
    "velocity": 16,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.67367,
        45.11538
    ]
},
{
    "routeDataPointId": "1777",
    "segmentId": "1",
    "time": 1672158540318,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.67353,
        45.11524
    ]
},
{
    "routeDataPointId": "1778",
    "segmentId": "1",
    "time": 1672158540328,
    "velocity": 18,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.67349,
        45.11519
    ]
},
{
    "routeDataPointId": "1779",
    "segmentId": "1",
    "time": 1672158540338,
    "velocity": 19,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.67242,
        45.11425
    ]
},
{
    "routeDataPointId": "1780",
    "segmentId": "1",
    "time": 1672158540348,
    "velocity": 20,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.67182,
        45.11376
    ]
},
{
    "routeDataPointId": "1781",
    "segmentId": "1",
    "time": 1672158540358,
    "velocity": 21,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66702,
        45.10972
    ]
},
{
    "routeDataPointId": "1782",
    "segmentId": "1",
    "time": 1672158540368,
    "velocity": 22,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66693,
        45.10965
    ]
},
{
    "routeDataPointId": "1783",
    "segmentId": "1",
    "time": 1672158540378,
    "velocity": 23,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.66662,
        45.10939
    ]
},
{
    "routeDataPointId": "1784",
    "segmentId": "1",
    "time": 1672158540388,
    "velocity": 24,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66649,
        45.10927
    ]
},
{
    "routeDataPointId": "1785",
    "segmentId": "1",
    "time": 1672158540398,
    "velocity": 25,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.66623,
        45.10905
    ]
},
{
    "routeDataPointId": "1786",
    "segmentId": "1",
    "time": 1672158540408,
    "velocity": 26,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.66621,
        45.10904
    ]
},
{
    "routeDataPointId": "1787",
    "segmentId": "1",
    "time": 1672158540418,
    "velocity": 27,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66613,
        45.10898
    ]
},
{
    "routeDataPointId": "1788",
    "segmentId": "1",
    "time": 1672158540428,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66593,
        45.1088
    ]
},
{
    "routeDataPointId": "1789",
    "segmentId": "1",
    "time": 1672158540438,
    "velocity": 29,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66524,
        45.10822
    ]
},
{
    "routeDataPointId": "1790",
    "segmentId": "1",
    "time": 1672158540448,
    "velocity": 30,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66502,
        45.10805
    ]
},
{
    "routeDataPointId": "1791",
    "segmentId": "1",
    "time": 1672158540458,
    "velocity": 31,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6649,
        45.10794
    ]
},
{
    "routeDataPointId": "1792",
    "segmentId": "1",
    "time": 1672158540468,
    "velocity": 32,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66453,
        45.10764
    ]
},
{
    "routeDataPointId": "1793",
    "segmentId": "1",
    "time": 1672158540478,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66443,
        45.10755
    ]
},
{
    "routeDataPointId": "1794",
    "segmentId": "1",
    "time": 1672158540488,
    "velocity": 34,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.66384,
        45.10706
    ]
},
{
    "routeDataPointId": "1795",
    "segmentId": "1",
    "time": 1672158540498,
    "velocity": 35,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66375,
        45.10697
    ]
},
{
    "routeDataPointId": "1796",
    "segmentId": "1",
    "time": 1672158540508,
    "velocity": 36,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.66285,
        45.10621
    ]
},
{
    "routeDataPointId": "1797",
    "segmentId": "1",
    "time": 1672158540518,
    "velocity": 37,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66206,
        45.1055
    ]
},
{
    "routeDataPointId": "1798",
    "segmentId": "1",
    "time": 1672158540528,
    "velocity": 38,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.66161,
        45.10507
    ]
},
{
    "routeDataPointId": "1799",
    "segmentId": "1",
    "time": 1672158540538,
    "velocity": 39,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66154,
        45.10501
    ]
},
{
    "routeDataPointId": "1800",
    "segmentId": "1",
    "time": 1672158540548,
    "velocity": 40,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.661,
        45.10447
    ]
},
{
    "routeDataPointId": "1801",
    "segmentId": "1",
    "time": 1672158540558,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.66057,
        45.10402
    ]
},
{
    "routeDataPointId": "1802",
    "segmentId": "1",
    "time": 1672158540568,
    "velocity": 42,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6604,
        45.10383
    ]
},
{
    "routeDataPointId": "1803",
    "segmentId": "1",
    "time": 1672158540578,
    "velocity": 43,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.66032,
        45.10375
    ]
},
{
    "routeDataPointId": "1804",
    "segmentId": "1",
    "time": 1672158540588,
    "velocity": 44,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65983,
        45.10319
    ]
},
{
    "routeDataPointId": "1805",
    "segmentId": "1",
    "time": 1672158540598,
    "velocity": 45,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65975,
        45.10309
    ]
},
{
    "routeDataPointId": "1806",
    "segmentId": "1",
    "time": 1672158540608,
    "velocity": 46,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65959,
        45.10291
    ]
},
{
    "routeDataPointId": "1807",
    "segmentId": "1",
    "time": 1672158540618,
    "velocity": 47,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6592,
        45.10243
    ]
},
{
    "routeDataPointId": "1808",
    "segmentId": "1",
    "time": 1672158540628,
    "velocity": 48,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65913,
        45.10233
    ]
},
{
    "routeDataPointId": "1809",
    "segmentId": "1",
    "time": 1672158540638,
    "velocity": 49,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65898,
        45.10214
    ]
},
{
    "routeDataPointId": "1810",
    "segmentId": "1",
    "time": 1672158540648,
    "velocity": 50,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65896,
        45.10212
    ]
},
{
    "routeDataPointId": "1811",
    "segmentId": "1",
    "time": 1672158540658,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65847,
        45.10147
    ]
},
{
    "routeDataPointId": "1812",
    "segmentId": "1",
    "time": 1672158540668,
    "velocity": 52,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65806,
        45.10088
    ]
},
{
    "routeDataPointId": "1813",
    "segmentId": "1",
    "time": 1672158540678,
    "velocity": 53,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65525,
        45.09651
    ]
},
{
    "routeDataPointId": "1814",
    "segmentId": "1",
    "time": 1672158540688,
    "velocity": 54,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65518,
        45.09641
    ]
},
{
    "routeDataPointId": "1815",
    "segmentId": "1",
    "time": 1672158540698,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65506,
        45.09621
    ]
},
{
    "routeDataPointId": "1816",
    "segmentId": "1",
    "time": 1672158540708,
    "velocity": 56,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65499,
        45.09611
    ]
},
{
    "routeDataPointId": "1817",
    "segmentId": "1",
    "time": 1672158540718,
    "velocity": 57,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65487,
        45.09591
    ]
},
{
    "routeDataPointId": "1818",
    "segmentId": "1",
    "time": 1672158540728,
    "velocity": 58,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65481,
        45.09582
    ]
},
{
    "routeDataPointId": "1819",
    "segmentId": "1",
    "time": 1672158540738,
    "velocity": 59,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6548,
        45.09582
    ]
},
{
    "routeDataPointId": "1820",
    "segmentId": "1",
    "time": 1672158540748,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65474,
        45.09572
    ]
},
{
    "routeDataPointId": "1821",
    "segmentId": "1",
    "time": 1672158540758,
    "velocity": 61,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65467,
        45.09562
    ]
},
{
    "routeDataPointId": "1822",
    "segmentId": "1",
    "time": 1672158540768,
    "velocity": 62,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65455,
        45.09542
    ]
},
{
    "routeDataPointId": "1823",
    "segmentId": "1",
    "time": 1672158540778,
    "velocity": 63,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65448,
        45.09532
    ]
},
{
    "routeDataPointId": "1824",
    "segmentId": "1",
    "time": 1672158540788,
    "velocity": 64,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65436,
        45.09512
    ]
},
{
    "routeDataPointId": "1825",
    "segmentId": "1",
    "time": 1672158540798,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65429,
        45.09502
    ]
},
{
    "routeDataPointId": "1826",
    "segmentId": "1",
    "time": 1672158540808,
    "velocity": 66,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65417,
        45.09482
    ]
},
{
    "routeDataPointId": "1827",
    "segmentId": "1",
    "time": 1672158540818,
    "velocity": 67,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65403,
        45.09462
    ]
},
{
    "routeDataPointId": "1828",
    "segmentId": "1",
    "time": 1672158540828,
    "velocity": 68,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65385,
        45.09432
    ]
},
{
    "routeDataPointId": "1829",
    "segmentId": "1",
    "time": 1672158540838,
    "velocity": 69,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65378,
        45.09422
    ]
},
{
    "routeDataPointId": "1830",
    "segmentId": "1",
    "time": 1672158540848,
    "velocity": 70,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65372,
        45.09412
    ]
},
{
    "routeDataPointId": "1831",
    "segmentId": "1",
    "time": 1672158540858,
    "velocity": 71,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65353,
        45.09384
    ]
},
{
    "routeDataPointId": "1832",
    "segmentId": "1",
    "time": 1672158540868,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.65353,
        45.09383
    ]
},
{
    "routeDataPointId": "1833",
    "segmentId": "1",
    "time": 1672158540878,
    "velocity": 73,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65201,
        45.09146
    ]
},
{
    "routeDataPointId": "1834",
    "segmentId": "1",
    "time": 1672158540888,
    "velocity": 74,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65194,
        45.09134
    ]
},
{
    "routeDataPointId": "1835",
    "segmentId": "1",
    "time": 1672158540898,
    "velocity": 75,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.65187,
        45.09124
    ]
},
{
    "routeDataPointId": "1836",
    "segmentId": "1",
    "time": 1672158540908,
    "velocity": 76,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65175,
        45.09104
    ]
},
{
    "routeDataPointId": "1837",
    "segmentId": "1",
    "time": 1672158540918,
    "velocity": 77,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65155,
        45.09074
    ]
},
{
    "routeDataPointId": "1838",
    "segmentId": "1",
    "time": 1672158540928,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65118,
        45.09014
    ]
},
{
    "routeDataPointId": "1839",
    "segmentId": "1",
    "time": 1672158540938,
    "velocity": 79,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65111,
        45.09004
    ]
},
{
    "routeDataPointId": "1840",
    "segmentId": "1",
    "time": 1672158540948,
    "velocity": 80,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65105,
        45.08994
    ]
},
{
    "routeDataPointId": "1841",
    "segmentId": "1",
    "time": 1672158540958,
    "velocity": 81,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.65098,
        45.08984
    ]
},
{
    "routeDataPointId": "1842",
    "segmentId": "1",
    "time": 1672158540968,
    "velocity": 82,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.65088,
        45.08968
    ]
},
{
    "routeDataPointId": "1843",
    "segmentId": "1",
    "time": 1672158540978,
    "velocity": 83,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65085,
        45.08964
    ]
},
{
    "routeDataPointId": "1844",
    "segmentId": "1",
    "time": 1672158540988,
    "velocity": 84,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.65067,
        45.08934
    ]
},
{
    "routeDataPointId": "1845",
    "segmentId": "1",
    "time": 1672158540998,
    "velocity": 85,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6506,
        45.08924
    ]
},
{
    "routeDataPointId": "1846",
    "segmentId": "1",
    "time": 1672158541008,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.65054,
        45.08914
    ]
},
{
    "routeDataPointId": "1847",
    "segmentId": "1",
    "time": 1672158541018,
    "velocity": 87,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.65008,
        45.08845
    ]
},
{
    "routeDataPointId": "1848",
    "segmentId": "1",
    "time": 1672158541028,
    "velocity": 88,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.65002,
        45.08835
    ]
},
{
    "routeDataPointId": "1849",
    "segmentId": "1",
    "time": 1672158541038,
    "velocity": 89,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.64988,
        45.08815
    ]
},
{
    "routeDataPointId": "1850",
    "segmentId": "1",
    "time": 1672158541048,
    "velocity": 90,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.64981,
        45.08806
    ]
},
{
    "routeDataPointId": "1851",
    "segmentId": "1",
    "time": 1672158541058,
    "velocity": 91,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.64974,
        45.08796
    ]
},
{
    "routeDataPointId": "1852",
    "segmentId": "1",
    "time": 1672158541068,
    "velocity": 92,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.64951,
        45.08767
    ]
},
{
    "routeDataPointId": "1853",
    "segmentId": "1",
    "time": 1672158541078,
    "velocity": 93,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.64918,
        45.0873
    ]
},
{
    "routeDataPointId": "1854",
    "segmentId": "1",
    "time": 1672158541088,
    "velocity": 94,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.64909,
        45.08722
    ]
},
{
    "routeDataPointId": "1855",
    "segmentId": "1",
    "time": 1672158541098,
    "velocity": 95,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.64884,
        45.08697
    ]
},
{
    "routeDataPointId": "1856",
    "segmentId": "1",
    "time": 1672158541108,
    "velocity": 96,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.64882,
        45.08694
    ]
},
{
    "routeDataPointId": "1857",
    "segmentId": "1",
    "time": 1672158541118,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.64863,
        45.08677
    ]
},
{
    "routeDataPointId": "1858",
    "segmentId": "1",
    "time": 1672158541128,
    "velocity": 98,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.64853,
        45.08669
    ]
},
{
    "routeDataPointId": "1859",
    "segmentId": "1",
    "time": 1672158541138,
    "velocity": 99,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6485,
        45.08666
    ]
},
{
    "routeDataPointId": "1860",
    "segmentId": "1",
    "time": 1672158541148,
    "velocity": 100,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.64812,
        45.08635
    ]
},
{
    "routeDataPointId": "1861",
    "segmentId": "1",
    "time": 1672158541158,
    "velocity": 101,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.64802,
        45.08628
    ]
},
{
    "routeDataPointId": "1862",
    "segmentId": "1",
    "time": 1672158541168,
    "velocity": 102,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.648,
        45.08626
    ]
},
{
    "routeDataPointId": "1863",
    "segmentId": "1",
    "time": 1672158541178,
    "velocity": 103,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6477,
        45.08604
    ]
},
{
    "routeDataPointId": "1864",
    "segmentId": "1",
    "time": 1672158541188,
    "velocity": 104,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.64759,
        45.08597
    ]
},
{
    "routeDataPointId": "1865",
    "segmentId": "1",
    "time": 1672158541198,
    "velocity": 105,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.64757,
        45.08595
    ]
},
{
    "routeDataPointId": "1866",
    "segmentId": "1",
    "time": 1672158541208,
    "velocity": 106,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.64748,
        45.08589
    ]
},
{
    "routeDataPointId": "1867",
    "segmentId": "1",
    "time": 1672158541218,
    "velocity": 107,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.64745,
        45.08588
    ]
},
{
    "routeDataPointId": "1868",
    "segmentId": "1",
    "time": 1672158541228,
    "velocity": 108,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.64729,
        45.08577
    ]
},
{
    "routeDataPointId": "1869",
    "segmentId": "1",
    "time": 1672158541238,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.64698,
        45.08558
    ]
},
{
    "routeDataPointId": "1870",
    "segmentId": "1",
    "time": 1672158541248,
    "velocity": 110,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6464,
        45.08526
    ]
},
{
    "routeDataPointId": "1871",
    "segmentId": "1",
    "time": 1672158541258,
    "velocity": 111,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.64589,
        45.08502
    ]
},
{
    "routeDataPointId": "1872",
    "segmentId": "1",
    "time": 1672158541268,
    "velocity": 112,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.64582,
        45.08498
    ]
},
{
    "routeDataPointId": "1873",
    "segmentId": "1",
    "time": 1672158541278,
    "velocity": 113,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.64577,
        45.08496
    ]
},
{
    "routeDataPointId": "1874",
    "segmentId": "1",
    "time": 1672158541288,
    "velocity": 114,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.64572,
        45.08493
    ]
},
{
    "routeDataPointId": "1875",
    "segmentId": "1",
    "time": 1672158541298,
    "velocity": 115,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.64563,
        45.0849
    ]
},
{
    "routeDataPointId": "1876",
    "segmentId": "1",
    "time": 1672158541308,
    "velocity": 116,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.64551,
        45.08484
    ]
},
{
    "routeDataPointId": "1877",
    "segmentId": "1",
    "time": 1672158541318,
    "velocity": 117,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.64537,
        45.08479
    ]
},
{
    "routeDataPointId": "1878",
    "segmentId": "1",
    "time": 1672158541328,
    "velocity": 118,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.64524,
        45.08473
    ]
},
{
    "routeDataPointId": "1879",
    "segmentId": "1",
    "time": 1672158541338,
    "velocity": 119,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6444,
        45.08443
    ]
},
{
    "routeDataPointId": "1880",
    "segmentId": "1",
    "time": 1672158541348,
    "velocity": 120,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.64412,
        45.08435
    ]
},
{
    "routeDataPointId": "1881",
    "segmentId": "1",
    "time": 1672158541358,
    "velocity": 121,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.64398,
        45.0843
    ]
},
{
    "routeDataPointId": "1882",
    "segmentId": "1",
    "time": 1672158541368,
    "velocity": 122,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.64369,
        45.08422
    ]
},
{
    "routeDataPointId": "1883",
    "segmentId": "1",
    "time": 1672158541378,
    "velocity": 123,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.64355,
        45.08417
    ]
},
{
    "routeDataPointId": "1884",
    "segmentId": "1",
    "time": 1672158541388,
    "velocity": 124,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.64313,
        45.08405
    ]
},
{
    "routeDataPointId": "1885",
    "segmentId": "1",
    "time": 1672158541398,
    "velocity": 125,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.64285,
        45.08396
    ]
},
{
    "routeDataPointId": "1886",
    "segmentId": "1",
    "time": 1672158541408,
    "velocity": 126,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6427,
        45.08392
    ]
},
{
    "routeDataPointId": "1887",
    "segmentId": "1",
    "time": 1672158541418,
    "velocity": 127,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.64242,
        45.08383
    ]
},
{
    "routeDataPointId": "1888",
    "segmentId": "1",
    "time": 1672158541428,
    "velocity": 128,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.64199,
        45.08371
    ]
},
{
    "routeDataPointId": "1889",
    "segmentId": "1",
    "time": 1672158541438,
    "velocity": 129,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.64185,
        45.08366
    ]
},
{
    "routeDataPointId": "1890",
    "segmentId": "1",
    "time": 1672158541448,
    "velocity": 130,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.64086,
        45.08337
    ]
},
{
    "routeDataPointId": "1891",
    "segmentId": "1",
    "time": 1672158541458,
    "velocity": 131,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.64072,
        45.08332
    ]
},
{
    "routeDataPointId": "1892",
    "segmentId": "1",
    "time": 1672158541468,
    "velocity": 132,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.63963,
        45.083
    ]
},
{
    "routeDataPointId": "1893",
    "segmentId": "1",
    "time": 1672158541478,
    "velocity": 133,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.63948,
        45.08295
    ]
},
{
    "routeDataPointId": "1894",
    "segmentId": "1",
    "time": 1672158541488,
    "velocity": 134,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.63911,
        45.08284
    ]
},
{
    "routeDataPointId": "1895",
    "segmentId": "1",
    "time": 1672158541498,
    "velocity": 135,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.63888,
        45.08278
    ]
},
{
    "routeDataPointId": "1896",
    "segmentId": "1",
    "time": 1672158541508,
    "velocity": 136,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.63774,
        45.08243
    ]
},
{
    "routeDataPointId": "1897",
    "segmentId": "1",
    "time": 1672158541518,
    "velocity": 137,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.63759,
        45.08239
    ]
},
{
    "routeDataPointId": "1898",
    "segmentId": "1",
    "time": 1672158541528,
    "velocity": 138,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.63731,
        45.0823
    ]
},
{
    "routeDataPointId": "1899",
    "segmentId": "1",
    "time": 1672158541538,
    "velocity": 139,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.63531,
        45.08171
    ]
},
{
    "routeDataPointId": "1900",
    "segmentId": "1",
    "time": 1672158541548,
    "velocity": 140,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.63526,
        45.08169
    ]
},
{
    "routeDataPointId": "1901",
    "segmentId": "1",
    "time": 1672158541558,
    "velocity": 141,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.63483,
        45.08156
    ]
},
{
    "routeDataPointId": "1902",
    "segmentId": "1",
    "time": 1672158541568,
    "velocity": 142,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.63432,
        45.08138
    ]
},
{
    "routeDataPointId": "1903",
    "segmentId": "1",
    "time": 1672158541578,
    "velocity": 143,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.63418,
        45.08132
    ]
},
{
    "routeDataPointId": "1904",
    "segmentId": "1",
    "time": 1672158541588,
    "velocity": 144,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.63404,
        45.08127
    ]
},
{
    "routeDataPointId": "1905",
    "segmentId": "1",
    "time": 1672158541598,
    "velocity": 145,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.63351,
        45.08105
    ]
},
{
    "routeDataPointId": "1906",
    "segmentId": "1",
    "time": 1672158541608,
    "velocity": 146,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.633,
        45.08081
    ]
},
{
    "routeDataPointId": "1907",
    "segmentId": "1",
    "time": 1672158541618,
    "velocity": 147,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.63261,
        45.0806
    ]
},
{
    "routeDataPointId": "1908",
    "segmentId": "1",
    "time": 1672158541628,
    "velocity": 148,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "foo bar",
    "coordinates": [
        -75.63226,
        45.0804
    ]
},
{
    "routeDataPointId": "1909",
    "segmentId": "1",
    "time": 1672158541638,
    "velocity": 149,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6317,
        45.08004
    ]
},
{
    "routeDataPointId": "1910",
    "segmentId": "1",
    "time": 1672158541648,
    "velocity": 150,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6316,
        45.07996
    ]
},
{
    "routeDataPointId": "1911",
    "segmentId": "1",
    "time": 1672158541658,
    "velocity": 151,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.63148,
        45.07988
    ]
},
{
    "routeDataPointId": "1912",
    "segmentId": "1",
    "time": 1672158541668,
    "velocity": 152,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.63116,
        45.07963
    ]
},
{
    "routeDataPointId": "1913",
    "segmentId": "1",
    "time": 1672158541678,
    "velocity": 153,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.63111,
        45.0796
    ]
},
{
    "routeDataPointId": "1914",
    "segmentId": "1",
    "time": 1672158541688,
    "velocity": 154,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.63077,
        45.07931
    ]
},
{
    "routeDataPointId": "1915",
    "segmentId": "1",
    "time": 1672158541698,
    "velocity": 155,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.63067,
        45.07921
    ]
},
{
    "routeDataPointId": "1916",
    "segmentId": "1",
    "time": 1672158541708,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6305,
        45.07906
    ]
},
{
    "routeDataPointId": "1917",
    "segmentId": "1",
    "time": 1672158541718,
    "velocity": 157,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.63045,
        45.079
    ]
},
{
    "routeDataPointId": "1918",
    "segmentId": "1",
    "time": 1672158541728,
    "velocity": 158,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.63022,
        45.07878
    ]
},
{
    "routeDataPointId": "1919",
    "segmentId": "1",
    "time": 1672158541738,
    "velocity": 159,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62941,
        45.07783
    ]
},
{
    "routeDataPointId": "1920",
    "segmentId": "1",
    "time": 1672158541748,
    "velocity": 0,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62724,
        45.07518
    ]
},
{
    "routeDataPointId": "1921",
    "segmentId": "1",
    "time": 1672158541758,
    "velocity": 1,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6271,
        45.07502
    ]
},
{
    "routeDataPointId": "1922",
    "segmentId": "1",
    "time": 1672158541768,
    "velocity": 2,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62702,
        45.07491
    ]
},
{
    "routeDataPointId": "1923",
    "segmentId": "1",
    "time": 1672158541778,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62539,
        45.07292
    ]
},
{
    "routeDataPointId": "1924",
    "segmentId": "1",
    "time": 1672158541788,
    "velocity": 4,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62525,
        45.07274
    ]
},
{
    "routeDataPointId": "1925",
    "segmentId": "1",
    "time": 1672158541798,
    "velocity": 5,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62229,
        45.06914
    ]
},
{
    "routeDataPointId": "1926",
    "segmentId": "1",
    "time": 1672158541808,
    "velocity": 6,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62207,
        45.06886
    ]
},
{
    "routeDataPointId": "1927",
    "segmentId": "1",
    "time": 1672158541818,
    "velocity": 7,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62185,
        45.06856
    ]
},
{
    "routeDataPointId": "1928",
    "segmentId": "1",
    "time": 1672158541828,
    "velocity": 8,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62177,
        45.06846
    ]
},
{
    "routeDataPointId": "1929",
    "segmentId": "1",
    "time": 1672158541838,
    "velocity": 9,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62171,
        45.06837
    ]
},
{
    "routeDataPointId": "1930",
    "segmentId": "1",
    "time": 1672158541848,
    "velocity": 10,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62135,
        45.06776
    ]
},
{
    "routeDataPointId": "1931",
    "segmentId": "1",
    "time": 1672158541858,
    "velocity": 11,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62134,
        45.06772
    ]
},
{
    "routeDataPointId": "1932",
    "segmentId": "1",
    "time": 1672158541868,
    "velocity": 12,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6213,
        45.06765
    ]
},
{
    "routeDataPointId": "1933",
    "segmentId": "1",
    "time": 1672158541878,
    "velocity": 13,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62112,
        45.06725
    ]
},
{
    "routeDataPointId": "1934",
    "segmentId": "1",
    "time": 1672158541888,
    "velocity": 14,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62104,
        45.06702
    ]
},
{
    "routeDataPointId": "1935",
    "segmentId": "1",
    "time": 1672158541898,
    "velocity": 15,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.621,
        45.06692
    ]
},
{
    "routeDataPointId": "1936",
    "segmentId": "1",
    "time": 1672158541908,
    "velocity": 16,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62097,
        45.06682
    ]
},
{
    "routeDataPointId": "1937",
    "segmentId": "1",
    "time": 1672158541918,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62097,
        45.0668
    ]
},
{
    "routeDataPointId": "1938",
    "segmentId": "1",
    "time": 1672158541928,
    "velocity": 18,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62085,
        45.06638
    ]
},
{
    "routeDataPointId": "1939",
    "segmentId": "1",
    "time": 1672158541938,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62084,
        45.06631
    ]
},
{
    "routeDataPointId": "1940",
    "segmentId": "1",
    "time": 1672158541948,
    "velocity": 20,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62083,
        45.06628
    ]
},
{
    "routeDataPointId": "1941",
    "segmentId": "1",
    "time": 1672158541958,
    "velocity": 21,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62081,
        45.06616
    ]
},
{
    "routeDataPointId": "1942",
    "segmentId": "1",
    "time": 1672158541968,
    "velocity": 22,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62078,
        45.06605
    ]
},
{
    "routeDataPointId": "1943",
    "segmentId": "1",
    "time": 1672158541978,
    "velocity": 23,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62077,
        45.06595
    ]
},
{
    "routeDataPointId": "1944",
    "segmentId": "1",
    "time": 1672158541988,
    "velocity": 24,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62075,
        45.06583
    ]
},
{
    "routeDataPointId": "1945",
    "segmentId": "1",
    "time": 1672158541998,
    "velocity": 25,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62071,
        45.06539
    ]
},
{
    "routeDataPointId": "1946",
    "segmentId": "1",
    "time": 1672158542008,
    "velocity": 26,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62071,
        45.06506
    ]
},
{
    "routeDataPointId": "1947",
    "segmentId": "1",
    "time": 1672158542018,
    "velocity": 27,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62072,
        45.06496
    ]
},
{
    "routeDataPointId": "1948",
    "segmentId": "1",
    "time": 1672158542028,
    "velocity": 28,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62072,
        45.06484
    ]
},
{
    "routeDataPointId": "1949",
    "segmentId": "1",
    "time": 1672158542038,
    "velocity": 29,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "foo bar",
    "coordinates": [
        -75.62074,
        45.06462
    ]
},
{
    "routeDataPointId": "1950",
    "segmentId": "1",
    "time": 1672158542048,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62076,
        45.06451
    ]
},
{
    "routeDataPointId": "1951",
    "segmentId": "1",
    "time": 1672158542058,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62077,
        45.06441
    ]
},
{
    "routeDataPointId": "1952",
    "segmentId": "1",
    "time": 1672158542068,
    "velocity": 32,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62079,
        45.06431
    ]
},
{
    "routeDataPointId": "1953",
    "segmentId": "1",
    "time": 1672158542078,
    "velocity": 33,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6208,
        45.0642
    ]
},
{
    "routeDataPointId": "1954",
    "segmentId": "1",
    "time": 1672158542088,
    "velocity": 34,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62082,
        45.06407
    ]
},
{
    "routeDataPointId": "1955",
    "segmentId": "1",
    "time": 1672158542098,
    "velocity": 35,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62083,
        45.06403
    ]
},
{
    "routeDataPointId": "1956",
    "segmentId": "1",
    "time": 1672158542108,
    "velocity": 36,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62084,
        45.06397
    ]
},
{
    "routeDataPointId": "1957",
    "segmentId": "1",
    "time": 1672158542118,
    "velocity": 37,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62085,
        45.06385
    ]
},
{
    "routeDataPointId": "1958",
    "segmentId": "1",
    "time": 1672158542128,
    "velocity": 38,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62087,
        45.06375
    ]
},
{
    "routeDataPointId": "1959",
    "segmentId": "1",
    "time": 1672158542138,
    "velocity": 39,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62088,
        45.06365
    ]
},
{
    "routeDataPointId": "1960",
    "segmentId": "1",
    "time": 1672158542148,
    "velocity": 40,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62092,
        45.06343
    ]
},
{
    "routeDataPointId": "1961",
    "segmentId": "1",
    "time": 1672158542158,
    "velocity": 41,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62093,
        45.06332
    ]
},
{
    "routeDataPointId": "1962",
    "segmentId": "1",
    "time": 1672158542168,
    "velocity": 42,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62097,
        45.0631
    ]
},
{
    "routeDataPointId": "1963",
    "segmentId": "1",
    "time": 1672158542178,
    "velocity": 43,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62098,
        45.06298
    ]
},
{
    "routeDataPointId": "1964",
    "segmentId": "1",
    "time": 1672158542188,
    "velocity": 44,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62102,
        45.06277
    ]
},
{
    "routeDataPointId": "1965",
    "segmentId": "1",
    "time": 1672158542198,
    "velocity": 45,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62103,
        45.06266
    ]
},
{
    "routeDataPointId": "1966",
    "segmentId": "1",
    "time": 1672158542208,
    "velocity": 46,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62105,
        45.06254
    ]
},
{
    "routeDataPointId": "1967",
    "segmentId": "1",
    "time": 1672158542218,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62107,
        45.06245
    ]
},
{
    "routeDataPointId": "1968",
    "segmentId": "1",
    "time": 1672158542228,
    "velocity": 48,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62108,
        45.06233
    ]
},
{
    "routeDataPointId": "1969",
    "segmentId": "1",
    "time": 1672158542238,
    "velocity": 49,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62116,
        45.06189
    ]
},
{
    "routeDataPointId": "1970",
    "segmentId": "1",
    "time": 1672158542248,
    "velocity": 50,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62117,
        45.06179
    ]
},
{
    "routeDataPointId": "1971",
    "segmentId": "1",
    "time": 1672158542258,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62121,
        45.06155
    ]
},
{
    "routeDataPointId": "1972",
    "segmentId": "1",
    "time": 1672158542268,
    "velocity": 52,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62122,
        45.06146
    ]
},
{
    "routeDataPointId": "1973",
    "segmentId": "1",
    "time": 1672158542278,
    "velocity": 53,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62122,
        45.06144
    ]
},
{
    "routeDataPointId": "1974",
    "segmentId": "1",
    "time": 1672158542288,
    "velocity": 54,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62126,
        45.06123
    ]
},
{
    "routeDataPointId": "1975",
    "segmentId": "1",
    "time": 1672158542298,
    "velocity": 55,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62127,
        45.06112
    ]
},
{
    "routeDataPointId": "1976",
    "segmentId": "1",
    "time": 1672158542308,
    "velocity": 56,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62129,
        45.06103
    ]
},
{
    "routeDataPointId": "1977",
    "segmentId": "1",
    "time": 1672158542318,
    "velocity": 57,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62133,
        45.0608
    ]
},
{
    "routeDataPointId": "1978",
    "segmentId": "1",
    "time": 1672158542328,
    "velocity": 58,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62134,
        45.06068
    ]
},
{
    "routeDataPointId": "1979",
    "segmentId": "1",
    "time": 1672158542338,
    "velocity": 59,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62138,
        45.06047
    ]
},
{
    "routeDataPointId": "1980",
    "segmentId": "1",
    "time": 1672158542348,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62139,
        45.06036
    ]
},
{
    "routeDataPointId": "1981",
    "segmentId": "1",
    "time": 1672158542358,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62143,
        45.06015
    ]
},
{
    "routeDataPointId": "1982",
    "segmentId": "1",
    "time": 1672158542368,
    "velocity": 62,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62144,
        45.06003
    ]
},
{
    "routeDataPointId": "1983",
    "segmentId": "1",
    "time": 1672158542378,
    "velocity": 63,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62145,
        45.06
    ]
},
{
    "routeDataPointId": "1984",
    "segmentId": "1",
    "time": 1672158542388,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62146,
        45.05992
    ]
},
{
    "routeDataPointId": "1985",
    "segmentId": "1",
    "time": 1672158542398,
    "velocity": 65,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6215,
        45.0597
    ]
},
{
    "routeDataPointId": "1986",
    "segmentId": "1",
    "time": 1672158542408,
    "velocity": 66,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62151,
        45.05959
    ]
},
{
    "routeDataPointId": "1987",
    "segmentId": "1",
    "time": 1672158542418,
    "velocity": 67,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62157,
        45.05926
    ]
},
{
    "routeDataPointId": "1988",
    "segmentId": "1",
    "time": 1672158542428,
    "velocity": 68,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62158,
        45.05915
    ]
},
{
    "routeDataPointId": "1989",
    "segmentId": "1",
    "time": 1672158542438,
    "velocity": 69,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62164,
        45.05881
    ]
},
{
    "routeDataPointId": "1990",
    "segmentId": "1",
    "time": 1672158542448,
    "velocity": 70,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62165,
        45.05871
    ]
},
{
    "routeDataPointId": "1991",
    "segmentId": "1",
    "time": 1672158542458,
    "velocity": 71,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62171,
        45.05838
    ]
},
{
    "routeDataPointId": "1992",
    "segmentId": "1",
    "time": 1672158542468,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62172,
        45.05826
    ]
},
{
    "routeDataPointId": "1993",
    "segmentId": "1",
    "time": 1672158542478,
    "velocity": 73,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "foo bar",
    "coordinates": [
        -75.62176,
        45.05805
    ]
},
{
    "routeDataPointId": "1994",
    "segmentId": "1",
    "time": 1672158542488,
    "velocity": 74,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62177,
        45.05794
    ]
},
{
    "routeDataPointId": "1995",
    "segmentId": "1",
    "time": 1672158542498,
    "velocity": 75,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62179,
        45.05782
    ]
},
{
    "routeDataPointId": "1996",
    "segmentId": "1",
    "time": 1672158542508,
    "velocity": 76,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6218,
        45.05779
    ]
},
{
    "routeDataPointId": "1997",
    "segmentId": "1",
    "time": 1672158542518,
    "velocity": 77,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62182,
        45.05761
    ]
},
{
    "routeDataPointId": "1998",
    "segmentId": "1",
    "time": 1672158542528,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62186,
        45.05738
    ]
},
{
    "routeDataPointId": "1999",
    "segmentId": "1",
    "time": 1672158542538,
    "velocity": 79,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62187,
        45.05729
    ]
},
{
    "routeDataPointId": "2000",
    "segmentId": "1",
    "time": 1672158542548,
    "velocity": 80,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6219,
        45.05717
    ]
},
{
    "routeDataPointId": "2001",
    "segmentId": "1",
    "time": 1672158542558,
    "velocity": 81,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62191,
        45.05706
    ]
},
{
    "routeDataPointId": "2002",
    "segmentId": "1",
    "time": 1672158542568,
    "velocity": 82,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62195,
        45.05683
    ]
},
{
    "routeDataPointId": "2003",
    "segmentId": "1",
    "time": 1672158542578,
    "velocity": 83,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62196,
        45.05673
    ]
},
{
    "routeDataPointId": "2004",
    "segmentId": "1",
    "time": 1672158542588,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62202,
        45.05641
    ]
},
{
    "routeDataPointId": "2005",
    "segmentId": "1",
    "time": 1672158542598,
    "velocity": 85,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62203,
        45.0563
    ]
},
{
    "routeDataPointId": "2006",
    "segmentId": "1",
    "time": 1672158542608,
    "velocity": 86,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62207,
        45.05607
    ]
},
{
    "routeDataPointId": "2007",
    "segmentId": "1",
    "time": 1672158542618,
    "velocity": 87,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62208,
        45.05597
    ]
},
{
    "routeDataPointId": "2008",
    "segmentId": "1",
    "time": 1672158542628,
    "velocity": 88,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6221,
        45.05586
    ]
},
{
    "routeDataPointId": "2009",
    "segmentId": "1",
    "time": 1672158542638,
    "velocity": 89,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62213,
        45.05564
    ]
},
{
    "routeDataPointId": "2010",
    "segmentId": "1",
    "time": 1672158542648,
    "velocity": 90,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62219,
        45.0553
    ]
},
{
    "routeDataPointId": "2011",
    "segmentId": "1",
    "time": 1672158542658,
    "velocity": 91,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6222,
        45.0552
    ]
},
{
    "routeDataPointId": "2012",
    "segmentId": "1",
    "time": 1672158542668,
    "velocity": 92,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62224,
        45.05497
    ]
},
{
    "routeDataPointId": "2013",
    "segmentId": "1",
    "time": 1672158542678,
    "velocity": 93,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62224,
        45.05494
    ]
},
{
    "routeDataPointId": "2014",
    "segmentId": "1",
    "time": 1672158542688,
    "velocity": 94,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62225,
        45.05486
    ]
},
{
    "routeDataPointId": "2015",
    "segmentId": "1",
    "time": 1672158542698,
    "velocity": 95,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62227,
        45.05476
    ]
},
{
    "routeDataPointId": "2016",
    "segmentId": "1",
    "time": 1672158542708,
    "velocity": 96,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62228,
        45.05466
    ]
},
{
    "routeDataPointId": "2017",
    "segmentId": "1",
    "time": 1672158542718,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62236,
        45.05422
    ]
},
{
    "routeDataPointId": "2018",
    "segmentId": "1",
    "time": 1672158542728,
    "velocity": 98,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62237,
        45.0541
    ]
},
{
    "routeDataPointId": "2019",
    "segmentId": "1",
    "time": 1672158542738,
    "velocity": 99,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62241,
        45.05388
    ]
},
{
    "routeDataPointId": "2020",
    "segmentId": "1",
    "time": 1672158542748,
    "velocity": 100,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62242,
        45.05378
    ]
},
{
    "routeDataPointId": "2021",
    "segmentId": "1",
    "time": 1672158542758,
    "velocity": 101,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62246,
        45.05356
    ]
},
{
    "routeDataPointId": "2022",
    "segmentId": "1",
    "time": 1672158542768,
    "velocity": 102,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62247,
        45.05345
    ]
},
{
    "routeDataPointId": "2023",
    "segmentId": "1",
    "time": 1672158542778,
    "velocity": 103,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62255,
        45.053
    ]
},
{
    "routeDataPointId": "2024",
    "segmentId": "1",
    "time": 1672158542788,
    "velocity": 104,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62256,
        45.0529
    ]
},
{
    "routeDataPointId": "2025",
    "segmentId": "1",
    "time": 1672158542798,
    "velocity": 105,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62258,
        45.05279
    ]
},
{
    "routeDataPointId": "2026",
    "segmentId": "1",
    "time": 1672158542808,
    "velocity": 106,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62259,
        45.05269
    ]
},
{
    "routeDataPointId": "2027",
    "segmentId": "1",
    "time": 1672158542818,
    "velocity": 107,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62265,
        45.05234
    ]
},
{
    "routeDataPointId": "2028",
    "segmentId": "1",
    "time": 1672158542828,
    "velocity": 108,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62266,
        45.05224
    ]
},
{
    "routeDataPointId": "2029",
    "segmentId": "1",
    "time": 1672158542838,
    "velocity": 109,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6227,
        45.05203
    ]
},
{
    "routeDataPointId": "2030",
    "segmentId": "1",
    "time": 1672158542848,
    "velocity": 110,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62271,
        45.05192
    ]
},
{
    "routeDataPointId": "2031",
    "segmentId": "1",
    "time": 1672158542858,
    "velocity": 111,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62277,
        45.05158
    ]
},
{
    "routeDataPointId": "2032",
    "segmentId": "1",
    "time": 1672158542868,
    "velocity": 112,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62278,
        45.05148
    ]
},
{
    "routeDataPointId": "2033",
    "segmentId": "1",
    "time": 1672158542878,
    "velocity": 113,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62282,
        45.05127
    ]
},
{
    "routeDataPointId": "2034",
    "segmentId": "1",
    "time": 1672158542888,
    "velocity": 114,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62283,
        45.05115
    ]
},
{
    "routeDataPointId": "2035",
    "segmentId": "1",
    "time": 1672158542898,
    "velocity": 115,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62287,
        45.05094
    ]
},
{
    "routeDataPointId": "2036",
    "segmentId": "1",
    "time": 1672158542908,
    "velocity": 116,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62288,
        45.05083
    ]
},
{
    "routeDataPointId": "2037",
    "segmentId": "1",
    "time": 1672158542918,
    "velocity": 117,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6229,
        45.05076
    ]
},
{
    "routeDataPointId": "2038",
    "segmentId": "1",
    "time": 1672158542928,
    "velocity": 118,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6229,
        45.05072
    ]
},
{
    "routeDataPointId": "2039",
    "segmentId": "1",
    "time": 1672158542938,
    "velocity": 119,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62294,
        45.0505
    ]
},
{
    "routeDataPointId": "2040",
    "segmentId": "1",
    "time": 1672158542948,
    "velocity": 120,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "foo bar",
    "coordinates": [
        -75.62295,
        45.0504
    ]
},
{
    "routeDataPointId": "2041",
    "segmentId": "1",
    "time": 1672158542958,
    "velocity": 121,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62297,
        45.05031
    ]
},
{
    "routeDataPointId": "2042",
    "segmentId": "1",
    "time": 1672158542968,
    "velocity": 122,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62297,
        45.05029
    ]
},
{
    "routeDataPointId": "2043",
    "segmentId": "1",
    "time": 1672158542978,
    "velocity": 123,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62301,
        45.05006
    ]
},
{
    "routeDataPointId": "2044",
    "segmentId": "1",
    "time": 1672158542988,
    "velocity": 124,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62302,
        45.04996
    ]
},
{
    "routeDataPointId": "2045",
    "segmentId": "1",
    "time": 1672158542998,
    "velocity": 125,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62319,
        45.04885
    ]
},
{
    "routeDataPointId": "2046",
    "segmentId": "1",
    "time": 1672158543008,
    "velocity": 126,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62321,
        45.04876
    ]
},
{
    "routeDataPointId": "2047",
    "segmentId": "1",
    "time": 1672158543018,
    "velocity": 127,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62346,
        45.04713
    ]
},
{
    "routeDataPointId": "2048",
    "segmentId": "1",
    "time": 1672158543028,
    "velocity": 128,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6235,
        45.04692
    ]
},
{
    "routeDataPointId": "2049",
    "segmentId": "1",
    "time": 1672158543038,
    "velocity": 129,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62353,
        45.04669
    ]
},
{
    "routeDataPointId": "2050",
    "segmentId": "1",
    "time": 1672158543048,
    "velocity": 130,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62357,
        45.04647
    ]
},
{
    "routeDataPointId": "2051",
    "segmentId": "1",
    "time": 1672158543058,
    "velocity": 131,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62358,
        45.04636
    ]
},
{
    "routeDataPointId": "2052",
    "segmentId": "1",
    "time": 1672158543068,
    "velocity": 132,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62362,
        45.04615
    ]
},
{
    "routeDataPointId": "2053",
    "segmentId": "1",
    "time": 1672158543078,
    "velocity": 133,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62432,
        45.04168
    ]
},
{
    "routeDataPointId": "2054",
    "segmentId": "1",
    "time": 1672158543088,
    "velocity": 134,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62433,
        45.04159
    ]
},
{
    "routeDataPointId": "2055",
    "segmentId": "1",
    "time": 1672158543098,
    "velocity": 135,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62439,
        45.04125
    ]
},
{
    "routeDataPointId": "2056",
    "segmentId": "1",
    "time": 1672158543108,
    "velocity": 136,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62439,
        45.04122
    ]
},
{
    "routeDataPointId": "2057",
    "segmentId": "1",
    "time": 1672158543118,
    "velocity": 137,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62444,
        45.04093
    ]
},
{
    "routeDataPointId": "2058",
    "segmentId": "1",
    "time": 1672158543128,
    "velocity": 138,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62445,
        45.04082
    ]
},
{
    "routeDataPointId": "2059",
    "segmentId": "1",
    "time": 1672158543138,
    "velocity": 139,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62447,
        45.04072
    ]
},
{
    "routeDataPointId": "2060",
    "segmentId": "1",
    "time": 1672158543148,
    "velocity": 140,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62447,
        45.04069
    ]
},
{
    "routeDataPointId": "2061",
    "segmentId": "1",
    "time": 1672158543158,
    "velocity": 141,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62448,
        45.04061
    ]
},
{
    "routeDataPointId": "2062",
    "segmentId": "1",
    "time": 1672158543168,
    "velocity": 142,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62454,
        45.04028
    ]
},
{
    "routeDataPointId": "2063",
    "segmentId": "1",
    "time": 1672158543178,
    "velocity": 143,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62455,
        45.04016
    ]
},
{
    "routeDataPointId": "2064",
    "segmentId": "1",
    "time": 1672158543188,
    "velocity": 144,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62457,
        45.04006
    ]
},
{
    "routeDataPointId": "2065",
    "segmentId": "1",
    "time": 1672158543198,
    "velocity": 145,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62458,
        45.03996
    ]
},
{
    "routeDataPointId": "2066",
    "segmentId": "1",
    "time": 1672158543208,
    "velocity": 146,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6246,
        45.03986
    ]
},
{
    "routeDataPointId": "2067",
    "segmentId": "1",
    "time": 1672158543218,
    "velocity": 147,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.6246,
        45.03984
    ]
},
{
    "routeDataPointId": "2068",
    "segmentId": "1",
    "time": 1672158543228,
    "velocity": 148,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62465,
        45.03956
    ]
},
{
    "routeDataPointId": "2069",
    "segmentId": "1",
    "time": 1672158543238,
    "velocity": 149,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62465,
        45.03952
    ]
},
{
    "routeDataPointId": "2070",
    "segmentId": "1",
    "time": 1672158543248,
    "velocity": 150,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62476,
        45.03887
    ]
},
{
    "routeDataPointId": "2071",
    "segmentId": "1",
    "time": 1672158543258,
    "velocity": 151,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62477,
        45.03876
    ]
},
{
    "routeDataPointId": "2072",
    "segmentId": "1",
    "time": 1672158543268,
    "velocity": 152,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62479,
        45.03866
    ]
},
{
    "routeDataPointId": "2073",
    "segmentId": "1",
    "time": 1672158543278,
    "velocity": 153,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6248,
        45.03855
    ]
},
{
    "routeDataPointId": "2074",
    "segmentId": "1",
    "time": 1672158543288,
    "velocity": 154,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62485,
        45.03827
    ]
},
{
    "routeDataPointId": "2075",
    "segmentId": "1",
    "time": 1672158543298,
    "velocity": 155,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62485,
        45.03823
    ]
},
{
    "routeDataPointId": "2076",
    "segmentId": "1",
    "time": 1672158543308,
    "velocity": 156,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62489,
        45.03802
    ]
},
{
    "routeDataPointId": "2077",
    "segmentId": "1",
    "time": 1672158543318,
    "velocity": 157,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6249,
        45.03791
    ]
},
{
    "routeDataPointId": "2078",
    "segmentId": "1",
    "time": 1672158543328,
    "velocity": 158,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62494,
        45.0377
    ]
},
{
    "routeDataPointId": "2079",
    "segmentId": "1",
    "time": 1672158543338,
    "velocity": 159,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62495,
        45.03759
    ]
},
{
    "routeDataPointId": "2080",
    "segmentId": "1",
    "time": 1672158543348,
    "velocity": 0,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62499,
        45.03738
    ]
},
{
    "routeDataPointId": "2081",
    "segmentId": "1",
    "time": 1672158543358,
    "velocity": 1,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.625,
        45.03727
    ]
},
{
    "routeDataPointId": "2082",
    "segmentId": "1",
    "time": 1672158543368,
    "velocity": 2,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62504,
        45.03706
    ]
},
{
    "routeDataPointId": "2083",
    "segmentId": "1",
    "time": 1672158543378,
    "velocity": 3,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62505,
        45.03695
    ]
},
{
    "routeDataPointId": "2084",
    "segmentId": "1",
    "time": 1672158543388,
    "velocity": 4,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62507,
        45.03685
    ]
},
{
    "routeDataPointId": "2085",
    "segmentId": "1",
    "time": 1672158543398,
    "velocity": 5,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62508,
        45.03674
    ]
},
{
    "routeDataPointId": "2086",
    "segmentId": "1",
    "time": 1672158543408,
    "velocity": 6,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62514,
        45.03642
    ]
},
{
    "routeDataPointId": "2087",
    "segmentId": "1",
    "time": 1672158543418,
    "velocity": 7,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62514,
        45.0364
    ]
},
{
    "routeDataPointId": "2088",
    "segmentId": "1",
    "time": 1672158543428,
    "velocity": 8,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62517,
        45.0362
    ]
},
{
    "routeDataPointId": "2089",
    "segmentId": "1",
    "time": 1672158543438,
    "velocity": 9,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "foo bar",
    "coordinates": [
        -75.62519,
        45.0361
    ]
},
{
    "routeDataPointId": "2090",
    "segmentId": "1",
    "time": 1672158543448,
    "velocity": 10,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6252,
        45.03599
    ]
},
{
    "routeDataPointId": "2091",
    "segmentId": "1",
    "time": 1672158543458,
    "velocity": 11,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62524,
        45.03578
    ]
},
{
    "routeDataPointId": "2092",
    "segmentId": "1",
    "time": 1672158543468,
    "velocity": 12,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62525,
        45.03567
    ]
},
{
    "routeDataPointId": "2093",
    "segmentId": "1",
    "time": 1672158543478,
    "velocity": 13,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62529,
        45.03546
    ]
},
{
    "routeDataPointId": "2094",
    "segmentId": "1",
    "time": 1672158543488,
    "velocity": 14,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6253,
        45.03536
    ]
},
{
    "routeDataPointId": "2095",
    "segmentId": "1",
    "time": 1672158543498,
    "velocity": 15,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62534,
        45.03514
    ]
},
{
    "routeDataPointId": "2096",
    "segmentId": "1",
    "time": 1672158543508,
    "velocity": 16,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62534,
        45.0351
    ]
},
{
    "routeDataPointId": "2097",
    "segmentId": "1",
    "time": 1672158543518,
    "velocity": 17,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62537,
        45.03493
    ]
},
{
    "routeDataPointId": "2098",
    "segmentId": "1",
    "time": 1672158543528,
    "velocity": 18,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62538,
        45.03485
    ]
},
{
    "routeDataPointId": "2099",
    "segmentId": "1",
    "time": 1672158543538,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62541,
        45.03471
    ]
},
{
    "routeDataPointId": "2100",
    "segmentId": "1",
    "time": 1672158543548,
    "velocity": 20,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62542,
        45.0346
    ]
},
{
    "routeDataPointId": "2101",
    "segmentId": "1",
    "time": 1672158543558,
    "velocity": 21,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62544,
        45.0345
    ]
},
{
    "routeDataPointId": "2102",
    "segmentId": "1",
    "time": 1672158543568,
    "velocity": 22,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62545,
        45.03439
    ]
},
{
    "routeDataPointId": "2103",
    "segmentId": "1",
    "time": 1672158543578,
    "velocity": 23,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62547,
        45.03429
    ]
},
{
    "routeDataPointId": "2104",
    "segmentId": "1",
    "time": 1672158543588,
    "velocity": 24,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62548,
        45.03418
    ]
},
{
    "routeDataPointId": "2105",
    "segmentId": "1",
    "time": 1672158543598,
    "velocity": 25,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62555,
        45.03379
    ]
},
{
    "routeDataPointId": "2106",
    "segmentId": "1",
    "time": 1672158543608,
    "velocity": 26,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62555,
        45.03375
    ]
},
{
    "routeDataPointId": "2107",
    "segmentId": "1",
    "time": 1672158543618,
    "velocity": 27,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62559,
        45.03353
    ]
},
{
    "routeDataPointId": "2108",
    "segmentId": "1",
    "time": 1672158543628,
    "velocity": 28,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6256,
        45.03342
    ]
},
{
    "routeDataPointId": "2109",
    "segmentId": "1",
    "time": 1672158543638,
    "velocity": 29,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62562,
        45.03332
    ]
},
{
    "routeDataPointId": "2110",
    "segmentId": "1",
    "time": 1672158543648,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62565,
        45.0331
    ]
},
{
    "routeDataPointId": "2111",
    "segmentId": "1",
    "time": 1672158543658,
    "velocity": 31,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62569,
        45.03289
    ]
},
{
    "routeDataPointId": "2112",
    "segmentId": "1",
    "time": 1672158543668,
    "velocity": 32,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6257,
        45.0328
    ]
},
{
    "routeDataPointId": "2113",
    "segmentId": "1",
    "time": 1672158543678,
    "velocity": 33,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62572,
        45.03268
    ]
},
{
    "routeDataPointId": "2114",
    "segmentId": "1",
    "time": 1672158543688,
    "velocity": 34,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62573,
        45.03258
    ]
},
{
    "routeDataPointId": "2115",
    "segmentId": "1",
    "time": 1672158543698,
    "velocity": 35,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62575,
        45.03245
    ]
},
{
    "routeDataPointId": "2116",
    "segmentId": "1",
    "time": 1672158543708,
    "velocity": 36,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62577,
        45.03236
    ]
},
{
    "routeDataPointId": "2117",
    "segmentId": "1",
    "time": 1672158543718,
    "velocity": 37,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62578,
        45.03226
    ]
},
{
    "routeDataPointId": "2118",
    "segmentId": "1",
    "time": 1672158543728,
    "velocity": 38,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62582,
        45.03204
    ]
},
{
    "routeDataPointId": "2119",
    "segmentId": "1",
    "time": 1672158543738,
    "velocity": 39,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62584,
        45.03186
    ]
},
{
    "routeDataPointId": "2120",
    "segmentId": "1",
    "time": 1672158543748,
    "velocity": 40,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62585,
        45.03183
    ]
},
{
    "routeDataPointId": "2121",
    "segmentId": "1",
    "time": 1672158543758,
    "velocity": 41,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62587,
        45.03172
    ]
},
{
    "routeDataPointId": "2122",
    "segmentId": "1",
    "time": 1672158543768,
    "velocity": 42,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62588,
        45.03162
    ]
},
{
    "routeDataPointId": "2123",
    "segmentId": "1",
    "time": 1672158543778,
    "velocity": 43,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62592,
        45.0314
    ]
},
{
    "routeDataPointId": "2124",
    "segmentId": "1",
    "time": 1672158543788,
    "velocity": 44,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62593,
        45.03129
    ]
},
{
    "routeDataPointId": "2125",
    "segmentId": "1",
    "time": 1672158543798,
    "velocity": 45,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62637,
        45.02851
    ]
},
{
    "routeDataPointId": "2126",
    "segmentId": "1",
    "time": 1672158543808,
    "velocity": 46,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62638,
        45.0284
    ]
},
{
    "routeDataPointId": "2127",
    "segmentId": "1",
    "time": 1672158543818,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62655,
        45.02733
    ]
},
{
    "routeDataPointId": "2128",
    "segmentId": "1",
    "time": 1672158543828,
    "velocity": 48,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62659,
        45.02712
    ]
},
{
    "routeDataPointId": "2129",
    "segmentId": "1",
    "time": 1672158543838,
    "velocity": 49,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62682,
        45.02561
    ]
},
{
    "routeDataPointId": "2130",
    "segmentId": "1",
    "time": 1672158543848,
    "velocity": 50,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62688,
        45.02528
    ]
},
{
    "routeDataPointId": "2131",
    "segmentId": "1",
    "time": 1672158543858,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62691,
        45.02504
    ]
},
{
    "routeDataPointId": "2132",
    "segmentId": "1",
    "time": 1672158543868,
    "velocity": 52,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62712,
        45.02372
    ]
},
{
    "routeDataPointId": "2133",
    "segmentId": "1",
    "time": 1672158543878,
    "velocity": 53,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62713,
        45.02361
    ]
},
{
    "routeDataPointId": "2134",
    "segmentId": "1",
    "time": 1672158543888,
    "velocity": 54,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62715,
        45.02353
    ]
},
{
    "routeDataPointId": "2135",
    "segmentId": "1",
    "time": 1672158543898,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62718,
        45.02329
    ]
},
{
    "routeDataPointId": "2136",
    "segmentId": "1",
    "time": 1672158543908,
    "velocity": 56,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62721,
        45.02313
    ]
},
{
    "routeDataPointId": "2137",
    "segmentId": "1",
    "time": 1672158543918,
    "velocity": 57,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62737,
        45.0221
    ]
},
{
    "routeDataPointId": "2138",
    "segmentId": "1",
    "time": 1672158543928,
    "velocity": 58,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62739,
        45.022
    ]
},
{
    "routeDataPointId": "2139",
    "segmentId": "1",
    "time": 1672158543938,
    "velocity": 59,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62741,
        45.02179
    ]
},
{
    "routeDataPointId": "2140",
    "segmentId": "1",
    "time": 1672158543948,
    "velocity": 60,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62745,
        45.02157
    ]
},
{
    "routeDataPointId": "2141",
    "segmentId": "1",
    "time": 1672158543958,
    "velocity": 61,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62746,
        45.02148
    ]
},
{
    "routeDataPointId": "2142",
    "segmentId": "1",
    "time": 1672158543968,
    "velocity": 62,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62752,
        45.02116
    ]
},
{
    "routeDataPointId": "2143",
    "segmentId": "1",
    "time": 1672158543978,
    "velocity": 63,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62755,
        45.02094
    ]
},
{
    "routeDataPointId": "2144",
    "segmentId": "1",
    "time": 1672158543988,
    "velocity": 64,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62756,
        45.02089
    ]
},
{
    "routeDataPointId": "2145",
    "segmentId": "1",
    "time": 1672158543998,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62756,
        45.02088
    ]
},
{
    "routeDataPointId": "2146",
    "segmentId": "1",
    "time": 1672158544008,
    "velocity": 66,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62758,
        45.02071
    ]
},
{
    "routeDataPointId": "2147",
    "segmentId": "1",
    "time": 1672158544018,
    "velocity": 67,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62762,
        45.02051
    ]
},
{
    "routeDataPointId": "2148",
    "segmentId": "1",
    "time": 1672158544028,
    "velocity": 68,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62763,
        45.0204
    ]
},
{
    "routeDataPointId": "2149",
    "segmentId": "1",
    "time": 1672158544038,
    "velocity": 69,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62767,
        45.02019
    ]
},
{
    "routeDataPointId": "2150",
    "segmentId": "1",
    "time": 1672158544048,
    "velocity": 70,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62768,
        45.02008
    ]
},
{
    "routeDataPointId": "2151",
    "segmentId": "1",
    "time": 1672158544058,
    "velocity": 71,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62772,
        45.01986
    ]
},
{
    "routeDataPointId": "2152",
    "segmentId": "1",
    "time": 1672158544068,
    "velocity": 72,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62773,
        45.01976
    ]
},
{
    "routeDataPointId": "2153",
    "segmentId": "1",
    "time": 1672158544078,
    "velocity": 73,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62777,
        45.01954
    ]
},
{
    "routeDataPointId": "2154",
    "segmentId": "1",
    "time": 1672158544088,
    "velocity": 74,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62778,
        45.01943
    ]
},
{
    "routeDataPointId": "2155",
    "segmentId": "1",
    "time": 1672158544098,
    "velocity": 75,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62784,
        45.0191
    ]
},
{
    "routeDataPointId": "2156",
    "segmentId": "1",
    "time": 1672158544108,
    "velocity": 76,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62785,
        45.01901
    ]
},
{
    "routeDataPointId": "2157",
    "segmentId": "1",
    "time": 1672158544118,
    "velocity": 77,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62787,
        45.01891
    ]
},
{
    "routeDataPointId": "2158",
    "segmentId": "1",
    "time": 1672158544128,
    "velocity": 78,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62788,
        45.0188
    ]
},
{
    "routeDataPointId": "2159",
    "segmentId": "1",
    "time": 1672158544138,
    "velocity": 79,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62792,
        45.01859
    ]
},
{
    "routeDataPointId": "2160",
    "segmentId": "1",
    "time": 1672158544148,
    "velocity": 80,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62793,
        45.01849
    ]
},
{
    "routeDataPointId": "2161",
    "segmentId": "1",
    "time": 1672158544158,
    "velocity": 81,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62797,
        45.01827
    ]
},
{
    "routeDataPointId": "2162",
    "segmentId": "1",
    "time": 1672158544168,
    "velocity": 82,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62798,
        45.01817
    ]
},
{
    "routeDataPointId": "2163",
    "segmentId": "1",
    "time": 1672158544178,
    "velocity": 83,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.628,
        45.01806
    ]
},
{
    "routeDataPointId": "2164",
    "segmentId": "1",
    "time": 1672158544188,
    "velocity": 84,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62801,
        45.01797
    ]
},
{
    "routeDataPointId": "2165",
    "segmentId": "1",
    "time": 1672158544198,
    "velocity": 85,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62803,
        45.01785
    ]
},
{
    "routeDataPointId": "2166",
    "segmentId": "1",
    "time": 1672158544208,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62803,
        45.01784
    ]
},
{
    "routeDataPointId": "2167",
    "segmentId": "1",
    "time": 1672158544218,
    "velocity": 87,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62805,
        45.01777
    ]
},
{
    "routeDataPointId": "2168",
    "segmentId": "1",
    "time": 1672158544228,
    "velocity": 88,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62806,
        45.01765
    ]
},
{
    "routeDataPointId": "2169",
    "segmentId": "1",
    "time": 1672158544238,
    "velocity": 89,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62808,
        45.01754
    ]
},
{
    "routeDataPointId": "2170",
    "segmentId": "1",
    "time": 1672158544248,
    "velocity": 90,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62809,
        45.01751
    ]
},
{
    "routeDataPointId": "2171",
    "segmentId": "1",
    "time": 1672158544258,
    "velocity": 91,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6281,
        45.01743
    ]
},
{
    "routeDataPointId": "2172",
    "segmentId": "1",
    "time": 1672158544268,
    "velocity": 92,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62812,
        45.01732
    ]
},
{
    "routeDataPointId": "2173",
    "segmentId": "1",
    "time": 1672158544278,
    "velocity": 93,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62815,
        45.01702
    ]
},
{
    "routeDataPointId": "2174",
    "segmentId": "1",
    "time": 1672158544288,
    "velocity": 94,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62817,
        45.01688
    ]
},
{
    "routeDataPointId": "2175",
    "segmentId": "1",
    "time": 1672158544298,
    "velocity": 95,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62817,
        45.01686
    ]
},
{
    "routeDataPointId": "2176",
    "segmentId": "1",
    "time": 1672158544308,
    "velocity": 96,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62819,
        45.01671
    ]
},
{
    "routeDataPointId": "2177",
    "segmentId": "1",
    "time": 1672158544318,
    "velocity": 97,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62821,
        45.01638
    ]
},
{
    "routeDataPointId": "2178",
    "segmentId": "1",
    "time": 1672158544328,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62821,
        45.01625
    ]
},
{
    "routeDataPointId": "2179",
    "segmentId": "1",
    "time": 1672158544338,
    "velocity": 99,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62822,
        45.01612
    ]
},
{
    "routeDataPointId": "2180",
    "segmentId": "1",
    "time": 1672158544348,
    "velocity": 100,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62822,
        45.01573
    ]
},
{
    "routeDataPointId": "2181",
    "segmentId": "1",
    "time": 1672158544358,
    "velocity": 101,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62821,
        45.0156
    ]
},
{
    "routeDataPointId": "2182",
    "segmentId": "1",
    "time": 1672158544368,
    "velocity": 102,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62821,
        45.01548
    ]
},
{
    "routeDataPointId": "2183",
    "segmentId": "1",
    "time": 1672158544378,
    "velocity": 103,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62819,
        45.01525
    ]
},
{
    "routeDataPointId": "2184",
    "segmentId": "1",
    "time": 1672158544388,
    "velocity": 104,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62819,
        45.01518
    ]
},
{
    "routeDataPointId": "2185",
    "segmentId": "1",
    "time": 1672158544398,
    "velocity": 105,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62816,
        45.01495
    ]
},
{
    "routeDataPointId": "2186",
    "segmentId": "1",
    "time": 1672158544408,
    "velocity": 106,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62814,
        45.01473
    ]
},
{
    "routeDataPointId": "2187",
    "segmentId": "1",
    "time": 1672158544418,
    "velocity": 107,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6281,
        45.0145
    ]
},
{
    "routeDataPointId": "2188",
    "segmentId": "1",
    "time": 1672158544428,
    "velocity": 108,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62808,
        45.01434
    ]
},
{
    "routeDataPointId": "2189",
    "segmentId": "1",
    "time": 1672158544438,
    "velocity": 109,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62804,
        45.01418
    ]
},
{
    "routeDataPointId": "2190",
    "segmentId": "1",
    "time": 1672158544448,
    "velocity": 110,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62803,
        45.01409
    ]
},
{
    "routeDataPointId": "2191",
    "segmentId": "1",
    "time": 1672158544458,
    "velocity": 111,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62798,
        45.01387
    ]
},
{
    "routeDataPointId": "2192",
    "segmentId": "1",
    "time": 1672158544468,
    "velocity": 112,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62795,
        45.01377
    ]
},
{
    "routeDataPointId": "2193",
    "segmentId": "1",
    "time": 1672158544478,
    "velocity": 113,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62795,
        45.01375
    ]
},
{
    "routeDataPointId": "2194",
    "segmentId": "1",
    "time": 1672158544488,
    "velocity": 114,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62792,
        45.01365
    ]
},
{
    "routeDataPointId": "2195",
    "segmentId": "1",
    "time": 1672158544498,
    "velocity": 115,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62787,
        45.01345
    ]
},
{
    "routeDataPointId": "2196",
    "segmentId": "1",
    "time": 1672158544508,
    "velocity": 116,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62785,
        45.0134
    ]
},
{
    "routeDataPointId": "2197",
    "segmentId": "1",
    "time": 1672158544518,
    "velocity": 117,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62785,
        45.01338
    ]
},
{
    "routeDataPointId": "2198",
    "segmentId": "1",
    "time": 1672158544528,
    "velocity": 118,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62783,
        45.01333
    ]
},
{
    "routeDataPointId": "2199",
    "segmentId": "1",
    "time": 1672158544538,
    "velocity": 119,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6278,
        45.01323
    ]
},
{
    "routeDataPointId": "2200",
    "segmentId": "1",
    "time": 1672158544548,
    "velocity": 120,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62778,
        45.01314
    ]
},
{
    "routeDataPointId": "2201",
    "segmentId": "1",
    "time": 1672158544558,
    "velocity": 121,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62774,
        45.01302
    ]
},
{
    "routeDataPointId": "2202",
    "segmentId": "1",
    "time": 1672158544568,
    "velocity": 122,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62755,
        45.01251
    ]
},
{
    "routeDataPointId": "2203",
    "segmentId": "1",
    "time": 1672158544578,
    "velocity": 123,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6275,
        45.0124
    ]
},
{
    "routeDataPointId": "2204",
    "segmentId": "1",
    "time": 1672158544588,
    "velocity": 124,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62742,
        45.0122
    ]
},
{
    "routeDataPointId": "2205",
    "segmentId": "1",
    "time": 1672158544598,
    "velocity": 125,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62738,
        45.01212
    ]
},
{
    "routeDataPointId": "2206",
    "segmentId": "1",
    "time": 1672158544608,
    "velocity": 126,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62737,
        45.01209
    ]
},
{
    "routeDataPointId": "2207",
    "segmentId": "1",
    "time": 1672158544618,
    "velocity": 127,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62727,
        45.01189
    ]
},
{
    "routeDataPointId": "2208",
    "segmentId": "1",
    "time": 1672158544628,
    "velocity": 128,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62725,
        45.01182
    ]
},
{
    "routeDataPointId": "2209",
    "segmentId": "1",
    "time": 1672158544638,
    "velocity": 129,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62723,
        45.01179
    ]
},
{
    "routeDataPointId": "2210",
    "segmentId": "1",
    "time": 1672158544648,
    "velocity": 130,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62717,
        45.01168
    ]
},
{
    "routeDataPointId": "2211",
    "segmentId": "1",
    "time": 1672158544658,
    "velocity": 131,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62702,
        45.01138
    ]
},
{
    "routeDataPointId": "2212",
    "segmentId": "1",
    "time": 1672158544668,
    "velocity": 132,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62696,
        45.01128
    ]
},
{
    "routeDataPointId": "2213",
    "segmentId": "1",
    "time": 1672158544678,
    "velocity": 133,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62691,
        45.01118
    ]
},
{
    "routeDataPointId": "2214",
    "segmentId": "1",
    "time": 1672158544688,
    "velocity": 134,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62685,
        45.01108
    ]
},
{
    "routeDataPointId": "2215",
    "segmentId": "1",
    "time": 1672158544698,
    "velocity": 135,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62679,
        45.01099
    ]
},
{
    "routeDataPointId": "2216",
    "segmentId": "1",
    "time": 1672158544708,
    "velocity": 136,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62661,
        45.01069
    ]
},
{
    "routeDataPointId": "2217",
    "segmentId": "1",
    "time": 1672158544718,
    "velocity": 137,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62654,
        45.01059
    ]
},
{
    "routeDataPointId": "2218",
    "segmentId": "1",
    "time": 1672158544728,
    "velocity": 138,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62648,
        45.01049
    ]
},
{
    "routeDataPointId": "2219",
    "segmentId": "1",
    "time": 1672158544738,
    "velocity": 139,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62641,
        45.0104
    ]
},
{
    "routeDataPointId": "2220",
    "segmentId": "1",
    "time": 1672158544748,
    "velocity": 140,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62621,
        45.01011
    ]
},
{
    "routeDataPointId": "2221",
    "segmentId": "1",
    "time": 1672158544758,
    "velocity": 141,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62598,
        45.00982
    ]
},
{
    "routeDataPointId": "2222",
    "segmentId": "1",
    "time": 1672158544768,
    "velocity": 142,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62591,
        45.00972
    ]
},
{
    "routeDataPointId": "2223",
    "segmentId": "1",
    "time": 1672158544778,
    "velocity": 143,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62568,
        45.00944
    ]
},
{
    "routeDataPointId": "2224",
    "segmentId": "1",
    "time": 1672158544788,
    "velocity": 144,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62543,
        45.00916
    ]
},
{
    "routeDataPointId": "2225",
    "segmentId": "1",
    "time": 1672158544798,
    "velocity": 145,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62535,
        45.00908
    ]
},
{
    "routeDataPointId": "2226",
    "segmentId": "1",
    "time": 1672158544808,
    "velocity": 146,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62527,
        45.00898
    ]
},
{
    "routeDataPointId": "2227",
    "segmentId": "1",
    "time": 1672158544818,
    "velocity": 147,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6251,
        45.00881
    ]
},
{
    "routeDataPointId": "2228",
    "segmentId": "1",
    "time": 1672158544828,
    "velocity": 148,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62501,
        45.00871
    ]
},
{
    "routeDataPointId": "2229",
    "segmentId": "1",
    "time": 1672158544838,
    "velocity": 149,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62476,
        45.00846
    ]
},
{
    "routeDataPointId": "2230",
    "segmentId": "1",
    "time": 1672158544848,
    "velocity": 150,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62467,
        45.00838
    ]
},
{
    "routeDataPointId": "2231",
    "segmentId": "1",
    "time": 1672158544858,
    "velocity": 151,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62458,
        45.00829
    ]
},
{
    "routeDataPointId": "2232",
    "segmentId": "1",
    "time": 1672158544868,
    "velocity": 152,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62429,
        45.00803
    ]
},
{
    "routeDataPointId": "2233",
    "segmentId": "1",
    "time": 1672158544878,
    "velocity": 153,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62421,
        45.00795
    ]
},
{
    "routeDataPointId": "2234",
    "segmentId": "1",
    "time": 1672158544888,
    "velocity": 154,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.6241,
        45.00786
    ]
},
{
    "routeDataPointId": "2235",
    "segmentId": "1",
    "time": 1672158544898,
    "velocity": 155,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62401,
        45.00777
    ]
},
{
    "routeDataPointId": "2236",
    "segmentId": "1",
    "time": 1672158544908,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62392,
        45.0077
    ]
},
{
    "routeDataPointId": "2237",
    "segmentId": "1",
    "time": 1672158544918,
    "velocity": 157,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62382,
        45.00761
    ]
},
{
    "routeDataPointId": "2238",
    "segmentId": "1",
    "time": 1672158544928,
    "velocity": 158,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62374,
        45.00753
    ]
},
{
    "routeDataPointId": "2239",
    "segmentId": "1",
    "time": 1672158544938,
    "velocity": 159,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62364,
        45.00744
    ]
},
{
    "routeDataPointId": "2240",
    "segmentId": "1",
    "time": 1672158544948,
    "velocity": 0,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62359,
        45.0074
    ]
},
{
    "routeDataPointId": "2241",
    "segmentId": "1",
    "time": 1672158544958,
    "velocity": 1,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62345,
        45.00727
    ]
},
{
    "routeDataPointId": "2242",
    "segmentId": "1",
    "time": 1672158544968,
    "velocity": 2,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62335,
        45.00719
    ]
},
{
    "routeDataPointId": "2243",
    "segmentId": "1",
    "time": 1672158544978,
    "velocity": 3,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62307,
        45.00694
    ]
},
{
    "routeDataPointId": "2244",
    "segmentId": "1",
    "time": 1672158544988,
    "velocity": 4,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62299,
        45.00686
    ]
},
{
    "routeDataPointId": "2245",
    "segmentId": "1",
    "time": 1672158544998,
    "velocity": 5,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62297,
        45.00685
    ]
},
{
    "routeDataPointId": "2246",
    "segmentId": "1",
    "time": 1672158545008,
    "velocity": 6,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62288,
        45.00676
    ]
},
{
    "routeDataPointId": "2247",
    "segmentId": "1",
    "time": 1672158545018,
    "velocity": 7,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62232,
        45.00626
    ]
},
{
    "routeDataPointId": "2248",
    "segmentId": "1",
    "time": 1672158545028,
    "velocity": 8,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62224,
        45.00618
    ]
},
{
    "routeDataPointId": "2249",
    "segmentId": "1",
    "time": 1672158545038,
    "velocity": 9,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62214,
        45.0061
    ]
},
{
    "routeDataPointId": "2250",
    "segmentId": "1",
    "time": 1672158545048,
    "velocity": 10,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62205,
        45.00601
    ]
},
{
    "routeDataPointId": "2251",
    "segmentId": "1",
    "time": 1672158545058,
    "velocity": 11,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62197,
        45.00595
    ]
},
{
    "routeDataPointId": "2252",
    "segmentId": "1",
    "time": 1672158545068,
    "velocity": 12,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62195,
        45.00592
    ]
},
{
    "routeDataPointId": "2253",
    "segmentId": "1",
    "time": 1672158545078,
    "velocity": 13,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62185,
        45.00584
    ]
},
{
    "routeDataPointId": "2254",
    "segmentId": "1",
    "time": 1672158545088,
    "velocity": 14,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.62182,
        45.00581
    ]
},
{
    "routeDataPointId": "2255",
    "segmentId": "1",
    "time": 1672158545098,
    "velocity": 15,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62175,
        45.00575
    ]
},
{
    "routeDataPointId": "2256",
    "segmentId": "1",
    "time": 1672158545108,
    "velocity": 16,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.62167,
        45.00567
    ]
},
{
    "routeDataPointId": "2257",
    "segmentId": "1",
    "time": 1672158545118,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.62119,
        45.00524
    ]
},
{
    "routeDataPointId": "2258",
    "segmentId": "1",
    "time": 1672158545128,
    "velocity": 18,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6211,
        45.00517
    ]
},
{
    "routeDataPointId": "2259",
    "segmentId": "1",
    "time": 1672158545138,
    "velocity": 19,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.62102,
        45.00509
    ]
},
{
    "routeDataPointId": "2260",
    "segmentId": "1",
    "time": 1672158545148,
    "velocity": 20,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.6204,
        45.00454
    ]
},
{
    "routeDataPointId": "2261",
    "segmentId": "1",
    "time": 1672158545158,
    "velocity": 21,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.62027,
        45.00441
    ]
},
{
    "routeDataPointId": "2262",
    "segmentId": "1",
    "time": 1672158545168,
    "velocity": 22,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.62024,
        45.00439
    ]
},
{
    "routeDataPointId": "2263",
    "segmentId": "1",
    "time": 1672158545178,
    "velocity": 23,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.62018,
        45.00433
    ]
},
{
    "routeDataPointId": "2264",
    "segmentId": "1",
    "time": 1672158545188,
    "velocity": 24,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.62007,
        45.00424
    ]
},
{
    "routeDataPointId": "2265",
    "segmentId": "1",
    "time": 1672158545198,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6198,
        45.004
    ]
},
{
    "routeDataPointId": "2266",
    "segmentId": "1",
    "time": 1672158545208,
    "velocity": 26,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6197,
        45.0039
    ]
},
{
    "routeDataPointId": "2267",
    "segmentId": "1",
    "time": 1672158545218,
    "velocity": 27,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61951,
        45.00374
    ]
},
{
    "routeDataPointId": "2268",
    "segmentId": "1",
    "time": 1672158545228,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.61943,
        45.00366
    ]
},
{
    "routeDataPointId": "2269",
    "segmentId": "1",
    "time": 1672158545238,
    "velocity": 29,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61932,
        45.00357
    ]
},
{
    "routeDataPointId": "2270",
    "segmentId": "1",
    "time": 1672158545248,
    "velocity": 30,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61877,
        45.00308
    ]
},
{
    "routeDataPointId": "2271",
    "segmentId": "1",
    "time": 1672158545258,
    "velocity": 31,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61867,
        45.00298
    ]
},
{
    "routeDataPointId": "2272",
    "segmentId": "1",
    "time": 1672158545268,
    "velocity": 32,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6183,
        45.00265
    ]
},
{
    "routeDataPointId": "2273",
    "segmentId": "1",
    "time": 1672158545278,
    "velocity": 33,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6182,
        45.00257
    ]
},
{
    "routeDataPointId": "2274",
    "segmentId": "1",
    "time": 1672158545288,
    "velocity": 34,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6181,
        45.00248
    ]
},
{
    "routeDataPointId": "2275",
    "segmentId": "1",
    "time": 1672158545298,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61802,
        45.0024
    ]
},
{
    "routeDataPointId": "2276",
    "segmentId": "1",
    "time": 1672158545308,
    "velocity": 36,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61791,
        45.0023
    ]
},
{
    "routeDataPointId": "2277",
    "segmentId": "1",
    "time": 1672158545318,
    "velocity": 37,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61788,
        45.00228
    ]
},
{
    "routeDataPointId": "2278",
    "segmentId": "1",
    "time": 1672158545328,
    "velocity": 38,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61782,
        45.00222
    ]
},
{
    "routeDataPointId": "2279",
    "segmentId": "1",
    "time": 1672158545338,
    "velocity": 39,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.61772,
        45.00213
    ]
},
{
    "routeDataPointId": "2280",
    "segmentId": "1",
    "time": 1672158545348,
    "velocity": 40,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61765,
        45.00206
    ]
},
{
    "routeDataPointId": "2281",
    "segmentId": "1",
    "time": 1672158545358,
    "velocity": 41,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.61746,
        45.00189
    ]
},
{
    "routeDataPointId": "2282",
    "segmentId": "1",
    "time": 1672158545368,
    "velocity": 42,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61727,
        45.0017
    ]
},
{
    "routeDataPointId": "2283",
    "segmentId": "1",
    "time": 1672158545378,
    "velocity": 43,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61719,
        45.00163
    ]
},
{
    "routeDataPointId": "2284",
    "segmentId": "1",
    "time": 1672158545388,
    "velocity": 44,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6171,
        45.00154
    ]
},
{
    "routeDataPointId": "2285",
    "segmentId": "1",
    "time": 1672158545398,
    "velocity": 45,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.617,
        45.00145
    ]
},
{
    "routeDataPointId": "2286",
    "segmentId": "1",
    "time": 1672158545408,
    "velocity": 46,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.61692,
        45.00136
    ]
},
{
    "routeDataPointId": "2287",
    "segmentId": "1",
    "time": 1672158545418,
    "velocity": 47,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61684,
        45.00128
    ]
},
{
    "routeDataPointId": "2288",
    "segmentId": "1",
    "time": 1672158545428,
    "velocity": 48,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.61674,
        45.00119
    ]
},
{
    "routeDataPointId": "2289",
    "segmentId": "1",
    "time": 1672158545438,
    "velocity": 49,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61667,
        45.00112
    ]
},
{
    "routeDataPointId": "2290",
    "segmentId": "1",
    "time": 1672158545448,
    "velocity": 50,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.61658,
        45.00102
    ]
},
{
    "routeDataPointId": "2291",
    "segmentId": "1",
    "time": 1672158545458,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6165,
        45.00094
    ]
},
{
    "routeDataPointId": "2292",
    "segmentId": "1",
    "time": 1672158545468,
    "velocity": 52,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61642,
        45.00085
    ]
},
{
    "routeDataPointId": "2293",
    "segmentId": "1",
    "time": 1672158545478,
    "velocity": 53,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.61633,
        45.00076
    ]
},
{
    "routeDataPointId": "2294",
    "segmentId": "1",
    "time": 1672158545488,
    "velocity": 54,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61609,
        45.00049
    ]
},
{
    "routeDataPointId": "2295",
    "segmentId": "1",
    "time": 1672158545498,
    "velocity": 55,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61601,
        45.00041
    ]
},
{
    "routeDataPointId": "2296",
    "segmentId": "1",
    "time": 1672158545508,
    "velocity": 56,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61593,
        45.00031
    ]
},
{
    "routeDataPointId": "2297",
    "segmentId": "1",
    "time": 1672158545518,
    "velocity": 57,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61586,
        45.00024
    ]
},
{
    "routeDataPointId": "2298",
    "segmentId": "1",
    "time": 1672158545528,
    "velocity": 58,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.61584,
        45.00021
    ]
},
{
    "routeDataPointId": "2299",
    "segmentId": "1",
    "time": 1672158545538,
    "velocity": 59,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61569,
        45.00003
    ]
},
{
    "routeDataPointId": "2300",
    "segmentId": "1",
    "time": 1672158545548,
    "velocity": 60,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61561,
        44.99995
    ]
},
{
    "routeDataPointId": "2301",
    "segmentId": "1",
    "time": 1672158545558,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.61558,
        44.99991
    ]
},
{
    "routeDataPointId": "2302",
    "segmentId": "1",
    "time": 1672158545568,
    "velocity": 62,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61546,
        44.99977
    ]
},
{
    "routeDataPointId": "2303",
    "segmentId": "1",
    "time": 1672158545578,
    "velocity": 63,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61545,
        44.99975
    ]
},
{
    "routeDataPointId": "2304",
    "segmentId": "1",
    "time": 1672158545588,
    "velocity": 64,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61536,
        44.99965
    ]
},
{
    "routeDataPointId": "2305",
    "segmentId": "1",
    "time": 1672158545598,
    "velocity": 65,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61532,
        44.9996
    ]
},
{
    "routeDataPointId": "2306",
    "segmentId": "1",
    "time": 1672158545608,
    "velocity": 66,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6153,
        44.99957
    ]
},
{
    "routeDataPointId": "2307",
    "segmentId": "1",
    "time": 1672158545618,
    "velocity": 67,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61515,
        44.99938
    ]
},
{
    "routeDataPointId": "2308",
    "segmentId": "1",
    "time": 1672158545628,
    "velocity": 68,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61507,
        44.99929
    ]
},
{
    "routeDataPointId": "2309",
    "segmentId": "1",
    "time": 1672158545638,
    "velocity": 69,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61479,
        44.99892
    ]
},
{
    "routeDataPointId": "2310",
    "segmentId": "1",
    "time": 1672158545648,
    "velocity": 70,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61472,
        44.99882
    ]
},
{
    "routeDataPointId": "2311",
    "segmentId": "1",
    "time": 1672158545658,
    "velocity": 71,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61465,
        44.99873
    ]
},
{
    "routeDataPointId": "2312",
    "segmentId": "1",
    "time": 1672158545668,
    "velocity": 72,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61451,
        44.99853
    ]
},
{
    "routeDataPointId": "2313",
    "segmentId": "1",
    "time": 1672158545678,
    "velocity": 73,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61444,
        44.99844
    ]
},
{
    "routeDataPointId": "2314",
    "segmentId": "1",
    "time": 1672158545688,
    "velocity": 74,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61437,
        44.99833
    ]
},
{
    "routeDataPointId": "2315",
    "segmentId": "1",
    "time": 1672158545698,
    "velocity": 75,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61425,
        44.99817
    ]
},
{
    "routeDataPointId": "2316",
    "segmentId": "1",
    "time": 1672158545708,
    "velocity": 76,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61424,
        44.99816
    ]
},
{
    "routeDataPointId": "2317",
    "segmentId": "1",
    "time": 1672158545718,
    "velocity": 77,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61411,
        44.99795
    ]
},
{
    "routeDataPointId": "2318",
    "segmentId": "1",
    "time": 1672158545728,
    "velocity": 78,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61404,
        44.99785
    ]
},
{
    "routeDataPointId": "2319",
    "segmentId": "1",
    "time": 1672158545738,
    "velocity": 79,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.61403,
        44.99784
    ]
},
{
    "routeDataPointId": "2320",
    "segmentId": "1",
    "time": 1672158545748,
    "velocity": 80,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61382,
        44.99751
    ]
},
{
    "routeDataPointId": "2321",
    "segmentId": "1",
    "time": 1672158545758,
    "velocity": 81,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61379,
        44.99745
    ]
},
{
    "routeDataPointId": "2322",
    "segmentId": "1",
    "time": 1672158545768,
    "velocity": 82,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61372,
        44.99736
    ]
},
{
    "routeDataPointId": "2323",
    "segmentId": "1",
    "time": 1672158545778,
    "velocity": 83,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.61362,
        44.99717
    ]
},
{
    "routeDataPointId": "2324",
    "segmentId": "1",
    "time": 1672158545788,
    "velocity": 84,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61356,
        44.99708
    ]
},
{
    "routeDataPointId": "2325",
    "segmentId": "1",
    "time": 1672158545798,
    "velocity": 85,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61344,
        44.99687
    ]
},
{
    "routeDataPointId": "2326",
    "segmentId": "1",
    "time": 1672158545808,
    "velocity": 86,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61338,
        44.99678
    ]
},
{
    "routeDataPointId": "2327",
    "segmentId": "1",
    "time": 1672158545818,
    "velocity": 87,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61333,
        44.99668
    ]
},
{
    "routeDataPointId": "2328",
    "segmentId": "1",
    "time": 1672158545828,
    "velocity": 88,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61327,
        44.99658
    ]
},
{
    "routeDataPointId": "2329",
    "segmentId": "1",
    "time": 1672158545838,
    "velocity": 89,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.61324,
        44.99652
    ]
},
{
    "routeDataPointId": "2330",
    "segmentId": "1",
    "time": 1672158545848,
    "velocity": 90,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.61323,
        44.99651
    ]
},
{
    "routeDataPointId": "2331",
    "segmentId": "1",
    "time": 1672158545858,
    "velocity": 91,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61304,
        44.99616
    ]
},
{
    "routeDataPointId": "2332",
    "segmentId": "1",
    "time": 1672158545868,
    "velocity": 92,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.6127,
        44.99547
    ]
},
{
    "routeDataPointId": "2333",
    "segmentId": "1",
    "time": 1672158545878,
    "velocity": 93,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61266,
        44.99537
    ]
},
{
    "routeDataPointId": "2334",
    "segmentId": "1",
    "time": 1672158545888,
    "velocity": 94,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61256,
        44.99516
    ]
},
{
    "routeDataPointId": "2335",
    "segmentId": "1",
    "time": 1672158545898,
    "velocity": 95,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61252,
        44.99506
    ]
},
{
    "routeDataPointId": "2336",
    "segmentId": "1",
    "time": 1672158545908,
    "velocity": 96,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.61247,
        44.99496
    ]
},
{
    "routeDataPointId": "2337",
    "segmentId": "1",
    "time": 1672158545918,
    "velocity": 97,
    "noise": 61,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.61243,
        44.99486
    ]
},
{
    "routeDataPointId": "2338",
    "segmentId": "1",
    "time": 1672158545928,
    "velocity": 98,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61238,
        44.99475
    ]
},
{
    "routeDataPointId": "2339",
    "segmentId": "1",
    "time": 1672158545938,
    "velocity": 99,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.61226,
        44.99444
    ]
},
{
    "routeDataPointId": "2340",
    "segmentId": "1",
    "time": 1672158545948,
    "velocity": 100,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.61221,
        44.99434
    ]
},
{
    "routeDataPointId": "2341",
    "segmentId": "1",
    "time": 1672158545958,
    "velocity": 101,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61218,
        44.99424
    ]
},
{
    "routeDataPointId": "2342",
    "segmentId": "1",
    "time": 1672158545968,
    "velocity": 102,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.61206,
        44.99393
    ]
},
{
    "routeDataPointId": "2343",
    "segmentId": "1",
    "time": 1672158545978,
    "velocity": 103,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61203,
        44.99382
    ]
},
{
    "routeDataPointId": "2344",
    "segmentId": "1",
    "time": 1672158545988,
    "velocity": 104,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61195,
        44.99361
    ]
},
{
    "routeDataPointId": "2345",
    "segmentId": "1",
    "time": 1672158545998,
    "velocity": 105,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61192,
        44.99351
    ]
},
{
    "routeDataPointId": "2346",
    "segmentId": "1",
    "time": 1672158546008,
    "velocity": 106,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.61188,
        44.9934
    ]
},
{
    "routeDataPointId": "2347",
    "segmentId": "1",
    "time": 1672158546018,
    "velocity": 107,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61182,
        44.99319
    ]
},
{
    "routeDataPointId": "2348",
    "segmentId": "1",
    "time": 1672158546028,
    "velocity": 108,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61178,
        44.99309
    ]
},
{
    "routeDataPointId": "2349",
    "segmentId": "1",
    "time": 1672158546038,
    "velocity": 109,
    "noise": 61,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6116,
        44.99246
    ]
},
{
    "routeDataPointId": "2350",
    "segmentId": "1",
    "time": 1672158546048,
    "velocity": 110,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61158,
        44.99235
    ]
},
{
    "routeDataPointId": "2351",
    "segmentId": "1",
    "time": 1672158546058,
    "velocity": 111,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61152,
        44.99214
    ]
},
{
    "routeDataPointId": "2352",
    "segmentId": "1",
    "time": 1672158546068,
    "velocity": 112,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61148,
        44.99194
    ]
},
{
    "routeDataPointId": "2353",
    "segmentId": "1",
    "time": 1672158546078,
    "velocity": 113,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61145,
        44.99184
    ]
},
{
    "routeDataPointId": "2354",
    "segmentId": "1",
    "time": 1672158546088,
    "velocity": 114,
    "noise": 60,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.61145,
        44.99183
    ]
},
{
    "routeDataPointId": "2355",
    "segmentId": "1",
    "time": 1672158546098,
    "velocity": 115,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61141,
        44.99162
    ]
},
{
    "routeDataPointId": "2356",
    "segmentId": "1",
    "time": 1672158546108,
    "velocity": 116,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.61138,
        44.99151
    ]
},
{
    "routeDataPointId": "2357",
    "segmentId": "1",
    "time": 1672158546118,
    "velocity": 117,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61135,
        44.99133
    ]
},
{
    "routeDataPointId": "2358",
    "segmentId": "1",
    "time": 1672158546128,
    "velocity": 118,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61134,
        44.9913
    ]
},
{
    "routeDataPointId": "2359",
    "segmentId": "1",
    "time": 1672158546138,
    "velocity": 119,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61128,
        44.99096
    ]
},
{
    "routeDataPointId": "2360",
    "segmentId": "1",
    "time": 1672158546148,
    "velocity": 120,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61128,
        44.99094
    ]
},
{
    "routeDataPointId": "2361",
    "segmentId": "1",
    "time": 1672158546158,
    "velocity": 121,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6112,
        44.99036
    ]
},
{
    "routeDataPointId": "2362",
    "segmentId": "1",
    "time": 1672158546168,
    "velocity": 122,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6112,
        44.99032
    ]
},
{
    "routeDataPointId": "2363",
    "segmentId": "1",
    "time": 1672158546178,
    "velocity": 123,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.61116,
        44.99003
    ]
},
{
    "routeDataPointId": "2364",
    "segmentId": "1",
    "time": 1672158546188,
    "velocity": 124,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61114,
        44.98983
    ]
},
{
    "routeDataPointId": "2365",
    "segmentId": "1",
    "time": 1672158546198,
    "velocity": 125,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61111,
        44.98964
    ]
},
{
    "routeDataPointId": "2366",
    "segmentId": "1",
    "time": 1672158546208,
    "velocity": 126,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.611,
        44.98878
    ]
},
{
    "routeDataPointId": "2367",
    "segmentId": "1",
    "time": 1672158546218,
    "velocity": 127,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61091,
        44.98793
    ]
},
{
    "routeDataPointId": "2368",
    "segmentId": "1",
    "time": 1672158546228,
    "velocity": 128,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61082,
        44.98728
    ]
},
{
    "routeDataPointId": "2369",
    "segmentId": "1",
    "time": 1672158546238,
    "velocity": 129,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6108,
        44.98717
    ]
},
{
    "routeDataPointId": "2370",
    "segmentId": "1",
    "time": 1672158546248,
    "velocity": 130,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.6108,
        44.98712
    ]
},
{
    "routeDataPointId": "2371",
    "segmentId": "1",
    "time": 1672158546258,
    "velocity": 131,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61077,
        44.98688
    ]
},
{
    "routeDataPointId": "2372",
    "segmentId": "1",
    "time": 1672158546268,
    "velocity": 132,
    "noise": 60,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.61075,
        44.98664
    ]
},
{
    "routeDataPointId": "2373",
    "segmentId": "1",
    "time": 1672158546278,
    "velocity": 133,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.61049,
        44.98443
    ]
},
{
    "routeDataPointId": "2374",
    "segmentId": "1",
    "time": 1672158546288,
    "velocity": 134,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.61042,
        44.98395
    ]
},
{
    "routeDataPointId": "2375",
    "segmentId": "1",
    "time": 1672158546298,
    "velocity": 135,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.61041,
        44.98382
    ]
},
{
    "routeDataPointId": "2376",
    "segmentId": "1",
    "time": 1672158546308,
    "velocity": 136,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61032,
        44.98308
    ]
},
{
    "routeDataPointId": "2377",
    "segmentId": "1",
    "time": 1672158546318,
    "velocity": 137,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.61029,
        44.98292
    ]
},
{
    "routeDataPointId": "2378",
    "segmentId": "1",
    "time": 1672158546328,
    "velocity": 138,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.61012,
        44.98155
    ]
},
{
    "routeDataPointId": "2379",
    "segmentId": "1",
    "time": 1672158546338,
    "velocity": 139,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.61007,
        44.98124
    ]
},
{
    "routeDataPointId": "2380",
    "segmentId": "1",
    "time": 1672158546348,
    "velocity": 140,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.61001,
        44.98101
    ]
},
{
    "routeDataPointId": "2381",
    "segmentId": "1",
    "time": 1672158546358,
    "velocity": 141,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.60997,
        44.9808
    ]
},
{
    "routeDataPointId": "2382",
    "segmentId": "1",
    "time": 1672158546368,
    "velocity": 142,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.60986,
        44.98045
    ]
},
{
    "routeDataPointId": "2383",
    "segmentId": "1",
    "time": 1672158546378,
    "velocity": 143,
    "noise": 61,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.60981,
        44.98033
    ]
},
{
    "routeDataPointId": "2384",
    "segmentId": "1",
    "time": 1672158546388,
    "velocity": 144,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.60956,
        44.97963
    ]
},
{
    "routeDataPointId": "2385",
    "segmentId": "1",
    "time": 1672158546398,
    "velocity": 145,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.60937,
        44.97922
    ]
},
{
    "routeDataPointId": "2386",
    "segmentId": "1",
    "time": 1672158546408,
    "velocity": 146,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.60915,
        44.9788
    ]
},
{
    "routeDataPointId": "2387",
    "segmentId": "1",
    "time": 1672158546418,
    "velocity": 147,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.60899,
        44.97852
    ]
},
{
    "routeDataPointId": "2388",
    "segmentId": "1",
    "time": 1672158546428,
    "velocity": 148,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.6089,
        44.97839
    ]
},
{
    "routeDataPointId": "2389",
    "segmentId": "1",
    "time": 1672158546438,
    "velocity": 149,
    "noise": 61,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.60882,
        44.97826
    ]
},
{
    "routeDataPointId": "2390",
    "segmentId": "1",
    "time": 1672158546448,
    "velocity": 150,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.60853,
        44.97783
    ]
},
{
    "routeDataPointId": "2391",
    "segmentId": "1",
    "time": 1672158546458,
    "velocity": 151,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.60831,
        44.97753
    ]
},
{
    "routeDataPointId": "2392",
    "segmentId": "1",
    "time": 1672158546468,
    "velocity": 152,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.6083,
        44.97752
    ]
},
{
    "routeDataPointId": "2393",
    "segmentId": "1",
    "time": 1672158546478,
    "velocity": 153,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.60803,
        44.97717
    ]
},
{
    "routeDataPointId": "2394",
    "segmentId": "1",
    "time": 1672158546488,
    "velocity": 154,
    "noise": 60,
    "vibration": 2,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.60783,
        44.97693
    ]
},
{
    "routeDataPointId": "2395",
    "segmentId": "1",
    "time": 1672158546498,
    "velocity": 155,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.60693,
        44.97579
    ]
},
{
    "routeDataPointId": "2396",
    "segmentId": "1",
    "time": 1672158546508,
    "velocity": 156,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.6068,
        44.97564
    ]
},
{
    "routeDataPointId": "2397",
    "segmentId": "1",
    "time": 1672158546518,
    "velocity": 157,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.60582,
        44.9744
    ]
},
{
    "routeDataPointId": "2398",
    "segmentId": "1",
    "time": 1672158546528,
    "velocity": 158,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.60573,
        44.9743
    ]
},
{
    "routeDataPointId": "2399",
    "segmentId": "1",
    "time": 1672158546538,
    "velocity": 159,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.60568,
        44.97423
    ]
},
{
    "routeDataPointId": "2400",
    "segmentId": "1",
    "time": 1672158546548,
    "velocity": 0,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.60503,
        44.97341
    ]
},
{
    "routeDataPointId": "2401",
    "segmentId": "1",
    "time": 1672158546558,
    "velocity": 1,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.60485,
        44.9732
    ]
},
{
    "routeDataPointId": "2402",
    "segmentId": "1",
    "time": 1672158546568,
    "velocity": 2,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.60479,
        44.97311
    ]
},
{
    "routeDataPointId": "2403",
    "segmentId": "1",
    "time": 1672158546578,
    "velocity": 3,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.60421,
        44.9724
    ]
},
{
    "routeDataPointId": "2404",
    "segmentId": "1",
    "time": 1672158546588,
    "velocity": 4,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.60408,
        44.97222
    ]
},
{
    "routeDataPointId": "2405",
    "segmentId": "1",
    "time": 1672158546598,
    "velocity": 5,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.60385,
        44.97195
    ]
},
{
    "routeDataPointId": "2406",
    "segmentId": "1",
    "time": 1672158546608,
    "velocity": 6,
    "noise": 60,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.60381,
        44.97189
    ]
},
{
    "routeDataPointId": "2407",
    "segmentId": "1",
    "time": 1672158546618,
    "velocity": 7,
    "noise": 61,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.60222,
        44.96989
    ]
},
{
    "routeDataPointId": "2408",
    "segmentId": "1",
    "time": 1672158546628,
    "velocity": 8,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.60222,
        44.96988
    ]
},
{
    "routeDataPointId": "2409",
    "segmentId": "1",
    "time": 1672158546638,
    "velocity": 9,
    "noise": 61,
    "vibration": 2,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.60221,
        44.96988
    ]
},
{
    "routeDataPointId": "2410",
    "segmentId": "1",
    "time": 1672158546648,
    "velocity": 10,
    "noise": 60,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.60191,
        44.9695
    ]
},
{
    "routeDataPointId": "2411",
    "segmentId": "1",
    "time": 1672158546658,
    "velocity": 11,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.60184,
        44.96942
    ]
},
{
    "routeDataPointId": "2412",
    "segmentId": "1",
    "time": 1672158546668,
    "velocity": 12,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.59707,
        44.96341
    ]
},
{
    "routeDataPointId": "2413",
    "segmentId": "1",
    "time": 1672158546678,
    "velocity": 13,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.59705,
        44.96339
    ]
},
{
    "routeDataPointId": "2414",
    "segmentId": "1",
    "time": 1672158546688,
    "velocity": 14,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.59681,
        44.96309
    ]
},
{
    "routeDataPointId": "2415",
    "segmentId": "1",
    "time": 1672158546698,
    "velocity": 15,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.59673,
        44.96298
    ]
},
{
    "routeDataPointId": "2416",
    "segmentId": "1",
    "time": 1672158546708,
    "velocity": 16,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.59598,
        44.96203
    ]
},
{
    "routeDataPointId": "2417",
    "segmentId": "1",
    "time": 1672158546718,
    "velocity": 17,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.59585,
        44.96188
    ]
},
{
    "routeDataPointId": "2418",
    "segmentId": "1",
    "time": 1672158546728,
    "velocity": 18,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.59546,
        44.96138
    ]
},
{
    "routeDataPointId": "2419",
    "segmentId": "1",
    "time": 1672158546738,
    "velocity": 19,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.59533,
        44.96123
    ]
},
{
    "routeDataPointId": "2420",
    "segmentId": "1",
    "time": 1672158546748,
    "velocity": 20,
    "noise": 60,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.59526,
        44.96113
    ]
},
{
    "routeDataPointId": "2421",
    "segmentId": "1",
    "time": 1672158546758,
    "velocity": 21,
    "noise": 61,
    "vibration": 2,
    "temperature": 28,
    "annotation": "foo bar",
    "coordinates": [
        -75.59521,
        44.96107
    ]
},
{
    "routeDataPointId": "2422",
    "segmentId": "1",
    "time": 1672158546768,
    "velocity": 22,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.59512,
        44.96095
    ]
},
{
    "routeDataPointId": "2423",
    "segmentId": "1",
    "time": 1672158546778,
    "velocity": 23,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.59501,
        44.96082
    ]
},
{
    "routeDataPointId": "2424",
    "segmentId": "1",
    "time": 1672158546788,
    "velocity": 24,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.59489,
        44.96066
    ]
},
{
    "routeDataPointId": "2425",
    "segmentId": "1",
    "time": 1672158546798,
    "velocity": 25,
    "noise": 61,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.59396,
        44.95949
    ]
},
{
    "routeDataPointId": "2426",
    "segmentId": "1",
    "time": 1672158546808,
    "velocity": 26,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.5937,
        44.95915
    ]
},
{
    "routeDataPointId": "2427",
    "segmentId": "1",
    "time": 1672158546818,
    "velocity": 27,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.59358,
        44.95901
    ]
},
{
    "routeDataPointId": "2428",
    "segmentId": "1",
    "time": 1672158546828,
    "velocity": 28,
    "noise": 60,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.59313,
        44.95844
    ]
},
{
    "routeDataPointId": "2429",
    "segmentId": "1",
    "time": 1672158546838,
    "velocity": 29,
    "noise": 61,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.59304,
        44.95834
    ]
},
{
    "routeDataPointId": "2430",
    "segmentId": "1",
    "time": 1672158546848,
    "velocity": 30,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.59146,
        44.95636
    ]
},
{
    "routeDataPointId": "2431",
    "segmentId": "1",
    "time": 1672158546858,
    "velocity": 31,
    "noise": 61,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.59129,
        44.95613
    ]
},
{
    "routeDataPointId": "2432",
    "segmentId": "1",
    "time": 1672158546868,
    "velocity": 32,
    "noise": 60,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.59113,
        44.95594
    ]
},
{
    "routeDataPointId": "2433",
    "segmentId": "1",
    "time": 1672158546878,
    "velocity": 33,
    "noise": 61,
    "vibration": 3,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.59088,
        44.95562
    ]
},
{
    "routeDataPointId": "2434",
    "segmentId": "1",
    "time": 1672158546888,
    "velocity": 34,
    "noise": 60,
    "vibration": 2,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.59072,
        44.95543
    ]
},
{
    "routeDataPointId": "2435",
    "segmentId": "1",
    "time": 1672158546898,
    "velocity": 35,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.5861,
        44.9496
    ]
},
{
    "routeDataPointId": "2436",
    "segmentId": "1",
    "time": 1672158546908,
    "velocity": 36,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.58592,
        44.94939
    ]
},
{
    "routeDataPointId": "2437",
    "segmentId": "1",
    "time": 1672158546918,
    "velocity": 37,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.58431,
        44.94738
    ]
},
{
    "routeDataPointId": "2438",
    "segmentId": "1",
    "time": 1672158546928,
    "velocity": 38,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.58424,
        44.94728
    ]
},
{
    "routeDataPointId": "2439",
    "segmentId": "1",
    "time": 1672158546938,
    "velocity": 39,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.58414,
        44.94716
    ]
},
{
    "routeDataPointId": "2440",
    "segmentId": "1",
    "time": 1672158546948,
    "velocity": 40,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.58323,
        44.946
    ]
},
{
    "routeDataPointId": "2441",
    "segmentId": "1",
    "time": 1672158546958,
    "velocity": 41,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.5832,
        44.94597
    ]
},
{
    "routeDataPointId": "2442",
    "segmentId": "1",
    "time": 1672158546968,
    "velocity": 42,
    "noise": 60,
    "vibration": 2,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.58306,
        44.94576
    ]
},
{
    "routeDataPointId": "2443",
    "segmentId": "1",
    "time": 1672158546978,
    "velocity": 43,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.58235,
        44.94488
    ]
},
{
    "routeDataPointId": "2444",
    "segmentId": "1",
    "time": 1672158546988,
    "velocity": 44,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.58228,
        44.94478
    ]
},
{
    "routeDataPointId": "2445",
    "segmentId": "1",
    "time": 1672158546998,
    "velocity": 45,
    "noise": 61,
    "vibration": 1,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.5822,
        44.94469
    ]
},
{
    "routeDataPointId": "2446",
    "segmentId": "1",
    "time": 1672158547008,
    "velocity": 46,
    "noise": 60,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.58205,
        44.9445
    ]
},
{
    "routeDataPointId": "2447",
    "segmentId": "1",
    "time": 1672158547018,
    "velocity": 47,
    "noise": 61,
    "vibration": 3,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.58197,
        44.94441
    ]
},
{
    "routeDataPointId": "2448",
    "segmentId": "1",
    "time": 1672158547028,
    "velocity": 48,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.58167,
        44.94403
    ]
},
{
    "routeDataPointId": "2449",
    "segmentId": "1",
    "time": 1672158547038,
    "velocity": 49,
    "noise": 61,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.58159,
        44.94394
    ]
},
{
    "routeDataPointId": "2450",
    "segmentId": "1",
    "time": 1672158547048,
    "velocity": 50,
    "noise": 60,
    "vibration": 3,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.58122,
        44.94347
    ]
},
{
    "routeDataPointId": "2451",
    "segmentId": "1",
    "time": 1672158547058,
    "velocity": 51,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "foo bar",
    "coordinates": [
        -75.58114,
        44.94338
    ]
},
{
    "routeDataPointId": "2452",
    "segmentId": "1",
    "time": 1672158547068,
    "velocity": 52,
    "noise": 60,
    "vibration": 3,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.58107,
        44.94329
    ]
},
{
    "routeDataPointId": "2453",
    "segmentId": "1",
    "time": 1672158547078,
    "velocity": 53,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.58091,
        44.9431
    ]
},
{
    "routeDataPointId": "2454",
    "segmentId": "1",
    "time": 1672158547088,
    "velocity": 54,
    "noise": 60,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.58084,
        44.943
    ]
},
{
    "routeDataPointId": "2455",
    "segmentId": "1",
    "time": 1672158547098,
    "velocity": 55,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.58077,
        44.94292
    ]
},
{
    "routeDataPointId": "2456",
    "segmentId": "1",
    "time": 1672158547108,
    "velocity": 56,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.5807,
        44.94282
    ]
},
{
    "routeDataPointId": "2457",
    "segmentId": "1",
    "time": 1672158547118,
    "velocity": 57,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.58054,
        44.94264
    ]
},
{
    "routeDataPointId": "2458",
    "segmentId": "1",
    "time": 1672158547128,
    "velocity": 58,
    "noise": 60,
    "vibration": 3,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.5801,
        44.94208
    ]
},
{
    "routeDataPointId": "2459",
    "segmentId": "1",
    "time": 1672158547138,
    "velocity": 59,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.58002,
        44.94197
    ]
},
{
    "routeDataPointId": "2460",
    "segmentId": "1",
    "time": 1672158547148,
    "velocity": 60,
    "noise": 60,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.58,
        44.94195
    ]
},
{
    "routeDataPointId": "2461",
    "segmentId": "1",
    "time": 1672158547158,
    "velocity": 61,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.57995,
        44.94188
    ]
},
{
    "routeDataPointId": "2462",
    "segmentId": "1",
    "time": 1672158547168,
    "velocity": 62,
    "noise": 60,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.57987,
        44.94179
    ]
},
{
    "routeDataPointId": "2463",
    "segmentId": "1",
    "time": 1672158547178,
    "velocity": 63,
    "noise": 61,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.57914,
        44.94086
    ]
},
{
    "routeDataPointId": "2464",
    "segmentId": "1",
    "time": 1672158547188,
    "velocity": 64,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.57907,
        44.94076
    ]
},
{
    "routeDataPointId": "2465",
    "segmentId": "1",
    "time": 1672158547198,
    "velocity": 65,
    "noise": 61,
    "vibration": 3,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.579,
        44.94067
    ]
},
{
    "routeDataPointId": "2466",
    "segmentId": "1",
    "time": 1672158547208,
    "velocity": 66,
    "noise": 60,
    "vibration": 1,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.57886,
        44.94047
    ]
},
{
    "routeDataPointId": "2467",
    "segmentId": "1",
    "time": 1672158547218,
    "velocity": 67,
    "noise": 61,
    "vibration": 3,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.57879,
        44.94038
    ]
},
{
    "routeDataPointId": "2468",
    "segmentId": "1",
    "time": 1672158547228,
    "velocity": 68,
    "noise": 60,
    "vibration": 1,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.57846,
        44.9399
    ]
},
{
    "routeDataPointId": "2469",
    "segmentId": "1",
    "time": 1672158547238,
    "velocity": 69,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.5784,
        44.9398
    ]
},
{
    "routeDataPointId": "2470",
    "segmentId": "1",
    "time": 1672158547248,
    "velocity": 70,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.57833,
        44.93971
    ]
},
{
    "routeDataPointId": "2471",
    "segmentId": "1",
    "time": 1672158547258,
    "velocity": 71,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.57827,
        44.9396
    ]
},
{
    "routeDataPointId": "2472",
    "segmentId": "1",
    "time": 1672158547268,
    "velocity": 72,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.57814,
        44.93941
    ]
},
{
    "routeDataPointId": "2473",
    "segmentId": "1",
    "time": 1672158547278,
    "velocity": 73,
    "noise": 61,
    "vibration": 2,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.57796,
        44.93911
    ]
},
{
    "routeDataPointId": "2474",
    "segmentId": "1",
    "time": 1672158547288,
    "velocity": 74,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.5779,
        44.93902
    ]
},
{
    "routeDataPointId": "2475",
    "segmentId": "1",
    "time": 1672158547298,
    "velocity": 75,
    "noise": 61,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
        -75.57785,
        44.93892
    ]
},
{
    "routeDataPointId": "2476",
    "segmentId": "1",
    "time": 1672158547308,
    "velocity": 76,
    "noise": 60,
    "vibration": 2,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.57767,
        44.93862
    ]
},
{
    "routeDataPointId": "2477",
    "segmentId": "1",
    "time": 1672158547318,
    "velocity": 77,
    "noise": 61,
    "vibration": 1,
    "temperature": 21,
    "annotation": "",
    "coordinates": [
        -75.57762,
        44.93852
    ]
},
{
    "routeDataPointId": "2478",
    "segmentId": "1",
    "time": 1672158547328,
    "velocity": 78,
    "noise": 60,
    "vibration": 2,
    "temperature": 23,
    "annotation": "",
    "coordinates": [
        -75.57756,
        44.93842
    ]
},
{
    "routeDataPointId": "2479",
    "segmentId": "1",
    "time": 1672158547338,
    "velocity": 79,
    "noise": 61,
    "vibration": 2,
    "temperature": 24,
    "annotation": "",
    "coordinates": [
        -75.57751,
        44.93832
    ]
},
{
    "routeDataPointId": "2480",
    "segmentId": "1",
    "time": 1672158547348,
    "velocity": 80,
    "noise": 60,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.57745,
        44.93822
    ]
},
{
    "routeDataPointId": "2481",
    "segmentId": "1",
    "time": 1672158547358,
    "velocity": 81,
    "noise": 61,
    "vibration": 1,
    "temperature": 26,
    "annotation": "",
    "coordinates": [
        -75.5774,
        44.93812
    ]
},
{
    "routeDataPointId": "2482",
    "segmentId": "1",
    "time": 1672158547368,
    "velocity": 82,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.57739,
        44.93809
    ]
},
{
    "routeDataPointId": "2483",
    "segmentId": "1",
    "time": 1672158547378,
    "velocity": 83,
    "noise": 61,
    "vibration": 1,
    "temperature": 27,
    "annotation": "",
    "coordinates": [
        -75.57735,
        44.93802
    ]
},
{
    "routeDataPointId": "2484",
    "segmentId": "1",
    "time": 1672158547388,
    "velocity": 84,
    "noise": 60,
    "vibration": 1,
    "temperature": 28,
    "annotation": "",
    "coordinates": [
        -75.577,
        44.93731
    ]
},
{
    "routeDataPointId": "2485",
    "segmentId": "1",
    "time": 1672158547398,
    "velocity": 85,
    "noise": 61,
    "vibration": 1,
    "temperature": 22,
    "annotation": "",
    "coordinates": [
        -75.57696,
        44.93721
    ]
},
{
    "routeDataPointId": "2486",
    "segmentId": "1",
    "time": 1672158547408,
    "velocity": 86,
    "noise": 60,
    "vibration": 3,
    "temperature": 25,
    "annotation": "",
    "coordinates": [
    ]