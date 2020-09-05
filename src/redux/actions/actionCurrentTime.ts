import {CURRENT_TIME} from '../type'

export type Time = {
    type: typeof CURRENT_TIME,
    time?: string
}

export const actionCurrentTime = ():Time => {
    return{
        type: CURRENT_TIME,
        time: new Date().toLocaleTimeString()
    }
}