import { Theme } from "@react-navigation/native";

export interface CustomTheme extends Theme {
  text: string;
  tint: string;
  tintInactive: string;
  tabsBack: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
}
