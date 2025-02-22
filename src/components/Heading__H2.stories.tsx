import { Meta, StoryObj } from "@storybook/react";

import { H1, H2 } from "@/components/Heading";

const meta: Meta<typeof H1> = {
  title: "components / Headings / H2",
  component: H2,
  tags: ["autodocs", "!dev"],
  args: {
    children: "Hello World",
  },
  parameters: {
    docs: {
      description: {
        component: `Default \`h2\` element
`,
      },
    },
  },
};

export default meta;

type H2Story = StoryObj<typeof H2>;

export const Primary: H2Story = {
  args: {},
};
