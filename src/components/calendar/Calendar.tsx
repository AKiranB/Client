import { CalendarCellProps } from "./CalendarCell";
import CalendarGrid from "./CalendarGrid";

export default function Calendar(
  currentMonth: string,
  calendarDays: CalendarCellProps[],
  calendarMonth: string
) {
  return <CalendarGrid calendarDays={calendarDays} />;
}
