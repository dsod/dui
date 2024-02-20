import { button } from "@dui/css/recipies";
import { styled } from "../../styled-system/jsx";
import type { ButtonVariantProps } from "../../styled-system/recipes";

export const Button = styled("button", button, { dataAttr: true });
export type ButtonProps = ButtonVariantProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
