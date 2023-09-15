import type { Meta, StoryObj } from "@storybook/react";
import Nav from "../../app/components/Nav";
const meta = {
  title: "Example/Nav",
  component: Nav,

  tags: ["autodocs"],
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    loggedInUser: true,
    items: ["Schedule", "View", "Edit", "Settings"],
  },
};

export const LoggedOut: Story = {
  args: {
    loggedInUser: false,
    items: ["Schedule", "View", "Edit", "Settings"],
  },
};
