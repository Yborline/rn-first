import { Theme } from "@react-navigation/native";

export interface CustomTheme extends Theme {
  colors: Theme["colors"] & {
    tint: string;
    tintInactive: string;
    tabsBack: string;
    icon: string;
    tabIconDefault: string;
    tabIconSelected: string;
  };
}
