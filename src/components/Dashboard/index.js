import React from "react";


import styles from "./styles.module.css";

const Menu = () => {
 
    return (
      <div className={styles['dashboard']}>
        <div>
          <h3 className={styles['header']}>ГЛАВНАЯ</h3>
          <h3 className={styles['header']}>НОВОСТИ</h3>
          <h3 className={styles['header']}>Вход/Выход</h3>         
        </div>
       
      </div>
    );
 

};  
export default Menu;
