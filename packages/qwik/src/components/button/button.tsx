import type { Component } from "@builder.io/qwik";
import { button } from "@dui/css/recipies";
import { styled } from "../../styled-system/jsx";
import type { ButtonVariantProps } from "../../styled-system/recipes";

export const Button = styled("button", button);
export type ButtonProps = Component<ButtonVariantProps>;

const Test = () => {
	return <Button onClick={(e) => e.preventDefault}>Test</Button>;
};
