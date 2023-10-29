import {
  createCalendarDays,
  getDaysInMonthUTC,
} from "../utils/calendar/calendar";

export default function useCreateCalendarDays(userId?: string) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = new Date().getUTCMonth() + 1;
  const calendarMonth = month[currentMonth - 1];
  const currentYear = new Date().getUTCFullYear();
  const daysInMonth = getDaysInMonthUTC(currentMonth, currentYear);
  const calendarDays = createCalendarDays(
    currentMonth,
    currentYear,
    getDaysInMonthUTC
  );
  return { calendarDays, calendarMonth };
}
