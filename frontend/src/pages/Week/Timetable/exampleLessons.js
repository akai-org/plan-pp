const monday = [{
  start_hour: 8,
  start_minutes: 0,
  end_hour: 9,
  end_minutes: 30,
  name: "Grafika Komputerowa",
  classroom: "lab 143"
},
{
  start_hour: 11,
  start_minutes: 45,
  end_hour: 13,
  end_minutes: 15,
  name: "Systemy Baz Danych",
  classroom: "SK1 1.6.18"
}];

const tuesday = [{
  start_hour: 11,
  start_minutes: 45,
  end_hour: 15,
  end_minutes: 0,
  name: "Język Angielski",
  classroom: "lab 143"
},
{
  start_hour: 16,
  start_minutes: 40,
  end_hour: 18,
  end_minutes: 20,
  name: "Sieci Komputerowe",
  classroom: "SK1 1.6.18"
}];

const wednesday = [{
  start_hour: 9,
  start_minutes: 45,
  end_hour: 11,
  end_minutes: 15,
  name: "Statystyka i Analiza Danych",
  classroom: "lab 143"
},
{
  start_hour: 11,
  start_minutes: 45,
  end_hour: 13,
  end_minutes: 15,
  name: "Sieci Komputerowe",
  classroom: "SK1 1.6.18"
}];

const thursday = [{
  start_hour: 15,
  start_minutes: 10,
  end_hour: 16,
  end_minutes: 40,
  name: "Projektowanie Mikrosystemów Cyfrowych",
  classroom: "lab 143",
  parity: 'odd'
},
{
  start_hour: 16,
  start_minutes: 50,
  end_hour: 18,
  end_minutes: 20,
  name: "Systemy bez granic",
  classroom: "SK1 1.6.18",
  parity: 'odd'
}];

const friday = [{
  start_hour: 9,
  start_minutes: 45,
  end_hour: 11,
  end_minutes: 15,
  name: "Systemy Baz Danych",
  classroom: "lab 143"
},
{
  start_hour: 18,
  start_minutes: 30,
  end_hour: 20,
  end_minutes: 0,
  name: "Architektura Systemów Komputerowych",
  classroom: "SK1 1.6.18"
}];

const timetable = {
	monday, tuesday, wednesday, thursday, friday
}

export default timetable;