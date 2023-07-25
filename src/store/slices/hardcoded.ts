import { formatDate } from "../../utils/formatDate";

export const emojis = [
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
];

export const pets = [
  { name: "Otto", color: "", emoji: "🐶", id: 1 },
  { name: "Corcho", color: "", emoji: "🐱", id: 2 },
  { name: "Pupu", color: "", emoji: "🦔", id: 3 },
];

export const foodNotes = [
  {
    id: 1,
    description: "Comió una croqueta que le dio morena por portarse bien.",
    date: formatDate(new Date("2023-07-17T16:24:00")),
    petId: 1,
  },
  {
    id: 2,
    description: "Se levantó a comer en su tachito.",
    date: formatDate(new Date("2023-07-18T12:15:00")),
    petId: 2,
  },
  {
    id: 3,
    description: "Tomó poca agua.",
    date: formatDate(new Date("2023-07-19T16:24:00")),
    petId: 3,
  },
];

export const drugsNotes = [
  {
    id: 1,
    description: "Tomó la pastilla para el corazón.",
    date: formatDate(new Date("2023-07-24T16:24:00")),
    petId: 1,
  },
  {
    id: 2,
    description: "Comió el coso para los dientes.",
    date: formatDate(new Date("2023-07-24T17:00:00")),
    petId: 3,
  },
];

export const vetNotes = [
  {
    id: 1,
    description: "Ya se puso la antirabica!",
    date: formatDate(new Date("2023-07-24T16:24:00")),
    petId: 1,
  },
];
