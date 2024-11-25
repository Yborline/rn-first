import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { useColorScheme } from "@hooks/useColorScheme";
import { Colors } from "@constants/Colors";
import { StatusBar } from "expo-status-bar";
import { Provider } from "Provider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loadedFonts, error] = useFonts({
    DMSerifItal: require("../assets/fonts/DMSerif/DMSerifText-Italic.ttf"),
    DMSerifReg: require("../assets/fonts/DMSerif/DMSerifText-Regular.ttf"),
    Rubick: require("../assets/fonts/Rubick/RubikWetPaint-Regular.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (loadedFonts) {
      SplashScreen.hideAsync();
    }
  }, [loadedFonts, error]);

  if (!loadedFonts && !error) {
    return null;
  }

  return (
    <Provider>
      <ThemeProvider
        value={colorScheme === "dark" ? Colors.dark : Colors.light}
      >
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style={colorScheme === "dark" ? "dark" : "light"} />
      </ThemeProvider>
    </Provider>
  );
}
