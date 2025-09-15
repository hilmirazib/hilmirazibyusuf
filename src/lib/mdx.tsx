import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import CodeHighlighter from "@/components/mdx/CodeHighlighter";
import Callout from "@/components/mdx/Callout";
import Table from "@/components/mdx/Table";
import MdxImage from "@/components/mdx/MdxImage";
import Link from "next/link";

const H1 = (p: React.ComponentProps<"h1">) => <h1 className="text-3xl font-bold mt-0" {...p} />;
const H2 = (p: React.ComponentProps<"h2">) => <h2 className="text-2xl font-semibold mt-10" {...p} />;
const H3 = (p: React.ComponentProps<"h3">) => <h3 className="text-xl font-semibold mt-8" {...p} />;

const A = (p: React.ComponentProps<"a">) => {
  const { href, ...rest } = p;
  if (!href) return <a {...p} />;
  return (
    <Link
      href={href as string}
      {...rest}
      className="underline decoration-dotted hover:decoration-solid"
    />
  );
};

const Pre = (p: React.ComponentProps<"pre">) => (
  <pre
    className="rounded-lg bg-zinc-900/95 text-zinc-100 overflow-x-auto p-4"
    {...p}
  />
);
const Code = (p: React.ComponentProps<"code">) => <code className="text-sm" {...p} />;

// mapping MDX components -> your own styles
const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  a: A,
  pre: Pre,
  code: Code,
  table: Table,
  Callout,
  Image: MdxImage,
};

export function MDXContent({ source }: { source: string }) {
  return (
    <>
      <CodeHighlighter />
      <article className="prose prose-zinc max-w-none dark:prose-invert">
        <MDXRemote 
          source={source} 
          components={components}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} 
        />
      </article>
    </>
  );
}