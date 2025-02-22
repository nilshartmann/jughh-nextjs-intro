import { Meta, StoryObj } from "@storybook/react";

import { PageButton } from "@/components/Button";
import PaginationBar from "@/components/PaginationBar";

const meta: Meta<typeof PaginationBar> = {
  component: PaginationBar,
  tags: ["autodocs", "!dev"],
  args: {
    totalPages: 5,
    currentPage: 1,
    children: (label) => <PageButton state={label} />,
  },
  parameters: {
    docs: {
      description: {
        component: `Shows a list of buttons for pagination
				
Note the individual buttons for each page as well as _first_, _prev_, _next_, _last_ buttons needs to be created using
a _function_ as \`children\`.

The function specified as \`children\` property is invoked for each button that should be rendered. The function
gets a \`PageLabel\` object as property that it can use to determine the styling and behaviour of each button.

\`\`\`tsx
<PaginationBar totalPages={totalPages} currentPage={currentPage}>
	{(btn) => <PageButton state={btn} />}
</PaginationBar>
\`\`\`
				
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PaginationBar>;

export const Primary: Story = {
  args: {},
};
