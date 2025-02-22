import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Button";
import ButtonBar from "@/components/ButtonBar";

const meta: Meta<typeof ButtonBar> = {
  component: ButtonBar,
  title: "components / buttons / ButtonBar",
  tags: ["autodocs", "!dev"],
  args: {
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        component: `Aligns button components in a row
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonBar>;

export const Primary: Story = {
  args: {},
};
