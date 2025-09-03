import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function ScrollViewComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Nested ScrollView Component</Text>

      {/* Inner ScrollView */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {Array.from({ length: 100 }).map((_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>Item {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
    textDecorationLine: "underline",
  },
  scrollView: {
    height: 250, // Fixed height for inner ScrollView
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  scrollViewContent: {
    padding: 10,
    alignItems: "center",
  },
  box: {
    height: 40,
    width: "100%",
    backgroundColor: "#3498db",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ScrollViewComponent;
