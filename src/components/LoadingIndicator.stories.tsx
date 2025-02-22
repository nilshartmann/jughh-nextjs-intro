import { Meta, StoryObj } from "@storybook/react";

import LikeIcon from "@/components/LikeIcon";
import LoadingIndicator from "@/components/LoadingIndicator";

const meta: Meta<typeof LoadingIndicator> = {
  component: LoadingIndicator,
  tags: ["autodocs", "!dev"],
  args: {},
  parameters: {
    docs: {
      description: {
        component: `Shows a Loading Indicator
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoadingIndicator>;

export const Primary: Story = {
  args: {},
};

export const WithChildren: Story = {
  args: {
    children: "Please wait",
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: <LikeIcon />,
  },
};
