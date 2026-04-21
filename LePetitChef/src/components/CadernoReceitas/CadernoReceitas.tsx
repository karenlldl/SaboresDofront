import { useEffect, useState } from "react";

type Receita = {
  id: number;
  categoria: string;
  nome: string;
  descricao: string;
  tempo: string;
  dificuldade: string;
  imagem: string;
  destaque?: boolean;
  ingredientes: string[];
  modoPreparo: string[];
};

const categorias = ["Todas", "Entradas", "Prato Principal", "Sobremesas"];

const CadernoReceitas = () => {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [busca, setBusca] = useState("");
  const [receitaSelecionada, setReceitaSelecionada] = useState<Receita | null>(null);

  useEffect(() => {
    fetch("/data/receitas.json")
      .then((res) => res.json())
      .then((data: Receita[]) => setReceitas(data))
      .catch((error) => console.error("Erro ao carregar receitas:", error));
  }, []);

  const receitasFiltradas = receitas.filter((receita) => {
    const categoriaValida =
      categoriaAtiva === "Todas" || receita.categoria === categoriaAtiva;

    const buscaValida = receita.nome
      .toLowerCase()
      .includes(busca.toLowerCase());

    return categoriaValida && buscaValida;
  });

  return (
    <section id="caderno-receitas" className="bg-[#c7d9e6] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-serif text-2xl italic text-red-500">
            Le carnet de recettes
          </p>

          <h2 className="mt-1 font-serif text-4xl font-bold text-[#1d2d5a] md:text-5xl">
            Caderno de Receitas
          </h2>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Filtre por categoria, encontre seu prato favorito e mãos à obra.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaAtiva(categoria)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  categoriaAtiva === categoria
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-slate-300 bg-transparent text-[#1d2d5a] hover:bg-white/40"
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>

          <div className="w-full lg:w-[320px]">
            <input
              type="text"
              placeholder="Buscar receita..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 text-sm text-[#1d2d5a] outline-none placeholder:text-slate-500 focus:border-[#1d2d5a]"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {receitasFiltradas.map((receita) => (
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
                <h3 className="font-serif text-2xl font-bold leading-tight text-[#2d3a56]">
                  {receita.nome}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm italic text-slate-600">
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

        {receitasFiltradas.length === 0 && (
          <p className="mt-10 text-center text-slate-600">
            Nenhuma receita encontrada.
          </p>
        )}
      </div>

      {receitaSelecionada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-3 py-6">
          <div className="relative max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-[1.5rem] bg-[#c7d9e6] shadow-2xl">
            <button
              onClick={() => setReceitaSelecionada(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-red-400 bg-white/70 text-red-500 transition hover:bg-white"
              aria-label="Fechar modal"
            >
              ✕
            </button>

            <div className="relative h-[220px] md:h-[280px]">
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
                      <span className="mt-[9px] h-2 w-2 rounded-full bg-red-500" />
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

export default CadernoReceitas;