import useCreateCalendarDays from "../../hooks/useCreateCalendarDays";
import Calendar from "./Calendar";
export default function CalendarWrapper() {
  const { calendarDays, calendarMonth, currentMonth } = useCreateCalendarDays();
  return (
    <Calendar
      calendarDays={calendarDays}
      calendarMonth={calendarMonth}
      currentMonth={currentMonth}
    />
  );
}
