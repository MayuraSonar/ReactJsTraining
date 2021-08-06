import * as React from 'react';
import {FaGithub} from 'react-icons/fa'
import styles from '/Footer.module.css';
export const Footer:React.FC<{}>=()=>{
    return(
        <div className={styles.container}>
        <p>Demo App using Routing and Redux Toolkit</p>
        <p>Utthunga Technologies</p>
        <FaGithub/>
        </div>
    )
}