import React from "react";
import { connect } from "react-redux";
import { addNews} from "../../redux/reducers/notes";
import styles from "./styles.module.css";



const NewAuthor = ({  addNews, close }) => {
 
  const [name, set_name ] = React.useState("");
  const [text, set_text ] = React.useState("");
 
  const [author, set_author] = React.useState("");  
  const [password, set_password] = React.useState("");  
  const [email, set_email] = React.useState("");  

  const add_news = () => {
    let d = new Date();
    addNews([{
      "name": name,
      "text": text,
      "data": d.getDay() + "." + d.getMonth() + "." + d.getFullYear(),
      "status" : "no",
      "author": author,
      "password": password,
      "email": email 
    }]);
    
  };
  
    
 

 

  return ( 
    <div className={styles["add_author"]}>
        <span onClick={()=>close(false)}>x</span>
        <h2>Регистрация автора</h2> 
        <div  className={styles["add_new"]}>
            <form >
            <input 
                type="text" 
                minlength="6"
                autoComplete
                required
                placeholder = "имя" 
                value={author} 
                onChange={(e)=>set_author(e.target.value)}
            />
            <input 
                type="email" 
                placeholder = "email"
                pattern=".+@.+.+" 
                required
                value={email} 
                onChange={(e)=>set_email(e.target.value)}
            />
            <input 
                type="password" 
                placeholder = "пароль" 
                minlength="6"
                required
                value={password} 
                onChange={(e)=>set_password(e.target.value)}
            />
       
            <h2>Добавить новость</h2>
            <input 
                type="text" 
                placeholder = "заглавие " 
                value={name} 
                onChange={(e)=>set_name(e.target.value)}
            />
            <textarea 
                rows="10"            
                placeholder = "текст новости" 
                value={text}
                required
                onChange={(e)=>set_text(e.target.value)} 
            />
            <input 
                type="submit" 
                className={styles["button_add_news"]} 
                onClick={add_news}
                value="ОПУБЛИКОВАТЬ" 
            />        
            </form>
        </div>
     
        
         
       
         
    </div> 
  );
}

const mapStateToProps = state => ({
  user: state.user,
  news: state.news
});
   
const mapDispatchToProps = dispatch => ({
  addNews: (a)=>dispatch(addNews(a))
  
});

export default connect(mapStateToProps,mapDispatchToProps)(NewAuthor);


