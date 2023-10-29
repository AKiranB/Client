function getDaysInMonthUTC(month: number, year: number) {
  const days = new Date(year, month, 0).getUTCDate();
  return days + 1;
}
function createCalendarDays(
  currentMonth: number,
  currentYear: number,
  daysInMonthFn: (month: number, year: number) => number
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
