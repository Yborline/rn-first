import { FC, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
interface IInput {
  placeholder: string;
  onChange: (text: string) => void;
  type: "username" | "emailAddress" | "none" | "nickname";
}

const Input: FC<IInput> = ({ placeholder, onChange, type }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[styles.textInput, isFocused && styles.inputFocused]}
      placeholder={placeholder}
      placeholderTextColor="rgba(189, 189, 189, 1)"
      onChangeText={onChange}
      textContentType={type}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};
const styles = StyleSheet.create({
  textInput: {
    margin: 0,
    height: 40,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderColor: "rgba(232, 232, 232, 1)",
    color: "black",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
  inputFocused: {
    borderColor: "rgba(255, 108, 0, 1)",
  },
});

export default Input;
