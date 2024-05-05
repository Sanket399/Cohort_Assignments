// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Zeroes

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // 24 hour clock

  let time24 = hours + ":" + minutes + "::" + seconds;

  // 12 hour clock AM / PM

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12; // Convert hours to 12 hour format
  hours = hours ? hours : 12; // Midnight condition (if hours = 0)
  hours = hours < 10 ? "0" + hours : hours; // Add leading 0 to hours since "hours % 12 removes the leading 0 we added earlier"
  let time12 = hours + ":" + minutes + "::" + seconds + " " + ampm;
  return { time24, time12 };
}

function updateTime() {
  let now = new Date();
  let { time24, time12 } = formatTime(now);
  console.clear();
  console.log("24 Hour Clock:", time24);
  console.log("12 Hour Clock:", time12);
}

setInterval(updateTime, 1000);
