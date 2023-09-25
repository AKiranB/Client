import type { Meta, StoryObj } from "@storybook/react";
import TickSVG from "../../app/components/TickSVG";

const meta = {
  title: "Example/TickSVG",
  component: TickSVG,

  tags: ["autodocs"],
} satisfies Meta<typeof TickSVG>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
