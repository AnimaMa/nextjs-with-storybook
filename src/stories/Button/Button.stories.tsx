import React from "react";
import Button from "../../components/Button";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "handleclickName" } },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Blue = () => (
  <Button label={"Blue button"} bgColor="blue" size={"sm"} />
);

export const Primary = Template.bind({});
Primary.args = { label: "Primary button", bgColor: "#79a0f7", size: "md" };

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary buttonik",
  bgColor: "#ecc346",
  size: "lg",
};
