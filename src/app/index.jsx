import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExerciseListItem from "../components/ExerciseListItem";

export default function App() { 

  return (
    <View style={styles.container}>
      {/* Use a FlatList component to display a list of exercises */}
      <FlatList
        // Passing our json object to the flatlist 
        data={exercises}
        // Adding some gap between each list item
        contentContainerStyle={{gap: 5}}
        // Since the objects in the json file doesn't have a key or a id properties, we'll define a unique key for each item, combining the values of name and index
        keyExtractor={(item, index) => item.name + index}
        // This props is an object containing the keys {item, index, separators}, where "item" is the object from the array we want to display
        renderItem={(props) => {
          return (
            <ExerciseListItem item={props.item}/>
          );
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});