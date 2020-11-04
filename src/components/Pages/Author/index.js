import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import NavBar from "../../NavBar";
import AddAuthor from "../../AddAuthor";

const Author = ({ user, news }) => {

    let authors = [];
    const [add, open_add] = React.useState(false);
    for(const i of news) { authors.push(i.author) };

    const count_publ = a => authors.filter(i=>i===a).length;
    
    return (
        <div style={{position:"relative"}}>
            <NavBar />
            <h3>
                Наши авторы
            </h3>  
            <div className={styles["hello"]}>
                {[...new Set(authors)].map((i)=><div style={{backgroundImage:`url(https://s3.eu-central-1.amazonaws.com/19ham09-image/${i}.jpg),
                    url(https://images.pexels.com/photos/2086748/pexels-photo-2086748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)
                `}}>
                    <p>{i}
                        <span> (Статей: {count_publ(i)})</span>
                        
                    </p>
                    <Link to={`/new/${i}`} className={styles["link"]}>ЧИТАТЬ НОВОСТИ</Link>
                    </div>
                )}
                {user === "Гость" && <div>
                    +
                    <button onClick={()=>open_add(true)}>СТАТЬ АВТОРОМ</button>
                   
                    </div>
                }      
            </div>
            {add && <AddAuthor close={open_add}/> }
        </div>
    )
}  

const mapStateToProps = state => ({
    user: state.user,
    news: state.news
   
});   
const mapDispatchToProps = dispatch => ({
    
    
});
export default connect(mapStateToProps,mapDispatchToProps)(Author);

