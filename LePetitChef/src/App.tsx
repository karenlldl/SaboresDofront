import { useState } from "react";
import Home from "./pages/Home/Home";

export type Usuario = {
  nome: string;
  email: string;
} | null;

export type AbaAuth = "login" | "cadastro";

const App = () => {
  const [usuario, setUsuario] = useState<Usuario>(null);
  const [mostrarAuthModal, setMostrarAuthModal] = useState(false);
  const [abaAuth, setAbaAuth] = useState<AbaAuth>("login");

  const abrirAuthModal = (aba: AbaAuth) => {
    setAbaAuth(aba);
    setMostrarAuthModal(true);
  };

  const fecharAuthModal = () => {
    setMostrarAuthModal(false);
  };

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
};

export default App;