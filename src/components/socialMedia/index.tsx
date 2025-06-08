import style from "./style.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SocialMedia() {
  return (
    <div className={style.socialMedia}>
      <Link href="https://github.com/KaikBastosA" target="_blank">
        <Image
          src="/redes/github.png"
          alt="GitHub"
          width={35}
          height={35}
          className={style.Icon}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/kaik-bastos/" target="_blank">
        <Image
          src="/redes/linkedin.png"
          alt="Linkedin"
          width={35}
          height={35}
          className={style.Icon}
        />
      </Link>
      <Link href="#" target="_blank">
        <Image
          src="/redes/instagram.png"
          alt="Instagram"
          width={35}
          height={35}
          className={style.Icon}
        />
      </Link>
    </div>
  )
}