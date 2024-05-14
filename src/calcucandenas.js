function addNumbersIn(inputString) {
  let defaultDelimiters = [',', '-', /[,|-]/];
  let arrayOfStringNumbers;
  let summation = 0;
  const isComandInString = inputString.match(/^\/\/\[(.)\]/);

  if(isComandInString){
    const comandDelimiter = isComandInString[1];
    defaultDelimiters.pop();
    defaultDelimiters.push(new RegExp(`[${comandDelimiter}|,|-]`));
    arrayOfStringNumbers = inputString.slice(isComandInString[0].length);
  }

  arrayOfStringNumbers = inputString.split(defaultDelimiters[2]);

  if(inputString === "")
    return 0;

  if(arrayOfStringNumbers.length != 1){
    for(const num of arrayOfStringNumbers){
      if(num <= 1000)
        summation = summation + Number(num);
    }  
    return summation;
  }
  
  return Number(arrayOfStringNumbers[0]);
}

export default addNumbersIn;
