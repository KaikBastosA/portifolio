import styles from './styles.module.css'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ image, title, description, link }: ProjectCardProps) {
  return (
    <Link href={link} className={styles.card} target="_blank" rel='noopener noreferrer'>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
        />
        <div className={styles.overlay}>
          <p className={styles.description}>{description}</p>
          <span className={styles.button}>Ver mais</span>
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  )
}
