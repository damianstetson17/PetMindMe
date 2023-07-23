import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { PetItemType } from "../../types";
import PetDeleteItem from "./PetDeleteItem";

type Props = {
  data?: PetItemType[];
};

const PetList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PetDeleteItem petData={item} />}
    />
  );
};

export default PetList;

const styles = StyleSheet.create({});
