import { Meta, StoryObj } from "@storybook/react";

import LikeIcon from "@/components/LikeIcon";

const meta: Meta<typeof LikeIcon> = {
  tags: ["autodocs", "!dev"],
  component: LikeIcon,
  args: {},
  parameters: {
    docs: {
      description: {
        component: `Show a like icon
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LikeIcon>;

export const Primary: Story = {
  args: {},
};
