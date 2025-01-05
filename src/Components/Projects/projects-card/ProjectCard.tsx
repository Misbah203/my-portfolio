"use client"

import React from 'react';
import styles from './ProjectCard.module.css';
import Image from 'next/image';
import {projectcards} from '@/constant/project-card'
import Link from 'next/link';
import {motion} from 'framer-motion'

export default function ProjectCard (){
    return(
        <>
        {projectcards.map((item , index)=>{return(
             <motion.div className={styles.Card} key={index}
             initial={{opacity:0 , scale:0}}
             whileInView={{opacity:1 , scale:1}}
             transition={{duration:1}}>
       <Link href={item.href}>
       <div className={styles.CardImage}>
      {item.type == "image" ?(  <Image src={item.src} alt={"pic"} width={450} height={400}></Image> ) : ( "wrong")}
      </div></Link>
             <div className={styles.CardText}>{item.title}</div>
          </motion.div>

        )})}    
        </>
    )
}