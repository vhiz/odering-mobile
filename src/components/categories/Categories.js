import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import cat from "./cat.scss";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";


export default function Categories({ setActive, Active, categories }) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={cat.cat}
      >
        {categories.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={cat.item}
              onPress={() => setActive(item.strCategory)}
            >
              <View
                style={[
                  cat.it,
                  {
                    backgroundColor:
                      item.strCategory === Active ? "#f7ae27" : "#6666661f",
                  },
                ]}
              >
                <Image
                  source={{
                    uri: item.strCategoryThumb,
                  }}
                  style={[{ width: hp(6), height: hp(6) }, cat.img]}
                />
              </View>
              <Text style={[cat.p, { fontSize: hp(1.6) }]}>{item.strCategory}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
