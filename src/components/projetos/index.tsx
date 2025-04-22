'use client'

import ProjetoCard from "../projetoCard"
import { useState } from "react"
import projectData from "@/data/projetos.json"
import style from "./styles.module.css"

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

const allTags = Array.from(
    new Set(projectData.flatMap((project: Project) => project.tags))
)


export default function Projetos() {
    const [activeFilter, setActiveFilter] = useState<string | null>(null)
    const [showAll, setShowAll] = useState(false)

    const filteredProjects = activeFilter
        ? projectData.filter((p: Project) => p.tags.includes(activeFilter))
        : showAll
            ? projectData
            : projectData.slice(0, 6)


    return (
        <section className={style.projetos}>
            <div className={style.titleContainer}>
                <h1 className={style.title}>Projetos</h1>
            </div>
            <div className={style.filters}>
                {allTags.map(tag => (
                    <button
                        key={tag}
                        className={`${style.filterButton} ${activeFilter === tag ? style.active : ''
                            }`}
                        onClick={() => {
                            setActiveFilter(tag === activeFilter ? null : tag)
                        }}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <div className={style.grid}>
                {filteredProjects.map((project: Project) => (
                    <ProjetoCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
            {!activeFilter && !showAll && projectData.length > 6 && (
                <div className={style.showAll}>
                    <button onClick={() => setShowAll(true)} className={style.showAllButton}>
                        Mostrar todos
                    </button>
                </div>
            )}
        </section>
    )
}