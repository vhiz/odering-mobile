import { View, Text } from "react-native";
import style from "./video.scss";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import YoutubePlayer from "react-native-youtube-iframe";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Video({ src }) {
  const getVideo = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    if (match) {
      return match[1];
    }
    return null;
  };
  return (
    <Animated.View style={style.video}  entering={FadeInDown.delay(400).duration(700).springify().damping(12)}>
      <Text
        style={{
          fontSize: hp(2.5),
          flex: 1,
          fontWeight: "bold",
          color: "grey",
        }}
      >
        Recipe Video
      </Text>
      <YoutubePlayer
        height={hp(30)}
        // play={playing}
        videoId={getVideo(src)}
        // onChangeState={onStateChange}
      />
    </Animated.View>
  );
}
