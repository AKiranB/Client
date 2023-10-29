import CalendarGrid from "../../components/calendar/CalendarGrid";
import useCreateCalendarDays from "../../hooks/useCreateCalendarDays";

export default function Calendar() {
  const { calendarDays, calendarMonth } = useCreateCalendarDays();
  console.log(calendarMonth);
  return (
    <main>
      <CalendarGrid calendarDays={calendarDays} />
      <button>Next</button>
    </main>
  );
}
