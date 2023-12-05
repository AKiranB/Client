"use client";
import CalendarWrapper from "../../components/calendar/CalendarWrapper";
import { useStore } from "../../store";

export default function Calendar() {
  const user = useStore((state) => state.user);
  console.log(user);
  return (
    <main>
      <CalendarWrapper />
    </main>
  );
}
