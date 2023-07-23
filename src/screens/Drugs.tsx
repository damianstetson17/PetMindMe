import { StyleSheet } from "react-native";
import React from "react";
import Layout from "./_Layout";
import NoteList from "../components/NoteList/NoteList";
import { useAppSelector } from "../store/store";

const Drugs = () => {
  const screenCategory = "Medicamentos";
  let notes = useAppSelector((state) => state.notes.drugsNotes);

  return (
    <Layout title={screenCategory}>
      <NoteList data={notes} />
    </Layout>
  );
};

export default Drugs;

const styles = StyleSheet.create({});
