import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../../components/avatar/Avatar";

const meta = {
  title: "Example/Avatar",
  component: Avatar,

  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
