import { styled } from "../../styled-system/jsx";
import { type ButtonVariantProps, button } from "../../styled-system/recipes";

export const Button = styled("button", button, { dataAttr: true });
export type ButtonProps = ButtonVariantProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
