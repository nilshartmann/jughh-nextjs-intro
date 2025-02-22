import { Meta, StoryObj } from "@storybook/react";

import ArticleBannerWrapper from "@/components/articlepage/ArticleBannerWrapper";

const meta: Meta<typeof ArticleBannerWrapper> = {
  component: ArticleBannerWrapper,
  title: "Article Page Components / ArticleBannerWrapper",
  tags: ["autodocs", "!dev"],
  args: {
    children: (
      <div style={{ height: "400px" }}>
        Your article banner information goes here
      </div>
    ),
    backgroundImageUri: "/images/articles/s_12.webp",
  },
  parameters: {
    docs: {
      description: {
        component: `Shows the banner background image for an article.

- Set the content of the banner as \`children\` property.
				
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleBannerWrapper>;

export const Primary: Story = {
  args: {},
};
