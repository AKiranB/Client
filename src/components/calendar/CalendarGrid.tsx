import CalendarCell, { CalendarCellProps } from "./CalendarCell";

interface CalendarGridProps {
  calendarDays: CalendarCellProps[];
}

export default function CalendarGrid({ calendarDays }: CalendarGridProps) {
  return (
    <div
      data-test-id="calender-grid"
      className="grid xl:grid-cols-8 sm:grid-cols-4 xs:grid-cols-4 grid-rows-2 gap-4 min-w-[640px]"
    >
      {calendarDays.map((day) => {
        return (
          <CalendarCell
            data-test-id="calendar-cell"
            workouts={day.workouts}
            key={day.dayOfTheMonth.toString()}
            dayOfTheMonth={day.dayOfTheMonth}
            dayOfTheWeek={day.dayOfTheWeek}
          />
        );
      })}
    </div>
  );
}
