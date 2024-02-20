import { button } from "@dui/css/recipies";
import type { ComponentProps } from "solid-js";
import { styled } from "../../styled-system/jsx";

export const Button = styled("button", button);
export type ButtonProps = ComponentProps<typeof Button>;
