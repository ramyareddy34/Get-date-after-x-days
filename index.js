const addDays = require("date-fns/addDays");

const days = (day) => {
  const newDate = addDays(new Date(2020, 7, 22), day);

  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = days;
