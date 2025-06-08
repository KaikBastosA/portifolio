import style from "./page.module.css";
import SocialMedia from "@/components/socialMedia";
import BotaoBranco from "@/components/botaoBranco";
import Projetos from "@/components/projetos";
import Habilidades from "@/components/habilidades";
import Contato from "@/components/contato";
import TrabalharJunto from "@/components/trabalharJunto";

export default function Home() {
  return (
    <>
      <section id="Sobremim" className={style.aboutMe}>
        <h3>Front-end Developer</h3>
        <h1>Kaik Bastos</h1>
        <div className={style.amText}>
            <p>Minha jornada como desenvolvedor começou com a paixão por transformar ideias em realidade através do código. Hoje, como especialista em front-end, dedico-me a construir interfaces de usuário responsivas, performáticas e visualmente impactantes.</p>
            <p>Minha experiência é focada em traduzir designs em aplicações interativas e acessíveis, garantindo sempre uma experiência de usuário de alta qualidade. Sou movido pelo desafio de resolver problemas complexos com criatividade e lógica, acreditando que a tecnologia, através de um front-end bem executado, tem o poder de criar conexões reais.</p>
        </div>
        <BotaoBranco texto="Mais sobre mim" link="/" />
        <SocialMedia />
      </section >
      <section id="Projetos" className={style.projects}>
        <Projetos />
      </section>
      <section id="Habilidades" className={style.skills}>
        <Habilidades />
      </section>
      <section id="Contato" className={style.contact}>
        <Contato />
      </section>
      <section className={style.trabalharJunto}>
        <TrabalharJunto />
      </section>
    </>
  )
}