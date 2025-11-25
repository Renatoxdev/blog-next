import { getPostBySlug, getPosts } from "@/lib/posts";

export async function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
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
