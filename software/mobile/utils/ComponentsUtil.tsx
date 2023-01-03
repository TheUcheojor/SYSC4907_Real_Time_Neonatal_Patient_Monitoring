/**
 * Author: Paul Okenne
 * File: ComponentsUtil
 * Purpose: Exports component-related helper functions
 */

/**
 * Update the background colour depending if the the component is pressed
 * @param pressed a flag that indicates whether the component is pressed
 * @param defaultStyle the component default style
 * @param onPressBackgroundColor the new background color
 * @returns
 */
export const getPressedHighlightBehaviourStyle = (
  pressed: boolean,
  defaultStyle: {},
  onPressBackgroundColor: string
) => {
  if (!pressed) return defaultStyle;

  return {
    ...defaultStyle,
    backgroundColor: onPressBackgroundColor,
  };
};
