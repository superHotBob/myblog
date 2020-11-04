const initialState = {
  name: "пух",
  password: "11111",
  user: "Гость",
  news: [{"name":"News one","text":"This is first news","data":"23.10.2020","status":"yes","author":"Пух"},
          {"name":"News about all","text":"This is super news","data":"22.10.2020","status":"yes","author": "Иа"},
          {"name":"News is good","text":"This is second news","data":"14.10.2020","status":"yes","author": "Пух"},
          {"name":"This is my new","text":"This is second news","data":"16.10.2020","status":"no","author": "Пятак"},
          {"name":"News two","text":"This is second news","data":"20.10.2020","status":"no","author": "Сова"}
        ]  
};

const SET_USER = 'set_user';
const ADD_NEWS = 'set_news';
const EDIT_NEWS = 'edit_news';
const DEL_NEW = 'del_new';


export const setUser = a => ({
  type: SET_USER, a
});
export const editNews = a => ({
  type: EDIT_NEWS, a
});
export const delNew = a => ({
  type: DEL_NEW, a
});
export const addNews = a => ({
  type: ADD_NEWS, a
});

const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:     	
    return {...state, news: state.news.concat(action.a) };
   
    case EDIT_NEWS:     	
    return { ...state, news: state.news.filter((i)=>i.name === action.a ? i.status = "yes" : "no")};

    case DEL_NEW:     	
    return { ...state, news: state.news.filter((i)=>i.name === action.a ? "" : i.name)};   
   
    case SET_USER:
    return {...state, user: action.a};

    default:
    return state;
    
  }
};

export default rootReduser;
