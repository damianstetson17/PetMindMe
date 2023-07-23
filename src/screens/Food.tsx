import Layout from "./_Layout";
import NoteList from "../components/NoteList/NoteList";
import { formatDate } from "../utils/formatDate";

const Food = () => {
  const screenCategory = "Comida";

  const notes = [
    {
      description: "Comió una croqueta que le dio morena por portarse bien.",
      date: formatDate(new Date()),
      petId: 1,
    },
    {
      description: "Se levantó a comer en su tachito.",
      date: formatDate(new Date()),
      petId: 1,
    },
    {
      description: "Tomó poca agua.",
      date: formatDate(new Date()),
      petId: 1,
    },
    {
      description: "Se comió toda la comida que era para la gata.",
      date: formatDate(new Date()),
      petData: 1,
    },
    {
      description: "Vomitó la polenta que le dió Morena...",
      date: formatDate(new Date()),
      petId: 1,
    },
    {
      description: "Comió mucha polenta :/",
      date: formatDate(new Date()),
      petId: 1,
    },
  ];

  return (
    <Layout title={screenCategory}>
      <NoteList data={notes} />
    </Layout>
  );
};

export default Food;
