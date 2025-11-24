import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getPosts();

  return (
    <main className="container">
      <section className="hero">
        <div>
          <div className="kicker">Blog</div>
          <h1>Bem-vindo ao TechBlog</h1>
          <p>Artigos sobre desenvolvimento, jogos e cultura tecnológica em um tema futurista.</p>
          <Link href="/artigos" className="btn-primary">Ver artigos</Link>
        </div>
      </section>

      <section className="posts-grid">
        <h2>Últimos artigos</h2>
        <div className="grid">
          {posts.slice(0, 4).map((p) => (
            <Link key={p.slug} href={`/artigos/${p.slug}`} className="card">
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="meta">{p.date}</span>
              <div className="read-more">Ler mais →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
