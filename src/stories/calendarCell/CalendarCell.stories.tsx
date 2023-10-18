import type { Meta, StoryObj } from "@storybook/react";
import CalendarCell from "../../components/calendar/CalendarCell";

const meta = {
  title: "Example/CalendarCell",
  component: CalendarCell,

  tags: ["autodocs"],
} satisfies Meta<typeof CalendarCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    date: new Date(),
    workouts: [],
  },
};
