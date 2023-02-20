/**
 * Author: Paul Okenne
 * File: ArrayUtil
 * Purpose: Exports array-related helper functions
 */

import { ResultSet } from "react-native-sqlite-storage";

/**
 * Pushs an item to the array while removing the first item
 * @param array the array
 * @param item the added item
 * @returns the updated array
 */
export const circularArrayPush = (array: Array<any>, item: any): Array<any> => {
  return [...array.slice(1, array.length), item];
};

/**
 * Get items from the result set
 * @param results the result set
 * @returns the result set items
 */
export const getItemsFromResultSet = (results: [ResultSet]): Array<any> => {
  const result: ResultSet = results[0];
  const returnResults: Array<any> = [];

  for (let index = 0; index < result.rows.length; index++) {
    returnResults.push(result.rows.item(index));
  }
  return returnResults;
};
