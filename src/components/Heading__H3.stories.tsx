import { Meta, StoryObj } from "@storybook/react";

import { H1, H3 } from "@/components/Heading";

const meta: Meta<typeof H1> = {
  title: "components / Headings / H3",
  component: H3,
  tags: ["autodocs", "!dev"],
  args: {
    children: "Hello World",
  },
  parameters: {
    docs: {
      description: {
        component: `Default \`h3\` element
`,
      },
    },
  },
};

export default meta;

type H3Story = StoryObj<typeof H3>;

export const Primary: H3Story = {
  args: {},
};
