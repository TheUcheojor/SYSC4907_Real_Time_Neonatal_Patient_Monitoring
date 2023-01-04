import { NavigatorScreenParams } from "@react-navigation/native";
import MeasurementPacket from "./services/sensor-package/models/MeasurementPacket";

/**
 * Route mapping for high level screens
 */
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  Main: NavigatorScreenParams<MainStackParamList>;
};

/**
 * Route mapping for the main screens
 */
export type MainStackParamList = {
  Driver: undefined;
  Paramedic: undefined;
  Settings: undefined;
  Trips: undefined;
  BottomTab: undefined;
  TripDetails: {
    routeId: number;
    isLocalTrip: boolean;
  };
};

/**
 * The params in the trip stack
 */
export type TripsStackParamList = {
  ActiveTrip: undefined;
  TripQuery: undefined;
};

/**
 * The route recording state
 */
export enum RouteRecordingState {
  NOT_RECORDING,
  RECORDING,
  PAUSED,
}

/**
 * Resources that can be shared across screens
 */
export type SharedScreenResources = {
  recordingState: RouteRecordingState;
  setRecordingState: React.Dispatch<React.SetStateAction<RouteRecordingState>>;
  measurementPacket: MeasurementPacket;
  setMeasurementPacket: React.Dispatch<React.SetStateAction<MeasurementPacket>>;
};
