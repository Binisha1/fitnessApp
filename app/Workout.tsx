import { Text } from "react-native";
import { Image, TouchableOpacity, View } from "react-native";

let exercises = [
  {
    id: "90",
    image:
      "https://media1.popsugar-assets.com/files/thumbor/f2sbzQY1h1zqiGEV9Mhr1IAcFMU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/03/13/796/n/1922729/19cf2a4428446429_EXAMPLE.crossjacks.gif",
    name: "JUMPING JACKS",
    sets: 12,
  },
  {
    id: "91",
    image:
      "https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif",
    name: "MOUNTAIN CLIMBERS",
    sets: 10,
  },
  {
    id: "92",
    image:
      "https://i.pinimg.com/originals/f4/b0/f3/f4b0f3093fcadd64968e4c46d1767b50.gif",
    name: "HEEL TOUCH",
    sets: 20,
  },
  {
    id: "94",
    image:
      "https://i.pinimg.com/originals/cf/b5/67/cfb5677a755fe7288b608a4fec6f09a0.gif",
    name: "PLANK",
    sets: 10,
  },
  {
    id: "95",
    image:
      "https://www.gymguider.com/wp-content/uploads/2017/10/straight-leg-raise.gif",
    name: "LEG RAISES",
    sets: 14,
  },
];

export default function Workout() {
  return (
    <View>
      {exercises.length > 0 ? (
        exercises.map((item, index) => (
          <TouchableOpacity
            style={{
              marginVertical: 12,
              marginHorizontal: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            key={index}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 90, height: 90 }}
                source={{ uri: item.image }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text style={{ marginTop: 4, fontSize: 16, color: "gray" }}>
                  Sets: {item.sets}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No exercises available</Text>
      )}
    </View>
  );
}
