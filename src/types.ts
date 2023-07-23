/**
 * Item type for pets data
 */
export type PetItemType = {
  id: number,
  name: string;
  color?: string;
  emoji?: string;
};

/**
 * Item type for NoteList component
 */
export type ItemNoteType = {
  description: string;
  date: string;
  petId: number;
  petData?: PetItemType;
};

/**
 * screens names enum
 */
export enum ScreensNames {
  FOOD = "Food",
  DRUGS = "Drugs",
  VET = "Vet",
}
