import { FC, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
interface IInputPass {
  placeholder: string;
  onChange: (text: string) => void;
  type?: string;
}
import { styles } from "./input.styles";

const InputPassword: FC<IInputPass> = ({ placeholder, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [visiblePass, setVisiblePass] = useState<boolean>(true);
  const handleChangeVisiblePass = () => {
    setVisiblePass((prev) => !prev);
  };

  return (
    <View style={styles.conteiner}>
      <TextInput
        style={[styles.textInput, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        placeholderTextColor="rgba(189, 189, 189, 1)"
        onChangeText={onChange}
        secureTextEntry={placeholder === "Пароль" && visiblePass}
        // textContentType="password"

        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {placeholder === "Пароль" && (
        <TouchableOpacity
          style={styles.textPass}
          onPress={handleChangeVisiblePass}
        >
          <Text>{visiblePass ? "Показати" : "Приховати"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputPassword;

// const styles = StyleSheet.create({
//   conteiner: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   textInput: {
//     flex: 1,
//     height: 40,
//     padding: 10,
//     fontSize: 16,
//   },
// });
