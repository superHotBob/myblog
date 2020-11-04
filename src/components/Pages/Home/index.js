import React from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import NavBar from "../../NavBar";

const Home = ({ user }) => {

    return (
        <>
             
            <div className={styles["hello"]}>
                <NavBar /> 
                <h2>Рады приветствовать тебя,  <b>{user}</b> на нашем блоге самых свежих новостей</h2> 
            </div>
        </>
    )
}  

const mapStateToProps = state => ({user: state.user});
   

export default connect(mapStateToProps)(Home);

