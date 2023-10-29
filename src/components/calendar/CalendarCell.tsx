import { Workout } from "../../types/graphql-request";

export interface CalendarCellProps {
  dayOfTheWeek: string;
  dayOfTheMonth: string;
  workouts?: Workout[];
}

export default function CalendarCell({
  dayOfTheMonth,
  dayOfTheWeek,
  workouts,
}: CalendarCellProps) {
  return (
    <div className="w-32 h-32 rounded overflow-hidden shadow-lg bg-gray-100">
      <text className="px-2 text-gray-400 font-thin text-sm">
        {dayOfTheWeek} {dayOfTheMonth}
      </text>
    </div>
  );
}
