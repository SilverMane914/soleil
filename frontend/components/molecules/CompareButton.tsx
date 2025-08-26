import React from "react";
import { Plus, Minus } from "lucide-react";

interface CompareButtonProps {
  onClick?: () => void;
  className?: string;
}

const CompareButton: React.FC<CompareButtonProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-3 font-figtree font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary px-6 py-3 rounded-full ${className}`}
    >
      <span className="text-sm font-medium tracking-wide">COMPARE</span>
      <div className="flex items-center gap-1 p-1">
        <Plus className="w-3 h-3" />
        <Minus className="w-3 h-3" />
      </div>
    </button>
  );
};

export default CompareButton;
