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
import styles from "./styles";
import LocalTrips from "../../../components/LocalTrips";
import TripItem from "../../../components/TripItem";
import * as comparsionConstants from "../../../constants/comparsion-constants";
import * as metricConstants from "../../../constants/metric-constants";
import * as viewConstants from "./view-constants";
import {
  NumericMetricMeasurementPacketKey,
  StatisticsMeasurementPacketKey,
} from "../../../services/models/sensor-package-communication/MeasurementPacket";
import ServerTripRoute from "../../../services/models/server-communication/ServerTripRoute";
import { getPressedHighlightBehaviourStyle } from "../../../utils/ComponentsUtil";
import { generateRandomServerTripRoute } from "../../../utils/RandomUtil";

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
    metricConstants.MetricKey.END_DATE_KEY
  );
  const [tripPropertyItems, setTripPropertyItems] = useState<
    viewConstants.DropdownItem[]
  >(viewConstants.TRIP_PROPERTY_ITEMS);

  /**
   * Comparison-operation dropdown related states
   */
  const [comparisonDropDownOpen, setComparisonDropDownOpen] =
    useState<boolean>(false);
  const [selectedComparsionOperator, setSelectedComparisonOperator] =
    useState<string>(comparsionConstants.LESS_THAN_KEY);
  const [comparisonOperators, setComparisonOperators] = useState<
    viewConstants.DropdownItem[]
  >(viewConstants.COMPARISON_OPERATORS_ITEMS);

  /**
   *  Text-input-box related states
   */
  const [textInputValue, setTextInputValue] = useState<string>("");
  const [placeHolderFormat, setPlaceHolderFormat] = useState<string>(
    viewConstants.ENTER_DATE_FORMAT
  );
  const [maskRegex, setMaskRegex] = useState<[Mask]>([Masks.DATE_YYYYMMDD]);

  /**
   * When the selected trip property changes, find the dropdown item and
   * update the text-input placeholder and input mask accordingly. Also,
   * reset the current text-input value
   */
  useEffect(() => {
    const selectedTripPropertyItem: viewConstants.DropdownItem | undefined =
      viewConstants.TRIP_PROPERTY_ITEMS.find(
        (tripPropertyItem: viewConstants.DropdownItem) =>
          tripPropertyItem.value == selectedTripProperty
      );

    if (!selectedTripPropertyItem) return;

    switch (selectedTripPropertyItem.parent) {
      case viewConstants.ItemTypeKey.Date:
        setMaskRegex([Masks.DATE_YYYYMMDD]);
        setPlaceHolderFormat(viewConstants.ENTER_DATE_FORMAT);
        break;

      case viewConstants.ItemTypeKey.Number:
        const mask: Mask = metricConstants.getMetricMask(
          selectedTripPropertyItem.value as StatisticsMeasurementPacketKey
        );
        setMaskRegex([mask]);
        setPlaceHolderFormat(
          viewConstants.ENTER_NUMBER_PLACEHOLDER +
            metricConstants.getUnits(
              selectedTripPropertyItem.value as StatisticsMeasurementPacketKey
            )
        );
        break;
    }

    setTextInputValue("");
  }, [selectedTripProperty]);

  /**
   * Query the server for the results and update the trips
   */
  const search = () => {
    // Ignore search request if there is not specified threshold
    if (!textInputValue) return;
    console.log("hello");

    let threshold: string;

    if (viewConstants.allowedStatistics.includes(selectedTripProperty)) {
      let textCollection: string[] = textInputValue.split(" ");
      threshold = textCollection[textCollection.length - 1];
    } else {
      threshold = textInputValue;
    }

    console.log(selectedTripProperty, selectedComparsionOperator, threshold);
    // selectedTripProperty;
    // selectedComparsionOperator;

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
          onPress={search}
          style={({ pressed }: { pressed: boolean }) =>
            getPressedHighlightBehaviourStyle(
              pressed,
              styles.button,
              viewConstants.ON_PRESS_SEARCH_COLOUR
            )
          }
        >
          <Text style={styles.buttonText}>SEARCH</Text>
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