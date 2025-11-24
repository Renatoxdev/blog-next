import { notFound } from "next/navigation";
import posts from "@/data/posts.json";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
      description: "Este artigo não existe.",
    };
  }

  return {
    title: post.title,
    description: post.description ?? "Artigo do blog",
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  const date = post.date ?? "Data não informada";
  const author = post.author ?? "Autor anônimo";

  return (
    <article className="article-container">
      <h1>{post.title}</h1>

      <div className="article-meta">
        {date} • Autor: {author}
      </div>

      <div className="article-content">
        {post.content}
      </div>
    </article>
  );
}
