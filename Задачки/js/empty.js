let schedule = {};

function isEmpty(schedule) {
  for (key in schedule) {
    if (schedule.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
