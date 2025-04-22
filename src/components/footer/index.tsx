import SocialMedia from '../socialMedia';
import style from './style.module.css';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <p>Feito com 💙 por Kaik Bastos</p>
                <p>© 2025 - Todos os direitos reservados.</p>
            </div>
            <SocialMedia />
        </footer>
    )
}