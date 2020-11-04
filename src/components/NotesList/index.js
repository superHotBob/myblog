import React from "react";
import { connect } from "react-redux";
import { addNews, editNews, delNew  } from "../../redux/reducers/notes";
import styles from "./styles.module.css";
import NavBar from "../NavBar";



const NotesList = ({ match, news, addNews, user , editNews, delNew }) => {
  const [new_news, add_new_news] = React.useState(false);
  const [name, set_name ] = React.useState("");
  const [text, set_text ] = React.useState("");
  const [ find_news, set_find_news ] = React.useState("");


  const add_news = () => {
    let d = new Date();
    addNews([{
      "name": name,
      "text": text,
      "data": d.getDay() + "." + d.getMonth() + "." + d.getFullYear(),
      "status" : "no",
      "author": user
    }]);
    add_new_news(false)
  };
  const edit_news = a => editNews(a);
    
 

  let filter_news = news
  .filter(i=>i.text.includes(find_news))
  .filter(i=> user === "Гость" ? i.status === "yes" : i.status)
  .filter(i=> match.params.author === "all" ? i.author : i.author === match.params.author);

  return ( 
    <> 
      <NavBar/>       
      <p className={styles["news_find"]}>
        Найти новость: 
        <input 
          type="text" 
          placeholder="Введите текст новости" 
          onChange={e=>set_find_news(e.target.value)} 
        />
      </p>     
      { filter_news.map((i, index) =>         
        <div key={index} className={styles["news"]}>
          <span>{i.data}</span>
          <span>Автор: {i.author}</span>
          { user.toUpperCase() === i.author.toUpperCase() &&
            <button
              onClick={()=>delNew(i.name)} 
              className={styles["del_new"]}
            >
              УДАЛИТЬ
            </button>
          }
          <p>{i.name}</p>
          <p>{i.text}</p>
          {(user === "admin" && i.status === "no") && 
            <button className={styles["add_new"]} onClick={()=>edit_news(i.name)}>ОДОБРИТЬ</button>
          }      
        </div>             
      )}
      { new_news && <div  className={styles["add_new"]}>
          <h4>Добавить новость</h4>
          <input 
            type="text" 
            placeholder = "название" 
            value={name} 
            onChange={(e)=>set_name(e.target.value)}
          />
          <textarea 
           
            placeholder = "техт" 
            value={text}
            onChange={(e)=>set_text(e.target.value)} 
          />
          <button className={styles["button_send_news"]} onClick={add_news}>ОПУБЛИКОВАТЬ</button>        
        </div>
      }
      {user !== "Гость" && <button className={styles["button_add_news"]} onClick={()=>add_new_news(true)}>
        ДОБАВИТЬ НОВОСТЬ
        </button>
      }  
          
       
         
    </> 
  );
}

const mapStateToProps = state => ({
  user: state.user,
  news: state.news
});
   
const mapDispatchToProps = dispatch => ({
  addNews: (a)=>dispatch(addNews(a)),
  editNews: (a)=>dispatch(editNews(a)),    
  delNew: (a)=>dispatch(delNew(a))    
});

export default connect(mapStateToProps,mapDispatchToProps)(NotesList);


