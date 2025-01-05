import React from 'react';
import styles from './Projects.module.css';
import { caveatFont } from '../font';
import ProjectCard from './projects-card/ProjectCard';

export default function Projects(){
    return(
        <>
        <section id='project' className={styles.projects}>
        <h1 className={`${caveatFont.className}`}>
           <span> M</span>y
           <span> P</span>rojects
            </h1>

            <p className='interFont.className'>I create responsive web applications using HTML, CSS, TypeScript, and Next.js, converting Figma designs into functional websites.
                 <br />My focus is on performance, user experience, and clean, scalable code.</p>


                 <div  className={styles.MyProjects}>
                <ProjectCard />

                 </div>
        </section>
        </>
    )
}