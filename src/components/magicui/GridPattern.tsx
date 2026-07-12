import { cn } from "@/lib/utils";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  className?: string;
  dots?: boolean;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  className,
  dots = false,
}: GridPatternProps) {
  if (dots) {
    return (
      <div
        className={cn("absolute inset-0 pointer-events-none", className)}
        style={{
          backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.15) 1px, transparent 1px)`,
          backgroundSize: `${width}px ${height}px`,
        }}
      />
    );
  }

  return (
    <svg
      className={cn("absolute inset-0 h-full w-full pointer-events-none", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path
            d={`M ${width} 0 L 0 0 0 ${height}`}
            fill="none"
            stroke="rgba(139,92,246,0.06)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
