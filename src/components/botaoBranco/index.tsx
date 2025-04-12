import Link from "next/link";
import styles from "./style.module.css";

export default function BotaoBranco({ texto, link }: { texto: string; link: string }) {
  return (
    <Link href={link} target="_blank" className={styles.botaoBranco}>
      {texto}
    </Link>
  );
}