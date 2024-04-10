export const { taskFirst, getLast, taskNext } = {
  taskFirst () { return 'I prefer const when I can.'; },
  getLast () { return ' is okay'; },
  taskNext () {
    let combination = 'But sometimes let';
    combination += getLast();
    return combination;
  }
};
