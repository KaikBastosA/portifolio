'use client'

import { useState } from 'react'
import styles from './style.module.css'

export default function Contato() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log({
            nomeCompleto: `${nome} ${sobrenome}`,
            email,
            assunto,
            mensagem,
        })

        setNome('')
        setSobrenome('')
        setEmail('')
        setAssunto('')
        setMensagem('')

        setFormSubmitted(true)

        setTimeout(() => {
            setFormSubmitted(false)
        }, 6000)
    }

    return (
        <section className={styles.contato}>
            <h2 className={styles.title}>Entre em contato</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.name}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <input
                            type="text"
                            id="sobrenome"
                            name="sobrenome"
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className={styles.inputGroupFull}>
                    <label htmlFor="email">Digite seu e-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.inputGroupFull}>
                    <label htmlFor="assunto">Assunto</label>
                    <input
                        type="text"
                        id="assunto"
                        name="assunto"
                        value={assunto}
                        onChange={(e) => setAssunto(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.inputGroupFull}>
                    <label htmlFor="mensagem">Digite sua mensagem</label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    Enviar
                </button>
            </form>

            {formSubmitted && (
                <div className={styles.successMessage}>
                    Formulário enviado com sucesso!
                </div>
            )}
        </section>
    )
}
