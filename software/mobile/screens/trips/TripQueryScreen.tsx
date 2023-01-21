/**
 * Author: Paul Okenne
 * File: TripQueryScreen
 * Purpose: Exports the trip query screen
 */

import { MaterialIcons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import MaskInput, { Masks, Mask } from "react-native-mask-input";
import LocalTrips from "../../components/LocalTrips";
import TripItem from "../../components/TripItem";
import {
  EQUAL_KEY,
  EQUAL_LABEL,
  GREATER_THAN_KEY,
  GREATER_THAN_LABEL,
  LESS_THAN_KEY,
  LESS_THAN_LABEL,
} from "../../constants/comparsion-constants";
import {
  END_DATE_LABEL,
  getMetricMask,
  getUnits,
  MetricKey,
  NOISE_METRIC_TITLE,
  START_DATE_LABEL,
  TEMPERATURE_METRIC_TITLE,
  VELOCITY_METRIC_TITLE,
  VIBRATION_METRIC_TITLE,
} from "../../constants/metric-constants";
import ServerTripRoute from "../../services/models/server-communication/ServerTripRoute";
import { getPressedHighlightBehaviourStyle } from "../../utils/ComponentsUtil";
import { generateRandomServerTripRoute } from "../../utils/RandomUtil";

export default (): JSX.Element => {
  const [fetchedTrips, setFetchedTrips] = useState<ServerTripRoute[]>([
    generateRandomServerTripRoute(),
    generateRandomServerTripRoute(),
  ]);

  /**
   * Trip-property dropdown related states
   */
  const [propertyDropDownOpen, setPropertyDropDownOpen] =
    useState<boolean>(false);
  const [selectedTripProperty, setSelectedTripProperty] = useState<string>(
    MetricKey.END_DATE_KEY
  );
  const [tripPropertyItems, setTripPropertyItems] =
    useState<DropdownItem[]>(TRIP_PROPERTY_ITEMS);

  /**
   * Comparison-operation dropdown related states
   */
  const [comparisonDropDownOpen, setComparisonDropDownOpen] =
    useState<boolean>(false);
  const [selectedComparsionOperator, setSelectedComparisonOperator] =
    useState<string>(LESS_THAN_KEY);
  const [comparisonOperators, setComparisonOperators] = useState<
    DropdownItem[]
  >(COMPARISON_OPERATORS_ITEMS);

  /**
   *  Text-input-box related states
   */
  const [textInputValue, setTextInputValue] = useState<string>("");
  const [placeHolderFormat, setPlaceHolderFormat] =
    useState<string>(ENTER_DATE_FORMAT);
  const [maskRegex, setMaskRegex] = useState<[Mask]>([Masks.DATE_YYYYMMDD]);

  /**
   * When the selected trip property changes, find the dropdown item and
   * update the text-input placeholder and input mask accordingly. Also,
   * reset the current text-input value
   */
  useEffect(() => {
    const selectedTripPropertyItem: DropdownItem | undefined =
      TRIP_PROPERTY_ITEMS.find(
        (tripPropertyItem: DropdownItem) =>
          tripPropertyItem.value == selectedTripProperty
      );

    if (!selectedTripPropertyItem) return;

    switch (selectedTripPropertyItem.parent) {
      case ItemTypeKey.Date:
        setMaskRegex([Masks.DATE_YYYYMMDD]);
        setPlaceHolderFormat(ENTER_DATE_FORMAT);
        break;

      case ItemTypeKey.Number:
        const mask: Mask = getMetricMask(
          selectedTripPropertyItem.value as MetricKey
        );
        setMaskRegex([mask]);
        setPlaceHolderFormat(
          ENTER_NUMBER_PLACEHOLDER +
            "in " +
            getUnits(selectedTripPropertyItem.value as MetricKey)
        );
        break;
    }

    setTextInputValue("");
  }, [selectedTripProperty]);

  /**
   * Query the server for the results and update the trips
   */
  const search = () => {
    //setFetchedTrips(RESULTS)
  };

  /**
   * Given an trip item, return the trip item component
   */
  const getFetchedTripItem = useCallback(
    ({ item }: { item: ServerTripRoute }): JSX.Element => (
      <TripItem tripRoute={item} isLocalTrip={false} />
    ),
    []
  );

  return (
    <View style={styles.tripQueryScreen}>
      <View style={styles.filterContainer}>
        <DropDownPicker
          style={styles.dropdownPicker}
          labelStyle={styles.dropdownPickerLabel}
          open={propertyDropDownOpen}
          setOpen={setPropertyDropDownOpen}
          value={selectedTripProperty}
          setValue={setSelectedTripProperty}
          items={tripPropertyItems}
          setItems={setTripPropertyItems}
          categorySelectable={false}
          zIndex={3}
        />

        <DropDownPicker
          style={styles.dropdownPicker}
          labelStyle={styles.dropdownPickerLabel}
          open={comparisonDropDownOpen}
          setOpen={setComparisonDropDownOpen}
          value={selectedComparsionOperator}
          setValue={setSelectedComparisonOperator}
          items={comparisonOperators}
          setItems={setComparisonOperators}
          zIndex={2}
        />

        <View style={styles.textInputContainer}>
          <MaskInput
            style={styles.textInput}
            placeholder={placeHolderFormat}
            value={textInputValue}
            mask={maskRegex[0]}
            onChangeText={setTextInputValue}
          />
        </View>

        <Pressable
          style={({ pressed }: { pressed: boolean }) =>
            getPressedHighlightBehaviourStyle(
              pressed,
              styles.button,
              ON_PRESS_SEARCH_COLOUR
            )
          }
        >
          <Text onPress={search} style={styles.buttonText}>
            SEARCH
          </Text>
        </Pressable>
      </View>

      <View style={styles.tripsContainer}>
        <View style={styles.header}>
          <Text style={styles.primaryText}>Fetched Trips</Text>

          <MaterialIcons
            style={styles.icon}
            name="clear"
            size={30}
            color="black"
            onPress={() => setFetchedTrips([])}
          />
        </View>

        <FlashList
          // style={styles.flashlist}
          data={fetchedTrips}
          renderItem={getFetchedTripItem}
          estimatedItemSize={100}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

/**
 * The dropdown item type which indicates whether the item is date or number
 */
enum ItemTypeKey {
  Date = "Date",
  Number = "Number",
}

/**
 * The drop down item
 */
interface DropdownItem {
  label: string;
  value: MetricKey | string;
  parent: string | undefined;
}

/**
 * View Constants
 */
const ENTER_DATE_FORMAT = "YYYY/MM/DD";
const ENTER_NUMBER_PLACEHOLDER = "Enter a number ";
const ON_PRESS_SEARCH_COLOUR: string = "#2F2F2F";

const COMPARISON_OPERATORS_ITEMS: DropdownItem[] = [
  {
    label: GREATER_THAN_LABEL,
    value: GREATER_THAN_KEY,
    parent: undefined,
  },
  {
    label: LESS_THAN_LABEL,
    value: LESS_THAN_KEY,
    parent: undefined,
  },
  {
    label: EQUAL_LABEL,
    value: EQUAL_KEY,
    parent: undefined,
  },
];

const TRIP_PROPERTY_ITEMS: DropdownItem[] = [
  {
    label: ItemTypeKey.Date,
    value: ItemTypeKey.Date,
    parent: undefined,
  },

  {
    label: START_DATE_LABEL,
    value: MetricKey.START_DATE_KEY,
    parent: ItemTypeKey.Date,
  },

  {
    label: END_DATE_LABEL,
    value: MetricKey.END_DATE_KEY,
    parent: ItemTypeKey.Date,
  },

  {
    label: ItemTypeKey.Number,
    value: ItemTypeKey.Number,
    parent: undefined,
  },

  {
    label: VIBRATION_METRIC_TITLE,
    value: MetricKey.VIBRATION_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },

  {
    label: TEMPERATURE_METRIC_TITLE,
    value: MetricKey.TEMPERATURE_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },

  {
    label: NOISE_METRIC_TITLE,
    value: MetricKey.NOISE_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },

  {
    label: VELOCITY_METRIC_TITLE,
    value: MetricKey.VELOCITY_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },
];
