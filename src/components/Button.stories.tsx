import { Meta, StoryObj } from "@storybook/react";

import { Button, CheckLabel } from "@/components/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components / Buttons / Button",
  tags: ["autodocs"],
  args: {},
  parameters: {
    docs: {
      description: {
        component: `Renders the content that can be used inside a \`button\` html element

- Note the component itself is only for rendering the content of another element, so it can be used
  for example in a \`button\` html

Example:

\`\`\`tsx
<button><Button>Click me</Button></button>
\`\`\`				
				
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me",
  },
};

export const Large: Story = {
  args: {
    children: "Click me large",
    size: "lg",
  },
};

export const Checked: Story = {
  args: {
    children: <CheckLabel checked>I'm checked</CheckLabel>,
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Note that the \`checked\` state does _not_ render a check mark. Its only to set the correct _background color_.
        
- It's best used with a \`CheckLabel\` component as children.
- The \`checked\` state does not have a \`:hover\` styling         
`,
      },
    },
  },
};
