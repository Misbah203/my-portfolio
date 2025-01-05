'use client';

import React, { useState } from 'react';
import styles from './ContactUs.module.css'
import { caveatFont, interFont } from '../font';
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { sendEmail } from '@/utils/emailService';
import {motion} from 'framer-motion'


export default function ContactUs() {
const [name, setName] = useState('')
const [email,setEmail] = useState('')
const [message,setMessage] = useState('')

const handleSubmit = async (e: React.FormEvent)=>{
    e.preventDefault();

    const templateParam = {
        to_name :"Misbah Qasim",
        from_name : name,
        from_email : email,
        message : message
    };

    try{
        await sendEmail(templateParam);
        alert("Email send Successfully");
        setName('');
        setEmail('');
        setMessage('');
    }
    catch(error){
        console.error('EmailJS Error',error);
        alert("Failed to send email");
    }
}

    return(
        <>
        <section id='contact' className={`${styles.ContactUs} ${interFont.className}`}>
            <h1 className={caveatFont.className}>
              <span>C</span>ontact 
               <span> M</span>e
                </h1>
      <motion.div
      initial={{opacity:0,x:-100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:2,type:"spring"}}>
                <p>Your business deserves a top-notch website that enhances your brand and drives growth. I specialize in custom web development tailored to your specific goals, whether its e-commerce, content, or corporate sites. With a focus on user experience, mobile optimization, and SEO, I create websites that deliver results. Reach out today to get started on a website that works for you!
               </p>
     </motion.div>
           <div className={styles.ContactBottom}>
           <div  className={styles.ContactLeft}>
            <div className={styles.ContactLeftText}>
            <IoIosMail size={24} color={"var(--logo-color)"} / >
            <div className={styles.ContactBottomEmail}>
                <h6>Have a question?</h6>
                <h6>I am here to help you</h6>
                <h6> Email me arandherebinteqasim@gmail.com</h6>
            </div>
            </div>

            <div className={styles.ContactLeftText}>
            <FaMapMarkerAlt size={24} color={"var(--logo-color)"} / >
            <div className={styles.ContactBottomEmail}>
                <h6>Current Location</h6>
                <h6>Karachi,Pakistan</h6>
                <h6>serving a client world wide</h6>
            </div>
            </div>
            </div>

            <div className={styles.ContactForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.topInputDiv}>
                    <input type="text" placeholder='Enter your name' className={styles.inputDetails} name='name' value={name}  onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder='Enter your email' className={styles.inputDetails} name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <input type="text" placeholder='Subject' className={styles.inputDetails}/>
                    <textarea placeholder='Your message' className={styles.inputDetails} style={{height:"224px"}} name='message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <input type="submit"className={styles.inputButton} value={"Send Message"}/>
                </form>
            </div>
           </div>
        </section>
        </>
    )
}




