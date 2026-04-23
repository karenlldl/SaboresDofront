const Sobre = () => {
  return (
    <section
      id="sobre"
      className="w-full bg-[#c7d9e6] px-4 py-16 md:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">

        <div className="max-w-2xl">
          <p className="mb-3 font-serif text-2xl italic text-red-500 md:text-3xl">
            Notre histoire
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#1d2d5a] md:text-6xl">
            Uma cozinha pequena, de alma gigante
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Le Petit Chef nasceu de um único sonho: levar o romance da cozinha
            francesa para todas as casas. Acreditamos que boa comida não precisa
            de um restaurante chique — só paciência, uma panela de cobre e a
            coragem de tentar.
          </p>
        </div>


        <div className="space-y-5">
          <div className="flex items-start gap-4 rounded-[1.8rem] bg-[#d4e3ef] px-5 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c8d8e6] text-2xl text-red-500">
              ♡
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1d2d5a]">
                Cozinhado com amor
              </h3>
              <p className="mt-1 text-base text-slate-600">
                Receitas inspiradas no calor de um bistrô parisiense.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-[1.8rem] bg-[#d4e3ef] px-5 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c8d8e6] text-2xl text-red-500">
              ✦
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1d2d5a]">
                Magia simples
              </h3>
              <p className="mt-1 text-base text-slate-600">
                Ingredientes do dia a dia transformados por um toque de técnica.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-[1.8rem] bg-[#d4e3ef] px-5 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c8d8e6] text-2xl text-red-500">
              🍴
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1d2d5a]">
                Para todos
              </h3>
              <p className="mt-1 text-base text-slate-600">
                Porque, no fim das contas... qualquer um pode cozinhar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;