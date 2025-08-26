import { forwardRef } from "react";

import { Button as MuiButton } from "@mui/material";

import type { ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "size"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = "primary", size = "md", className = "", ...props },
    ref
  ) => {
    // Map custom variants to MUI variants
    const getMuiVariant = (variant: string): MuiButtonProps["variant"] => {
      switch (variant) {
        case "primary":
        case "gradient":
          return "contained";
        case "secondary":
          return "contained";
        case "outline":
          return "outlined";
        case "ghost":
          return "text";
        default:
          return "contained";
      }
    };

    // Map custom sizes to MUI sizes
    const getMuiSize = (size: string): MuiButtonProps["size"] => {
      switch (size) {
        case "sm":
          return "small";
        case "md":
          return "medium";
        case "lg":
          return "large";
        default:
          return "medium";
      }
    };

    // Get color based on variant
    const getColor = (variant: string): MuiButtonProps["color"] => {
      switch (variant) {
        case "primary":
        case "gradient":
          return "primary";
        case "secondary":
          return "secondary";
        case "outline":
          return "primary";
        case "ghost":
          return "primary";
        default:
          return "primary";
      }
    };

    return (
      <MuiButton
        ref={ref}
        variant={getMuiVariant(variant)}
        size={getMuiSize(size)}
        color={getColor(variant)}
        className={className}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }
);

Button.displayName = "Button";
