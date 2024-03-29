import {
  NavigationContainer,
  NavigationContainerRefWithCurrent,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import { RootStackParamList, SharedScreenResources } from "../types";
import Drawer from "./Drawer";
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * The root navigation containing all screens within the application
 */
export const StackNavigationContainer = ({
  recordingState,
  setRecordingState,
  measurementPacket,
  setMeasurementPacket,
  navigationRef,
}: SharedScreenResources & {
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

        <Stack.Screen name="Main">
          {(props) => (
            <Drawer
              recordingState={recordingState}
              setRecordingState={setRecordingState}
              measurementPacket={measurementPacket}
              setMeasurementPacket={setMeasurementPacket}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
