const taskFirst = () => 'I prefer const when I can.';

const getLast = () => ' is okay';

const taskNext = () => {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
};

export { taskFirst, getLast, taskNext };
