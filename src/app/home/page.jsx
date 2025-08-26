import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-orange-300 flex items-center justify-center px-6">
            <div className="w-full max-w-2xl">
                <div className="rounded-2xl border border-orange-200 bg-white p-8 sm:p-10 text-center shadow-md">
                    <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-[11px] uppercase tracking-wider text-orange-700">
                        Projeto TCC • Desenhos 2D
                    </div>
                    <Image
                        src="/file.svg"
                        alt="Avatar da autora"
                        width={96}
                        height={96}
                        className="mx-auto mb-6 rounded-full border border-orange-200"
                        priority
                    />
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-amber-900">
                        Sobre a Autora
                    </h1>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        Meu nome é <span className="font-semibold text-amber-900">Alejandra Barros</span>. Este site foi criado para armazenar e apresentar meu projeto de TCC sobre desenhos animados 2D.
                    </p>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        Aqui você encontrará informações, análises, referências e materiais relacionados ao universo dos desenhos 2D, reunidos especialmente para o desenvolvimento do meu Trabalho de Conclusão de Curso.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white bg-amber-900 hover:bg-amber-700 transition-colors"
                        >
                            Conheça o Projeto
                        </Link>
                        <Link
                            href="/api"
                            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-amber-900 border border-amber-900/30 hover:bg-amber-50 transition-colors"
                        >
                            API
                        </Link>
                    </div>
                    <hr className="my-8 border-orange-200" />
                    <p className="text-[11px] text-orange-700/80">
                        © {new Date().getFullYear()} Projeto TCC – Desenhos Animados 2D
                    </p>
                </div>
            </div>
        </div>
    );
}
