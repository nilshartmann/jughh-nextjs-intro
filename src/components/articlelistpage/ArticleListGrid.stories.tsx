import { Meta, StoryObj } from "@storybook/react";

import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";

const meta: Meta<typeof ArticleListGrid> = {
  component: ArticleListGrid,
  title: "Article Page Components / ArticleListGrid",
  tags: ["autodocs", "!dev"],
  args: {
    children: (
      <>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
        <div>Six</div>
        <div>Seven</div>
        <div>Eight</div>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        component: `Renders a grid layout with three columns to display a list of articles.
				
- You can use \`ArticleCard\` components to render the actual articles				
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleListGrid>;

export const Primary: Story = {
  args: {},
};
