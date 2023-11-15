"use client";

import useCreateCalendarDays from "../../hooks/useCreateCalendarDays";
import Calendar from "./Calendar";
export default function CalendarWrapper() {
  const { calendarDays, calendarMonth, currentMonth, setCurrentMonth } =
    useCreateCalendarDays();

  console.log(calendarDays);
  return (
    <Calendar
      data-test-id="calendar"
      onNextMonth={() => setCurrentMonth((prev) => prev + 1)}
      onPrevMonth={() => setCurrentMonth((prev) => prev - 1)}
      calendarDays={calendarDays}
      calendarMonth={calendarMonth}
      currentMonth={currentMonth}
    />
  );
}
