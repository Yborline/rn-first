import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  svgRotate: {
    transform: [{ rotate: "45deg" }],
  },
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
