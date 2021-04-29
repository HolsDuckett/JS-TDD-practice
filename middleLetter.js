function middleLetter(string) {
  if(string.length === 1 || string.length === 2){
    return string;
  } else
  splitStringArray = string.split("");
  return splitStringArray[middleLetterIndex(splitStringArray)];
  }

  function middleLetterIndex(array){
    return array.length / 2 - 0.5;
  }

  module.exports = middleLetter;