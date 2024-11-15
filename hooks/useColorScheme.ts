export { useColorScheme } from "react-native";
import { useTheme as useNavigationTheme } from "@react-navigation/native";
import { CustomTheme } from "interfaces/theme";

export const useCustomTheme = () => useNavigationTheme() as CustomTheme;
