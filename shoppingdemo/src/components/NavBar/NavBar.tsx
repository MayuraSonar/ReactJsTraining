import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaHome,FaBaby, FaShoppingCart } from 'react-icons/fa';
import { GiMale,GiFemale } from 'react-icons/gi';
 const cx =classNames.bind(styles);
 export const NavBar:React.FC<{}>=()=>{
     const[isChecked,setChecked]=useState(false);
     return(
         <div className={styles.container}>
             <h1 className={styles.logo}>
                 <Link to="./">
                     Shoes Land
                 </Link>
             </h1>
             <label className={styles.menuBtnWrapper}>
                 <div 
                 className={cx({
                     menuBtn:true,
                     closeBtn:isChecked,
                     openBtn:!isChecked
                 })}
                 />
             </label>
             <input 
             type="checkbox"
             className={styles.checkbox} onChange={()=> setChecked(prev=>!prev)}
             />
             <div className={styles.links}>
                 <NavLink to="./">
                     <button className={styles.link}>
                         {<FaHome/>}Home
                     </button>
                 </NavLink>
                 <NavLink to="./men" activeClassName={styles.activeLink}>
                     <button className={styles.link}>
                         {<GiMale/>}Men
                     </button>
                 </NavLink>
                 <NavLink to="./women" activeClassName={styles.activeLink}>
                     <button className={styles.link}>
                         {<GiFemale/>}Women
                     </button>
                 </NavLink>
                 <NavLink to="./kids" activeClassName={styles.activeLink}>
                     <button className={styles.link}>
                         {<FaBaby/>}Kids
                     </button>
                 </NavLink>
                 <NavLink to="./cart" activeClassName={styles.activeLink}>
                     <button className={styles.link}>
                         {<FaShoppingCart/>}Cart
                     </button>
                 </NavLink>
             </div>
         </div>
     )
     
 }
