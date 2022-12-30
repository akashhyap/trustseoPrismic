import clsx from "clsx";

export const Bounded = ({
  as: Comp = "div",
  size,
  className,
  children,
}) => {
  return (
    <Comp className={clsx("px-4 py-4 md:px-6", className)}>
      <div
        className={clsx(
          "mx-auto w-full",
          size === "small" && "max-w-xl",
          size === "base" && "max-w-3xl",
          size === "wide" && "max-w-5xl",
          size === "widest" && "max-w-6xl"
        )}
      >
        {children}
      </div>
    </Comp>
  );
};
