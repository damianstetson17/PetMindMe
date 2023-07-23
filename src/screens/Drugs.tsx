import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from "./_Layout";
import { formatDate } from '../utils/formatDate';
import NoteList from '../components/NoteList/NoteList';

const Drugs = () => {
  const screenCategory = "Medicamentos";

  const notes = [
    {
      description: "Tomó la pastilla para el corazón.",
      date: formatDate(new Date()),
      petId: 1,
    },
    {
      description: "Comió el coso para los dientes.",
      date: formatDate(new Date()),
      petId: 1,
    },
  ];

  return (
    <Layout title={screenCategory}>
      <NoteList data={notes} />
    </Layout>
  );
}

export default Drugs

const styles = StyleSheet.create({})