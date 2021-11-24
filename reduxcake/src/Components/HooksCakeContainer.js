import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake} from '../redux/index'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)

    //useDispatch returns reference to dispatch function from the redux-store
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No. of cakes = {numOfCakes}</h2>
            <button onClick={()=> dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
