import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: boolean | React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  icon = true,
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 font-figtree font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-light focus:ring-primary",
    secondary:
      "bg-white/10 text-white border border-white/16 backdrop-blur-md hover:bg-white/20 focus:ring-white/30",
    accent:
      "bg-accent text-accent-dark hover:bg-accent/80 focus:ring-accent-dark",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-body rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
  };

  // Handle rounded-full override
  let finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  // If className contains rounded-full, override the border radius
  if (className.includes("rounded-full")) {
    finalClasses = finalClasses.replace(/rounded-[a-z0-9]+/, "rounded-full");
  }

  const classes = `${finalClasses} ${className}`;

  // Render icon based on prop
  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === "boolean") {
      return <ArrowUpRight className="w-4 h-4" />;
    }

    return icon;
  };

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {renderIcon()}
    </button>
  );
};

export default Button;
