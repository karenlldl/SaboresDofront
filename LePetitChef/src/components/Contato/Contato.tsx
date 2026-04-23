import { useForm } from "react-hook-form";

type FormData = {
  nome: string;
  email: string;
  mensagem: string;
};

const Contato = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Mensagem enviada:", data);
    alert("Mensagem enviada com sucesso!");
    reset();
  };

  return (
    <section
      id="contato"
      className="w-full bg-[#c7d9e6] px-4 py-16 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#1f2c4b] px-6 py-8 shadow-[0_20px_40px_rgba(0,0,0,0.10)] md:px-12 md:py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Lado esquerdo */}
          <div className="text-white">
            <p className="font-serif text-2xl italic text-[#ffbf3f] md:text-3xl">
              Bonjour!
            </p>

            <h2 className="mt-2 font-serif text-5xl font-bold leading-none md:text-6xl">
              Mande um olá
            </h2>

            <p className="mt-5 max-w-md text-xl leading-relaxed text-[#97b1cf]">
              Tem uma dúvida, uma receita para compartilhar ou só quer dar um
              bonjour? A porta da nossa cozinha virtual está sempre aberta.
            </p>

            <div className="mt-10 space-y-5 text-lg">
              <div className="flex items-center gap-4">
                <span className="text-[#ffbf3f]">📍</span>
                <span>12 Rue Gusteau, Paris</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[#ffbf3f]">✉️</span>
                <span>bonjour@lepetitchef.com</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[#ffbf3f]">📞</span>
                <span>+33 1 23 45 67 89</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Seu nome"
                {...register("nome", {
                  required: "Digite seu nome",
                  minLength: {
                    value: 2,
                    message: "Seu nome deve ter pelo menos 2 letras",
                  },
                })}
                className="w-full rounded-2xl border border-[#556884] bg-[#32415c] px-4 py-4 text-white outline-none placeholder:text-[#8ea2bf] focus:border-[#9bb7d9]"
              />
              {errors.nome && (
                <p className="mt-2 text-sm text-[#ff9b9b]">
                  {errors.nome.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Seu e-mail"
                {...register("email", {
                  required: "Digite seu e-mail",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Digite um e-mail válido",
                  },
                })}
                className="w-full rounded-2xl border border-[#556884] bg-[#32415c] px-4 py-4 text-white outline-none placeholder:text-[#8ea2bf] focus:border-[#9bb7d9]"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-[#ff9b9b]">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Sua mensagem"
                {...register("mensagem", {
                  required: "Digite sua mensagem",
                  minLength: {
                    value: 10,
                    message: "A mensagem deve ter pelo menos 10 caracteres",
                  },
                })}
                className="w-full resize-none rounded-2xl border border-[#556884] bg-[#32415c] px-4 py-4 text-white outline-none placeholder:text-[#8ea2bf] focus:border-[#9bb7d9]"
              />
              {errors.mensagem && (
                <p className="mt-2 text-sm text-[#ff9b9b]">
                  {errors.mensagem.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#ef2f35] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#d9282e]"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;