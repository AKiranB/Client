import type { Meta, StoryObj } from "@storybook/react";
import WorkoutBadge from "../../components/workout-badge";
import { Status } from "../../types/graphql-request";

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
    status: Status.Completed,
    duration: 30,
  },
};

export const Missed: Story = {
  args: {
    time: "15:00",
    status: Status.Missed,
    duration: 30,
  },
};

export const InProgress: Story = {
  args: {
    time: "16:00",
    status: Status.Planned,
    duration: 30,
  },
};
