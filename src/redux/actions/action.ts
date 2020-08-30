import {SHOW_WINDOW} from '../type'

export type Show = {
    type: typeof SHOW_WINDOW,
}

export const showWindow = ():Show => {
    return{
        type: SHOW_WINDOW
    }
}