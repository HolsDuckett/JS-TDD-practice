const { array } = require("yargs");

function middleLetter(string) {
  if(string.length === 1 || string.length === 2){
    return string;
  } else
  splitStringArray = string.split("");
  if (splitStringArray.length % 2 !== 0){
    return splitStringArray[middleLetterIndex(splitStringArray)];
  } else 
  console.log("im in here")
  let firstLetter = splitStringArray[splitStringArray.length / 2 - 1];
  let secondLetter = splitStringArray[splitStringArray.length / 2];
  return `${firstLetter}${secondLetter}`;
  }

  function middleLetterIndex(array){
    return array.length / 2 - 0.5;
  }

  module.exports = middleLetter;