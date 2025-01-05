import React from 'react';
import styles from './footer.module.css'
import { caveatFont } from '../font';

export default function Footer(){
    return(
        <>
        <footer className={styles.footer}>
      <h1 className={caveatFont.className}>
        &copy; 2025 Misbah Qasim .All rights reserved.
        </h1>
        </footer>
        </>
    )
}