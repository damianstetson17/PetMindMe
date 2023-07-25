import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  storeDrugsNotes,
  storeFoodNotes,
  storePets,
  storeVetNotes,
} from "./storeServices";
import {
  setDrugsNotes,
  setFoodNotes,
  setPets,
  setVetNotes,
} from "../../store/slices/notesSlice";
import { getStoragedData } from "./getDataServices";

const LocalStorage = () => {
  const dispatch = useAppDispatch();

  let pets = useAppSelector((state) => state.notes.pets);
  let foodNotes = useAppSelector((state) => state.notes.foodNotes);
  let drugsNotes = useAppSelector((state) => state.notes.drugsNotes);
  let vetNotes = useAppSelector((state) => state.notes.vetNotes);

  /**
   * Used for load storaged data and execute a reducer for save in redux states
   *
   * @param key key for storaged data
   * @param action reducer for dispatch
   */
  const loadData = async (key: string, action: any) => {
    try {
      const data: any[] = await getStoragedData(key);
      if (data) dispatch(action(data));
    } catch (e) {
      console.log(`Error: ${e} at key: ${key}`);
    }
  };

  //load storaged data
  useEffect(() => {
    loadData("pets", setPets);
    loadData("foodNotes", setFoodNotes);
    loadData("drugsNotes", setDrugsNotes);
    loadData("vetNotes", setVetNotes);
  }, [dispatch]);

  //update in store changes
  useEffect(() => {
    storePets(pets);
    storeFoodNotes(foodNotes);
    storeDrugsNotes(drugsNotes);
    storeVetNotes(vetNotes);
  }, [pets, foodNotes, drugsNotes, vetNotes]);

  return null;
};

export default LocalStorage;
