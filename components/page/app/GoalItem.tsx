import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface GoalItemProps {
  item: { text: string; id: string };
  deleteGoal?: () => void;
}

const GoalItem = ({ item, deleteGoal }: GoalItemProps) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: "#1f0244" }}
        onPress={deleteGoal}
      >
        <View style={styles.goalContainer}>
          <Text style={styles.goalText}>{item.text}</Text>
          <Text>Delete</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  goalContainer: {
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: "white",
  },
});
