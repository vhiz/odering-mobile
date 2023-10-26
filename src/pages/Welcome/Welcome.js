import { Image, Text, View } from "react-native";
import welcome from "./welcome.scss";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const load = useSharedValue(0);
  const load2 = useSharedValue(0);
  const navigate = useNavigation();

  useEffect(() => {
    load.value = 0;
    load2.value = 0;
    setTimeout(() => (load.value = withSpring(load.value + hp(4.5))), 100);
    setTimeout(() => (load2.value = withSpring(load2.value + hp(4))), 100);
    setTimeout(() => navigate.navigate("Home"),2500);
  }, []);
  return (
    <View style={welcome.welcome}>
      <StatusBar style="light" />
      <Animated.View
        style={[welcome.load, { borderRadius: 999, padding: load }]}
      >
        <Animated.View
          style={[welcome.load2, { borderRadius: 999, padding: load2 }]}
        >
          <Image
            style={[
              welcome.img,
              { borderRadius: 999, height: hp(30), width: hp(30) },
            ]}
            source={require("../../../assets/food.jpg")}
          />
        </Animated.View>
      </Animated.View>
      <View style={welcome.desc}>
        <Text style={[welcome.title, { fontSize: hp(8) }]}>Foody</Text>
        <Text style={[welcome.p, { fontSize: hp(2) }]}>
          Food is always right
        </Text>
      </View>
    </View>
  );
}
