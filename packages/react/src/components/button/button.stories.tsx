import type { ArgTypes, Meta, StoryObj } from "@storybook/react";
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
	title: "Button",
	component: Button,
	argTypes,
};

type Story = StoryObj<ButtonProps>;

export default meta;

export const Primary: Story = {
	args: {
		size: "large",
		variant: "primary",
	},
	render: ({ size, variant, ...rest }) => (
		<Button {...rest} size={size} variant={variant}>
			Some button
		</Button>
	),
};
