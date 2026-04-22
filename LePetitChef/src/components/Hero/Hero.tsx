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
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          px-4 py-4 md:px-12
          backdrop-blur-sm
        "
      >
        <div className="relative flex min-h-14 items-center justify-center">
          <a href="#home" className="absolute left-0">
            <img
              src="/img/logo.png"
              alt="Le Petit Chef"
              className="h-9 cursor-pointer object-contain md:h-12"
            />
          </a>

          <nav className="hidden items-center justify-center gap-8 md:flex lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="
                  relative text-lg font-semibold tracking-wide text-white
                  transition hover:opacity-75 md:text-xl
                  after:absolute after:-bottom-1 after:left-0
                  after:h-0.5 after:w-0 after:bg-white after:content-['']
                  after:transition-all hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="absolute right-0 hidden items-center gap-3 md:flex">
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
                className="
                  rounded-3xl
                  border border-[#46748D]
                  bg-[#83a5b8]
                  px-6 py-3
                  text-sm font-semibold text-white/90 md:text-base
                  shadow-[0_4px_10px_rgba(0,0,0,0.1)]
                  transition-all duration-200
                  hover:scale-[1.03]
                  hover:border-[#355a6d]
                  hover:bg-[#bf3838]
                  active:scale-[0.96]
                  active:shadow-[0_2px_4px_rgba(0,0,0,0.2)]
                "
              >
                Entre ou Cadastre-se
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white md:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div
          className={`
            overflow-hidden transition-all duration-300 md:hidden
            ${menuOpen ? "mt-4 max-h-[420px]" : "max-h-0"}
          `}
        >
          <div className="rounded-3xl bg-[#1f2f52]/90 p-5 shadow-xl backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold tracking-wide text-white transition hover:opacity-75"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-5 border-t border-white/20 pt-5">
              {usuario ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-[#e7e1d9] px-4 py-3 text-[#1d2d5a] shadow-sm">
                    <span className="text-base">👤</span>
                    <span className="text-sm font-semibold">
                      Olá, {usuario.nome}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-full border border-white/70 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    abrirAuthModal("login");
                    setMenuOpen(false);
                  }}
                  className="
                    w-full rounded-3xl border border-[#46748D]
                    bg-[#83a5b8] px-5 py-3 text-sm font-semibold text-white/90
                    transition-all duration-200
                    hover:border-[#355a6d] hover:bg-[#bf3838]
                    active:scale-[0.96]
                  "
                >
                  Entre ou Cadastre-se
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <section
  id="home"
  className="relative z-10 flex min-h-screen items-center overflow-visible pt-24 md:pt-20"
>
        {/* Fundo principal */}
        <div
          className="absolute inset-0 z-0"
          style={{
            borderRadius: "0 6px 51px 51px",
            background:
              "linear-gradient(180deg, #5D879D 0%, #7EA6BC 43.01%, #9FC6DA 100%)",
          }}
        />

        {/* Bloco curvo da direita */}
        <div
          className="absolute right-0 top-0 z-[1] h-full w-[48%] sm:w-[50%] md:w-[52%]"
          style={{
            borderRadius: "383.5px 0 66px 0",
            background: "#8DAAB7",
          }}
        />

        {/* Título de fundo */}
        <h1
          className="
            pointer-events-none absolute left-1/2 top-[42%] z-[2]
            -translate-x-1/2 -translate-y-1/2 whitespace-nowrap
            font-bold text-white/15
          "
          style={{
            fontSize: "clamp(3.2rem, 16vw, 16rem)",
          }}
        >
          SABORES
        </h1>

        {/* Subtítulo de fundo */}
        <p
          className="
            pointer-events-none absolute left-1/2 top-[56%] z-[2]
            flex -translate-x-1/2 -translate-y-1/2 gap-6 whitespace-nowrap
            font-bold text-white/35 md:gap-20
          "
          style={{
            fontSize: "clamp(1.2rem, 6vw, 6rem)",
          }}
        >
          <span>do</span>
          <span>front</span>
        </p>

        {/* Texto lateral */}
        <div className="absolute bottom-14 left-4 z-[4] max-w-[150px] text-white md:bottom-20 md:left-8 md:max-w-none">
          <p className="mb-3 text-sm md:text-base">
            Os sabores do <br /> Ratatouille na <br /> sua casa.
          </p>
          <p className="text-sm italic md:text-base">
            "Qualquer um pode cozinhar." - Rémy
          </p>
        </div>

        {/* Rémy */}
        <div className="absolute bottom-0 left-1/2 z-[5] -translate-x-1/2">
          <img
            src="/img/remy.png"
            alt="Rémy"
            className="w-64 sm:w-72 md:w-100 lg:w-120"
          />
        </div>
          
      </section>
    </>
  );
};

export default Hero;