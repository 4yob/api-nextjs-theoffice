"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from "./[id].module.css";

export default function CharacterDetailsPage({ params }) {
    const [personagem, setPersonagem] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPersonagem = async (id) => {
        try {
            const response = await axios.get(`https://theofficeapi.dev/api/characters/${id}`);
            setPersonagem(response.data);
        } catch (error) {
            console.error("Erro ao buscar personagem:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (params?.id) {
            fetchPersonagem(params.id);
        }
    }, [params?.id]);

    if (loading) {
        return (
            <div>
                <p>Carregando...</p>
            </div>
        );
    }

    if (!personagem) {
        return (
            <div>
                <p>Personagem não encontrado</p>
            </div>
        );
    }

    return (
        <div className={styles.characterDetails}>
            <h1>{personagem.name}</h1>
            <p>Gênero: {personagem.gender}</p>
            <p>Estado Civil: {personagem.marital}</p>
            <p>Profissão: {personagem.job}</p>
            <p>Local de Trabalho: {personagem.workplace}</p>
            <p>Primeira Aparição: {personagem.firstAppearance}</p>
            <p>Última Aparição: {personagem.lastAppearance}</p>
            <p>Ator: {personagem.actor}</p>
            <Link href="/api">Voltar</Link>
        </div>
    );
}