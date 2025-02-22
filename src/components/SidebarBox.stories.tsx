import { Meta, StoryObj } from "@storybook/react";

import { SidebarBox } from "@/components/SidebarBox";

const meta: Meta<typeof SidebarBox> = {
  component: SidebarBox,
  title: "Common Layout / SidebarBox",
  tags: ["autodocs", "!dev"],
  args: {
    title: "Welcome",
    children: (
      <>
        You can use <b>any</b> content as children
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        component: `A "box" that can be used to group content inside a \`Sidebar\` component
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarBox>;

export const Primary: Story = {
  args: {},
};
