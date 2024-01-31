import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View>
      <Text style={styles.title}>푸터</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
});
