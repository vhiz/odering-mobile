import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import style from "./recipie.scss";
import { StatusBar } from "expo-status-bar";
import { Image } from "@rneui/themed";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
  Square3Stack3DIcon,
} from "react-native-heroicons/outline";
import { HeartIcon, UsersIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../components/loading/Loading";
import Desc from "../../components/Desc/Desc";
import Ingredient from "../../components/ingredient/Ingredient";
import Video from "../../components/video/Video";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

export default function Recipie(props) {
  const { idMeal, strMealThumb } = props.route.params;
  const [like, setlike] = useState(false);
  const navigate = useNavigation();

  const { error, isLoading, data } = useQuery(["reciep", idMeal], async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    return res.data.meals[0];
  });

  const Ingredientsindex = (meal) => {
    if (!meal) return [];
    let indexes = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        indexes.push(i);
      }
    }

    return indexes;
  };

  return (
    <ScrollView
      style={style.recipie}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style="light" />
      <View style={style.top}>
        <Animated.Image
          source={{ uri: strMealThumb }}
          style={{
            width: hp(49),
            height: hp(50),
            borderRadius: 35,
            objectFit: "contain",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            marginTop: 5,
          }}
          sharedTransitionTag={strMealThumb}
        />
      </View>
      <Animated.View entering={FadeIn.delay(200).duration(1000)} style={style.buttonContainer}>
        <TouchableOpacity style={style.touch} onPress={() => navigate.goBack()}>
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={3.5} color={"#fbbf24"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.touch, { marginRight: 7 }]}
          onPress={() => setlike((pre) => !pre)}
        >
          <HeartIcon
            size={hp(3.5)}
            strokeWidth={3.5}
            color={like ? "tomato" : "lightgray"}
          />
        </TouchableOpacity>
      </Animated.View>
      {isLoading ? (
        <Loading size={"large"} style={{ marginTop: 60 }} />
      ) : (
        <View style={style.desc}>
          <Animated.View entering={FadeInDown.duration(700).springify().damping(12)} style={style.descContainer}>
            <Text style={[{ fontSize: hp(3) }, style.name]}>
              {data?.strMeal}
            </Text>
            <Text style={[{ fontSize: hp(2) }, style.area]}>
              {data?.strArea}
            </Text>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)}  style={style.misc}>
            <Desc text={"min"} icon={ClockIcon} num={20} />
            <Desc text={"serving"} icon={UsersIcon} num={"03"} />
            <Desc text={"Calc"} icon={FireIcon} num={103} />
            <Desc text={"Easy"} icon={Square3Stack3DIcon} num={""} />
          </Animated.View> 
          <Animated.View  entering={FadeInDown.delay(200).duration(700).springify().damping(12)} style={{ marginTop: 10 }}>
            <Text style={[{ fontSize: hp(2.5) }, style.in]}>Ingredients</Text>
            <Ingredient Ingredientsindex={Ingredientsindex} data={data} />
          </Animated.View>
          <Animated.View  entering={FadeInDown.delay(300).duration(700).springify().damping(12)} style={{ marginTop: 10 }}>
            <Text style={[{ fontSize: hp(2.5) }, style.in]}>Instructions</Text>
            <Text
              style={{
                fontSize: hp(1.6),
                color: "grey",
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              {data.strInstructions}
            </Text>
          </Animated.View>

          {data.strYoutube && <Video src={data.strYoutube} />}
        </View>
      )}
    </ScrollView>
  );
}
