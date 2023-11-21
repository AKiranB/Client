import type { Meta, StoryObj } from "@storybook/react";
import Calendar from "../../components/calendar/Calendar";
import { Status } from "../../types/graphql-request";

const meta = {
  title: "Example/Calendar",
  component: Calendar,

  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    calendarDays: [
      { dayOfTheWeek: "Fri", dayOfTheMonth: "01" },
      { dayOfTheWeek: "Sat", dayOfTheMonth: "02" },
      { dayOfTheWeek: "Sun", dayOfTheMonth: "03" },
      { dayOfTheWeek: "Mon", dayOfTheMonth: "04" },
      { dayOfTheWeek: "Tue", dayOfTheMonth: "05" },
      {
        dayOfTheWeek: "Wed",
        dayOfTheMonth: "06",
        workouts: [
          {
            _id: "1234565",
            duration: 30,
            time: "14:00",
            status: Status.Missed,
          },
        ],
      },
      { dayOfTheWeek: "Thu", dayOfTheMonth: "07" },
      { dayOfTheWeek: "Fri", dayOfTheMonth: "08" },
      { dayOfTheWeek: "Sat", dayOfTheMonth: "09" },
      { dayOfTheWeek: "Sun", dayOfTheMonth: "10" },
      { dayOfTheWeek: "Mon", dayOfTheMonth: "11" },
      { dayOfTheWeek: "Tue", dayOfTheMonth: "12" },
      { dayOfTheWeek: "Wed", dayOfTheMonth: "13" },
      { dayOfTheWeek: "Thu", dayOfTheMonth: "14" },
      { dayOfTheWeek: "Fri", dayOfTheMonth: "15" },
      { dayOfTheWeek: "Sat", dayOfTheMonth: "16" },
      { dayOfTheWeek: "Sun", dayOfTheMonth: "17" },
      { dayOfTheWeek: "Mon", dayOfTheMonth: "18" },
      { dayOfTheWeek: "Tue", dayOfTheMonth: "19" },
      { dayOfTheWeek: "Wed", dayOfTheMonth: "20" },
      { dayOfTheWeek: "Thu", dayOfTheMonth: "21" },
      { dayOfTheWeek: "Fri", dayOfTheMonth: "22" },
      { dayOfTheWeek: "Sat", dayOfTheMonth: "23" },
      { dayOfTheWeek: "Sun", dayOfTheMonth: "24" },
      { dayOfTheWeek: "Mon", dayOfTheMonth: "25" },
      { dayOfTheWeek: "Tue", dayOfTheMonth: "26" },
      { dayOfTheWeek: "Wed", dayOfTheMonth: "27" },
      { dayOfTheWeek: "Thu", dayOfTheMonth: "28" },
      { dayOfTheWeek: "Fri", dayOfTheMonth: "29" },
      { dayOfTheWeek: "Sat", dayOfTheMonth: "30" },
    ],
    calendarMonth: "November",
  },
};
