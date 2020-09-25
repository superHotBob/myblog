import React from "react";
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

import styles from "./styles.module.css";

const Menu = () => {
 
    return (
      <div className={styles['dashboard']}>
        <div>
          <h3 className={styles['header']}>Artists</h3>
          {this.renderArtistList()}
        </div>
        {this.renderSpotLight()}
      </div>
    );
 

};  
export default Menu;
