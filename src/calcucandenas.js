function doMultipleSliceWith(defaultDelimiters, comandInString, stringToSplit){
  const comandDelimiter = comandInString[1];
  defaultDelimiters.pop();
  defaultDelimiters.push(new RegExp(`[${comandDelimiter}|,|-]`));
  return stringToSplit.slice(comandInString[0].length);
}
function addArray(arrayOfStringNumbers){
  let summation = 0;
  for(const number of arrayOfStringNumbers){
    summation+= number <= 1000? Number(number):0;
  }
  return summation;
}

function addNumbersIn(inputString) {
  let defaultDelimiters = [',', '-', /[,|-]/];
  let arrayOfStringNumbers;
  const isComandInString = inputString.match(/^\/\/\[(.)\]/);
  if(isComandInString){
    arrayOfStringNumbers = doMultipleSliceWith(defaultDelimiters, isComandInString, inputString);
  }
  arrayOfStringNumbers = inputString.split(defaultDelimiters[2]);

  if(inputString === "")
    return 0;
  if(arrayOfStringNumbers.length != 1){
    return addArray(arrayOfStringNumbers);
  }
  return Number(arrayOfStringNumbers[0]);
}
export default addNumbersIn;