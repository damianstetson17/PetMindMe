export type PetItemType = {
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
