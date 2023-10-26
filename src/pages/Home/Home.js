import { View, Text, ScrollView, Image, TextInput } from "react-native";
import home from "./home.scss";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Icons from "react-native-heroicons/outline";

import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Recepies from "../../components/recepies/Recepies";
import Categories from "../../components/categories/Categories";
import Loading from "../../components/loading/Loading";

export default function Home() {
  const [Active, setActive] = useState("Beef");

  const { error, isLoading, data } = useQuery(["cat"], async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return res.data.categories;
  });
  const { isLoading: recepieLoad, data: recepie } = useQuery(
    ["recipie", Active],
    async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Active}`
      );
      return res.data.meals;
    }
  );

  return (
    <View style={home.home}>
      <StatusBar style="light" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
        style={home.scroll}
      >
        <View style={home.head}>
          <Image
            source={require("../../../assets/avatar.jpg")}
            style={{
              objectFit: "cover",
              width: hp(5),
              height: hp(5.5),
              borderRadius: 999,
            }}
          />
          <Icons.BellIcon size={hp(4)} color="gray" />
        </View>
        <View style={home.greet}>
          <Text style={[{ fontSize: hp(2) }, home.p]}>Hello, Vhiz</Text>
          <View>
            <Text style={[home.p2, { fontSize: hp(3.8) }]}>
              Make your own food,
            </Text>
          </View>
          <Text style={[{ fontSize: hp(3.8) }, home.p2]}>
            stay at <Text style={{ color: "#f7ae27" }}>home</Text>
          </Text>
        </View>
        <View style={home.searchContainer}>
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor="gray"
            style={[{ fontSize: hp(1.7) }, home.input]}
          />
          <View style={home.search}>
            <Icons.MagnifyingGlassCircleIcon
              size={hp(4.5)}
              strokeWidth={1}
              color="gray"
              onPress={() => console.warn("open")}
            />
          </View>
        </View>
        {isLoading ? (
          <Loading size="small" style={{ marginTop: 10 }} />
        ) : (
          <View>
            <Categories
              categories={data}
              setActive={setActive}
              Active={Active}
            />
          </View>
        )}

        <View>
          <Recepies
            recepieLoad={recepieLoad}
            recepie={recepie}
            isLoading={isLoading}
          />
        </View>
      </ScrollView>
    </View>
  );
}
