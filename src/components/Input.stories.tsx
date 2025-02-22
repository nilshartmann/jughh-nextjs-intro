import { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/Input";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {},
  parameters: {
    docs: {
      description: {
        component: `Editable \`input\` component
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: { value: "Hello" },
};

export const Disabled: Story = {
  args: { value: "Hello", disabled: true },
};
