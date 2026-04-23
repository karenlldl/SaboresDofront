import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const handleLogout = () => {
    setUsuario(null);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              className="h-8 cursor-pointer object-contain md:h-12"
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
            ${menuOpen ? "mt-4 max-h-105" : "max-h-0"}
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
        className="
          relative z-10 flex items-center overflow-visible
          h-[75vh] md:min-h-screen
          pt-24 md:pt-20
        "
      >
        {/* Fundo principal */}
<div
  className="absolute left-0 top-0 z-0 w-full"
  style={{
    height: isMobile ? "90%" : "100%",
    borderRadius: isMobile ? "0 6px 24px 24px" : "0 6px 51px 51px",
    background:
      "linear-gradient(180deg, #5D879D 0%, #7EA6BC 43.01%, #9FC6DA 100%)",
  }}
/>

        {/* Bloco curvo da direita */}
        <div
  className="absolute right-0 top-0 z-1"
  style={{
    height: isMobile ? "70%" : "100%",
    width: isMobile ? "0%" : "50%",
    borderRadius: isMobile ? "180px 0 30px 0" : "383.5px 0 51px 0",
    background: "#8DAAB7",
  }}
/>

        {/* SABORES */}
        <h1
          className="
            pointer-events-none absolute left-1/2 z-2
            -translate-x-1/2 -translate-y-1/2
            whitespace-nowrap font-bold text-white/40
          "
          style={{
            top: isMobile ? "28%" : "42%",
            fontSize: isMobile
              ? "clamp(2.4rem, 10vw, 4rem)"
              : "clamp(3.2rem, 16vw, 16rem)",
          }}
        >
          SABORES
        </h1>

        {/* do front */}
        <p
          className="
            pointer-events-none absolute left-1/2 z-2
            flex -translate-x-1/2 -translate-y-1/2
            whitespace-nowrap text-white/50 font-light
          "
          style={{
            top: isMobile ? "32%" : "58%",
            gap: isMobile ? "18px" : "160px",
            fontSize: isMobile
              ? "clamp(0.85rem, 4vw, 1.2rem)"
              : "clamp(1.2rem, 6vw, 6rem)",
          }}
        >
          <span>do</span>
          <span>front</span>
        </p>

        {/* Texto lateral */}
        <div
  className="
    absolute z-[4] text-white
    left-4 bottom-[18%]
    max-w-[110px]
    sm:max-w-[130px]
    md:left-8 md:bottom-20 md:max-w-none
  "
>
  <p className="mb-3 text-xs leading-relaxed sm:text-sm md:text-base">
    Os sabores do <br /> Ratatouille na <br /> sua casa.
  </p>

  <p className="text-[11px] italic leading-relaxed sm:text-sm md:text-base">
    "Qualquer um pode cozinhar." - Rémy
  </p>
</div>

        {/* Rémy */}
        <div
  className="
    absolute z-[5]
    left-1/2 bottom-[-px]
    -translate-x-1/2
    sm:bottom-[-px]
    md:bottom-0
  "
>
  <img
    src="/img/remy.png"
    alt="Rémy"
    className="
      w-[300px]
      sm:w-[300px]
      md:w-[500px]
      lg:w-[430px]
    "
  />
</div>
      </section>
    </>
  );
};

export default Hero;