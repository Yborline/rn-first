import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { useUserContext } from "@context/useUser";

const Index = () => {
  const { isLoading, isLoggedIn } = useUserContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/(tabs)/profile" />;
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Text>index</Text>
        <Link href={"/(auth)/login"}>REGISTER</Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
