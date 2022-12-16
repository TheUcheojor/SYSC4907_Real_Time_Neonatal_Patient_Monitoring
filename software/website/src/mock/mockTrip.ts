interface RouteMeasurementDataPoint {
    routeDataPointId: string,
    segmentId: string,
    time: number,
    velocity: number,
    noise: number,
    vibration: number,
    temperature: number,
    annotation: string,
    coordinates: Array<number>
}

interface RouteSegment {
    segmentId: string,
    routeId: string,
    segmentType: string,
    startTime: number,
    endTime: number,
    startLocation: string,
    endLocation: string
}

interface Route {
    routeId: string,
    ownerId: string,
    organizationId: string,
    totalVibrationExposure: number,
    avgTemperature: number,
    avgNoise: number,
    avgVibration: number,
    avgVelocity: number,
}

const coordinates = 
[
	[-75.69637, 45.38553],
	[-75.69637, 45.38546],
	[-75.69637, 45.38533],
	[-75.69637, 45.38501],
	[-75.69636, 45.38467],
	[-75.69636, 45.38454],
	[-75.69637, 45.38437],
	[-75.69635, 45.38412],
	[-75.69631, 45.38382],
	[-75.69629, 45.38371],
	[-75.69628, 45.38365],
	[-75.69628, 45.38362],
	[-75.69625, 45.38352],
	[-75.69621, 45.38341],
	[-75.69616, 45.38326],
	[-75.69612, 45.38315],
	[-75.69609, 45.38308],
	[-75.69606, 45.38301],
	[-75.69601, 45.38291],
	[-75.69597, 45.38285],
	[-75.69594, 45.3828],
	[-75.69594, 45.38279],
	[-75.69578, 45.38249],
	[-75.69573, 45.38241],
	[-75.6957, 45.38237],
	[-75.69568, 45.38234],
	[-75.69567, 45.38233],
	[-75.69562, 45.3823],
	[-75.69557, 45.38227],
	[-75.69556, 45.38227],
	[-75.69549, 45.38226],
	[-75.69543, 45.38225],
	[-75.69538, 45.38227],
	[-75.69534, 45.38228],
	[-75.69516, 45.38234],
	[-75.69462, 45.38252],
	[-75.6945, 45.38257],
	[-75.69444, 45.38259],
	[-75.69439, 45.38262],
	[-75.69429, 45.38267],
	[-75.69419, 45.38272],
	[-75.6941, 45.38277],
	[-75.69402, 45.38282],
	[-75.69395, 45.38287],
	[-75.69383, 45.38296],
	[-75.69377, 45.38303],
	[-75.69373, 45.38308],
	[-75.69371, 45.38312],
	[-75.6937, 45.38314],
	[-75.69369, 45.3832],
	[-75.69368, 45.38326],
	[-75.69369, 45.38333],
	[-75.69371, 45.38341],
	[-75.69374, 45.38348],
	[-75.69378, 45.38355],
	[-75.69405, 45.38401],
	[-75.69413, 45.38413],
	[-75.69426, 45.38432],
	[-75.69461, 45.38487],
	[-75.69475, 45.3851],
	[-75.69479, 45.38517],
	[-75.69489, 45.38534],
	[-75.69509, 45.38566],
	[-75.69511, 45.38569],
	[-75.69513, 45.38573],
	[-75.69521, 45.38589],
	[-75.69525, 45.38597],
	[-75.69528, 45.38604],
	[-75.69563, 45.3875],
	[-75.69563, 45.38754],
	[-75.69567, 45.38769],
	[-75.6959, 45.3887],
	[-75.69589, 45.38884],
	[-75.69588, 45.38884],
	[-75.69587, 45.38885],
	[-75.69586, 45.38886],
	[-75.69585, 45.38887],
	[-75.69584, 45.38888],
	[-75.69583, 45.38889],
	[-75.69583, 45.3889],
	[-75.69582, 45.38891],
	[-75.69582, 45.38892],
	[-75.69582, 45.38893],
	[-75.69582, 45.38894],
	[-75.69582, 45.38895],
	[-75.69583, 45.38896],
	[-75.69583, 45.38897],
	[-75.69584, 45.38898],
	[-75.69584, 45.38899],
	[-75.69585, 45.38899],
	[-75.69585, 45.389],
	[-75.69586, 45.38901],
	[-75.69587, 45.38901],
	[-75.69588, 45.38902],
	[-75.69589, 45.38903],
	[-75.6959, 45.38903],
	[-75.69591, 45.38903],
	[-75.69592, 45.38904],
	[-75.69593, 45.38904],
	[-75.69594, 45.38904],
	[-75.69595, 45.38904],
	[-75.69596, 45.38905],
	[-75.69597, 45.38905],
	[-75.69598, 45.38905],
	[-75.69599, 45.38905],
	[-75.696, 45.38905],
	[-75.69601, 45.38905],
	[-75.69602, 45.38905],
	[-75.69603, 45.38904],
	[-75.69604, 45.38904],
	[-75.69605, 45.38904],
	[-75.69606, 45.38904],
	[-75.69607, 45.38903],
	[-75.69608, 45.38903],
	[-75.69609, 45.38902],
	[-75.6961, 45.38902],
	[-75.69611, 45.38901],
	[-75.69612, 45.389],
	[-75.69613, 45.38899],
	[-75.69613, 45.38898],
	[-75.69614, 45.38898],
	[-75.69614, 45.38897],
	[-75.69615, 45.38896],
	[-75.69615, 45.38895],
	[-75.69615, 45.38894],
	[-75.69615, 45.38893],
	[-75.69615, 45.38892],
	[-75.69615, 45.38891],
	[-75.69615, 45.3889],
	[-75.69637, 45.38883],
	[-75.69688, 45.38863],
	[-75.69701, 45.38859],
	[-75.6969, 45.3884],
	[-75.69677, 45.38816],
	[-75.69668, 45.38798],
	[-75.69662, 45.3878],
	[-75.69655, 45.38758],
	[-75.69654, 45.38757],
	[-75.6965, 45.38742],
	[-75.69646, 45.38725],
	[-75.69645, 45.38723],
	[-75.69643, 45.38709],
	[-75.6964, 45.38687],
	[-75.69639, 45.38664],
	[-75.69638, 45.38649],
	[-75.69638, 45.38638],
	[-75.69638, 45.38631]
]

const route: Route = {
    routeId: "1",
    ownerId: "1",
    organizationId: "1",
    totalVibrationExposure: 100,
    avgTemperature: 40,
    avgNoise: 40,
    avgVibration: 40,
    avgVelocity: 80
}

const routeSegment: RouteSegment = {
    segmentId: "1",
    routeId: "1",
    segmentType: "road",
    startTime: Date.now() - 1000,
    endTime: Date.now(),
    startLocation: "CU",
    endLocation: "CU",
}

const routeMeasurementDataPoints: Array<RouteMeasurementDataPoint> = []

for(let i = 0; i < coordinates.length; i++) {
    const dp: RouteMeasurementDataPoint = {
        routeDataPointId: i.toString(),
        segmentId: "1",
        time: Date.now(),
        velocity: ((i % (coordinates.length / 3)) * 3),
        noise: i,
        vibration: i,
        temperature: (21 + Math.random() * 8),
        annotation: Math.floor(Math.random() * 9) === 0 ? "red herring" : "",
        coordinates: coordinates[i]
    }
    routeMeasurementDataPoints.push(dp)
}

export {routeMeasurementDataPoints}