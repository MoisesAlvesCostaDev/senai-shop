import React from "react";

export default function ErrorPage() {
  return (
    <div className="wrapper flex flex-col min-h-screen">
      <header className="header-content py-5 text-center">
        <img
          src="/assets/logo-estanqueapp.png"
          alt="EstanqueApp Logo"
          className="logo max-w-xs mx-auto"
        />
      </header>

      <section className="message flex-1 flex items-center justify-center">
        <div className="message-content text-center">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Ocorreu um erro!
          </h2>
          <p className="text-lg text-textSecondary mb-6">
            Infelizmente, não conseguimos enviar sua mensagem. Por favor, tente
            novamente mais tarde.
          </p>
          <a
            href="/"
            className="cta-button bg-primary text-white py-3 px-6 rounded-lg hover:bg-accent transition duration-300"
          >
            Voltar para a página inicial
          </a>
        </div>
      </section>

      <footer className="footer-content bg-backgroundDark text-white text-center py-4">
        <p>&copy; 2024 EstanqueApp. Todos os direitos reservados.</p>
        <p>
          <a href="#" className="text-primary hover:underline">
            Política de Privacidade
          </a>{" "}
          |{" "}
          <a href="#" className="text-primary hover:underline">
            Termos de Serviço
          </a>
        </p>
      </footer>
    </div>
  );
}
