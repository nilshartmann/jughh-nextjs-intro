import { Meta, StoryObj } from "@storybook/react";

import { H1 } from "@/components/Heading";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import { Sidebar } from "@/components/Sidebar";
import { SidebarBox } from "@/components/SidebarBox";

const meta: Meta<typeof TwoColumnLayout> = {
  component: TwoColumnLayout,
  title: "Common Layout / TwoColumnLayout",
  tags: ["autodocs", "!dev"],
  args: {
    children: (
      <div>
        <H1>Main Part!</H1>
        <p>Lorem ispum</p>
      </div>
    ),
    sidebar: (
      <Sidebar>
        <SidebarBox title="Sidebar">This is the sidebar part</SidebarBox>
      </Sidebar>
    ),
  },
  parameters: {
    docs: {
      description: {
        component: `Renders a two column layout, where the left side is considered the wider "main" part and
				a smaller "sidebar" part on the right
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TwoColumnLayout>;

export const Primary: Story = {
  args: {},
};
