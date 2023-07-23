import { StyleSheet } from "react-native";
import React from "react";
import Layout from "./_Layout";
import NoteList from "../components/NoteList/NoteList";
import { useAppSelector } from "../store/store";

const Vet = () => {
  const screenCategory = "Veterinari@";
  let notes = useAppSelector((state) => state.notes.vetNotes);

  return (
    <Layout title={screenCategory}>
      <NoteList data={notes} />
    </Layout>
  );
};

export default Vet;

const styles = StyleSheet.create({});
