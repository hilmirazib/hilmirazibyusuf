type Props = {
  type?: "info" | "warn" | "success";
  title?: string;
  children?: React.ReactNode;
};

const styles = {
  info: "border-blue-300 bg-blue-50 text-blue-900",
  warn: "border-amber-300 bg-amber-50 text-amber-900",
  success: "border-emerald-300 bg-emerald-50 text-emerald-900",
};

export default function Callout({ type = "info", title, children }: Props) {
  return (
    <div className={`my-4 rounded-lg border p-4 ${styles[type]}`}>
      {title && <p className="mb-1 font-semibold">{title}</p>}
      <div className="[&>p]:m-0">{children}</div>
    </div>
  );
}
