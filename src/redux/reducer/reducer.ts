import {SHOW_WINDOW} from '../type'
import { Show } from "../actions/action";

export interface IWindowState {
    show: boolean
}

const iniitialState = {
    show: false
}

export const showingWindow = (state:IWindowState = iniitialState, action:Show ) => {
    switch (action.type) {
        case SHOW_WINDOW:
            return {
                show: !state.show
            }
        default:
            return state;
    }
} 