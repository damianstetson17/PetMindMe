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
  newPetSelectedEmoji: string;
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
  newPetSelectedEmoji: "🐶",
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
      id: 1,
      description: "Comió una croqueta que le dio morena por portarse bien.",
      date: formatDate(new Date()),
      petId: 1,
    },
    {
      id: 2,
      description: "Se levantó a comer en su tachito.",
      date: formatDate(new Date()),
      petId: 2,
    },
    {
      id: 3,
      description: "Tomó poca agua.",
      date: formatDate(new Date()),
      petId: 3,
    },
  ],
  drugsNotes: [
    {
      id: 1,
      description: "Tomó la pastilla para el corazón.",
      date: formatDate(new Date()),
      petId: 1,
    },
    {
      id: 2,
      description: "Comió el coso para los dientes.",
      date: formatDate(new Date()),
      petId: 3,
    },
  ],
  vetNotes: [
    {id: 3,
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

    // handle pet data
    setSelectedEmoji: (state, action: PayloadAction<string>) => {
      state.newPetSelectedEmoji = action.payload;
    },
    addPet: (state, action: PayloadAction<PetItemType>) => {
      //ading the new pet with new id
      const newPet = { ...action.payload, id: state.pets.length + 1 };
      state.pets = [...state.pets, newPet];
    },
    deletePet: (state, action: PayloadAction<number>) => {
      state.pets = state.pets.filter((pet) => pet.id != action.payload);
    },
    changePetNote: (state, action: PayloadAction<any>) => {
      const foodItemIndex = state.foodNotes.findIndex(
        (foodItem) => foodItem.id === action.payload.noteId
      );

      if (foodItemIndex !== -1) {
        state.foodNotes[foodItemIndex] = {
          id: action.payload.noteId,
          description: action.payload.description,
          date: action.payload.date,
          petId: action.payload.petId,
        };
      }
    },
  },
});

export const {
  setScreensNames,
  setAddNote,
  setAddPet,
  setDeletePet,
  setSelectedEmoji,
  addPet,
  deletePet,
  changePetNote,
} = currencySlice.actions;
export default currencySlice.reducer;
