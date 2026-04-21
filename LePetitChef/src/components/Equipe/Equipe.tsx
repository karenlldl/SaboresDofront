const equipe = [
  {
    nome: "Karen Cardoso",
    cargo: "Front-end Developer and UI/UX Designer",
    emoji: "👩🏻‍🍳",
  },
  {
    nome: "Denise Silva",
    cargo: "Front-end Developer and UI/UX Designer",
    emoji: "👩🏻‍🍳",
  },
  {
    nome: "Henrique Bragueixe",
    cargo: "Back-end Developer",
    emoji: "👨🏻‍🍳",
  },
];

const Equipe = () => {
  return (
    <section
      id="equipe"
      className="w-full bg-[#c7d9e6] px-4 py-16 md:px-8"
    >
      <div className="mx-auto max-w-6xl text-center">
        
        {/* Título */}
        <p className="font-serif text-2xl italic text-red-500">
          La brigade
        </p>

        <h2 className="mt-1 font-serif text-4xl font-bold text-[#1d2d5a] md:text-5xl">
          Conheça a equipe
        </h2>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {equipe.map((membro, index) => (
            <div
              key={index}
              className="w-[260px] rounded-[1.8rem] bg-[#d4e3ef] px-6 py-8 text-center shadow-md transition hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#c8d8e6] text-3xl">
                {membro.emoji}
              </div>

              {/* Nome */}
              <h3 className="mt-4 font-serif text-2xl font-bold text-[#1d2d5a]">
                {membro.nome}
              </h3>

              {/* Cargo */}
              <p className="mt-1 text-sm text-slate-600">
                {membro.cargo}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Equipe;