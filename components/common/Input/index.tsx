import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = () => {
  const [inputs, onChangeInputs] = useState("");
  return (
    <TextInput
      style={styles.input}
      value={inputs}
      onChangeText={onChangeInputs}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderColor: "red",
    borderWidth: 1,
    padding: 16,
  },
});
