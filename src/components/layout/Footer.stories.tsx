import { Meta, StoryObj } from "@storybook/react";

import Footer from "@/components/layout/Footer";

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: "Common Layout / Footer",
  tags: ["autodocs", "!dev"],
  args: {},
  parameters: {
    docs: {
      description: {
        component: `A footer component that can be rendered at the bottom of a page, showing some information about our app
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {},
};
