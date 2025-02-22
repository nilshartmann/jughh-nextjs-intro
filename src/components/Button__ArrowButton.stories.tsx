import { Meta, StoryObj } from "@storybook/react";

import { ArrowButton } from "@/components/Button";

const meta: Meta<typeof ArrowButton> = {
  component: ArrowButton,
  title: "components / buttons / ArrowButton",
  tags: ["autodocs", "!dev"],
  args: {},
  parameters: {
    docs: {
      description: {
        component: `Shows an arrow, that can be used to style a html \`button\`-element
- Note that this is a **label** for a button. It can be used as children for a \`button\`-element

\`\`\`tsx
<button><ArrowButton /></button>

\`\`\`				
				
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArrowButton>;

export const Primary: Story = {
  args: {},
};
