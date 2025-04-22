import style from "./style.module.css";
import Link from "next/link";
import gmail from "../../../public/icons/gmail-logo.png";

export default function TrabalharJunto() {
    return (
        <section className={style.trabalharJunto}>
            <h2 className={style.title}>Vamos trabalhar juntos?</h2>
            <Link href="mailto:kaikbastos14@gmail.com" target="_blank" className={style.button}>
                <img src={gmail.src} alt="ícone do email" />
                <span>kaikbastos14@gmail.com</span>
            </Link>
        </section>
    )
}