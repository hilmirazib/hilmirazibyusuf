import { MDXRemote } from "next-mdx-remote/rsc";

// mapping MDX components -> your own styles
const components = {
  h1: (p: React.ComponentPropsWithoutRef<"h1">) => <h1 className="text-3xl font-bold mb-4" {...p} />,
  pre: (p: React.ComponentPropsWithoutRef<"pre">) => (
    <pre className="rounded-lg p-4 bg-zinc-900/90 text-zinc-100 overflow-x-auto" {...p} />
  ),
  code: (p: React.ComponentPropsWithoutRef<"code">) => <code className="px-1 py-0.5 rounded bg-zinc-200" {...p} />,
};

export function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
