/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo"
name + " does not play banjo"
 */
//BP
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

//MS
function areYouPlayingBanjo2(name) {
  let nameToLowerCase = name.toLowerCase();
  if (nameToLowerCase[0] === 'r') {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}
