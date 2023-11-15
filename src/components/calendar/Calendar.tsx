import { CalendarCellProps } from "./CalendarCell";
import CalendarGrid from "./CalendarGrid";
import IconButton from "../button/IconButton";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import Spinner from "../spinner/spinner";
import Loading from "../../app/loading";

type CalenderProps = {
  currentMonth?: number;
  calendarDays: CalendarCellProps[];
  onNextMonth: () => void;
  onPrevMonth: () => void;
  calendarMonth: string;
};
export default function Calendar({
  calendarDays,
  calendarMonth,
  onPrevMonth,
  onNextMonth,
}: CalenderProps) {
  if (!calendarDays.length) {
    return <Loading />;
  }

  return (
    <span>
      <h1 data-test-id="month-title" className="text-xl pb-8 min-h-[60px]">
        {calendarMonth}
      </h1>
      <CalendarGrid calendarDays={calendarDays} />
      <div className="flex justify-center w-full pt-4">
        <IconButton
          data-test-id="prev-month"
          onClick={() => onPrevMonth()}
          className="mx-2"
          Icon={ArrowLeftIcon}
        />
        <IconButton
          data-test-id="next-month"
          onClick={() => onNextMonth()}
          className="mx-2"
          Icon={ArrowRightIcon}
        />
      </div>
    </span>
  );
}
