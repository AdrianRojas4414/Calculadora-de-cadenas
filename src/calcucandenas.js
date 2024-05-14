function addNumbersIn(inputString) {
  let delimiters = [',', '-', /[,|-]/];
  let numbers = inputString;
  let acc = 0;
  const delimiterMatch = inputString.match(/^\/\/\[(.)\]/);

  if(delimiterMatch){
    const delimiter = delimiterMatch[1];
    delimiters.pop();
    delimiters.push(new RegExp(`[${delimiter}|,|-]`));
    numbers = inputString.slice(delimiterMatch[0].length +3 );
  }

  numbers = inputString.split(delimiters[2]);

  if(inputString === "")
    return 0;

  if(numbers.length != 1){
    for(const num of numbers){
      if(num <= 1000)
        acc = acc + Number(num);
    }  
    return acc;
  }
  
  return Number(numbers[0]);
}

export default addNumbersIn;
