import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechBlog Gamer",
  description: "Blog futurista com estética gamer e neon"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <div className="header-inner">
            <a className="logo" href="/" data-text="TechBlog">TechBlog</a>

            <nav className="navbar" aria-label="Principal">
              <a href="/">Início</a>
              <a href="/artigos">Artigos</a>
              <a href="/sobre">Sobre</a>
              <a href="/contato">Contato</a>
            </nav>

            <div className="header-cta">
              <a href="/artigos" className="btn-primary">Ler artigos</a>
            </div>
          </div>
          <div className="header-underline" />
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="footer-content">
            <h2 className="footer-title neon-text">TechBlog</h2>
            <p className="footer-text">Criado com Next.js • Tema Gamer • 2025</p>
            <div className="footer-links">
              <a href="/">Início</a>
              <a href="/sobre">Sobre</a>
              <a href="/contato">Contato</a>
            </div>
            <div className="footer-bottom">
              <span>© 2025 TechBlog • Todos os direitos reservados</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
