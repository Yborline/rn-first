import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  conteiner: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "transparent",
    borderWidth: 0,
    position: "relative",
    display: "flex",
    flexDirection: "row",
  },
  textInput: {
    margin: 0,
    height: 40,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderColor: "rgba(232, 232, 232, 1)",
    color: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
  inputFocused: {
    borderColor: "rgba(255, 108, 0, 1)",
  },
  textPass: {
    position: "absolute",
    right: 10,
    alignSelf: "center",
  },
});
