const initialState = {
  name: "вася",
  password: "11111",
  user: "Гость",
  news: [{"name":"News one","text":"This is first news","data":"23.09.2020","status":"yes"},
          {"name":"News two","text":"This is second news","data":"24.09.2020","status":"no"}]  
};

const SET_USER = 'set_user';
const ADD_NEWS = 'set_news';
const EDIT_NEWS = 'edit_news';


export const setUser = a => ({
  type: SET_USER, a
});
export const editNews = a => ({
  type: EDIT_NEWS, a
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
   
   
    case SET_USER:
      return {...state, user: action.a};
    default:
      return state;
    
  }
};

export default rootReduser;
