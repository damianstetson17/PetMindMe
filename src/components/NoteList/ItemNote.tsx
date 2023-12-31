import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Colors } from "../../styles/Colors";
import { ItemNoteType, PetItemType } from "../../types";
import PetItem from "./PetItem";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { deleteNote } from "../../store/slices/notesSlice";

const ItemNote = ({ id, description, date, petId }: ItemNoteType) => {
  const dispatch = useAppDispatch()
  let petData = useAppSelector((state) => state.notes.pets).find(
    (pet: PetItemType) => pet.id === petId
  );
  let screenName = useAppSelector((state) => state.notes.currentScreen)
  
  //delete note from list by current screen
  const handleDeleteNote = () => {
    dispatch(deleteNote({id, screenName}))
  }

  const emptyPet: PetItemType = {
    id: -1,
    name: "   ?   ",
    color: "",
    emoji: "🤔",
  };

  return (
    <TouchableOpacity onLongPress={handleDeleteNote} style={styles.container}>
      <Text style={[GlobalStyles.text, styles.description]}>{description}</Text>
      <View style={styles.bottom}>
        {petData ? (
          <PetItem petData={petData} />
        ) : (
          <PetItem petData={emptyPet} />
        )}
        <Text style={[GlobalStyles.text, styles.date]}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 10,
  },
  description: {
    fontFamily: "Andika_400Regular_Italic",
  },
  bottom: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginTop: 10,
  },
  date: {
    marginHorizontal: 5,
    fontSize: 14,
    color: "gray",
  },
});
