import Hero from "../../components/Hero/Hero";
import ReceitasFavoritas from "../../components/ReceitasFavoritas/ReceitasFavoritas";
import CadernoReceitas from "../../components/CadernoReceitas/CadernoReceitas";
import Sobre from "../../components/Sobre/Sobre";
import Equipe from "../../components/Equipe/Equipe";
import Contato from "../../components/Contato/Contato";
import Footer from "../../components/Footer/Footer";
import type { Usuario, AbaAuth } from "../../App";

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