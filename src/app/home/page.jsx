import React from "react";
import Link from "next/link";
import styles from './home.module.css';

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeContent}>
                <div className={styles.homeCard}>
                    <div className={styles.badge}>
                        Projeto TCC  <span className={styles.span}>•</span> FRONT-END <span className={styles.span}>•</span> 2TDS1
                    </div>
                    <h1 className={styles.title}>
                        THE OFFICE API
                    </h1>
                    <p className={styles.description}>
                        Seja bem-vindo(a) ao projeto de<span className={styles.span}>Alejandra Barros</span>. Este site foi criado para armazenar e apresentar o trabalho de TCC sobre os personagens da série de The Office.
                    </p>
                    <div className={styles.buttonContainer}>
                        <Link
                            href="/about"
                            className={styles.primaryButton}
                        >
                            Conheça o Projeto
                        </Link>
                        <Link
                            href="/api"
                            className={styles.secondaryButton}
                        >
                            API
                        </Link>
                        <div className={styles.cardFooter}>
                            <p className={styles.footerText}>
                                © {new Date().getFullYear()} Projeto TCC – Desenhos Animados 2D
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
