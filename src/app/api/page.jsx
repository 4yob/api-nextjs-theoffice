"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Api() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);

  const buscarPersonagens = async () => {
    try {
      const response = await axios.get("https://theofficeapi.dev/api/characters");
      const data = response.data;
      setPersonagens(data.results);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarPersonagens();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-stone-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-light mb-6 tracking-wide bg-gradient-to-r from-amber-200 via-stone-300 to-amber-100 bg-clip-text text-transparent">
            The Office Characters
          </h1>
          <p className="text-stone-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Conheça os personagens icônicos da série The Office
          </p>

          <button
            onClick={buscarPersonagens}
            disabled={loading}
            className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-10 py-4 text-sm font-medium tracking-wide
                     hover:from-amber-600 hover:to-amber-700 disabled:from-gray-700 disabled:to-gray-600
                     transition-all duration-300 disabled:cursor-not-allowed rounded-lg
                     shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                Carregando...
              </span>
            ) : (
              "Buscar Personagens"
            )}
          </button>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personagens.map((personagem) => (
              <Link key={personagem.id} href={`/api/${personagem.id}`}>
                <article className="bg-gradient-to-br from-stone-800/40 to-neutral-900/60 backdrop-blur-sm 
                                 border border-stone-700/50 rounded-xl p-6 
                                 hover:from-stone-700/50 hover:to-neutral-800/70 hover:border-amber-600/40
                                 transition-all duration-300 cursor-pointer group
                                 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/20">
                  
                  <header className="mb-6">
                    <h2 className="text-xl font-medium text-amber-100 group-hover:text-amber-200 transition-colors duration-300">
                      {personagem.name || "Nome não disponível"}
                    </h2>
                  </header>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                      <div>
                        <span className="text-stone-400 text-xs uppercase tracking-wider block mb-1">
                          Gênero
                        </span>
                        <span className="text-stone-200">
                          {personagem.gender || "Não informado"}
                        </span>
                      </div>
                    </div>

                    {personagem.marital && (
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"></div>
                        <div>
                          <span className="text-stone-400 text-xs uppercase tracking-wider block mb-1">
                            Estado Civil
                          </span>
                          <span className="text-stone-200">{personagem.marital}</span>
                        </div>
                      </div>
                    )}

                    {personagem.job && personagem.job.length > 0 && (
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                        <div>
                          <span className="text-stone-400 text-xs uppercase tracking-wider block mb-1">
                            Profissão
                          </span>
                          <span className="text-stone-200">
                            {Array.isArray(personagem.job) ? personagem.job[0] : personagem.job}
                          </span>
                        </div>
                      </div>
                    )}

                    {personagem.actor && (
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                        <div>
                          <span className="text-stone-400 text-xs uppercase tracking-wider block mb-1">
                            Ator
                          </span>
                          <span className="text-stone-200">{personagem.actor}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <footer className="mt-6 pt-4 border-t border-stone-700/50 group-hover:border-amber-600/40 transition-colors duration-300">
                    <span className="text-xs text-stone-400 group-hover:text-amber-300 transition-colors duration-300 flex items-center gap-2">
                      Ver detalhes 
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </footer>
                </article>
              </Link>
            ))}
          </div>

          {personagens.length === 0 && !loading && (
            <div className="text-center py-20">
              <h3 className="text-3xl font-light bg-gradient-to-r from-stone-400 to-stone-600 bg-clip-text text-transparent mb-6">
                Nenhum personagem encontrado
              </h3>
              <p className="text-stone-400">
                Clique no botão acima para buscar os personagens
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}