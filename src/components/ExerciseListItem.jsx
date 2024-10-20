import { StyleSheet, Text, View, FlatList } from "react-native";

export default function ExerciseListItem({ item }) {
  console.log({ item });
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subItem}>{item.muscle} | </Text>
        <Text style={styles.subItem}>{item.equipment} </Text>
      </Text>
    </View>
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
