import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  conteiner: {
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
    width: "100%",
    objectFit: "fill",
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
    height: 375,
    width: `100%`,
    backgroundColor: `white`,
    paddingVertical: 32,
    paddingHorizontal: 16,
    paddingBottom: 45,
    paddingLeft: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
