import Link from "next/link"
import style from "./styles.module.css"
import Image from "next/image"
import Academia from "@/assets/academiaV.jpeg"

export default function ProjetoCard() {
    return (
        <div className={style.card}>
            <Link href="#">
                <Image
                    src={Academia}
                    alt="Site de academia"
                    className={style.image}
                />
            </Link>
            <h1>Site de academia</h1>
        </div>
    )
}