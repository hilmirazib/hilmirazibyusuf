export default function Table(props: React.ComponentProps<"table">) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg border">
      <table className="w-full text-left [&_th]:bg-zinc-50 [&_th]:font-medium [&_th]:text-zinc-700 [&_th]:p-3 [&_td]:p-3" {...props} />
    </div>
  );
}
