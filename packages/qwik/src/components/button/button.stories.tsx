import type { ArgTypes, Meta, StoryObj } from "storybook-framework-qwik";
import { button } from "../../styled-system/recipes/button";
import { Button, type ButtonProps } from "./button";

const argTypes = button.variantKeys.reduce(
	(acc, key) => {
		acc[key] = {
			options: button.variantMap[key],
			control: { type: "inline-radio" },
		};
		return acc;
	},
	{} as Partial<ArgTypes<ButtonProps>>,
);

const meta: Meta<ButtonProps> = {
	component: Button,
};

type Story = StoryObj<ButtonProps>;

export default meta;

export const Primary: Story = {
	args: {
		size: "medium",
	},
	render: (props) => <Button {...props}>Some button</Button>,
};
