import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { ItemNoteType } from "../../types";
import ItemNote from "./ItemNote";
import EmptyList from "./EmptyList";

type Props = {
  data?: ItemNoteType[];
};

const NoteList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ItemNote
          description={item.description}
          date={item.date}
          petId={item.petId}
          id={item.id}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={<EmptyList />}
    />
  );
};

export default NoteList;

const styles = StyleSheet.create({});
