import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../../redux/reducers/notes";
import styles from "./styles.module.css";

const NavBar = ({ name, password,setUser }) => {
  const [open, set_open] = React.useState(false);
  const [input_name, set_name] = React.useState("");
  const [error, set_error] = React.useState(true);
  const [input_password, set_password ] = React.useState("");

  const enter = () => {
    if((name === input_name || "admin") && (password === input_password || "admin")) {
      setUser(input_name);
      set_open(false);
    }
    return (
      set_error(false),
      setTimeout(() => set_error(true),2000)
    )

  };
 
    return (
      <>
      {open && <div  className={styles["enter"]} >
          {error ? <div>
              <span onClick={()=>set_open(false)}>X</span>
              <h4>ВХОД</h4>
              <input 
                type="text" 
                placeholder="имя" 
                value={input_name} 
                onChange={e=>set_name(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="пароль" 
                value={input_password} 
                onChange={e=>set_password(e.target.value)}
              />
              <input type="button" value="ВОЙТИ" onClick={()=>enter()} />
            </div>
            :
            <div  className={styles["error"]}>
              <h3>Ошибка ввода</h3>
            </div>
          }  

        </div>
      }
      <div className={styles["nav-bar"]}>        
        <NavLink       
          className={styles["link"]}
          activeClassName={styles["active-link"]}
          to="/"
        >
          Главная
        </NavLink>
        <NavLink       
          className={styles["link"]}
          activeClassName={styles["active-link"]}
          to="/new"
        >
          Новости
        </NavLink>
        <span className={styles["link"]} onClick={()=>set_open(true)}>
          Вход/Выход
        </span>
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

