  "use client"
  
  import React from 'react';
  import styles from './AboutSection.module.css'
import { caveatFont, interFont } from '../font';
import Button from '../Button/Button';
import Image from 'next/image';
import {motion} from 'framer-motion';

  export default function AboutSection(){
    return(
        <>
        <section id='about' className={styles.about}>
            <motion.div className={styles.aboutContent}
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:2,type:"spring"}}>
         
                <h1 className={caveatFont.className}>Misbah Qasim <br/> <span>Front-End Developer</span></h1>
                <p className={`${styles.aboutText} ${interFont.className} `}>
                I am a passionate and skilled front-end developer with nearly a year of experience working with HTML, TypeScript (TSC), CSS, and Next.js. Over this time, I have honed my ability to craft responsive, visually stunning, and user-friendly web experiences. I build fast and scalable web solutions, ensuring both performance and SEO optimization. I thrive in dynamic environments, continuously evolving my skills to stay ahead of the curve and deliver innovative solutions that exceed client expectations.</p>

                <Button text={"Contact Me"}/>
            </motion.div>
      
      <motion.div className={styles.AboutImg}
      initial={{opacity:0,x:-100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:2,type:"spring"}}>
        <Image src={"/cv 3.jpg"} alt={"pic"} width={500} height={600} className={styles.img}></Image>
      </motion.div>
           
      
        </section>
        </>
    )
  }