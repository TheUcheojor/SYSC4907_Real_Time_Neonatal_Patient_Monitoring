import { StyleSheet, View, Text, TextInput } from "react-native";

/**
 * Create a text input container given a title and place holder
 * @param title the title
 * @param placeholder  the placeholder
 * @returns
 */
export const TextInputContainer = ({
  title,
  placeholder,
  width,
}: {
  title: string;
  placeholder: string;
  width?: number;
}) => {
  // Assign the width accordingly (the default width is 300 px)
  width = width ? width : 300;
  return (
    <View style={{ ...styles.inputContainer, width: width }}>
      <Text style={styles.textInputHeader}> {title} </Text>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
  },
  textInputHeader: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 15,
    lineHeight: 20,
  },

  textInput: {
    padding: 10,
    fontFamily: "Montserrat_700Bold",

    borderColor: "black",
    borderWidth: 2,
    fontSize: 15,
    borderRadius: 10,
  },
});
