import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setNewPetData } from "../../store/slices/notesSlice";
import { PetItemType } from "../../types";

const PetSelector = () => {
  const dispatch = useAppDispatch();
  let pets = useAppSelector((state) => state.notes.pets);

  let newPetData = useAppSelector((state) => state.notes.newPetData);
  const [index, setIndex] = useState(0);
  const [pet, setPet] = useState<PetItemType>();

  //needed for have the last updated values
  useEffect(() => {
    setPet(pets[index]);
    if (pet) {
      dispatch(setNewPetData({ ...newPetData, id: pet.id }));
    }
  }, [index, pet]);

  const changeNextEmoji = () => {
    //reset index
    if (index >= pets.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => changeNextEmoji()}
      style={styles.container}
    >
      <Text style={[styles.title, { marginRight: 5 }]}>{pets[index].name}</Text>
      <Text style={GlobalStyles.text}>{pets[index].emoji}</Text>
    </TouchableOpacity>
  );
};

export default PetSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#f0f0ec",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    ...GlobalStyles.text,
  },
});
