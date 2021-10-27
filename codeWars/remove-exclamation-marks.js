/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

//BP
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }

//MS
const removeExclamationMarks2 = s => s.split('!').join('');
