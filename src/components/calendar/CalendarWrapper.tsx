"use client";

import useCreateCalendarDays from "../../hooks/useCreateCalendarDays";
import Calendar from "./Calendar";
export default function CalendarWrapper() {
  const { calendarDays, calendarMonth, currentMonth, setCurrentMonth } =
    useCreateCalendarDays();

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };
  return (
    <Calendar
      data-test-id="calendar"
      onNextMonth={handleNextMonth}
      onPrevMonth={handlePrevMonth}
      calendarDays={calendarDays}
      calendarMonth={calendarMonth}
      currentMonth={currentMonth}
    />
  );
}
