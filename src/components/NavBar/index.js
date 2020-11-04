import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../../redux/reducers/notes";
import styles from "./styles.module.css";

const NavBar = ({  user }) => {
  
 
    return (
      <>      
      <div className={styles["nav-bar"]}>        
        <NavLink       
          className={styles["link"]}
          activeClassName={styles["active-link"]}         
          to="/main"
        >Главная</NavLink>
        <NavLink       
          className={styles["link"]}
          activeClassName={styles["active-link"]}          
          to="/new/all"
        >Новости</NavLink>
        <NavLink       
          className={styles["link"]}
          activeClassName={styles["active-link"]}          
          to="/author"
        >Авторы</NavLink>        
        { user === "Гость" ?
          <NavLink   exact     
            className={styles["link"]}
            activeClassName={styles["active-link"]}          
            to="/"
          >Вход</NavLink>
        :
          <NavLink 
            exact          
            className={styles["link"]}
            activeClassName={styles["active-link"]}          
            to="/"
          >Выход</NavLink>
        }
      </div>
    </>  
  );
}
const mapStateToProps = state => ({
  user: state.user,
  name: state.name,
  password: state.password
 
});
 
const mapDispatchToProps = dispatch => ({
  setUser: (a)=>dispatch(setUser(a))
  
});
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);

