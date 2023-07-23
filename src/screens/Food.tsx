import Layout from "./_Layout";
import NoteList from "../components/NoteList/NoteList";
import { useAppSelector } from "../store/store";

const Food = () => {
  const screenCategory = "Comida";
  let notes = useAppSelector((state) => state.notes.foodNotes);

  return (
    <Layout title={screenCategory}>
      <NoteList data={notes} />
    </Layout>
  );
};

export default Food;
