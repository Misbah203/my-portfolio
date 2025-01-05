"use client"


import React from "react";
import styles from "./HeroSection.module.css"
import { interFont } from "../font";
import Button from "../Button/Button";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Images from "next/image";
import { motion} from "framer-motion";
import {Typewriter} from "react-simple-typewriter";

export default function HeroSection(){
    return(
    <>
    <section className={`${styles.hero} ${interFont.className}`}>
        <h1>Hey! I'm   {""}
            <span>Misbah Qasim</span> {""}
           
           <motion.span style={{display:"inline-block",fontSize:"50px"}}
           animate={{rotate:[0,15,-10,20,-10,0]}}
           transition={{duration:1.5, repeat:Infinity , ease:"easeInOut"}}
           >
           👋
           </motion.span>
            <br /><span> I'm </span>
           <Typewriter  words={['Front-End Developer','Web Developer','UI/UX Designer']}
           loop={Infinity}
           cursor={true}
           cursorStyle='_'
           typeSpeed={80}
           deleteSpeed={50}
           delaySpeed={1500}
           />
           
        </h1>

        <p>I can build user interface for web sites and applications with <span> React JS </span>and<span> Next.Js </span>
        <br /> I love the front end development.</p>

        <Button text={"Hire Me"}/>

        <div className={styles.socialIcons}>
        <FaFacebookF size={30} color='black' />
        <FaSquareXTwitter  size={30} color='black'/>
        <FaInstagramSquare size={30} color='black' />
        <FaWhatsapp size={30} color='black' />
        <FaTelegramPlane size={30} color='black' />
        </div>

        <div className={styles.ImagesIcons}>
        </div>
    </section>
    </>
    )
}