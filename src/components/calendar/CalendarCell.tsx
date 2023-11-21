import { Status, Workout } from "../../types/graphql-request";
import WorkoutBadge, { CalendarBadgeProps } from "../workout-badge";

export interface CalendarCellProps {
  dayOfTheWeek: string;
  dayOfTheMonth: string;
  workouts?: CalendarBadgeProps[];
}

export default function CalendarCell({
  dayOfTheMonth,
  dayOfTheWeek,
  workouts,
}: CalendarCellProps) {
  return (
    <div className="w-32 h-32 rounded overflow-hidden shadow-lg bg-gray-100">
      <span className="px-2 text-gray-400 font-thin text-sm">
        {dayOfTheWeek} {dayOfTheMonth}
      </span>
      <div className="w-32 flex px-2 mt-2">
        {workouts?.map((workout) => {
          return <WorkoutBadge key={workout._id} {...workout} />;
        })}
      </div>
    </div>
  );
}
