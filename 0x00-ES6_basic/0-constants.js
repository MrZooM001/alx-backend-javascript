const taskFirst = function () {
  const task = 'I prefer const when I can.';
  return task;
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
