'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Usando os ícones corretos para o Heroicons v2
import style from './style.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={style.cabecalho}>
      <h1>
        <Link href="/">Kaik Bastos</Link>
      </h1>

      <button className={style.menuToggle} onClick={toggleMenu}>
        {menuOpen ? <XMarkIcon className={style.icon} /> : <Bars3Icon className={style.icon} />}
      </button>

      <nav className={`${style.nav} ${menuOpen ? style.open : ''}`}>
        <ul>
          <li className={style.menuItem}><Link href="/" onClick={() => setMenuOpen(false)}>Início</Link></li>
          <li className={style.menuItem}><Link href="#Sobremim" onClick={() => setMenuOpen(false)}>Sobre mim</Link></li>
          <li className={style.menuItem}><Link href="#Projetos" onClick={() => setMenuOpen(false)}>Projetos</Link></li>
          <li className={style.menuItem}><Link href="#Habilidades" onClick={() => setMenuOpen(false)}>Habilidades</Link></li>
          <li className={style.menuItem}><Link href="#Contato" onClick={() => setMenuOpen(false)}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
