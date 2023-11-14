import CalendarGrid from "../../components/calendar/CalendarGrid";
import useCreateCalendarDays from "../../hooks/useCreateCalendarDays";

export default function Calendar() {
  const { calendarDays, calendarMonth, currentMonth } = useCreateCalendarDays();

  return (
    <main>
      <CalendarGrid calendarDays={calendarDays} />
      <button>Next</button>
    </main>
  );
}
