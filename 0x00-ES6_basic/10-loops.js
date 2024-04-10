const appendToEachArrayValue = (array, appendString) => {
  for (const value of array) {
    const newValue = appendString + value;
    array.splice(array.indexOf(value), 1, newValue);
  }

  return array;
};

export default appendToEachArrayValue;
