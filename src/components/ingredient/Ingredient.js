import { View, Text } from "react-native";
import style from "./ingredient.scss";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Ingredient({ Ingredientsindex, data }) {
  return (
    <View style={style.ind}>
      {Ingredientsindex(data).map((item, i) => {
        return (
          <View key={i} style={style.item}>
            <View
              style={{
                height: hp(1.5),
                width: hp(1.5),
                borderRadius: 999,
                backgroundColor: "#f1d537",
              }}
            />
            <View style={style.detail}>
              <Text
                style={{
                  fontWeight: "900",
                  color: "grey",
                  fontSize: hp(1.7),
                }}
              >
                {data[`strMeasure${item}`]}
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  color: "grey",
                  fontSize: hp(1.7),
                }}
              >
                {data[`strIngredient${item}`]}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
