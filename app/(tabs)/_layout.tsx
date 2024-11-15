import { Stack, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@components/navigation/TabBarIcon";
import { Colors } from "@constants/Colors";
import { useColorScheme, useCustomTheme } from "@hooks/useColorScheme";
import Feather from "@expo/vector-icons/Feather";
import { Image, Text, View } from "react-native";
import saveIcon from "../../assets/images/icons/bookmark.png";
import { useTheme } from "@react-navigation/native";

// const TabIcon = ({ icon, color, name, focused }) => {
//   return (
//     <View>
//       <Image
//         source={icon}
//         resizeMode="contain"
//         tintColor={color}
//         className="w-6 h-6"
//       />
//       <Text className={`${focused ? "font-extrabold" : "font-normal"}`}>
//         {name}
//       </Text>
//     </View>
//   );
// };

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const theme = useCustomTheme();
  console.log(theme);
  const isLoggedIn = true;
  return (
    <Tabs
      initialRouteName="publications"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: theme.tintInactive,
        tabBarStyle: {
          backgroundColor: theme.tabsBack,
        },
        headerShown: false,
      }}
    >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="publications"
        options={{
          title: "Публікації",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            console.log(color);
            return (
              <TabBarIcon name={focused ? "apps" : "apps"} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Створити",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            // <TabIcon
            //   icon={saveIcon}
            //   color={"red"}
            //   name="Публікації"
            //   focused={focused}
            // />
            <TabBarIcon name={focused ? "add" : "add"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профіль",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Feather name={focused ? "user" : "user"} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
