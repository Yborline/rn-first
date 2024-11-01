import { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Touchable,
  View,
} from "react-native";
interface IInputPass {
  placeholder: string;
  onChange: (text: string) => void;
}

const InputPassword: FC<IInputPass> = ({ placeholder, onChange }) => {
  const [visiblePass, setVisiblePass] = useState<boolean>(true);
  const handleChangeVisiblePass = () => {
    setVisiblePass((prev) => !prev);
  };

  return (
    <View style={styles.conteiner}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={visiblePass}
        textContentType="password"
        autoComplete="off"
      />
      <TouchableOpacity onPress={handleChangeVisiblePass}>
        <Text>{visiblePass ? "Показати" : "Приховати"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputPassword;

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    padding: 10,
    fontSize: 16,
  },
});
