import CalendarGrid from "./CalendarGrid";
import useCreateCalendarDays from "../../hooks/useCreateCalendarDays";
export default function Calendar() {
  const { calendarDays } = useCreateCalendarDays();
  return <CalendarGrid calendarDays={calendarDays} />;
}
