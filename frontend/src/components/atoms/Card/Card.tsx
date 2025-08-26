import { forwardRef } from "react";

import { Card as MuiCard } from "@mui/material";

import type { CardProps as MuiCardProps } from "@mui/material";

export interface CardProps extends MuiCardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <MuiCard ref={ref} className={className} {...props}>
        {children}
      </MuiCard>
    );
  }
);

Card.displayName = "Card";
