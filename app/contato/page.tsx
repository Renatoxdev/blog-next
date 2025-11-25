import Image from "next/image";

export default function ContatoPage() {
  return (
    <main className="container">
      <h1>Contato</h1>

      <div className="contact-grid">
        <a href="#" className="contact-item">WhatsApp</a>
        <a href="#" className="contact-item">LinkedIn</a>
        <a href="#" className="contact-item">Discord</a>
        <a href="#" className="contact-item">GitHub</a>
      </div>
    </main>
  );
}
