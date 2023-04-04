STRUCTURE
The project has broken down into components, views, and services.

The components are design models. The views use components to design a page.
The services add functionalities to each view.

The services are in the /services folder. There is a service
for logging, database management, sensor package communication, trip recording,
and more.

In addition, the project includes support utility files (/utils) that provide support where needed.
Similarly, there is a general constants folder for enums often used across the project

There is also a system configuration to modify preferences.

DEPENDENCIES
To install required libraries, run `npm install`.

GETTING STARTED for developers
If you have a Mac, you are lucky as you will be able to develop with
ios and android emulators. For Windows users, the choice is only
android emulators. Apple enjoys being a close system :/.

Conversely, if you have personal ios or android devices you may
develop directly on your devices.

To open an ios simulator, download Xcode and navigate as follows:
Xcode > Open Developer Tool > Simulator

To open an android simulator, download AndroidStudio and navigate as followings:
AndroidStudio -> Virtual Device Manager.

The next step is to download a simulator build on your selected device.
You would use the expo app and connect to your
running application (`npm start` or `expo start --dev-client`) for most applications. Unfortunately, the default build package provided by the expo does not provide BLE support.

Hence, this project uses a custom build.

    BUILDS
    To create a build, eas-cli is needed
    https://github.com/expo/eas-cli

    Build commands can be found in package.json

    For development purposes, run `run build-sim-android` or `run build-sim-ios`

    To avoid unwanted build issues, ensure that the path to the project
    contains folders with spaces. For example, "project folder/ mobile"
    may lead to build issues. See https://github.com/react-native-community/cli/issues/1583
    for more details.

After creating the build, download the build on your simulator or personal device. To download
the build, go to the build URL on your simulator/device and download. The development app needs to be accompanied by an expo server.

    RUN EXPO SERVER
    To start on the expo server, run `npm start`. Follow the instructions to connect to your device or simulator

To login, the default user is `root@root.ca` with the password `Rootroot`

SERVER COMMUNICATION CONFIGURATION
By default, the app points to the AWS deployed backend server. The purpose of the backend server is authentication, trip storing, analysis, and more.

To redirect requests to a local HTTP server, ensure the following"

1.  Check that the HTTP server is running locally
2.  SystemConfiguration.Production is false
3.  ServerCommunication.LOCAL_IP_ADDRESS points to your wifi IP address
4.  Run the app through `npm start`

To run the app with a deployed HTTP server,

1.  SystemConfiguration.Production is true
2.  ServerCommunication.PRODUCTION_IP_ADDRESS points to the server's address
3.  Run the app through `npm start`
