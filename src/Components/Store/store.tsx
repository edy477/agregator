import {createStore,compose} from "redux";
import {catReducer} from '../reducers/reducer';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store  =createStore(catReducer,composeEnhancers() );
export default  store;
