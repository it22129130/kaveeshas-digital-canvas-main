import { cn } from "@/lib/utils";
import React from "react";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  borderRadius?: number;
}

export function ShineBorder({
  children,
  className,
  borderWidth = 1,
  duration = 5,
  color = ["#8b5cf6", "#06b6d4", "#34d399"],
  borderRadius = 16,
}: ShineBorderProps) {
  const colorValue = Array.isArray(color) ? color.join(", ") : color;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ borderRadius }}
    >
      {/* Animated border */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius,
          padding: borderWidth,
          background: `conic-gradient(from var(--border-angle, 0deg), transparent 70%, ${colorValue})`,
          animation: `border-spin ${duration}s linear infinite`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {children}
    </div>
  );
}
