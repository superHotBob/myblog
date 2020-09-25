import React from "react";
import { connect } from "react-redux";
import { addNews, editNews } from "../../redux/reducers/notes";
import styles from "./styles.module.css";



const NotesList = ({ news, addNews, user , editNews }) => {
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
      "status" : "no"
    }]);
    add_new_news(false)
  };
  const edit_news = (a) => {
   
    editNews(a);
    
  };

  let filter_news = news
    .filter(i=>i.text.includes(find_news))
    .filter(i=> user === "Гость" ? i.status === "yes" : i.status);

  return ( 
    <> 
      <p className={styles["news_find"]}>
        Найти новость: 
        <input 
          type="text" 
          placeholder="Введите текст новости" 
          onChange={e=>set_find_news(e.target.value)} 
        />
      </p>     
      {filter_news.map((news, index) =>         
        <div key={index} className={styles["news"]}>
          <p><span>{news.data}</span>{news.name}</p>
          <p>{news.text}</p>
          {(user === "admin" && news.status === "no") && 
            <button className={styles["add_news"]} onClick={()=>edit_news(news.name)}>ОДОБРИТЬ</button>
          }      
        </div>             
      )}
      {new_news &&  <div  className={styles["add_news"]}>
          <h4>Добавить новость</h4>
          <input 
            type="text" 
            placeholder = "название" 
            value={name} 
            onChange={(e)=>set_name(e.target.value)}
          />
          <input 
            type="text" 
            placeholder = "техт" 
            value={text}
            onChange={(e)=>set_text(e.target.value)} 
          />
          <button className={styles["button_add_news"]} onClick={add_news}>ОПУБЛИКОВАТЬ</button>        
        </div>
      }
      {user !== "Гость" && <button className={styles["add_news"]} onClick={()=>add_new_news(true)}>ДОБАВИТЬ НОВОСТЬ</button>}    
    </> 
  );
}

const mapStateToProps = state => ({
  user: state.user,
  news: state.news   
});
   
const mapDispatchToProps = dispatch => ({
  addNews: (a)=>dispatch(addNews(a)),
  editNews: (a)=>dispatch(editNews(a))    
});

export default connect(mapStateToProps,mapDispatchToProps)(NotesList);


