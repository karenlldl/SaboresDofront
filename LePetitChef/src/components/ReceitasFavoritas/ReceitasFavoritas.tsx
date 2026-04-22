import { useEffect, useState } from "react";

type Receita = {
  id: number;
  categoria: string;
  nome: string;
  descricao: string;
  tempo: string;
  dificuldade: string;
  imagem: string;
  ingredientes: string[];
  modoPreparo: string[];
};

const ReceitasFavoritas = () => {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [receitaSelecionada, setReceitaSelecionada] = useState<Receita | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/receitas.json")
      .then((response) => response.json())
      .then((data: Receita[]) => {
        setReceitas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar receitas:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="receitas" className="relative z-20 -mt-20 bg-[#c7d9e6] px-4 py-16 md:-mt-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-lg text-slate-600">Carregando receitas...</p>
        </div>
      </section>
    );
  }

  return (
    <section
  id="receitas"
  className="
    relative z-0
    -mt-20 md:-mt-28 lg:-mt-32
    w-full bg-[#c7d9e6]
    px-4 py-16 md:px-8 lg:px-12
  "
>
      <div className="mx-auto max-w-7xl pt-16 md:pt-20">
        <div className="mb-10 text-center">
          <p className="mb-2 font-serif text-2xl italic text-red-500">
            Le menu
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#1d2d5a] md:text-5xl">
            Receitas em Destaque
          </h2>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Um trio de clássicos do bistrô — direto da cozinha do Rémy.
          </p>
        </div>

        <div className="flex justify-center rounded-[2.2rem] bg-[linear-gradient(45deg,#ef4444_12.5%,#fff7ed_12.5%,#fff7ed_25%,#ef4444_25%,#ef4444_37.5%,#fff7ed_37.5%,#fff7ed_50%,#ef4444_50%,#ef4444_62.5%,#fff7ed_62.5%,#fff7ed_75%,#ef4444_75%,#ef4444_87.5%,#fff7ed_87.5%,#fff7ed_100%)] bg-size-[48px_48px] p-4 py-16 shadow-[0_-12px_30px_rgba(0,0,0,0.08),0_12px_30px_rgba(0,0,0,0.12)] md:p-6">
          <div className="w-full rounded-[1.8rem] bg-[#f6f0ea] p-6 shadow-lg md:p-10">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {receitas
                .filter((receita) =>
                  [
                    "Ratatouille",
                    "Crème Brûlée",
                    "Éclair de Chocolate",
                    "Soupe à l'Oignon",
                  ].includes(receita.nome)
                )
                .map((receita) => (
                  <article
                    key={receita.id}
                    className="overflow-hidden rounded-[1.8rem] bg-[#c7d9e6] shadow-md transition duration-300 hover:-translate-y-1"
                  >
                    <div className="relative">
                      <img
                        src={receita.imagem}
                        alt={receita.nome}
                        className="h-48 w-full object-cover"
                      />

                      <span className="absolute left-3 top-3 rounded-full bg-[#d8e5ef] px-3 py-1 text-xs font-medium text-[#2d3a56]">
                        {receita.categoria}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-serif text-2xl font-bold text-[#2d3a56]">
                        {receita.nome}
                      </h3>

                      <p className="mt-1 min-h-12 text-sm italic text-slate-600">
                        {receita.descricao}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <span>◷ {receita.tempo}</span>
                        <span>◔ {receita.dificuldade}</span>
                      </div>

                      <button
                        onClick={() => setReceitaSelecionada(receita)}
                        className="mt-5 w-full rounded-full bg-[#1f2f52] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16223b]"
                      >
                        Ver Receita
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>

      {receitaSelecionada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-3 py-6">
          <div className="relative max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-[#c7d9e6] shadow-2xl">
            <button
              onClick={() => setReceitaSelecionada(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-red-400 bg-white/70 text-red-500 transition hover:bg-white"
              aria-label="Fechar modal"
            >
              ✕
            </button>

            <div className="relative h-55 md:h-70">
              <img
                src={receitaSelecionada.imagem}
                alt={receitaSelecionada.nome}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-serif text-3xl font-bold md:text-5xl">
                  {receitaSelecionada.nome}
                </h3>

                <p className="mt-2 text-sm italic md:text-lg">
                  {receitaSelecionada.descricao}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full bg-white/30 px-3 py-1 backdrop-blur-sm">
                    ◷ {receitaSelecionada.tempo}
                  </span>
                  <span className="rounded-full bg-white/30 px-3 py-1 backdrop-blur-sm">
                    ◔ {receitaSelecionada.dificuldade}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-10 px-6 py-8 md:grid-cols-2 md:px-10">
              <div>
                <h4 className="mb-5 flex items-center gap-2 font-serif text-3xl font-bold text-[#2d3a56]">
                  <span className="inline-block h-8 w-1 rounded-full bg-red-500" />
                  Ingredientes
                </h4>

                <ul className="space-y-3 text-base text-slate-700">
                  {receitaSelecionada.ingredientes.map((ingrediente, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2.5 h-2 w-2 rounded-full bg-red-500" />
                      <span>{ingrediente}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-5 flex items-center gap-2 font-serif text-3xl font-bold text-[#2d3a56]">
                  <span className="text-red-500">👨🏻‍🍳</span>
                  Modo de Preparo
                </h4>

                <ol className="space-y-4">
                  {receitaSelecionada.modoPreparo.map((passo, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <p className="text-base leading-relaxed text-slate-700">
                        {passo}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReceitasFavoritas;