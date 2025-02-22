import { Meta, StoryObj } from "@storybook/react";

import GlobalHeader from "@/components/layout/GlobalHeader";

const meta: Meta<typeof GlobalHeader> = {
  component: GlobalHeader,
  title: "Common Layout / GlobalHeader",
};

export default meta;

type Story = StoryObj<typeof GlobalHeader>;

export const Primary: Story = {
  args: {},
};

export const WithChildren: Story = {
  args: { children: <div className={"bg-blue-500 text-white"}>Children</div> },
};
