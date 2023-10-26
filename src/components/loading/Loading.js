import { View, Text, ActivityIndicator } from "react-native";
import style from "./load.scss";

export default function Loading({ size, style }) {
  return (
    <View style={style.loading}>
      <ActivityIndicator size={size} style={style} />
    </View>
  );
}
