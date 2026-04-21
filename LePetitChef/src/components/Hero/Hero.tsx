import { useState } from "react";
import type { AbaAuth, Usuario } from "../../App";

const navItems = [
  { label: "Receitas", id: "receitas" },
  { label: "Sobre", id: "sobre" },
  { label: "Contato", id: "contato" },
  { label: "Equipe", id: "equipe" },
];

type HeroProps = {
  usuario: Usuario;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario>>;
  abrirAuthModal: (aba: AbaAuth) => void;
};

const Hero = ({ usuario, setUsuario, abrirAuthModal }: HeroProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setUsuario(null);
  };

  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-center
          px-6 md:px-12 min-h-18
          backdrop-blur-sm
        "
      >
        <span className="absolute left-6 text-white font-poppins">
          Le Petit Chef
        </span>

        <nav
          className={`
            ${menuOpen ? "max-h-60 py-3" : "max-h-0 md:max-h-none"}
            overflow-hidden md:overflow-visible
            flex flex-col md:flex-row
            items-center justify-center
            gap-6 md:gap-14
            transition-all duration-300
          `}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="
                relative text-white font-semibold
                text-lg md:text-xl
                tracking-wide
                hover:opacity-75 transition
                after:content-[''] after:absolute after:-bottom-1 after:left-0
                after:h-0.5 after:w-0 after:bg-white after:transition-all
                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute right-6 hidden md:flex items-center gap-3">
          {usuario ? (
            <>
              <div className="flex items-center gap-2 rounded-full bg-[#e7e1d9] px-4 py-2 text-[#1d2d5a] shadow-sm">
                <span className="text-base">👤</span>
                <span className="text-sm font-semibold">
                  Olá, {usuario.nome}
                </span>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                <span>Sair</span>
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => abrirAuthModal("login")}
              className="flex items-center gap-2 rounded-full bg-[#1f2f52] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#16223b]"
            >
              <span>Entre ou Cadastre-se</span>
            </button>
          )}
        </div>
      </header>

      <section
        className="
          relative min-h-screen pt-20
          bg-[#8fafc0] overflow-hidden
          flex items-center
        "
      >
        <div
          className="
            absolute -top-20 -right-20
            bg-[#a8c5d4] rounded-full opacity-70 blur-sm
          "
          style={{
            width: "clamp(220px, 35vw, 480px)",
            height: "clamp(220px, 35vw, 480px)",
          }}
        />

        <h1
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            text-white/10 font-bold whitespace-nowrap
          "
          style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}
        >
          SABORES
        </h1>

        <p
          className="
            absolute left-1/2 -translate-x-1/2 text-white/50
            font-bold flex gap-20
          "
          style={{
            top: "60%",
            fontSize: "clamp(2rem, 6vw, 6rem)",
          }}
        >
          <span>do</span>
          <span>front</span>
        </p>

        <div className="absolute left-8 bottom-20 text-white">
          <p className="mb-3">
            Os sabores do <br /> Ratatouille na <br /> sua casa.
          </p>
          <p className="italic">
            "Qualquer um pode cozinhar." - Rémy
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <img
            src="/img/remy.png"
            alt="Rémy"
            className="w-100 md:w-125"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;