import React from 'react'
import {connect} from 'react-redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
        </div>
    )
}

//this takes 2 arguments - state and props of component itself
const mapStateToProps = (state,ownProps) =>{
    //check if cake was sent as props or not
    const itemState  = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return {
        item : itemState
    }
}

export default connect(mapStateToProps)(ItemContainer)
