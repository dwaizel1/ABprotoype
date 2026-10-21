type ArrowDirection = "right" | "left" | "up" | "down" | "up-right";

const ROTATION: Record<ArrowDirection, number> = {
  right: 0,
  down: 90,
  left: 180,
  up: -90,
  "up-right": -45,
};

type ArrowSquareIconProps = {
  direction?: ArrowDirection;
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  title?: string;
};

export function ArrowSquareIcon({
  direction = "right",
  size = 20,
  strokeWidth = 2,
  className,
  title,
}: ArrowSquareIconProps) {
  const rotation = ROTATION[direction];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={["inline-block shrink-0", className].filter(Boolean).join(" ")}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <g transform={rotation ? `rotate(${rotation} 12 12)` : undefined}>
        <path d="M7.5 12h9" />
        <path d="m12.75 8.25 3.75 3.75-3.75 3.75" />
      </g>
    </svg>
  );
}
