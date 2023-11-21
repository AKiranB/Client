import { Status } from "../../types/graphql-request";

export interface CalendarBadgeProps {
  _id?: string;
  duration: number;
  status: Status;
  time: string;
}

export default function WorkoutBadge({ status, time }: CalendarBadgeProps) {
  return (
    <span
      className={`flex justify-center w-full text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700${
        status === Status.Completed
          ? "border border-green-400 bg-green-200"
          : status === Status.Missed
          ? "border border-red-400 bg-red-200"
          : "bg-yellow-500"
      }`}
    >
      <div className="text-gray-600 text-xs font-bold">{time}</div>
    </span>
  );
}
