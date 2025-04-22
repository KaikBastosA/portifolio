'use client'

import { useState } from "react"
import habilidadesData from "@/data/habilidades.json"
import Image from "next/image"
import styles from "./style.module.css"

interface Skill {
  name: string
  description: string
  icon: string
}

export default function Habilidades() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  const habilidades: Skill[] = habilidadesData.map((skill) => ({
    name: skill.nome,
    description: skill.descricao,
    icon: skill.icone,
  }));

  return (
    <section className={styles.habilidades}>
      <h1 className={styles.title}>Habilidades</h1>
      <div className={styles.container}>
        <div className={styles.textArea}>
          <h2>{selectedSkill ? selectedSkill.name : "Minhas habilidades"}</h2>
          <p>
            {selectedSkill
              ? selectedSkill.description
              : "Aqui é onde você encontrará todas as minhas habilidades. Clique nos ícones ao lado para visualizar melhor."}
          </p>
        </div>

        <div className={styles.iconsGrid}>
          {habilidades.map((skill) => (
            <div
              key={skill.name}
              className={`${styles.iconWrapper} ${selectedSkill?.name === skill.name ? styles.active : ""
                }`}
              onClick={() => setSelectedSkill(skill)}
            >
              <Image src={skill.icon} alt={skill.name} width={80} height={80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
