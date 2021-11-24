import {BUY_CAKE} from './CakeTypes'

//default value of number set to 1
export const buyCake = (number=1) => {
    return {
        type: BUY_CAKE,
        //action payload is used to send some data to reducer
        payload: number
    }
}