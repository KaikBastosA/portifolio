import style from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import github from "@/assets/github.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";

export default function SocialMedia(){
    return(
        <div className={style.socialMedia}>
        <Link href="https://github.com/KaikBastosA" target="_blank">
        <Image
          src={github}
          alt="GitHub"
          width={35}
          height={35}
          className={style.Icon}
        />
        </Link>
        <Link href="https://www.linkedin.com/in/kaik-bastos/" target="_blank">
        <Image
          src={linkedin}
          alt="Linkedin"
          width={35}
          height={35}
          className={style.Icon}
        />
        </Link>
        <Link href="#" target="_blank">
        <Image
          src={instagram}
          alt="Instagram"
          width={35}
          height={35}
          className={style.Icon}
        />
        </Link>
        </div>
    )
}