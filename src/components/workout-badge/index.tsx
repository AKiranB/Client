//this is the badge that is displayed in teh Calendar cell when there is a workout present
//IT should have some variants
//IE if the workout is complete, it should be green
//if the workout is incomplete, it should be red
//if the workout is in progress, it should be yellow

interface WorkoutBadgeProps {
  variant: "complete" | "missed" | "inProgress";
  onClick: () => void;
  time: string;
}

export default function WorkoutBadge({
  variant,
  onClick,
  time,
}: WorkoutBadgeProps) {
  return (
    <div
      className={`flex justify-center items-center rounded-full w-16 h-5 ${
        variant === "complete"
          ? "bg-green-300"
          : variant === "missed"
          ? "bg-red-500"
          : "bg-yellow-500"
      }`}
      onClick={onClick}
    >
      <div>
        <div className="text-white text-xs font-bold">{time}</div>
      </div>
    </div>
  );
}
