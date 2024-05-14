function addNumbersIn(inputString) {
  let defaultDelimiters = [',', '-', /[,|-]/];
  let numbers = inputString;
  let summation = 0;
  const isComandInString = inputString.match(/^\/\/\[(.)\]/);

  if(isComandInString){
    const delimiter = isComandInString[1];
    defaultDelimiters.pop();
    defaultDelimiters.push(new RegExp(`[${delimiter}|,|-]`));
    numbers = inputString.slice(isComandInString[0].length +3 );
  }

  numbers = inputString.split(defaultDelimiters[2]);

  if(inputString === "")
    return 0;

  if(numbers.length != 1){
    for(const num of numbers){
      if(num <= 1000)
        summation = summation + Number(num);
    }  
    return summation;
  }
  
  return Number(numbers[0]);
}

export default addNumbersIn;
