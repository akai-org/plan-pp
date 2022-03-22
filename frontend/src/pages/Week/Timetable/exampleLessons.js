import { v4 as uuidv4 } from 'uuid';

const monday = [{
  start_hour: 8,
  start_minutes: 0,
  end_hour: 9,
  end_minutes: 30,
  name: "Grafika Komputerowa",
  classroom: "lab 143",
  teacher: "Witold Andrzejewski",
  type: "lecture",
  id: uuidv4()
},
{
  start_hour: 11,
  start_minutes: 45,
  end_hour: 13,
  end_minutes: 15,
  name: "Systemy Baz Danych",
  classroom: "SK1 1.6.18",
  teacher: "Tadeusz Morzy",
  type: "lecture",
  id: uuidv4()
}];

const tuesday = [{
  start_hour: 11,
  start_minutes: 45,
  end_hour: 15,
  end_minutes: 0,
  name: "Język Angielski",
  classroom: "lab 143",
  teacher: "James Shanahan",
  type: "seminar",
  id: uuidv4()
},
{
  start_hour: 16,
  start_minutes: 40,
  end_hour: 18,
  end_minutes: 20,
  name: "Grafika Komputerowa",
  classroom: "lab. 110 WE",
  teacher: "Krzysztof Zwierzyński",
  type: "laboratory",
  notes: "Zajęcia być może nudne, ale za to bezużyteczne",
  id: uuidv4()
  },
{
  start_hour: 18,
  start_minutes: 30,
  end_hour: 20,
  end_minutes: 0,
  name: "Sieci Komputerowe",
  classroom: "SK1 1.6.18",
  teacher: "Norbert Langner",
  type: "laboratory",
  notes: "Zajęcia do 20 - właśnie o tym od zawsze marzyłem",
  id: uuidv4()
  }
];

const wednesday = [{
  start_hour: 9,
  start_minutes: 45,
  end_hour: 11,
  end_minutes: 15,
  name: "Statystyka i Analiza Danych",
  classroom: "lab 143",
  teacher: "Jerzy Stefanowski",
  type: "lecture",
  id: uuidv4()
},
{
  start_hour: 11,
  start_minutes: 45,
  end_hour: 13,
  end_minutes: 15,
  name: "Sieci Komputerowe",
  classroom: "SK1 1.6.18",
  teacher: "Michał Sajkowski",
  type: "lecture",
  id: uuidv4()
}];

const thursday = [{
  start_hour: 15,
  start_minutes: 10,
  end_hour: 16,
  end_minutes: 40,
  name: "Projektowanie Mikrosystemów Cyfrowych",
  classroom: "lab 143",
  teacher: "Marek Kropidłowski",
  type: "workshop",
  parity: 'odd',
  id: uuidv4()
},
{
  start_hour: 16,
  start_minutes: 50,
  end_hour: 18,
  end_minutes: 20,
  name: "Systemy bez granic",
  classroom: "SK1 1.6.18",
  teacher: "Bartłowmiej Prędki",
  type: "laboratory",
  parity: 'odd',
  id: uuidv4()
}];

const friday = [{
  start_hour: 9,
  start_minutes: 45,
  end_hour: 11,
  end_minutes: 15,
  name: "Systemy Baz Danych",
  classroom: "lab 143",
  teacher: "Bartosz Bębel",
  type: "laboratory",
  id: uuidv4()
},
{
  start_hour: 18,
  start_minutes: 30,
  end_hour: 20,
  end_minutes: 0,
  name: "Architektura Systemów Komputerowych",
  classroom: "SK1 1.6.18",
  teacher: "Rafał Klaus",
  type: "workshop",
  id: uuidv4()
}];

const timetable = {
	monday, tuesday, wednesday, thursday, friday
}

export default timetable;