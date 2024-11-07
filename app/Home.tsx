import { Image, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BodyParts from "@/components/BodyParts";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex  mt-10" edges={["top"]}>
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-row align-center justify-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-black "
          >
            Let's Start
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-tighter text-rose-800"
          >
            Our Workout
          </Text>
        </View>
      </View>

      <View className="flex-1 mt-20">
        <Text className="text-3xl font-semibold pl-10">Exercises </Text>

        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default Home;
