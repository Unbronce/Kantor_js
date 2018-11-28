// Write a function checkSpam(str) that returns true
// if str contains ‘viagra’ or ‘XXX’, otherwise `false.

// The function must be case-insensitive:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// function checkSpam(str) {
//   let chekString = str;
//   chekString = chekString.toLowerCase();
//   if (chekString.includes("viagra") || chekString.includes("xxx")) return true;
//   return false;
// }

function checkSpam(str) {
  let chekString = str;
  chekString = chekString.toLowerCase();
  if (chekString.indexOf("viagra") !== -1 || chekString.indexOf("xxx") !== -1)
    return true;
  return false;
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));
