import { Meta, StoryObj } from "@storybook/react";

import RelatedArticleBox from "@/components/articlepage/RelatedArticleBox";

const meta: Meta<typeof RelatedArticleBox> = {
  component: RelatedArticleBox,
  title: "Article Page Components / RelatedArticleBox",
  args: {
    onNextClick() {},
    onPrevClick() {},
    article: {
      id: "A_8",
      title: "Advancements in Wind Energy Technology",
      image: {
        uri: "/images/articles/s_8.webp",
        altText: "Alt text for Advancements in Wind Energy Technology",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RelatedArticleBox>;

export const Primary: Story = {
  args: {},
};
