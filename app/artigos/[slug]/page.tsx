import { getPosts, getPostBySlug } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Artigo não encontrado",
      description: "Artigo inexistente"
    };
  }
  return {
    title: post.title,
    description: post.excerpt
  };
}

export default function ArtigoPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return (
      <main className="container">
        <h1>Artigo não encontrado</h1>
        <p>Verifique se o slug está correto ou adicione o post em <code>data/posts.ts</code>.</p>
        <Link href="/artigos" className="btn-primary">Voltar</Link>
      </main>
    );
  }

  return (
    <main className="container artigo">
      <div className="kicker">Artigo</div>
      <h1>{post.title}</h1>
      <div className="article-meta">{post.date} • Autor: {post.author ?? "Autor anônimo"}</div>

      <article className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div style={{ marginTop: 18 }}>
        <Link href="/artigos" className="btn-primary">Voltar para artigos</Link>
      </div>
    </main>
  );
}
