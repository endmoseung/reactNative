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
    if (goalText.length === 0) return;
    setGoals((goals) => [
      ...goals,
      { text: goalText, id: Math.random().toString() },
    ]);
    setIsModalVisible(false);
    setGoalText("");
  };

  const deleteGoal = (selectedGoalIndex: number) => {
    setGoals((goals) =>
      goals.filter((_, index) => index !== selectedGoalIndex)
    );
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header />
        <Button onPress={openModal} title={"add New Goal"} color={"#b780ff"} />
        {
          <GoalInput
            goalText={goalText}
            isVisible={isModalVisible}
            closeModal={closeModal}
            goalInputHandler={(enteredText: string) =>
              goalInputHandler(enteredText)
            }
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
    </>
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
    gap: 24,
  },

  listContainer: {
    flex: 5,
    width: "100%",
  },
});
