import { forwardRef } from "react";

import { TextField } from "@mui/material";

import type { TextFieldProps } from "@mui/material";

export interface InputProps extends Omit<TextFieldProps, "size"> {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ size = "md", className = "", ...props }, ref) => {
    // Map custom sizes to MUI sizes
    const getMuiSize = (size: string): TextFieldProps["size"] => {
      switch (size) {
        case "sm":
          return "small";
        case "md":
          return "medium";
        case "lg":
          return "medium"; // MUI doesn't have large size for TextField
        default:
          return "medium";
      }
    };

    return (
      <TextField
        ref={ref}
        size={getMuiSize(size)}
        className={className}
        variant="outlined"
        fullWidth
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
