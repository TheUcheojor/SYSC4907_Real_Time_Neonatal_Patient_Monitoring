/**
 * Author: Paul Okenne
 * File: TripQueryScreen
 * Purpose: Exports the trip query screen
 */

import { MaterialIcons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { useCallback, useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import MaskInput, { Masks, Mask } from "react-native-mask-input";
import styles from "./styles";
import LocalTrips from "../../../components/LocalTrips";
import TripItem from "../../../components/TripItem";
import * as comparsionConstants from "../../../constants/comparsion-constants";
import * as metricConstants from "../../../constants/metric-constants";
import * as viewConstants from "./view-constants";
import ServerTripRoute from "../../../services/models/server-communication/ServerTripRoute";
import { getPressedHighlightBehaviourStyle } from "../../../utils/ComponentsUtil";
import { generateRandomServerTripRoute } from "../../../utils/RandomUtil";
import { ServerCommnunicationService } from "../../../services/ServerCommunicationService";
import { ServerRouteSearchResponse } from "../../../services/models/server-communication/requests/RouteSearchResponse";
import {
  getDayEndEpoch,
  getDayStartEpoch,
  SECOND_IN_MILLISECONDS,
} from "../../../utils/TimeUtil";

export default (): JSX.Element => {
  const [fetchedTrips, setFetchedTrips] = useState<ServerTripRoute[]>([]);

  /**
   * Trip-property dropdown related states
   */
  const [propertyDropDownOpen, setPropertyDropDownOpen] =
    useState<boolean>(false);
  const [selectedTripProperty, setSelectedTripProperty] = useState<string>(
    viewConstants.ServerMetricKey.END_DATE_KEY
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
    useState<comparsionConstants.ComparsionOperator>(
      comparsionConstants.ComparsionOperator.LESS_THAN
    );

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
  const [maskRegex, setMaskRegex] = useState<[Mask] | null>([
    Masks.DATE_YYYYMMDD,
  ]);

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
        resetComparisonOperatorForNonTextKeys();
        break;

      case viewConstants.ItemTypeKey.Number:
        const mask: Mask = metricConstants.getMetricMask(
          selectedTripPropertyItem.value as viewConstants.StatisticsMeasurementPacketKey
        );
        setMaskRegex([mask]);
        setPlaceHolderFormat(
          viewConstants.ENTER_NUMBER_PLACEHOLDER +
            metricConstants.getUnits(
              selectedTripPropertyItem.value as viewConstants.StatisticsMeasurementPacketKey
            )
        );
        resetComparisonOperatorForNonTextKeys();

        break;

      case viewConstants.ItemTypeKey.Text:
        setMaskRegex(null);
        setComparisonOperators([
          viewConstants.COMPARISON_OPERATORS_ITEMS[
            viewConstants.COMPARISON_OPERATOR_EQUAL_KEY
          ],
        ]);
        setSelectedComparisonOperator(
          comparsionConstants.ComparsionOperator.EQUAL
        );
        setPlaceHolderFormat("Enter the Patient's ID");
        break;
    }

    setTextInputValue("");
  }, [selectedTripProperty]);

  /**
   * Reset the comparison-operator selector for non-text keys
   */
  const resetComparisonOperatorForNonTextKeys = () => {
    setComparisonOperators(viewConstants.COMPARISON_OPERATORS_ITEMS);

    setSelectedComparisonOperator(
      comparsionConstants.ComparsionOperator.LESS_THAN
    );
  };

  /**
   * Query the server for the results and update the trips
   */
  const search = () => {
    // Ignore search request if there is not specified threshold
    if (!textInputValue) return;

    // let threshold: number | string;
    let query: string = "";

    console.log("selectedTripProperty:", selectedTripProperty);

    if (viewConstants.allowedTextProperites.includes(selectedTripProperty)) {
      query =
        selectedTripProperty +
        selectedComparsionOperator +
        encodeURI(`'${textInputValue.trim().toLowerCase()}'`);
    } else if (viewConstants.allowedStatistics.includes(selectedTripProperty)) {
      /**
       * Since the number-strings are formatted as "UNITS NUMBERS", we split the text input
       * The numbers are formatted with commas to seperate every thousandth place and with periods for decimals.
       * For example, a number string could be 5,300,222.01.
       *
       * We want to create a float out of the number string so we remove the commas
       */
      let textCollection: String[] = textInputValue.split(" ");

      let threshold = parseFloat(
        textCollection[textCollection.length - 1].split(",").join("")
      );

      query = selectedTripProperty + selectedComparsionOperator + threshold;
    } else {
      switch (selectedComparsionOperator) {
        case comparsionConstants.ComparsionOperator.GREATER_THAN:
          query =
            selectedTripProperty +
            selectedComparsionOperator +
            getDayEndEpoch(textInputValue);
          break;

        case comparsionConstants.ComparsionOperator.LESS_THAN:
          query =
            selectedTripProperty +
            selectedComparsionOperator +
            getDayStartEpoch(textInputValue);
          break;

        // If date item is compared to an exact date, the query should be a range from
        // the beginning to the end of that day
        case comparsionConstants.ComparsionOperator.EQUAL:
          let startTimeEpoch = getDayStartEpoch(textInputValue);
          let endTimeEpoch = getDayEndEpoch(textInputValue);
          query = `${selectedTripProperty}> ${startTimeEpoch} AND ${selectedTripProperty}<${endTimeEpoch}  `;
          break;
      }
    }

    ServerCommnunicationService.getServerCommunicationService()
      .routeSearch(query)
      .then((result: ServerRouteSearchResponse) => {
        setFetchedTrips(result.routes.reverse());
      });
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
          {maskRegex ? (
            <MaskInput
              style={styles.textInput}
              placeholder={placeHolderFormat}
              value={textInputValue}
              mask={maskRegex[0]}
              onChangeText={setTextInputValue}
            />
          ) : (
            <MaskInput
              style={styles.textInput}
              placeholder={placeHolderFormat}
              value={textInputValue}
              onChangeText={setTextInputValue}
            />
          )}
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
