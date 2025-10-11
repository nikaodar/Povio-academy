//1. Create a function that calculates the number of days between two given dates.
function calculateNumberOfDays(date1, date2) {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  return Math.round(Math.abs((firstDate - secondDate) / (24 * 60 * 60 * 1000)));
}

console.log(calculateNumberOfDays("2025-10-10", "2025-10-15"));

//2. Create a function that determines the day of the week for a given date.
function getDay(date) {
  const daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(date);
  return daysInWeek[day.getDay()];
}

console.log(getDay("2025-10-10"));

//3. Create a function that adds a number of days to a date and returns the new date. Can you enhance the function by allowing the user to pass in
//the unit to add? Eg. if the signature is addToDate(date, amount, unit), then addToDate(date, 1, 'seconds') adds 1 second to the date, and addToDate(date, 10, 'hours)
//adds 10 hours to the date.
function addToDate(date, amount, unit) {
  const newDate = new Date(date);

  switch (unit.toLowerCase()) {
    case "seconds":
      newDate.setSeconds(newDate.getSeconds() + amount);
      break;
    case "minutes":
      newDate.setMinutes(newDate.getMinutes() + amount);
      break;
    case "hours":
      newDate.setHours(newDate.getHours() + amount);
      break;
    case "days":
      newDate.setDate(newDate.getDate() + amount);
      break;
    case "weeks":
      newDate.setDate(newDate.getDate() + amount * 7);
      break;
    case "months":
      newDate.setMonth(newDate.getMonth() + amount);
      break;
    case "years":
      newDate.setFullYear(newDate.getFullYear() + amount);
      break;
    default:
      throw new Error("invalid unit");
  }

  return newDate;
}

console.log(addToDate("2025-10-10T12:00:00", 1, "seconds"));
