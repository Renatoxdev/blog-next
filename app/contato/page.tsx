import { MessageSquare, Phone, Linkedin, Github } from "lucide-react";
import { FaDiscord } from "react-icons/fa";


export default function ContatoPage() {
  return (
    <main className="container">
      <div className="kicker">Contato</div>
      <h1>Vamos conversar</h1>
      <p>Use os canais abaixo (links fictícios de exemplo).</p>

      <div className="contact-grid">
        <a className="contact-card" href="https://wa.me/00000000000" target="_blank" rel="noreferrer">
          <MessageSquare size={28} />
          <div>
            <div>WhatsApp</div>
            <small className="meta">Mensagem instantânea</small>
          </div>
        </a>

        <a className="contact-card" href="https://linkedin.com/in/fake" target="_blank" rel="noreferrer">
          <Linkedin size={28} />
          <div>
            <div>LinkedIn</div>
            <small className="meta">Conectar profissionalmente</small>
          </div>
        </a>

        <a className="contact-card" href="https://discord.com/users/000000000" target="_blank" rel="noreferrer">
          <FaDiscord size={24} />
          <div>
            <div>Discord</div>
            <small className="meta">Chat de voz e texto</small>
          </div>
        </a>

        <a className="contact-card" href="mailto:email@falso.com">
          <Github size={28} />
          <div>
            <div>E-mail / GitHub</div>
            <small className="meta">Projetos e colaborações</small>
          </div>
        </a>
      </div>
    </main>
  );
}
