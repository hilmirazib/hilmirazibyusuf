import clsx from "clsx";
import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
  asChild?: boolean;
  href?: string; 
};

const base =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
const variants = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900",
  ghost:
    "text-zinc-700 hover:bg-zinc-100 focus:ring-zinc-400",
  outline:
    "border border-zinc-300 text-zinc-800 hover:bg-zinc-50 focus:ring-zinc-400",
};

export default function Button({
  className,
  variant = "primary",
  asChild,
  href,
  ...props
}: ButtonProps) {
  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
