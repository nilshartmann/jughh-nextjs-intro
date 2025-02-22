import { Meta, StoryObj } from "@storybook/react";

import Breaking from "@/components/Breaking";

const breakingMeta: Meta<typeof Breaking> = {
  component: Breaking,
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

export default breakingMeta;

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
type BreakingStory = StoryObj<typeof Breaking>;

export const Primary: BreakingStory = {
  args: {
    children: "+++ Eil +++ News +++ Sofort lesen! +++",
  },
};
