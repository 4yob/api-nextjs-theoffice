"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from "./[id].module.css";

export default function CharacterDetailsPage({ params }) {
    const [personagem, setPersonagem] = useState(null);
    const [loading, setLoading] = useState(true);

    const resolvedParams = use(params);

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
        if (resolvedParams.id) {
            fetchPersonagem(resolvedParams.id);
        }
    }, [resolvedParams.id]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!character) {
        return <div>Personagem não encontrado.</div>;
    }

    return (
        <div className={styles.characterDetails}>
            <h1>{character.name}</h1>
            <p>Gênero: {character.gender}</p>
            <p>Estado Civil: {character.marital}</p>
            <p>Profissão: {character.job}</p>
            <p>Local de Trabalho: {character.workplace}</p>
            <p>Primeira Aparição: {character.firstAppearance}</p>
            <p>Última Aparição: {character.lastAppearance}</p>
            <p>Ator: {character.actor}</p>
            <Link href="/characters">Voltar</Link>
        </div>
    );
}