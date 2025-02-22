import { Meta, StoryObj } from "@storybook/react";

import ArticlesRouteHeader from "@/components/layout/ArticlesRouteHeader";

const meta: Meta<typeof ArticlesRouteHeader> = {
  component: ArticlesRouteHeader,
  title: "Article Page Components / ArticlesHeader",
  tags: ["autodocs", "!dev"],
  args: {},
  parameters: {
    docs: {
      description: {
        component: `Renders the default header that is visible among all pages under the **articles** routes
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticlesRouteHeader>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {},
};
