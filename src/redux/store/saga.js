import { select, takeEvery } from 'redux-saga/effects';


const getState = state => state;

function* writeToLocal() { 
  const s = yield select(getState);
  yield window.localStorage.setItem("name", JSON.stringify(s));      
};
export function* rootSaga() {     
  yield takeEvery('ADD_NOTE', writeToLocal);
};