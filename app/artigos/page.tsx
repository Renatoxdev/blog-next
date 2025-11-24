import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function ArtigosPage() {
  const posts = getPosts();

  return (
    <main className="container">
      <div className="kicker">Artigos</div>
      <h1>Todos os artigos</h1>
      <p>Adicione novos posts editando o arquivo <code>data/posts.ts</code>.</p>

      <div className="articles-grid" style={{ marginTop: "1.2rem" }}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/artigos/${post.slug}`} className="card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span className="meta">{post.date}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
