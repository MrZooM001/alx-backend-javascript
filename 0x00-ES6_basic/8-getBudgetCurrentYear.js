const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const getBudgetForCurrentYear = (income, gdp, capita) => ({
  [`income-${getCurrentYear()}`]: income,
  [`gdp-${getCurrentYear()}`]: gdp,
  [`capita-${getCurrentYear()}`]: capita
});

export default getBudgetForCurrentYear;
