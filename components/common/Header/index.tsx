import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View>
      <Text style={styles.title}>헤더</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
});
