/**
 * Author: Paul Okenne
 * File: ArrayUtil
 * Purpose: Exports array-related helper functions
 */

/**
 * Pushs an item to the array while removing the first item
 * @param array the array
 * @param item the added item
 * @returns the updated array
 */
export const circularArrayPush = (array: Array<any>, item: any): Array<any> => {
  return [...array.slice(1, array.length), item];
};
