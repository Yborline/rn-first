import { FC, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { styles } from "./input.styles";
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

export default Input;
