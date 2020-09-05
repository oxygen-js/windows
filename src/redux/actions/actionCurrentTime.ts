import {CURRENT_TIME} from '../type'

export type Time = {
    type: typeof CURRENT_TIME,
}

export const actionCurrentTime = ():Time => {
    return{
        type: CURRENT_TIME
    }
}