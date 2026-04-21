import CadernoReceitas from "../../components/CadernoReceitas/CadernoReceitas";
import Contato from "../../components/Contato/Contato";
import Equipe from "../../components/Equipe/Equipe";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import ReceitasFavoritas from "../../components/ReceitasFavoritas/ReceitasFavoritas";
import Sobre from "../../components/Sobre/Sobre";
import type { AbaAuth, Usuario } from "../../App";

type HomeProps = {
  usuario: Usuario;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario>>;
  mostrarAuthModal: boolean;
  abaAuth: AbaAuth;
  abrirAuthModal: (aba: AbaAuth) => void;
  fecharAuthModal: () => void;
};

const Home = ({
  usuario,
  setUsuario,
  mostrarAuthModal,
  abaAuth,
  abrirAuthModal,
  fecharAuthModal,
}: HomeProps) => {
  return (
    <>
      <Hero
        usuario={usuario}
        setUsuario={setUsuario}
        abrirAuthModal={abrirAuthModal}
      />
      <ReceitasFavoritas />
      <CadernoReceitas
        usuario={usuario}
        setUsuario={setUsuario}
        mostrarAuthModal={mostrarAuthModal}
        abaAuth={abaAuth}
        abrirAuthModal={abrirAuthModal}
        fecharAuthModal={fecharAuthModal}
      />
      <Sobre />
      <Equipe />
      <Contato />
      <Footer />
    </>
  );
};

export default Home;