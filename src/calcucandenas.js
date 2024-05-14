function addNumbersIn(chain) {
  let delimiters = [',', '-', /[,|-]/];
  let numbers = chain;
  let acc = 0;
  const delimiterMatch = chain.match(/^\/\/\[(.)\]/);

  if(delimiterMatch){
    const delimiter = delimiterMatch[1];
    delimiters.pop();
    delimiters.push(new RegExp(`[${delimiter}|,|-]`));
    numbers = chain.slice(delimiterMatch[0].length +3 );
  }

  numbers = chain.split(delimiters[2]);

  if(chain === "")
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
