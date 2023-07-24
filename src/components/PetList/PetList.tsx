import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { PetItemType } from "../../types";
import PetDeleteItem from "./PetDeleteItem";

type Props = {
  data?: PetItemType[];
};

const PetsListDelete = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PetDeleteItem petData={item} />}
    />
  );
};

export default PetsListDelete;

const styles = StyleSheet.create({});
