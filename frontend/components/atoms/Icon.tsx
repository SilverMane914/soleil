import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 24,
  className = '',
  color,
}) => {
  return (
    <IconComponent
      size={size}
      className={className}
      color={color}
      aria-hidden="true"
    />
  );
};

export default Icon;
