"use client";

import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [cartoons, setCartoons] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarCartoons = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.sampleapis.com/cartoons/cartoons2D");
      const data = response.data;
      setCartoons(data);
    } catch (error) {
      console.error("Erro ao buscar desenhos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-300 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Desenhos 2D</h1>

        <div className="text-center mb-8">
          <div className="mb-6">
            <button onClick={buscarCartoons} disabled={loading} className="bg-amber-900 text-white px-8 py-3 rounded-lg hover:bg-amber-700 disabled:bg-gray-400 font-semibold">
              {loading ? "Carregando ... " : "🔍 Buscar Desenhos"}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartoons.map((cartoon) => (
          <div key={cartoon.id} className="bg-white p-6 rounded-lg shadow-md flex flex-row justify-evenly items-center">
            <div>
              <h3 className="font-bold text-lg text-gray-800">{cartoon.title || "Título não disponível"}</h3>
              <p className="text-gray-600">{cartoon.year || "Ano não disponível"}</p>
              <p className="text-gray-600">{cartoon.creator || "Criador não disponível"}</p>
              <p className="text-gray-600">{cartoon.rating || "Avaliação não disponível"}</p>
              <p className="text-gray-600">{cartoon.genre || "Gênero não disponível"}</p>
              <p className="text-gray-600">{cartoon.runtime_in_minutes || "Duração não disponível"}</p>
              <p className="text-gray-600">{cartoon.episodes || "Número de episódios não disponível"}</p>
            </div>
              <img
                src={cartoon.image || "https://camo.githubusercontent.com/e7260310f5d1a8a9473a908e039f348a459078b0ba1876d12fbe0a26c8a0e1a7/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"} alt={cartoon.title || "Desenho não carregado"} className="rounded-md h-80 w-55 object-cover" />
            
          </div>
        ))}
      </div>
    </div>
  )
}
