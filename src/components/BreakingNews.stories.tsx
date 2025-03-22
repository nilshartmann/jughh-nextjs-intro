import { Meta, StoryObj } from "@storybook/react";

import BreakingNews from "@/components/BreakingNews";

const breakingNewsMeta: Meta<typeof BreakingNews> = {
  component: BreakingNews,
  tags: ["autodocs", "!dev"],

  parameters: {
    docs: {
      description: {
        component: `Renders a expandable scrolling "breaking news" text.
- Initially the area with the scrolling content is collapsed
- You can set the text with properties        
- Note: to expand the area, click on the button, that is part of the component 
        `,
      },
    },

    backgrounds: {
      values: [{ name: "Light", value: "#7BAB9F" }],
      default: "Light",
    },
  },
};

export default breakingNewsMeta;

//
//
//
//
//
//
//
//
//
//
//
//
//
// --------------
type BreakingNewsStory = StoryObj<typeof BreakingNews>;

export const Primary: BreakingNewsStory = {
  args: {
    children: "+++ Eil +++ News +++ Sofort lesen! +++",
  },
};
