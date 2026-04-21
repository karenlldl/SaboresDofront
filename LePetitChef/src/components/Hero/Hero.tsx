import { useState } from "react";

const navItems = [
  { label: "Receitas", id: "receitas" },
  { label: "Sobre", id: "sobre" },
  { label: "Contato", id: "contato" },
  { label: "Equipe", id: "equipe" },
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          flex flex-wrap items-center gap-4 md:gap-8
          px-6 md:px-12 min-h-18
          bg-[#8fafc0]/0 backdrop-blur-sm
        "
      >
        {/* Logo */}
        <span className="text-white font-poppins text-base tracking-wide mr-auto">
          Le Petit Chef
        </span>

        {/* BOTÃO HAMBURGER */}
        <button
          className="flex md:hidden flex-col justify-between w-6 h-4.5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-0.5 bg-white transition ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 bg-white transition ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* MENU */}
        <nav
          className={`
            ${menuOpen ? "max-h-60 py-3" : "max-h-0 md:max-h-none"}
            overflow-hidden md:overflow-visible
            w-full md:w-auto
            flex flex-col md:flex-row
            gap-4 md:gap-10
            transition-all duration-300
          `}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="
                relative text-white font-poppins font-semibold text-sm
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

        {/* BOTÃO BUSCAR */}
        <button
          className="
            hidden md:flex items-center gap-2
            bg-[#2b4b5e] hover:bg-[#1e3647]
            text-white px-5 py-2 rounded-full
            transition hover:scale-105
          "
        >
          🔍 Buscar
        </button>
      </header>

      {/* ===== HERO ===== */}
      <section
        className="
          relative min-h-screen pt-20
          bg-[#8fafc0] overflow-hidden
          flex items-center
        "
      >
        {/* BLOB */}
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

        {/* TEXTO FUNDO */}
        <h1
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            text-white/10 font-bold whitespace-nowrap
          "
          style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}
        >
          SABORES
        </h1>

        {/* TEXTO EXTRA */}
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

        {/* TEXTO LATERAL */}
        <div className="absolute left-8 bottom-20 text-white">
          <p className="mb-3">
            Os sabores do <br /> Ratatouille na <br /> sua casa.
          </p>
          <p className="italic">
            "Qualquer um pode cozinhar." - Rémy
          </p>
        </div>

        {/* IMAGEM */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <img
            src="/img/remy.png"
            className="w-[400px] md:w-[500px]"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;