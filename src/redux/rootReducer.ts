import {combineReducers} from 'redux';
import {currentTime} from './reducer/currentTime';

export default combineReducers({
    time: currentTime
})