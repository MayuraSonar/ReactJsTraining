import React from 'react';
import styles from './FeatureImage.module.css'

export const FeatureImage:React.FC<{}>=()=>{
    return(
        <div className={styles.featureImage}>
            <h2 className={styles.greeting}>Welcome to Nike Shoes World</h2>
            <img src='../../images/feature-image-shoe.png' className={styles.featureShoe}></img>
        </div>
    )
}