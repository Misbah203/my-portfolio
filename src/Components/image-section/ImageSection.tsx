"use client"
import React from 'react';
import styles from './ImageSection.module.css';
import Image from 'next/image'
import {motion} from 'framer-motion'

const containerVariants ={
    hidden : {},
    show:{
        transition :{
            staggerChildren : 0.2
        }
    }  
}

const itemVariants = {
    hidden:{opacity:0,y:20},
    show:{opacity:1,y:0}
}
 export default function ImageSection(){
    return(
        <>
        <motion.section className={styles.ImageSection}
        variants={containerVariants}
        initial="hidden"
        whileInView="show">
          <motion.div variants={itemVariants} ><Image src={"/css.png"}  alt={"pic"} width={99} height={99}></Image></motion.div>  
          <motion.div variants={itemVariants} > <Image src={"/html.png"}  alt={"pic"} width={90} height={90}></Image></motion.div>  
          <motion.div variants={itemVariants} ><Image src={"/tsc.png"}  alt={"pic"} width={96} height={96}></Image></motion.div>  
          <motion.div variants={itemVariants} ><Image src={"/git.png"}  alt={"pic"} width={96} height={96}></Image></motion.div>  
          <motion.div variants={itemVariants} ><Image src={"/figma.jpg"}  alt={"pic"} width={96} height={96}></Image></motion.div>  
          <motion.div variants={itemVariants} > <Image src={"/react.png"}  alt={"pic"} width={96} height={96}></Image></motion.div>  
          <motion.div variants={itemVariants} ><Image src={"/next2.jpg"}  alt={"pic"} width={96} height={96}></Image></motion.div>  
        </motion.section>
        </>
    )
}