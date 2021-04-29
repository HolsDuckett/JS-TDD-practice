function middleLetter(string) {
  if(string.length === 1 || string.length === 2){
    return string;
  } else
  splitStringArray = string.split("");
  console.log(splitStringArray);
  return splitStringArray[splitStringArray.length / 2 - 0.5];
  }

  module.exports = middleLetter;