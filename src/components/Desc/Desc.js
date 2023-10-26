import { View, Text } from "react-native";
import style from "./desc.scss";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Desc({ icon, num, text }) {
  return (
    <View style={style.mis}>
      <View style={[{ height: hp(6.5), width: hp(6.5) }, style.icon]}>
        {icon({ size: hp(4), strokeWidth: 2.5, color: "gray" })}
      </View>
      <View style={style.textContainer}>
        <Text
          style={{
            fontSize: hp(2),
            fontWeight: "bold",
            color: "grey",
            marginTop: 10,
          }}
        >
          {num}
        </Text>
        <Text
          style={{
            fontSize: hp(1.3),
            fontWeight: "bold",
            color: "grey",
            marginTop: 3,
          }}
        >
          {text}
        </Text>
      </View>
    </View>
  );
}
