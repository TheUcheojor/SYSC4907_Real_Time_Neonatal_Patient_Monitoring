/**
 * Author: Paul Okenne
 * Name: Validator Util
 * Purpose: Exports validator functions
 */

/**
 * Checks if a given text is an email
 * @param text the given text
 * @returns true if it the text is an email
 */
export const isEmail = (text: string): boolean => {
  const expression: RegExp =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

  return expression.test(text);
};
