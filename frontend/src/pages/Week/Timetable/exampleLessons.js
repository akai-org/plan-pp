import { v4 as uuidv4 } from "uuid";

const monday = [
  {
    startHours: 8,
    startMinutes: 0,
    endHours: 9,
    endMinutes: 30,
    name: "Grafika Komputerowa",
    classroom: "lab 143",
    teacher: "Witold Andrzejewski",
    type: "lecture",
    id: uuidv4(),
  },
  {
    startHours: 11,
    startMinutes: 45,
    endHours: 13,
    endMinutes: 15,
    name: "Systemy Baz Danych",
    classroom: "SK1 1.6.18",
    teacher: "Tadeusz Morzy",
    type: "lecture",
    id: uuidv4(),
  },
];

const tuesday = [
  {
    startHours: 11,
    startMinutes: 45,
    endHours: 15,
    endMinutes: 0,
    name: "Język Angielski",
    classroom: "lab 143",
    teacher: "James Shanahan",
    type: "seminar",
    id: uuidv4(),
  },
  {
    startHours: 16,
    startMinutes: 40,
    endHours: 18,
    endMinutes: 20,
    name: "Grafika Komputerowa",
    classroom: "lab. 110 WE",
    teacher: "Krzysztof Zwierzyński",
    type: "laboratory",
    notes: "Zajęcia być może nudne, ale za to bezużyteczne",
    id: uuidv4(),
  },
  {
    startHours: 18,
    startMinutes: 30,
    endHours: 20,
    endMinutes: 0,
    name: "Sieci Komputerowe",
    classroom: "SK1 1.6.18",
    teacher: "Norbert Langner",
    type: "laboratory",
    notes: "Zajęcia do 20 - właśnie o tym od zawsze marzyłem",
    id: uuidv4(),
  },
];

const wednesday = [
  {
    startHours: 9,
    startMinutes: 45,
    endHours: 11,
    endMinutes: 15,
    name: "Statystyka i Analiza Danych",
    classroom: "lab 143",
    teacher: "Jerzy Stefanowski",
    type: "lecture",
    id: uuidv4(),
  },
  {
    startHours: 11,
    startMinutes: 45,
    endHours: 13,
    endMinutes: 15,
    name: "Sieci Komputerowe",
    classroom: "SK1 1.6.18",
    teacher: "Michał Sajkowski",
    type: "lecture",
    id: uuidv4(),
  },
];

const thursday = [
  {
    startHours: 15,
    startMinutes: 10,
    endHours: 16,
    endMinutes: 40,
    name: "Projektowanie Mikrosystemów Cyfrowych",
    classroom: "lab 143",
    teacher: "Marek Kropidłowski",
    type: "workshop",
    parity: "odd",
    id: uuidv4(),
  },
  {
    startHours: 16,
    startMinutes: 50,
    endHours: 18,
    endMinutes: 20,
    name: "Systemy bez granic",
    classroom: "SK1 1.6.18",
    teacher: "Bartłowmiej Prędki",
    type: "laboratory",
    parity: "odd",
    id: uuidv4(),
  },
];

const friday = [
  {
    startHours: 9,
    startMinutes: 45,
    endHours: 11,
    endMinutes: 15,
    name: "Systemy Baz Danych",
    classroom: "lab 143",
    teacher: "Bartosz Bębel",
    type: "laboratory",
    id: uuidv4(),
  },
  {
    startHours: 18,
    startMinutes: 30,
    endHours: 20,
    endMinutes: 0,
    name: "Architektura Systemów Komputerowych",
    classroom: "SK1 1.6.18",
    teacher: "Rafał Klaus",
    type: "workshop",
    id: uuidv4(),
  },
];

const timetable = {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
};

export default timetable;
