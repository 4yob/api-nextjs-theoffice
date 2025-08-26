import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-xl mx-auto text-center">
        <img
          src="/file.svg"
          alt="Autora"
          className="mx-auto mb-6 rounded-full w-32 h-32 object-cover border-4 border-orange-400"
        />
        <h1 className="text-3xl font-bold text-orange-900 mb-4">
          Sobre a Autora
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Olá, visitante! Meu nome é <span className="font-semibold text-orange-800">Alejandra Barros</span>.
          Este site foi criado para armazenar e apresentar meu projeto de TCC sobre desenhos animados 2D.
        </p>
        <p className="text-md text-gray-600 mb-4 text-align justify-center">
          Aqui você encontrará informações, análises, referências e materiais relacionados ao universo dos desenhos animados 2D, reunidos especialmente para o desenvolvimento do meu Trabalho de Conclusão de Curso. Fique à vontade para explorar e acompanhar o andamento do projeto!
        </p>
        <div className="flex flex-row justify-evenly items-center">
        <button className="mt-6">
          <Link
            href="/about"
            className="bg-orange-500 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
          >
            CONHEÇA O PROJETO
          </Link>
        </button>
        <button className="mt-6">
          <Link
            href="/api"
            className="bg-orange-500 text-white font-bold px-22 py-3 rounded-lg shadow hover:bg-orange-600 transition"
          >
            API
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
}
