import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useMarkers } from "../+hooks/useMarkers";

export const Markers = () => {
  const { data, loading, error } = useMarkers();

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading!</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>This is the markers view!</Text>
      {data &&
        data.markers.map((item) => (
          <Text key={item._id}>- {item.english.name}</Text>
        ))}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
