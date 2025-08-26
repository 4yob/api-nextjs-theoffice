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
              {loading? "Carregando ... " : "🔍 Buscar Desenhos"}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartoons.map((cartoon) => (
          <div key={cartoon.id} className="bg-white p-6 rounded-lg shadow-md flex flex-row justify-evenly items-center">
            <div>
              <h3 className="font-bold text-lg text-gray-800">{cartoon.title}</h3>
              <p className="text-gray-600">{cartoon.year}</p>
              <p className="text-gray-600">{cartoon.creator}</p>
              <p className="text-gray-600">{cartoon.rating}</p>
              <p className="text-gray-600">{cartoon.genre}</p>
              <p className="text-gray-600">{cartoon.runtime_in_minutes}</p>
              <p className="text-gray-600">{cartoon.episodes}</p>
            </div>
            {cartoon.image && (
              <img src={cartoon.image} alt={cartoon.title} className="rounded-md h-48 w-48 object-cover"/>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
