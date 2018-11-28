// Create a function truncate(str, maxlength) that checks the length of the str
// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"
function truncate(str, maxlength) {
  const string = str;
  const length = maxlength;
  if (string.length > maxlength) {
    str = str.substr(0, length - 1) + "\u2026";
    return str;
  }
  return str;
}
alert(truncate("What I'd like to tell on this topic is:", 20));
