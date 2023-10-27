import CalendarCell, { CalendarCellProps } from "./CalendarCell";

interface CalendarGridProps {
  calendarDays: CalendarCellProps[];
}

export default function CalendarGrid({ calendarDays }: CalendarGridProps) {
  return calendarDays.map((day) => {
    return (
      <CalendarCell
        workouts={day.workouts}
        key={day.dayOfTheMonth.toString()}
        dayOfTheMonth={day.dayOfTheMonth}
        dayOfTheWeek={day.dayOfTheWeek}
      />
    );
  });
}
