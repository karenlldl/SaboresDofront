const Footer = () => {
  const members = [
    { name: "Denise Santos", rm: "567559" },
    { name: "Henrique Bragueixe", rm: "568292" },
    { name: "Karen Cardoso", rm: "566870" },
  ];
 
  return (
    <footer className="bg-[#2b4b5e] text-white font-poppins py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
 
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold tracking-wide">Le Petit Chef</span>
          <span className="text-white/50 text-xs italic">"Qualquer um pode cozinhar." - Rémy</span>
        </div>
 
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">
            Integrantes
          </h3>
          {members.map((m) => (
            <div key={m.rm} className="flex items-center gap-2 text-sm">
              <span className="text-white/90 font-medium">{m.name}</span>
              <span className="text-white/40 text-xs">·</span>
              <span className="text-white/50 text-xs font-mono">RM: {m.rm}</span>
            </div>
          ))}
        </div>
 
      </div>
 
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
        Copyright © 2025 Le Petit Chef. Todos os direitos reservados.
      </div>
    </footer>
  );
};
 
export default Footer;