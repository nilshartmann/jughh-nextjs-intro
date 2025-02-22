import { Meta, StoryObj } from "@storybook/react";

import { PageButton } from "@/components/Button";

const meta: Meta<typeof PageButton> = {
  component: PageButton,
  title: "components / buttons / PageButton",
  tags: ["autodocs"],
  args: {},
  parameters: {
    docs: {
      description: {
        component: `Shows an page label that can be used for buttons in a pagination bar
- Note that this is a **label** for a button. It can be used as children for a \`button\` element or a Next.js \`Link\` component

\`\`\`tsx
<Link href="...">
  <PageButton state={{state: "active", label: "1"}} />
</Link>
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PageButton>;

export const ActivePage: Story = {
  args: {
    state: {
      state: "active",
      label: "2",
    },
  },
};

export const SelectablePage: Story = {
  args: {
    state: {
      state: "selectable",
      label: "3",
    },
  },
};
