// Show a weekday
// importance: 5
// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

// For instance:

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"

function getWeekDay(d) {
  let obj = {
    0: "SU",
    1: "MO",
    2: "TU",
    3: "WE",
    4: "TH",
    5: "FR",
    6: "SA"
  };
  // return obj[d.getDay()];
  let days = Array.from(new Map(Object.entries(obj)).values());
  return days[d.getDay()];
}

function getWeekDay(d) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[d.getDay()];
}

let date = new Date(2012, 0, 3);

alert(getWeekDay(date));
