import { ComponentMeta, ComponentStory } from "@storybook/react";
import SlickLi from "./SlickLi";

export default {
  title: "01_Atom/SlickLi",
  component: SlickLi,
} as ComponentMeta<typeof SlickLi>;

const Template: ComponentStory<typeof SlickLi> = (args) => (
  <SlickLi {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};
