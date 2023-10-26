import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import style from "./recipe.scss";
import MasonryList from "@react-native-seoul/masonry-list";
import { catData } from "../../../data";
import RecepieCard from "../RecepieCard/RecepieCard";
import Loading from "../loading/Loading";

export default function Recepies({ isLoading, recepie, recepieLoad }) {
  return (
    <View style={style.recepie}>
      <Text style={[{ fontSize: hp(3) }, style.text]}>Recepies</Text>
      <View>
        {isLoading || recepieLoad ? (
          <Loading size="large" style={{ marginTop: 100 }} />
        ) : (
          <MasonryList
            data={recepie}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => <RecepieCard item={item} index={i} />}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </View>
  );
}
