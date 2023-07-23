import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import { Colors } from "../../styles/Colors";
import { GlobalStyles } from "../../styles/GlobalStyles";

type Props = {
  title: string;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  onPress?(): void;
};

const RoundedButton = ({ title, onPress, buttonStyle, titleStyle }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle]}>
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryBlack,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    ...GlobalStyles.text,
    color: "white",
  },
});
