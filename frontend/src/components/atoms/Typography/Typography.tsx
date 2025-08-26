import { forwardRef } from "react";

import { Typography as MuiTypography } from "@mui/material";

import type { TypographyProps as MuiTypographyProps } from "@mui/material";

export interface TypographyProps extends MuiTypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <MuiTypography ref={ref} className={className} {...props}>
        {children}
      </MuiTypography>
    );
  }
);

Typography.displayName = "Typography";
