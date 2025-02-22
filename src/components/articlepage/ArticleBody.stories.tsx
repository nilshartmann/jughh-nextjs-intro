import { Meta, StoryObj } from "@storybook/react";

import ArticleBody from "@/components/articlepage/ArticleBody";

const meta: Meta<typeof ArticleBody> = {
  component: ArticleBody,
  title: "Article Page Components / ArticleBody",
  tags: ["autodocs", "!dev"],
  args: {
    body: `
Lorem ipsum.

Dolor sit amet

Moin moin		
		`,
  },
  parameters: {
    docs: {
      description: {
        component: `Renders the paragraphs of an article body and a "ai-generated content" warning hint.
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleBody>;

export const Primary: Story = {
  args: {},
};
