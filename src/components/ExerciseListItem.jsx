import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";

// Here we are destructuring props to get it's "item" value directly
export default function ExerciseListItem({item}) {
  return (
    // Define route for when item is clicked. It will be the name of the exercise. The asChild prop means that the link will not create it's own pressable component, but use the child Pressable component instead
    // Since we're using expo router, when link is clicked, our file named [name].js will dinamically be called with the route we passed to href
    <Link href={`/${item.name}`} asChild>
      <Pressable style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subItem}>{item.muscle} | </Text>
          <Text style={styles.subItem}>{item.equipment} </Text>
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.41,

    elevation: 5,
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
});
