import { Image, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Home = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-white flex items-center mt-10"
      edges={["top"]}
    >
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-black"
          >
            Let's Start
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-800"
          >
            Our Workout
          </Text>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default Home;
