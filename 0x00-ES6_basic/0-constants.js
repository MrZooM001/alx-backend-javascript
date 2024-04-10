const taskFirst = function () {
  return 'I prefer const when I can.';
};

const getLast = function () {
  return ' is okay';
};

const taskNext = function () {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
};

export default getLast;
export { taskFirst, taskNext };
