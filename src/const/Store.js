import { createStore } from 'redux'
import Reducer from "./Reducer";


const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())


export default store