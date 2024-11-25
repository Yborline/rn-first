import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Text,
  View,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { createUser } from "@lib/appwrite";
import startBg from "@assets/images/background/startBg.png";
import { useState } from "react";
import { Link, router } from "expo-router";
import Input from "@components/input/Input";
import * as ImagePicker from "expo-image-picker";
// import SvgComponent from "@assets/svg/add";
import { styles } from "../styles/auth/register";
import SvgAdd from "@assets/svg/add";

const Register = () => {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmiting, setSubmiting] = useState<boolean>(false);

  const handleRegister = async () => {
    if (!name || !password || !image) {
      Alert.alert("Error", "Please fill in all the fields");
    }
    setSubmiting(true);
    try {
      const result = await createUser(email, password, name, image);
      router.replace("/(tabs)/profile");
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message); // Accessing 'message' safely
      } else {
        Alert.alert("Error", "Unknown error occurred");
      }
    } finally {
      setSubmiting(false);
    }

    Alert.alert("Credentials", `${name} + ${password}`);
  };

  const pickImage = async () => {
    // Запит дозволу на доступ до галереї
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Потрібен доступ до галереї!");
        return;
      }
    }

    // Вибір фото
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  console.log(image);
  return (
    <ImageBackground source={startBg} style={styles.image}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={-200}
            style={styles.boxAboiding}
            behavior={"padding"}
          >
            <View style={styles.boxForm}>
              <View onTouchStart={pickImage} style={styles.boxPhoto}>
                <ImageBackground
                  style={{ width: "100%", height: "100%" }}
                  source={image ? { uri: image } : undefined}
                >
                  <SvgAdd
                    rotate={Boolean(image)}
                    fill={image ? "gray" : "orange"}
                  />
                  {/* <SvgComponent style={styles.add} fill="gray" /> */}
                </ImageBackground>
              </View>
              <View style={styles.boxInput}>
                <Text style={styles.textTitle}>Реєстрація</Text>
                <Input
                  type="nickname"
                  placeholder="Ваш логін"
                  onChange={setName}
                />
                <Input
                  type="emailAddress"
                  placeholder="Ваша електронна адреса"
                  onChange={setEmail}
                />
                <Input placeholder="Пароль" onChange={setPassword} />
              </View>
              <TouchableOpacity
                style={styles.buttonAuth}
                onPress={handleRegister}
              >
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
              <Link href="/login" style={styles.linkText}>
                Вже є акаунт? Увійти
              </Link>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default Register;
