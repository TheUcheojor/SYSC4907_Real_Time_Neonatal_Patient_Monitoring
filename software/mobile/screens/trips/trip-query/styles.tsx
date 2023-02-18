/**
 * Author: Paul Okenne
 * File: trip-query/styles
 * Purpose: styling for trip query view
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  tripQueryScreen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    // padding: 15,
  },

  filterContainer: {
    width: "90%",
    marginVertical: 10,
    // backgroundColor: "red",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    // flexGrow: 1,
    // flexWrap: "wrap",
  },

  dropdownPicker: {
    padding: 10,
    marginVertical: 5,
  },

  dropdownPickerLabel: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
  },
  textInputContainer: {
    // padding: 10,
    marginVertical: 5,
  },

  textInput: {
    fontFamily: "Montserrat_600SemiBold",
    color: "black",
    fontSize: 12,
    borderWidth: 1,
    padding: 15,
    height: 50,
    borderRadius: 10,
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "black",
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "Montserrat_700Bold",
    color: "white",
    fontSize: 12,
  },

  tripsContainer: {
    flex: 1,
    flexDirection: "column",
    width: "90%",
    marginVertical: 10,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },

  icon: {
    marginHorizontal: 5,
  },
  primaryText: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
  },
  flashlist: {
    width: "100%",
    height: 100,
  },
});
