import {CURRENT_TIME} from "../type";
import { Time } from "../actions/actionCurrentTime";

export interface ICurrentTime {
    time: string
}

const iniitialState = {
    time: ''
}

export const currentTime = (state:ICurrentTime = iniitialState, action:Time ) => {
    switch (action.type) {
        case CURRENT_TIME:
            return {
                time: ''
            }
        default:
            return state;
    }
} 