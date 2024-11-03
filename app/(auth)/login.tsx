import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  View,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import startBg from "@assets/images/background/startBg.png";
import { useState } from "react";
import { Link } from "expo-router";
import Input from "@components/input/Input";
import InputPassword from "@components/input/InputPassword/InputPassword";
import { styles } from "../styles/login";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    Alert.alert("Credentials", `${email} + ${password}`);
  };

  return (
    <ImageBackground source={startBg} style={styles.image}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.conteiner}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={-70}
            style={styles.boxAboiding}
            behavior={"padding"}
          >
            <View style={styles.boxForm}>
              <View style={styles.boxInput}>
                <Text style={styles.textTitle}>Увійти</Text>
                <Input
                  type="emailAddress"
                  placeholder="Ваша електронна адреса"
                  onChange={setEmail}
                />
                <InputPassword placeholder="Пароль" onChange={setPassword} />
              </View>
              <TouchableOpacity style={styles.buttonAuth} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <Link href="./register" style={styles.linkText}>
                Немає акаунту? Зареєструватися
              </Link>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default Login;
