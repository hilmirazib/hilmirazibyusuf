import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { MDXContent } from "@/lib/mdx";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-10 prose prose-zinc dark:prose-invert">
      <h1 className="mb-2">{post.meta.title}</h1>
      <p className="text-sm text-zinc-500">{new Date(post.meta.date).toDateString()}</p>
      <MDXContent source={post.content} />
    </article>
  );
}
