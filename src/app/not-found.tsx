import React from "react";

export default function NotFoundPage() {
  return (
    <div className="wrapper flex flex-col min-h-screen">
      <header className="header-content py-5 text-center">
        <img
          src="/assets/app-logo.png"
          alt="App Logo"
          className="logo max-w-xs mx-auto"
        />
      </header>

      <section className="message flex-1 flex items-center justify-center">
        <div className="message-content text-center">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Página não encontrada!
          </h2>
          <p className="text-lg text-textSecondary mb-6">
            A página que você está procurando não existe ou foi movida.
          </p>
          <a
            href="/"
            className="cta-button bg-primary text-white py-3 px-6 rounded-lg hover:bg-accent transition duration-300"
          >
            Voltar para a página inicial
          </a>
        </div>
      </section>
    </div>
  );
}
