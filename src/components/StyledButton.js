import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { green, white } from "../utils/colors";

const StyledButton = ({ children, onPress, style = {} }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={[styles.reset, style]}>{children}</Text>
  </TouchableOpacity>
);

export default StyledButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: green,
    margin: 10,
    padding: 15,
    width: 300
  },
  reset: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: white
  }
});