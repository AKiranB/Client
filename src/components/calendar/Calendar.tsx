import { CalendarCellProps } from "./CalendarCell";
import CalendarGrid from "./CalendarGrid";
import IconButton from "../button/IconButton";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

type CalenderProps = {
  currentMonth?: number;
  calendarDays: CalendarCellProps[];
  calendarMonth: string;
};
export default function Calendar({
  calendarDays,
  calendarMonth,
  currentMonth,
}: CalenderProps) {
  return (
    <span>
      <h1 data-test-id="month-title" className="text-xl pb-8">
        {calendarMonth}
      </h1>
      <CalendarGrid calendarDays={calendarDays} />
      <div className="flex justify-center w-full pt-4">
        <IconButton
          onClick={() => console.log("prev")}
          className="mx-2"
          Icon={ArrowLeftIcon}
        />{" "}
        <IconButton
          onClick={() => console.log("next")}
          className="mx-2"
          Icon={ArrowRightIcon}
        />
      </div>
    </span>
  );
}
