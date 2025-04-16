import style from "./page.module.css";
import Image from "next/image";
import eu from "@/assets/eu.png";
import SocialMedia from "@/components/socialMedia";
import BotaoBranco from "@/components/botaoBranco";
import Projetos from "@/components/projetos";

export default function Home() {
  return (
    <>
      <section className={style.aboutMe}>
        <h3>Full Stack Developer</h3>
        <h1>Kaik Bastos</h1>
        <div className={style.amText}>
          <p>Minha jornada como desenvolvedor começou cedo, quando percebi que podia transformar ideias em soluções reais através do código. Hoje, como desenvolvedor full-stack, trabalho tanto no frontend quanto no backend, garantindo que cada parte de um projeto seja funcional, intuitiva e eficiente.</p>
          <p>Minha experiência varia desde aplicativos dinâmicos até plataformas robustas, sempre com foco em entregar qualidade e inovação. Sou movido pelo desafio de resolver problemas complexos com criatividade e lógica, e acredito que a tecnologia, quando bem utilizada, pode mudar realidades.</p>
        </div>
        <BotaoBranco texto="Mais sobre mim" link="/sobre-mim"/>
      <SocialMedia />
      </section >
      <section className={style.projects}>
        <Projetos/>
      </section>
    </>
  )
}