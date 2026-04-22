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
        <div className="relative flex min-h-[56px] items-center justify-center">
          <a href="#home" className="absolute left-0 md:left-0">
            <img
              src="/img/logo.png"
              alt="Le Petit Chef"
              className="h-9 cursor-pointer object-contain md:h-12"
            />
          </a>

          {/* NAV DESKTOP */}
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

          {/* AÇÕES DESKTOP */}
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
    rounded-[24px]
    border border-[#46748D]
    bg-[#83a5b8]
    px-6 py-3
    text-sm md:text-base
    font-semibold text-white/90

    shadow-[0_4px_10px_rgba(0,0,0,0.1)]
    
    transition-all duration-200

    hover:bg-[#bf3838]
    hover:border-[#355a6d]
    hover:scale-[1.03]

    active:scale-[0.96]
    active:shadow-[0_2px_4px_rgba(0,0,0,0.2)]
  "
>
  Entre ou Cadastre-se
</button>
            )}
          </div>

          {/* BOTÃO HAMBURGUER */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white md:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MENU MOBILE */}
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
                  className="w-full rounded-full bg-[#1f2f52] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#16223b] border border-white/20"
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
        className="
          relative flex min-h-screen items-center overflow-hidden
          bg-[#8fafc0] pt-24 md:pt-20
        "
      >
        <div
          className="
            absolute -right-24 -top-10
            rounded-full bg-[#a8c5d4] opacity-70 blur-sm
            md:-right-20 md:-top-20
          "
          style={{
            width: "clamp(180px, 35vw, 480px)",
            height: "clamp(180px, 35vw, 480px)",
          }}
        />

        <h1
          className="
            absolute left-1/2 top-[46%] hidden -translate-x-1/2 -translate-y-1/2
            whitespace-nowrap font-bold text-white/20 md:block
          "
          style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}
        >
          SABORES
        </h1>

        <p
          className="
            absolute left-1/2 hidden -translate-x-1/2 gap-20
            font-bold text-white/50 md:flex
          "
          style={{
            top: "60%",
            fontSize: "clamp(2rem, 6vw, 6rem)",
          }}
        >
          <span>do</span>
          <span>front</span>
        </p>

        <div className="absolute bottom-14 left-4 z-10 max-w-[150px] text-white md:bottom-20 md:left-8 md:max-w-none">
          <p className="mb-3 text-sm md:text-base">
            Os sabores do <br /> Ratatouille na <br /> sua casa.
          </p>
          <p className="text-sm italic md:text-base">
            "Qualquer um pode cozinhar." - Rémy
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
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