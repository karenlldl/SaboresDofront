type NotFoundProps = {
  voltarParaHome: () => void;
};

const NotFound = ({ voltarParaHome }: NotFoundProps) => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#c7d9e6] px-4">
      <div className="text-center">
        <p className="font-serif text-2xl italic text-red-500">Oups!</p>

        <h1 className="mt-2 text-7xl font-bold text-[#1d2d5a]">404</h1>

        <h2 className="mt-3 text-3xl font-bold text-[#1d2d5a]">
          Página não encontrada
        </h2>

        <p className="mt-4 text-slate-600">
          Parece que essa página se perdeu na cozinha.
        </p>

        <button
          onClick={voltarParaHome}
          className="mt-6 bg-[#1f2f52] text-white px-6 py-3 rounded-full"
        >
          Voltar para Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;