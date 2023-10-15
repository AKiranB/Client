import type { Meta, StoryObj } from "@storybook/react";
import TimedCarousel from "../../app/components/TimedCarousel";

const meta = {
  title: "Example/TimedCarousel ",
  component: TimedCarousel,

  tags: ["autodocs"],
} satisfies Meta<typeof TimedCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
