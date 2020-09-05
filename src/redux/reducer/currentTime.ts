import {CURRENT_TIME} from "../type";
import { Time } from "../actions/actionCurrentTime"
export interface ICurrentTime {
    current: string
}

const iniitialState = {
    current: new Date().toLocaleTimeString()
}

export const currentTime = (state:ICurrentTime = iniitialState, action:Time ) => {
    switch (action.type) {
        case CURRENT_TIME:
           return {
            current: action.time
           }
        default:
            return state;
    }
} 