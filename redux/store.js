import { createStore , applyMiddleware, combineReducers, compose  } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { dataLoadReducer } from "./reducers/dataLoaderReducer";
import { searchReducer } from "./reducers/searchReducer";
import { foodDetailReducer } from "./reducers/foodDetailReducer";
import { addFavReducer } from "./reducers/addFavReducer";


const composeEnhancer = /* window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || */ compose ;

const reducers = combineReducers({
    randomResult: dataLoadReducer,
    searchResult: searchReducer,
    foodDetailResult : foodDetailReducer,
    addFavorite : addFavReducer
})

  
 const store = () => createStore(reducers ,  composeEnhancer (applyMiddleware(thunk)));

 export const wrapper = createWrapper(store);