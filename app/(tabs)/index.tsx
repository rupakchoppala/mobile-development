import Basics from "@/components/ui/Basics";
import ScrollViewComponent from "@/components/ui/ScrollView";
import StylingDemo from "@/components/ui/Styling";
import TextInputComponent from "@/components/ui/TextInput";
import React, { JSX, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* Outer ScrollView for Basics + TextInput + ScrollViewComponent */}
      <ScrollView
        style={styles.outerScroll}
        contentContainerStyle={styles.outerContent}
        nestedScrollEnabled={true}
      >
        <Basics />
        <TextInputComponent />
        <ScrollViewComponent />
        <StylingDemo/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make container take full screen
    backgroundColor: "#f2f2f2",
  },
  outerScroll: {
    flex: 1,
  },
  outerContent: {
    padding: 16,
  },
});
