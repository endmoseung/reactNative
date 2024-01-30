import { StatusBar, StyleSheet, View, FlatList } from "react-native";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { useState } from "react";
import GoalItem from "./components/page/app/GoalItem";
import GoalInput from "./components/page/app/GoalInput";
import Button from "./components/common/Button";

export default function App() {
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);
  const [goalText, setGoalText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const goalInputHandler = (enteredText: string) => {
    setGoalText(enteredText);
  };

  const addGoal = () => {
    setGoals((goals) => [
      ...goals,
      { text: goalText, id: Math.random().toString() },
    ]);
    setIsModalVisible(false);
  };

  const deleteGoal = (selectedGoalIndex: number) => {
    setGoals((goals) =>
      goals.filter((_, index) => index !== selectedGoalIndex)
    );
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <Button onPress={openModal} title={"add New Goal"} color={"#5e0acc"} />
      {
        <GoalInput
          goalText={goalText}
          isVisible={isModalVisible}
          goalInputHandler={(enteredText: string) =>
            goalInputHandler(enteredText)
          }
          resetGoalText={() => setGoalText("")}
          addGoal={addGoal}
        />
      }
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={({ item, index }) => {
            return (
              <GoalItem item={item} deleteGoal={() => deleteGoal(index)} />
            );
          }}
          keyExtractor={(item, index) => {
            return `${item.id}-${index}`;
          }}
          alwaysBounceVertical={false}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
    gap: 24,
  },

  listContainer: {
    flex: 5,
    width: "100%",
  },
});
