import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "../../styles/Colors";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { useAppSelector } from "../../store/store";
import { ScreensNames } from "../../types";

type Props = {
  icon?: ReactNode;
  title?: string;
  onPress?(): void;
  screenName: ScreensNames;
};

const Action = ({ icon, title, onPress, screenName }: Props) => {
  let currentScreen = useAppSelector((state) => state.notes.currentScreen);
  const isCurrentScreen = screenName === currentScreen;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isCurrentScreen
          ? [styles.container, { borderColor: "black" }]
          : styles.container
      }
    >
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
    marginTop: 15,
  },
});
