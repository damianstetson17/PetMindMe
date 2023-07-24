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
  lastPetSelectedForTask: PetItemType | undefined;
}

//navigation states
interface StatusState {
  currentScreen: ScreensNames;
  showAddNote: boolean;
  showAddPet: boolean;
  showDeletePet: boolean;
}

//payloads
interface NewNoteType {
  newNote: ItemNoteType;
  screenName: ScreensNames;
}

const initialState: NotesState & StatusState = {
  currentScreen: ScreensNames.FOOD,
  showAddNote: false,
  showAddPet: false,
  showDeletePet: false,
  newPetSelectedEmoji: "🐶",
  lastPetSelectedForTask: undefined,
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
      date: formatDate(new Date('2023-07-17T16:24:00')),
      petId: 1,
    },
    {
      id: 2,
      description: "Se levantó a comer en su tachito.",
      date: formatDate(new Date('2023-07-18T12:15:00')),
      petId: 2,
    },
    {
      id: 3,
      description: "Tomó poca agua.",
      date: formatDate(new Date('2023-07-19T16:24:00')),
      petId: 3,
    },
  ],
  drugsNotes: [
    {
      id: 1,
      description: "Tomó la pastilla para el corazón.",
      date: formatDate(new Date('2023-07-24T16:24:00')),
      petId: 1,
    },
    {
      id: 2,
      description: "Comió el coso para los dientes.",
      date: formatDate(new Date('2023-07-24T17:00:00')),
      petId: 3,
    },
  ],
  vetNotes: [
    {
      id: 3,
      description: "Ya se puso la antirabica!",
      date: formatDate(new Date('2023-07-24T16:24:00')),
      petId: 1,
    },
  ],
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    //set current page
    setCurrentScreen: (state, action: PayloadAction<ScreensNames>) => {
      state.currentScreen = action.payload;
    },

    //set bottom sheets show states
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
    setPetForTask: (state, action: PayloadAction<PetItemType>) => {
      state.lastPetSelectedForTask = action.payload;
    },
    addPet: (state, action: PayloadAction<PetItemType>) => {
      //adding the new pet with new id
      const newPet = { ...action.payload, id: state.pets.length + 1 };
      state.pets = [...state.pets, newPet];
    },
    deletePet: (state, action: PayloadAction<number>) => {
      state.pets = state.pets.filter((pet) => pet.id != action.payload);
    },

    //notes
    addNote: (state, action: PayloadAction<NewNoteType>) => {
      const { newNote, screenName } = action.payload;
      
      //add the new note by current screen list
      switch (screenName) {
        case ScreensNames.FOOD:
          state.foodNotes = [...state.foodNotes, newNote];
          break;
        case ScreensNames.DRUGS:
          state.drugsNotes = [...state.drugsNotes, newNote];
          break;
        case ScreensNames.VET:
          state.vetNotes = [...state.vetNotes, newNote];
          break;
      }
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
  setCurrentScreen,
  setAddNote,
  setAddPet,
  setDeletePet,
  setSelectedEmoji,
  setPetForTask,
  addPet,
  deletePet,
  addNote,
  changePetNote,
} = currencySlice.actions;
export default currencySlice.reducer;
