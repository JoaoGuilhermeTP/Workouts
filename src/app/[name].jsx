// Import necessary components from react-native
import { View, Text, StyleSheet, ScrollView } from "react-native";
// Import hook to access URL parameters
import { useLocalSearchParams } from "expo-router";
// Import our JSON file containing exercise data
import exercises from "../../assets/data/exercises.json";
import { Stack } from "expo-router";

export default function ExerciseDetailsScreen() {
  // Get URL parameters (in this case, the 'name' parameter from [name].js)
  const params = useLocalSearchParams();
  console.log(params);

  // Find the exercise in our data that matches the name from the URL. The find() method returns the first element that matches the condition
  const exercise = exercises.find((item) => item.name == params.name);
  if (!exercise) {
    return <Text>Exercício não encontrado</Text>;
  } else {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen options={{ title: exercise.name }} />
        <View style={styles.panel}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.exerciseSubtitle}>
            <Text style={styles.subItem}>{exercise.muscle} | </Text>
            <Text style={styles.subItem}>{exercise.equipment} </Text>
          </Text>
        </View>

        <View style={styles.panel}>
            <Text style={styles.instructions}>{exercise.instructions}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10
  },
  panel: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  subItem: {
    textTransform: "capitalize",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
});
