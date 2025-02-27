import React from "react";
import { SafeAreaView } from "react-native";
import AppNavigation from "./src/navigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#171717" }}>
      <AppNavigation />
    </SafeAreaView>
  );
}
