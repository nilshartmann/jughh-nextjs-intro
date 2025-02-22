import { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "@/components/Sidebar";
import { SidebarBox } from "@/components/SidebarBox";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Common Layout / Sidebar",
  tags: ["autodocs", "!dev"],
  args: {
    children: (
      <>
        <SidebarBox title={"Welcome"}>
          <p>Welcome to our little react world</p>
        </SidebarBox>
        <SidebarBox title={"About"}>About us lorem ipsum</SidebarBox>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        component: `A sidebar for a two column layout.
        
- This only provides the general layout for the sidebar but no content
- You can add content using the \`children\` property
- Best used with \`SidebarBox\` components as children
- Can be used inside a \`TwoColumnLayout\` as \`sidebar\` property

\`\`\`tsx
<Sidebar>
  <SidebarBox title="Welcome">
    <p>Welcome to our little react world</p>
  </SidebarBox>
</Sidebar>  
\`\`\`
                     `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
  args: {},
};
