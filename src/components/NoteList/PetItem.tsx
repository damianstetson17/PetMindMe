import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { PetItemType } from "../../types";

interface Props {
  petData: PetItemType;
}

const PetItem = ({ petData }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.name, { color: petData.color }]}>
        {petData.name}
      </Text>
      <Text style={GlobalStyles.text}>{petData.emoji}</Text>
    </TouchableOpacity>
  );
};

export default PetItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#f0f0ec",
    paddingHorizontal: 6,
  },
  name: {
    ...GlobalStyles.text,
    marginRight: 5,
  },
});
