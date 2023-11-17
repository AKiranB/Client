import type { Meta, StoryObj } from "@storybook/react";
import WorkoutBadge from "../../components/workout-badge";

const meta = {
  title: "Example/WorkoutBadge",
  component: WorkoutBadge,

  tags: ["autodocs"],
} satisfies Meta<typeof WorkoutBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Completed: Story = {
  args: {
    time: "14:00",
    variant: "complete",
    onClick: () => console.log("Clicked!"),
  },
};

export const Missed: Story = {
  args: {
    time: "15:00",
    variant: "missed",
    onClick: () => console.log("Clicked!"),
  },
};

export const InProgress: Story = {
  args: {
    time: "16:00",
    variant: "inProgress",
    onClick: () => console.log("Clicked!"),
  },
};
