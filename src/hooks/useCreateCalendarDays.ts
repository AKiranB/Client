"use client";
import { useEffect, useState } from "react";
import {
  createCalendarDays,
  getDaysInMonthUTC,
} from "../utils/calendar/calendar";
import { CalendarCellProps } from "../components/calendar/CalendarCell";
import { useStore } from "../store";

export default function useCreateCalendarDays() {
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

  const user = useStore((state) => state);
  console.log(user);

  const [currentMonth, setCurrentMonth] = useState(0);
  const [calendarDays, setCalendarDays] = useState<CalendarCellProps[]>([]);

  useEffect(() => {
    setCurrentMonth(new Date().getUTCMonth() + 1);
  }, []);

  const currentYear = new Date().getUTCFullYear();

  useEffect(() => {
    const days = createCalendarDays(
      currentMonth,
      currentYear,
      getDaysInMonthUTC
    );

    setCalendarDays(days);
  }, [currentYear, currentMonth]);

  const calendarMonth = month[currentMonth - 1];

  return { calendarDays, calendarMonth, currentMonth, setCurrentMonth };
}
