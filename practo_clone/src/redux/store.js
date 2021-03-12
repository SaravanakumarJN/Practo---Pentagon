import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { doctorsReducer } from "./doctorSearch/reducer";

const rootReducer = combineReducers({
    doctorsReducer : doctorsReducer,
    authReducer : authReducer
}) 

const customThunks = (store) => (next) => (action) => {
    return typeof action === "function" ? action(store.dispatch) : next(action);
};
  
const composedEnhancer = compose(
    applyMiddleware(customThunks),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, composedEnhancer);
export {store}