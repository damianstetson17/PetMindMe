import { StyleSheet, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../styles/Colors";

type Props = {
  size?: number;
  color?: string;
  icon?: ReactNode;
  onPress?(): void;
};

const CloseButton = ({ size, color, onPress, icon }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container]}
    >
      {icon ?? (
        <Ionicons name="md-close-outline" size={size ?? 28} color={color} />
      )}
    </TouchableOpacity>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray,
    borderRadius: 30,
    paddingHorizontal: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
