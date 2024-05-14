function removeDelimiterFromString(stringToSplit, comandInString){
  return stringToSplit.slice(comandInString[0].length);
}

function getNewDelimiter(Delimiters, comandInString){
  const comandDelimiter = comandInString[1];
  Delimiters.pop();
  Delimiters.push(new RegExp(`[${comandDelimiter}|,|-]`));
  return Delimiters;
}

function addArray(arrayOfStringNumbers){
  let summation = 0;
  if(Number(arrayOfStringNumbers) === 0)
    return 0;
  if(arrayOfStringNumbers.length != 1){
    for(const number of arrayOfStringNumbers)
      summation+= number <= 1000? Number(number):0;
    return summation;
  }
  return Number(arrayOfStringNumbers[0]);
}

function addNumbersIn(inputString) {
  let defaultDelimiters = [',', '-', /[,|-]/];
  let arrayOfStringNumbers;

  const isComandInString = inputString.match(/^\/\/\[(.)\]/);
  if(isComandInString){
    defaultDelimiters = getNewDelimiter(defaultDelimiters, isComandInString);
    arrayOfStringNumbers = removeDelimiterFromString(inputString, isComandInString);
  }
  arrayOfStringNumbers = inputString.split(defaultDelimiters[2]);
  
  return addArray(arrayOfStringNumbers);
}
export default addNumbersIn;