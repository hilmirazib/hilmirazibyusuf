import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { MDXContent } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

import ViewCounter from "@/components/molecules/ViewCounter";
import Reactions from "@/components/molecules/Reactions"; 

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  try {
    const post = getPostBySlug(slug);
    return buildMetadata({
      title: post.meta.title,
      description: post.meta.description,
      url: `/blog/${slug}`,
      image: `/og/image?title=${encodeURIComponent(post.meta.title)}`,
    });
  } catch {
    return buildMetadata({ title: "Not found" });
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-10 prose prose-zinc dark:prose-invert">
      <h1 className="mb-2">{post.meta.title}</h1>
      <p className="text-sm text-zinc-500">{new Date(post.meta.date).toDateString()}</p>
      <ViewCounter slug={slug} />
      <MDXContent source={post.content} />
      <Reactions slug={slug} />
    </article>
  );
}
