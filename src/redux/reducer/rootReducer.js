import { combineReducers } from "redux";
import commonReducer from './commonReducer';
import itemReducer from './itemReducer';
import heroReducer from './heroReducer';
import abilityReducer from './abilityReducer';
import loreReducer from './loreReducer';

export default combineReducers({
    commonReducer,
    heroReducer,
    itemReducer,
    abilityReducer,
    loreReducer,
});
