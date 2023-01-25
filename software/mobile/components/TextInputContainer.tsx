import { StyleSheet, View, Text, TextInput } from "react-native";

interface TextInputContainerParams {
  title: string;
  placeholder: string;
  width?: number;
  isError?: boolean;
  inputRef: React.MutableRefObject<String>;
  secureTextEntry?: boolean;
}

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
  isError,
  inputRef,
  secureTextEntry,
}: TextInputContainerParams) => {
  // Assign the width accordingly (the default width is 300 px)
  width = width ? width : 300;
  isError = isError ? isError : false;
  const borderColor: string = isError ? "#C2372E" : "black";

  return (
    <View style={{ ...styles.inputContainer, width: width }}>
      <Text style={styles.textInputHeader}> {title} </Text>
      <TextInput
        style={{ ...styles.textInput, borderColor: borderColor }}
        placeholder={placeholder}
        onChangeText={(updatedText) => (inputRef.current = updatedText)}
        secureTextEntry={secureTextEntry}
      />
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
    borderWidth: 2,
    fontSize: 15,
    borderRadius: 10,
  },
});
