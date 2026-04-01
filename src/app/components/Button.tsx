import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "filled" | "outlined" | "text";
  color?: "accent" | "destructive" | "secondary";
  onClick?: () => void;
  fullWidth?: boolean;
  icon?: ReactNode;
  className?: string;
}

export function Button({ 
  children, 
  variant = "filled", 
  color = "accent",
  onClick,
  fullWidth = false,
  icon,
  className = ""
}: ButtonProps) {
  const baseClasses = "h-[52px] px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200";
  
  const variantClasses = {
    filled: {
      accent: "bg-accent text-accent-foreground hover:opacity-90",
      destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
      secondary: "bg-secondary text-secondary-foreground hover:opacity-90"
    },
    outlined: {
      accent: "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground",
      destructive: "border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground",
      secondary: "border-2 border-muted text-foreground hover:bg-muted"
    },
    text: {
      accent: "text-accent hover:bg-accent/10",
      destructive: "text-destructive hover:bg-destructive/10",
      secondary: "text-muted-foreground hover:bg-muted"
    }
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant][color]} ${widthClass} ${className}`}
    >
      {icon}
      <span className="font-semibold">{children}</span>
    </button>
  );
}
