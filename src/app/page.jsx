"use client";

import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Page() {
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
    <div className="min-h-screen bg-orange-300 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">The Office Characters</h1>

        <div className="text-center mb-8">
          <div className="mb-6">
            <button onClick={buscarPersonagens} disabled={loading} className="bg-amber-900 text-white px-8 py-3 rounded-lg hover:bg-amber-700 disabled:bg-gray-400 font-semibold">
              {loading? "Carregando ... " : "🔍 Buscar Personagens"}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {personagens.map((personagem) => (
          <div key={personagem.id} className="bg-white p-6 rounded-lg shadow-md flex flex-row justify-evenly items-center">
            <div>
              <h3 className="font-bold text-lg text-gray-800">{personagem.name || "Nome não disponível"}</h3>
              <p className="text-gray-600">{personagem.gender || "Gênero não disponível"}</p>
              <p className="text-gray-600">{personagem.marital || "Estado civil não disponível"}</p>
              <p className="text-gray-600">{personagem.job || "Profissão não disponível"}</p>
              <p className="text-gray-600">{personagem.workplace || "Local de trabalho não disponível"}</p>
              <p className="text-gray-600">{personagem.firstAppearance || "Primeira aparição não disponível"}</p>
              <p className="text-gray-600">{personagem.lastAppearance || "Última aparição não disponível"}</p>
              <p className="text-gray-600">{personagem.actor || "Ator não disponível"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
