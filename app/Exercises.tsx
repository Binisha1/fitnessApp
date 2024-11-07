import fitness from "@/constants/fitness";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Define types for exercise data
interface Exercise {
  id: string;
  image: string;
  name: string;
  sets: number;
}

interface WorkoutParams {
  exercises: Exercise[]; // Ensure exercises is typed as an array of Exercise objects
  name: string;
  description: string;
  image: string;
}

const Exercises = () => {
  // Ensure the typing for exercises is correct
  const { id } = useLocalSearchParams();

  const [exercise, setExercise] = useState<WorkoutParams | undefined>();

  useEffect(() => {
    const item = fitness.find((item) => item.id === id);
    setExercise(item);
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar barStyle={"light-content"} />
      {/* Displaying the workout details */}
      {exercise?.image ? (
        <Image
          source={{ uri: exercise.image }}
          style={{ width: "100%", height: 250, borderRadius: 12 }}
        />
      ) : null}
      <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 20 }}>
        {exercise?.name}
      </Text>
      <Text style={{ fontSize: 16, color: "#666", marginBottom: 20 }}>
        {exercise?.description}
      </Text>

      {/* Displaying exercises if available */}
      {exercise?.exercises?.length ? (
        exercise?.exercises?.map((item, index) => (
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
    </ScrollView>
  );
};

export default Exercises;
