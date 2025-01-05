"use client"

import React from 'react'
import styles from './Header.module.css'
import {interFont ,caveatFont} from '../font';
import Link from 'next/link'
import { TiThMenu } from "react-icons/ti";
import { FaRegWindowClose } from "react-icons/fa";

function Header(){
    const [isOpen , setIsOpen] = React.useState(false)
    return (
       <>
       <header>
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={caveatFont.className}>Misbah Qasim</h1>
                
         {isOpen ?(
        <ul className={`${interFont.className} ${styles.navUl} ${styles.active}`}>
             <FaRegWindowClose  className={styles.close} onClick={()=>setIsOpen(false)}/>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"#about"}>About</Link></li>
                    <li><Link href={"#project"}>Projects</Link></li>
                    <li><Link href={"#contact"}>Contact</Link></li>
                </ul>):
                (<ul className={`${interFont.className} ${styles.navUl}`}>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"#about"}>About</Link></li>
                    <li><Link href={"#project"}>Projects</Link></li>
                    <li><Link href={"#contact"}>Contact</Link></li>
                </ul>)}
                <TiThMenu size={30} className={styles.menu} onClick={()=>{setIsOpen(!isOpen)}}/>
            </nav>
        </header>
       </header>
       
       
       </>
    )
}
export default Header