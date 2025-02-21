import { Meta, StoryObj } from "@storybook/react";

import Breaking from "@/components/Breaking";

const breakingMeta: Meta<typeof Breaking> = {
  component: Breaking,
};

export default breakingMeta;

type BreakingStory = StoryObj<typeof Breaking>;

export const breaking: BreakingStory = {
  args: {
    children: "+++ Eil +++ News +++ Sofort lesen! +++",
    speed: 100,
  },
};
