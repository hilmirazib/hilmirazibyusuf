import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    underline?: "hover" | "always" | "none";
  };

export default function TextLink({
  className,
  underline = "hover",
  ...props
}: Props) {
  return (
    <Link
      {...props}
      className={clsx(
        "rounded outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400",
        underline === "hover" && "underline decoration-dotted hover:decoration-solid",
        underline === "always" && "underline",
        underline === "none" && "no-underline",
        className
      )}
    />
  );
}
