import React from "react";
import Link from "next/link";
import styles from './home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>the office</h1>
            <div className={styles.buttonContainer}>
                <Link href="/api" className={styles.button}>Ir para a API</Link>
                <Link href="/api" className={styles.button}>Conheça o projeto</Link>
            </div>
        </div>
    );
}