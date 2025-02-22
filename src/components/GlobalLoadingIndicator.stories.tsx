import { linkTo } from "@storybook/addon-links";
import { Meta, StoryObj } from "@storybook/react";

import { GlobalLoadingIndicator } from "@/components/GlobalLoadingIndicator";

const LButton = () => (
  <button onClick={linkTo("LoadingIndicator")}>fasdfasdfsdf</button>
);

const meta: Meta<typeof GlobalLoadingIndicator> = {
  component: GlobalLoadingIndicator,
  tags: ["autodocs", "!dev"],
  args: {},
  parameters: {
    docs: {
      description: {
        component: `Full-height Loading Indicator
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GlobalLoadingIndicator>;

export const Primary: Story = {
  args: {},
};
