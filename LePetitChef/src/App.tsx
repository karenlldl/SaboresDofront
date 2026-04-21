import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

export type Usuario = {
  nome: string;
  email: string;
} | null;

export type AbaAuth = "login" | "cadastro";
export type Pagina = "home" | "notfound";

const rotasValidas = [
  "",
  "#",
  "#home",
  "#receitas",
  "#sobre",
  "#contato",
  "#equipe",
];

const App = () => {
  const [usuario, setUsuario] = useState<Usuario>(null);
  const [mostrarAuthModal, setMostrarAuthModal] = useState(false);
  const [abaAuth, setAbaAuth] = useState<AbaAuth>("login");
  const [paginaAtual, setPaginaAtual] = useState<Pagina>("home");

  const abrirAuthModal = (aba: AbaAuth) => {
    setAbaAuth(aba);
    setMostrarAuthModal(true);
  };

  const fecharAuthModal = () => {
    setMostrarAuthModal(false);
  };

  useEffect(() => {
    const verificarRota = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      // Se não estiver na raiz do projeto, mostra NotFound
      if (path !== "/") {
        setPaginaAtual("notfound");
        return;
      }

      // Se estiver na raiz, valida o hash
      if (rotasValidas.includes(hash)) {
        setPaginaAtual("home");
      } else {
        setPaginaAtual("notfound");
      }
    };

    verificarRota();

    window.addEventListener("hashchange", verificarRota);
    window.addEventListener("popstate", verificarRota);

    return () => {
      window.removeEventListener("hashchange", verificarRota);
      window.removeEventListener("popstate", verificarRota);
    };
  }, []);

  if (paginaAtual === "home") {
    return (
      <Home
        usuario={usuario}
        setUsuario={setUsuario}
        mostrarAuthModal={mostrarAuthModal}
        abaAuth={abaAuth}
        abrirAuthModal={abrirAuthModal}
        fecharAuthModal={fecharAuthModal}
      />
    );
  }

  return (
    <NotFound voltarParaHome={() => {
      window.history.pushState({}, "", "/");
      window.location.hash = "#home";
      setPaginaAtual("home");
    }} />
  );
};

export default App;