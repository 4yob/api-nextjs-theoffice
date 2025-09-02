"use client";

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Api() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarPersonagens = async () => {
    setLoading(true);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-300 to-amber-200 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-amber-900 mb-4 drop-shadow-lg">
            📺 The Office Characters
          </h1>
          <p className="text-xl text-amber-800 mb-8 font-medium">
            Conheça os personagens icônicos da série The Office
          </p>
          
          <button 
            onClick={buscarPersonagens} 
            disabled={loading} 
            className="bg-gradient-to-r from-amber-900 to-amber-700 text-white px-10 py-4 rounded-full 
                     hover:from-amber-800 hover:to-amber-600 disabled:from-gray-400 disabled:to-gray-500 
                     font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200
                     disabled:transform-none disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Carregando...
              </span>
            ) : (
              "🔍 Buscar Personagens"
            )}
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {personagens.map((personagem) => (
            <Link key={personagem.id} href={`/characters/${personagem.id}`}>
              <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 
                            transition-all duration-300 overflow-hidden border border-amber-200 
                            hover:border-amber-400 cursor-pointer">
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 border-b border-amber-200">
                  <h3 className="font-bold text-xl text-amber-900 text-center truncate">
                    {personagem.name || "Nome não disponível"}
                  </h3>
                </div>
                
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">👤</span>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Gênero</p>
                      <p className="text-gray-800 font-medium">
                        {personagem.gender || "Não informado"}
                      </p>
                    </div>
                  </div>
                  
                  {personagem.marital && (
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">💕</span>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Estado Civil</p>
                        <p className="text-gray-800 font-medium">{personagem.marital}</p>
                      </div>
                    </div>
                  )}
                  
                  {personagem.job && personagem.job.length > 0 && (
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">💼</span>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Profissão</p>
                        <p className="text-gray-800 font-medium text-sm">
                          {Array.isArray(personagem.job) ? personagem.job[0] : personagem.job}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {personagem.actor && (
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎭</span>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Ator</p>
                        <p className="text-gray-800 font-medium">{personagem.actor}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 border-t border-amber-200">
                  <p className="text-center text-amber-700 font-medium text-sm">
                    Clique para ver detalhes →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {personagens.length === 0 && !loading && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Nenhum personagem encontrado</h3>
            <p className="text-amber-700">Clique no botão acima para buscar os personagens!</p>
          </div>
        )}
      </div>
    </div>
  )
}
