import { View, Text, Pressable } from "react-native";
import React from "react";
import style from "./card.scss";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function RecepieCard({ index, item }) {
  const navigate = useNavigation();

  return (
    <Animated.View
      entering={FadeInDown.delay(index + 100)
        .duration(600)
        .springify()
        .damping(20)}
    >
      <Pressable
        style={[
          style.card,
          {
            paddingLeft: index % 2 === 0 ? 0 : 8,
            paddingRight: index % 2 === 0 ? 0 : 8,
          },
        ]}
        onPress={() => navigate.navigate("Recepie", { ...item })}
      >
        <Animated.Image
          source={{ uri: item.strMealThumb }}
          style={[
            {
              width: "100%",
              height: index % 3 === 0 ? hp(27) : hp(35),
              borderRadius: 35,
            },
            style.img,
          ]}
          sharedTransitionTag={item.strMealThumb}
        />
        <Text style={[style.text, { fontSize: hp(1.5) }]}>
          {item.strMeal.length > 20
            ? item.strMeal.slice(0, 20) + "..."
            : item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
}
