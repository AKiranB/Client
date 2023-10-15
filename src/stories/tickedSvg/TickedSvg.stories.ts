import type { Meta, StoryObj } from "@storybook/react";
import TickedSVG from "../../app/components/TickedSVG";

const meta = {
  title: "TickedSVG",
  component: TickedSVG,

  tags: ["autodocs"],
} satisfies Meta<typeof TickedSVG>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
