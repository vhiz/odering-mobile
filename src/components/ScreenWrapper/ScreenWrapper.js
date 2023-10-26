import { View, Text, StatusBar, Platform } from "react-native";
import React from "react";

export default function ScreenWrapper({ children }) {
  let statusBar = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : (Platform.OS = "ios" ? 30 : 0);
  return <View style={{ paddingTop: statusBar }}>{children}</View>;
}
