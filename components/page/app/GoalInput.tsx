import React from "react";
import {
  Button,
  Keyboard,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface GoalInputProps {
  goalText: string;
  isVisible: boolean;
  goalInputHandler: (enteredText: string) => void;
  resetGoalText: () => void;
  addGoal?: () => void;
}

const GoalInput = ({
  goalText,
  isVisible,
  goalInputHandler,
  resetGoalText,
  addGoal,
}: GoalInputProps) => {
  const handlePressAddGoal = () => {
    addGoal && addGoal();
    resetGoalText();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <TextInput
            value={goalText}
            onChangeText={goalInputHandler}
            style={styles.textInput}
            placeholder="insert your goal!"
          />
        </TouchableWithoutFeedback>
        <Button onPress={handlePressAddGoal} title={"Add Goal"} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    alignItems: "center",
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
  },
});
