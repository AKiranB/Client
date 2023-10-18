function getDaysInMonthUTC(month: number | undefined, year: number) {
  const date = new Date(Date.UTC(year, month, 1));
  let days = 0;
  while (date.getUTCMonth() === month) {
    days += 1;
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return days;
}
function createCalendarDays(
  currentMonth: number,
  currentYear: number,
  daysInMonthFn: (month: number | undefined, year: number) => number
) {
  const resArray = [];
  const daysInMonth = daysInMonthFn(currentMonth, currentYear);
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(Date.UTC(currentYear, currentMonth - 1, i))
      .toUTCString()
      .split(" ");
    const dayOfTheWeek = date[0].slice(0, -1);
    const dayOfTheMonth = date[1];
    resArray.push({
      dayOfTheWeek: dayOfTheWeek,
      dayOfTheMonth: dayOfTheMonth,
    });
  }
  return resArray;
}

export { getDaysInMonthUTC, createCalendarDays };
