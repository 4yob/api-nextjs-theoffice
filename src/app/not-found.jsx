import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-orange-300 px-6 py-10 flex items-center justify-center relative overflow-hidden">
      {/* detalhes de fundo sutis em estilo cartoon (sem exageros) */}
      <div className="pointer-events-none absolute -top-8 left-6 h-24 w-24 rounded-full bg-orange-200/50 blur-xl blob-animation" />
      <div className="pointer-events-none absolute -bottom-8 right-6 h-28 w-28 rounded-full bg-amber-200/50 blur-xl blob-animation" />

  <div className="relative bg-white rounded-3xl shadow p-8 sm:p-10 text-center max-w-lg w-full float-animation">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 text-amber-900 px-3 py-1 text-[11px] font-semibold">
          <span aria-hidden>🖍️</span> Erro 404
        </div>
        <h2 className="text-3xl font-extrabold text-amber-900 mb-2">
          Ops… página não encontrada
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Parece que este quadro saiu do storyboard! O link pode ter mudado ou não existe.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/home"
            className="bg-amber-900 text-white px-5 py-2.5 rounded-full hover:bg-amber-700 transition-colors shadow-sm"
            aria-label="Voltar para a página inicial"
          >
            ⬅️ Voltar para Home
          </Link>
          <Link
            href="/api"
            className="border-2 border-amber-300 text-amber-900 px-5 py-2.5 rounded-full hover:bg-amber-50 transition-colors"
            aria-label="Ir para a página da API"
          >
            🔎 Ir para API
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-2 text-orange-800/80 justify-center">
          <span aria-hidden>✨</span>
          <span className="text-xs">Dica: verifique o endereço digitado ou use os botões acima.</span>
        </div>
      </div>
    </div>
  );
}


