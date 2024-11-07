import { Image, Text, View, TouchableOpacity, FlatList } from "react-native";
import fitness from "../constants/fitness";
import { useRouter } from "expo-router";

const FitnessCards = () => {
  const FitnessData = fitness;
  const router = useRouter();

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => router.push({ pathname: "/Exercises", params: item })}
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        flex: 1,
        marginHorizontal: 10,
      }}
      key={index}
    >
      <Image
        style={{ width: "90%", height: 150, borderRadius: 12 }}
        source={{ uri: item.image }}
      />
      <Text
        style={{
          position: "absolute",
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={FitnessData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ marginTop: 20, marginBottom: 20 }}
    />
  );
};

export default FitnessCards;
