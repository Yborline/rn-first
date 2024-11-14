/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    ...DefaultTheme,
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    tintInactive: "#6d5fa1",
    tabsBack: "#fff",
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    ...DarkTheme,
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    tintInactive: "#cca5e1",
    tabsBack: "#322c4c",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
