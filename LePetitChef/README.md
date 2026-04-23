# 🍽️ Le Petit Chef

Projeto desenvolvido como parte do **Checkpoint 05**, com o objetivo de criar uma aplicação web moderna utilizando **React + TypeScript + TailwindCSS**, com foco em experiência do usuário, responsividade e organização de componentes.

---

## 📌 Descrição

O **Le Petit Chef** é uma aplicação inspirada no universo da culinária francesa, trazendo receitas organizadas por categorias como:

- 🍷 Bebidas
- 🥖 Entradas
- 🍲 Pratos principais
- 🍰 Sobremesas

O projeto simula um portal gastronômico moderno, com:

- Interface elegante inspirada no estilo francês
- Animações e microinterações
- Layout responsivo (mobile-first)
- Sistema de login simulado
- Navegação dinâmica

---

## 🚀 Tecnologias Utilizadas

- ⚛️ React
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🌐 HTML5 + CSS3
- ⚡ Vite

---

## 📂 Estrutura do Projeto
LePetitChef/
│
├── public/
│ ├── data/
│ │ └── receitas.json
│ └── img/
│
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── CadernoReceitas/
│ │ ├── Contato/
│ │ ├── Equipe/
│ │ ├── Footer/
│ │ ├── Hero/
│ │ ├── ReceitasFavoritas/
│ │ └── Sobre/
│ │
│ ├── pages/
│ │ ├── Home/
│ │ └── NotFound/
│ │
│ ├── styles/
│ │ └── index.css
│ │
│ ├── App.tsx
│ └── main.tsx
│
└── index.html

---

## 🧠 Funcionalidades

### 🔍 Busca de receitas
- Filtro dinâmico por nome
- Busca em tempo real

### 📚 Caderno de receitas
- Exibe receitas carregadas via JSON
- Limite inicial de visualização
- Acesso completo após login

### 🔐 Sistema de autenticação (simulado)
- Login e cadastro
- Exibição do nome do usuário
- Botão de logout

### 📱 Responsividade
- Layout adaptado para:
  - Mobile 📱
  - Tablet 📲
  - Desktop 💻

### 🎨 UI/UX
- Design inspirado no Figma
- Tipografia personalizada (Montserrat + Serif)
- Efeitos visuais e animações (hover, fade, parallax)

### ⚠️ Página Not Found
- Detecta rotas inválidas
- Exibe tela personalizada

---

## 🎬 Animações e Interações

- Fade + Slide ao entrar na tela
- Parallax no personagem Rémy
- Hover nos cards de receitas
- Botões com feedback visual
- Elementos com profundidade (z-index)

---

## 📦 Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/le-petit-chef

# Acesse a pasta
cd le-petit-chef

# Instale as dependências
npm install

# Rode o projeto
npm run dev

📚 Observações
Projeto com foco educacional
Algumas funcionalidades são simuladas (login)
Dados carregados via JSON local