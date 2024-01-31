import React, { useEffect } from "react";
import {
  Button,
  Keyboard,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";

interface GoalInputProps {
  goalText: string;
  isVisible: boolean;
  closeModal?: () => void;
  goalInputHandler: (enteredText: string) => void;
  addGoal?: () => void;
}

const GoalInput = ({
  goalText,
  isVisible,
  closeModal,
  goalInputHandler,
  addGoal,
}: GoalInputProps) => {
  const handlePressAddGoal = () => {
    addGoal && addGoal();
  };

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await fetch(
          "https://pokeapi.co/api/v2/pokemon/ditto"
        ).then((data) => console.log(data));
      } catch (error) {}
    };
    getPokemon();
  }, []);

  return (
    <Modal visible={isVisible} animationType="slide">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.modalContainer}>
          <View />
          <View style={styles.contentsContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/image/nativeImage.png")}
            />

            <View style={styles.inputContainer}>
              <TextInput
                value={goalText}
                onChangeText={goalInputHandler}
                style={styles.textInput}
                placeholder="insert your goal!"
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.button}>
              <Button
                color="#b180f0"
                onPress={handlePressAddGoal}
                title={"Add Goal"}
              />
            </View>
            <View style={styles.button}>
              <Button color={"#f31282"} onPress={closeModal} title={"cancel"} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 50,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    backgroundColor: "#311b6b",
  },

  row: {
    flexDirection: "row",
    gap: 16,
  },

  button: {
    flex: 1,
  },

  contentsContainer: {
    alignItems: "center",
    gap: 16,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    alignItems: "center",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "70%",
    padding: 16,
  },

  image: {
    width: 100,
    height: 100,
  },
});
