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
}: {
  title: string;
  placeholder: string;
}) => {
  return (
    <View style={styles.inputContainer}>
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
    width: 300,
    borderRadius: 10,
  },
});
