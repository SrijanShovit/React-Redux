import React,{useState} from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux/index'

function NewCakeContainer(props) {
    const [number,setNumer] = useState(1)
    return (
        <div>
            <h2>No. of cakes = {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumer(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} cakes</button> 
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        numOfCakes:state.cake.numOfCakes
    }
}

//maps dispatch of action creator to our prop component
const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
