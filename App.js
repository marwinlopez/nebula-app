import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import Navigation from "./navigation";
import PlayScreen from "./screens/PlayScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
      <PlayScreen />
    </SafeAreaProvider>
  );
}
