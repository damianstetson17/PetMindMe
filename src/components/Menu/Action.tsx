import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "../../styles/Colors";
import { GlobalStyles } from "../../styles/GlobalStyles";

type Props = {
  icon?: ReactNode;
  title?: string;
  onPress?(): void;
};

const Action = ({ icon, title, onPress }: Props) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Action;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.lightGray,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 90,
    height: 110,
  },
  title: {
    ...GlobalStyles.text,
    textAlign: "center",
    marginTop: 15
  },
});
