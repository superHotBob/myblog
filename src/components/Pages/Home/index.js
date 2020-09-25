import React from "react";
import { connect } from "react-redux";
import NavBar from "../../NavBar";
import styles from "./styles.module.css";

const Home = ({ user }) => {

  return (
  <div>
    <NavBar />
    <h1 className={styles["hello"]}>"Привет,  {user} "</h1>
  </div>
  )
};
const mapStateToProps = state => ({
    user: state.user
   
});
   
const mapDispatchToProps = dispatch => ({
    
    
});
export default connect(mapStateToProps,mapDispatchToProps)(Home);

