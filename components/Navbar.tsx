'use client';
import { useState } from 'react';
import styles from './Navbar.module.css';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className={styles.header}><a className={styles.brand} href="#home" onClick={() => setOpen(false)}>Clara Sweetnam<span>THE PORTFOLIO</span></a><button className={styles.toggle} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button><nav id="navigation" aria-label="Main navigation" className={`${styles.nav} ${open ? styles.open : ''}`}><a href="#work" onClick={() => setOpen(false)}>Selected work</a><a href="#about" onClick={() => setOpen(false)}>About Clara</a><a className={styles.last} href="#footer" onClick={() => setOpen(false)}>At a glance <span aria-hidden="true">↗</span></a></nav></header>;
}
