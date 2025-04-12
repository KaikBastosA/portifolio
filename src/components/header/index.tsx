import Link from "next/link"
import style from "./style.module.css";

export default function Header(){
    return(
        <header className={style.cabecalho}>
            <h1><Link href="/">Kaik Bastos</Link></h1>
            <nav>
                <ul>
                    <li className={style.menuItem}><Link href="/">Inicio</Link></li>
                    <li className={style.menuItem}><Link href="/">Sobre mim</Link></li>
                    <li className={style.menuItem}><Link href="/">Habilidades</Link></li>
                    <li className={style.menuItem}><Link href="/">Projetos</Link></li>
                    <li className={style.menuItem}><Link href="/">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}