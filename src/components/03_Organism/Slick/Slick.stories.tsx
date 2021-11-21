import { ComponentMeta, ComponentStory } from "@storybook/react";
import Slick from "./Slick";

export default {
  title: "03_Organism/Slick",
  component: Slick,
} as ComponentMeta<typeof Slick>;

const Template: ComponentStory<typeof Slick> = (args) => <Slick {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
