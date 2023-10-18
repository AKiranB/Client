import { Workout } from "../../types/graphql-request";

interface CalendarCellProps {
  dayOfTheWeek: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
  dayOfTheMonth: string;
  workouts: Workout[];
}

export default function CalendarCell({
  dayOfTheMonth,
  dayOfTheWeek,
  workouts,
}: CalendarCellProps) {
  //For now let's relegate the creation of workotus to a seperate form
  // and save the right click context menu for a final iteration
  // for now you canc lick on a workout, represented by a badge like obejct
  // this eitehr opens the report form or the edit form

  return (
    <div className="w-32 h-32 rounded overflow-hidden shadow-lg bg-gray-100">
      <text>{dayOfTheWeek}</text>
    </div>
  );
}
