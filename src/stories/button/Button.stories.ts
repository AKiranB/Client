import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../app/components/Button";

const meta = {
  title: "Example/Button",
  component: Button,

  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Click me",
    onClick: () => console.log("Clicked!"),
  },
};
