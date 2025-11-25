// app/artigos/[slug]/page.tsx
import { getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const { getPosts } = await import("@/lib/posts");
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return <h1>Post não encontrado</h1>;

  return (
    <main className="container">
      <h1>{post.title}</h1>
      <div className="article-meta">
        {post.date} • Autor: {post.author ?? "Autor anônimo"}
      </div>
      <article className="article-content">
        <p>{post.content}</p>
      </article>
    </main>
  );
}
