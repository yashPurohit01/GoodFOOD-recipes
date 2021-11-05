import { createStore , applyMiddleware, combineReducers, compose  } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { dataLoadReducer } from "./reducers/dataLoaderReducer";
import { searchReducer } from "./reducers/searchReducer";


const composeEnhancer = /* window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || */ compose ;

const reducers = combineReducers({
    randomResult: dataLoadReducer,
    searchResult: searchReducer
})

 const store = () => createStore(reducers ,  composeEnhancer (applyMiddleware(thunk)));

 export const wrapper = createWrapper(store);