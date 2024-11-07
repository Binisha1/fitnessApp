import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar barStyle={"light-content"} />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/gym4.jpg")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        style={{ width: wp(100), height: hp(100) }}
        className="flex justify-end pb-28 space-y-16"
      >
        <View className="flex items-center">
          <Text className="text-slate-300 font-bold tracking-wide text-5xl">
            Ready To Start Your
          </Text>
          <Text className="text-rose-800 font-bold tracking-wide text-5xl pt-3">
            Fitness Journey?
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => router.push("/Home")}
            style={{ height: hp(7), width: wp(60) }}
            className="bg-pink flex items-center justify-center mx-auto rounded-full border-2 border-red mt-8"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-wide"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
