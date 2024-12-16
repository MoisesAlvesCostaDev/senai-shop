# Senai Shop - Plataforma de Cursos Online

Este projeto é uma plataforma desenvolvida em **Next.js**(um frame Work React.js) para exibir, gerenciar e autenticar usuários em um catálogo de cursos do Senai. Ele inclui funcionalidades como listagem de cursos, carrinho de compras, autenticação de usuários e lista pedidos realizados.

---

## 📂 Estrutura do Projeto

A estrutura de diretórios do projeto está organizada da seguinte forma:

```
/public
  └── assets            # Imagens e ícones públicos do projeto
/src
  └── app               # Diretório raiz do Next.js
      ├── api           # Endpoints de APIs locais
      ├── Components    # Componentes reutilizáveis
      ├── misc          # Arquivos adicionais, como mensagens e configurações
      ├── moks          # Dados de mock para simular o backend
      ├── pages         # Páginas principais da aplicação
      │   ├── cart      # Página do carrinho de compras
      │   ├── Home      # Página inicial
      │   ├── list      # Página de listagem de cursos
      │   └── myorders  # Página de pedidos
      ├── providers     # Providers do contexto (ex: sessão de autenticação)
      ├── types         # Tipos TypeScript globais
      ├── globals.css   # Estilização global com Tailwind CSS
      ├── layout.tsx    # Layout global da aplicação
      ├── page.tsx      # Página principal
      └── not-found.tsx # Página 404 customizada
```

---

## 🚀 Rodando o Projeto

### Pré-requisitos

Certifique-se de que você tenha as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão LTS recomendada)
- **npm** ou **yarn**

### Passos para Rodar

1. **Clonar o repositório**

2. **Instalar dependências**

   ```bash
   npm install
   # ou
   yarn
   ```

3. **Configurar variáveis de ambiente**

   Crie um arquivo `.env.local` na raiz do projeto e adicione as configurações necessárias, por exemplo:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   ```

4. **Rodar o projeto em modo de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O servidor será iniciado em `http://localhost:3000`.

---

## 🔐 Sistema de Autenticação

O sistema de autenticação utiliza **NextAuth.js** com suporte a **Credentials Provider**.

### Fluxo de Autenticação

1. **Login**: O usuário realiza login com email e senha.

   - Endpoint utilizado: `http://localhost:3000/api/auth/nextauth`.
   - As credenciais são validadas em um mock API definido no projeto.

2. **Persistência**: Sessões são mantidas através de JWT (JSON Web Token).

3. **Logout**: O logout é realizado através do método `signOut()` do NextAuth.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor.
- **Tailwind CSS**: Framework de CSS utilitário para estilização.
- **NextAuth.js**: Biblioteca para autenticação de usuários.
- **React Hook Form**: Gerenciamento de formulários.
- **Yup**: Validação de formulários.
- **TypeScript**: Tipagem estática para JavaScript.
- **ESLint e Prettier**: Ferramentas de linting e formatação de código.

---

## 📋 Funcionalidades

- **Autenticação** com suporte a Login e Cadastro.
- **Listagem de Cursos** com dados dinâmicos carregados através de mocks.
- **Carrinho de Compras** para adicionar e remover cursos.
- **Pedidos Realizados** com tela de resumo dos pedidos.
