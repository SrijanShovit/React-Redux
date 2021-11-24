import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux/index'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>No. of icecreams = {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy icecreams</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}


const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
