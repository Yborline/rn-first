import { Stack, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@components/navigation/TabBarIcon";
import { Colors } from "@constants/Colors";
import { useColorScheme } from "@hooks/useColorScheme";
import Login from "./login";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isLoggedIn = true;

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
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
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
