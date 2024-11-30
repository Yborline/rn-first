import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "@components/input/SearchInput/SearchInput";
// import { FlatList } from "react-native-reanimated/lib/typescript/Animated";

const Publications = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.list}
        data={[{ id: "1" }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.id}</Text>}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Image />

            <View>
              <Text style={styles.title}> Welcome Back</Text>
              <Text style={styles.email}>email</Text>
            </View>
          </View>
        )}
      />
      <SearchInput placeholder="in" onChange={() => {}} />
      {/* <Text>Publications</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  list: {
    padding: 20,
  },
  title: {
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "Rubick",
  },
  email: {
    fontSize: 11,
    fontWeight: 400,
  },
});

export default Publications;
