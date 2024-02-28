const formatCardNumber = (number) => {
  let formattedInput = "";
  let numOfSpaces = 0;

  number.split("").forEach((el, idx) => {
    if (el === " ") return numOfSpaces++;
    if ((idx - numOfSpaces) % 4 === 0) formattedInput += ` ${el}`;
    else formattedInput += el;
  });

  return formattedInput;
};

export default formatCardNumber;
