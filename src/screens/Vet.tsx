import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from "./_Layout";
import NoteList from '../components/NoteList/NoteList';
import { formatDate } from '../utils/formatDate';

const Vet = () => {
  const screenCategory = "Veterinari@";

  const notes = [
    {
      description: "Ya se puso la antirabica!",
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

export default Vet

const styles = StyleSheet.create({})