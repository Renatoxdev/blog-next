import Link from "next/link";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <main className="container">
      <h1>Blog</h1>

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
