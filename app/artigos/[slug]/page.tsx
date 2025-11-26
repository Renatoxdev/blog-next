import { Metadata } from "next";
import { posts } from "@/data/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <h1>Artigo não encontrado</h1>;
  }

  return (
    <main className="container">
      <div className="kicker">Artigo</div>
      <h1>{post.title}</h1>
      <p className="article-meta">
        {post.date} • Autor: {post.author ?? "Autor anônimo"}
      </p>

      <article className="content">
        {post.content}
      </article>
    </main>
  );
}
