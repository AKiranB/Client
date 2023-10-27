import {
  getDaysInMonthUTC,
  createCalendarDays,
} from "../components/calendar/utils";

export default function useCreateCalendarDays(userId?: string) {
  const currentMonth = new Date().getUTCMonth() + 1;
  const currentYear = new Date().getUTCFullYear();
  const daysInMonth = getDaysInMonthUTC(currentMonth, currentYear);
  const calendarDays = createCalendarDays(
    currentMonth,
    currentYear,
    getDaysInMonthUTC
  );
  return { calendarDays };
}
