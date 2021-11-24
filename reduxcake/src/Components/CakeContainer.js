import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux/index'

function CakeContainer(props) {
    return (
        <div>
            <h2>No. of cakes = {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

//takes redux state and returns an object
//state from redux store is mapped to component props
const mapStateToProps = state =>{
    return {
        numOfCakes:state.numOfCakes
    }
}

//maps dispatch of action creator to our prop component
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
