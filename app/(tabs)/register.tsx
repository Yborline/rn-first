import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  Button,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import startBg from "@assets/images/background/startBg.png";
import { useState } from "react";
import { TextInput } from "react-native";
import { Link } from "expo-router";
import Input from "@components/input/Input";
import InputPassword from "@components/input/InputPassword/InputPassword";
import * as ImagePicker from "expo-image-picker";
// import SvgComponent from "@assets/svg/add";
import SvgAdd from "@assets/svg/add";

const Register = () => {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
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
                {/* <InputPassword placeholder="Пароль" onChange={setPassword} /> */}
              </View>
              <TouchableOpacity style={styles.buttonAuth} onPress={handleLogin}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    fontFamily: "DMSerifItal",
  },
  image: {
    flex: 1,
  },
  textTitle: {
    fontSize: 30,
    lineHeight: 40,
    fontFamily: "Rubick",
    textAlign: `center`,
    paddingBottom: 33,
    // fontFamily: "DMSerifItal",
  },
  textInput: {
    margin: 0,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
  boxForm: {
    height: 549,
    width: `100%`,
    backgroundColor: `white`,
    paddingVertical: 92,
    paddingHorizontal: 16,
    paddingBottom: 45,
    paddingLeft: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  boxPhoto: {
    width: 120,
    height: 120,
    position: "absolute",
    top: -60,
    alignSelf: "center",
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 16,
    overflow: "hidden",
  },
  add: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  changeMargin: {
    marginBottom: Platform.OS === "ios" ? 60 : 30,
  },
  boxAboiding: {
    width: `100%`,
  },
  buttonAuth: {
    backgroundColor: `#FF6C00`,
    borderRadius: 100,

    height: 51,
    display: `flex`,
    justifyContent: "center",
    alignItems: `center`,
  },
  buttonText: {
    color: `white`,
  },
  linkText: {
    textAlign: `center`,
    marginTop: 16,
    color: `#1B4371`,
  },
  boxInput: {
    marginBottom: 43,
  },
});