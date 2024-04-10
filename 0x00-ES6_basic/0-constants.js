export const { taskFirst, getLast, taskNext } = {
  taskFirst: function () {
    return 'I prefer const when I can.';
  },

  getLast: function () {
    return ' is okay';
  },

  taskNext: function () {
    let combination = 'But sometimes let';
    combination += getLast();
    return combination;
  }
};
