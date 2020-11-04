import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../../../redux/reducers/notes";
import styles from "./styles.module.css";


const Enter = ({ name, password, setUser, user }) => {
 

 


  const history = useHistory();
  const [input_name, set_name] = React.useState("");
  const [error, set_error] = React.useState(true);
  const [input_password, set_password ] = React.useState("");

  const enter = () => {
    if((name === input_name || "admin") && (password === input_password || "admin")) {
      setUser(input_name);      
      history.push("/main");
    } else {  
    return (
      set_error(false),
      setTimeout(() => set_error(true),2000)
    )
    };

  };
  

    return (
      <>
        <div  className={styles["enter"]} >
          {error ? <div>
              
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
              <Link  to="/main">ВОЙТИ КАК ГОСТЬ</Link>
            </div>
            :
            <div  className={styles["error"]}>
              <h3>Ошибка ввода</h3>
            </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Enter);