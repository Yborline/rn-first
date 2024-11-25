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
import { Link, router } from "expo-router";
import Input from "@components/input/Input";
import { styles } from "../styles/auth/login";
import { signIn } from "@lib/appwrite";
import { useUserContext } from "@context/useUser";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmiting, setSubmiting] = useState<boolean>(false);
  const { isLoggedIn } = useUserContext();
  console.log(isLoggedIn);

  const handleLogin = async () => {
    if (!password || !email) {
      Alert.alert("Error", "Please fill in all the fields");
    }
    setSubmiting(true);
    try {
      await signIn(email, password);
      router.replace("/(tabs)/profile");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message); // Accessing 'message' safely
      } else {
        Alert.alert("Error", "Unknown error occurred");
      }
    } finally {
      setSubmiting(false);
    }
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
                <Input placeholder="Пароль" onChange={setPassword} />
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
