import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ScreensNames, ItemNoteType, PetItemType } from "../../types";
import { formatDate } from "../../utils/formatDate";

//notes data
interface NotesState {
  foodNotes: ItemNoteType[];
  drugsNotes: ItemNoteType[];
  vetNotes: ItemNoteType[];
  pets: PetItemType[];
  emojis: string[];
}

//navigation states
interface StatusState {
  ScreensNames: ScreensNames;
  showAddNote: boolean;
  showAddPet: boolean;
  showDeletePet: boolean;
}

const initialState: NotesState & StatusState = {
  ScreensNames: ScreensNames.FOOD,
  showAddNote: false,
  showAddPet: false,
  showDeletePet: false,
  pets: [
    { name: "Otto", color: "", emoji: "🐶", id: 1 },
    { name: "Corcho", color: "", emoji: "🐱", id: 2 },
    { name: "Pupu", color: "", emoji: "🦔", id: 3 },
  ],
  emojis: [
    "🐶",
    "🐱",
    "🐹",
    "🐰",
    "🐦",
    "🦜",
    "🐢",
    "🐠",
    "🐍",
    "🐹",
    "🐭",
    "🐱",
    "🐦",
    "🐰",
    "🐹",
    "🦔",
  ],
  foodNotes: [
    {
      description: "Comió una croqueta que le dio morena por portarse bien.",
      date: formatDate(new Date()),
      petId: 1,
    },
    {
      description: "Se levantó a comer en su tachito.",
      date: formatDate(new Date()),
      petId: 2,
    },
    {
      description: "Tomó poca agua.",
      date: formatDate(new Date()),
      petId: 3,
    },
  ],
  drugsNotes: [
    {
      description: "Tomó la pastilla para el corazón.",
      date: formatDate(new Date()),
      petId: 1,
    },
    {
      description: "Comió el coso para los dientes.",
      date: formatDate(new Date()),
      petId: 3,
    },
  ],
  vetNotes: [
    {
      description: "Ya se puso la antirabica!",
      date: formatDate(new Date()),
      petId: 1,
    },
  ],
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    //set current page
    setScreensNames: (state, action: PayloadAction<ScreensNames>) => {
      state.ScreensNames = action.payload;
    },

    //set bottom sheets show state
    setAddNote: (state, action: PayloadAction<boolean>) => {
      state.showAddNote = action.payload;
    },
    setAddPet: (state, action: PayloadAction<boolean>) => {
      state.showAddPet = action.payload;
    },
    setDeletePet: (state, action: PayloadAction<boolean>) => {
      state.showDeletePet = action.payload;
    },

    //handle pet data
  },
});

export const { setScreensNames, setAddNote, setAddPet, setDeletePet } =
  currencySlice.actions;
export default currencySlice.reducer;
