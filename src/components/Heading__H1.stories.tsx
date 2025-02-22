import { Meta, StoryObj } from "@storybook/react";

import { H1 } from "@/components/Heading";

const meta: Meta<typeof H1> = {
  title: "components / Headings / H1",
  component: H1,
  tags: ["autodocs", "!dev"],
  args: {
    children: "Hello World",
  },
  parameters: {
    docs: {
      description: {
        component: `Default \`h1\` element
`,
      },
    },
  },
};

export default meta;

type H1Story = StoryObj<typeof H1>;

export const Primary: H1Story = {
  args: {},
};

export const Colored: H1Story = {
  args: { className: "text-red-500" },
};
