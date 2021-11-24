import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream,buyCake} from '../redux/index'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
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

const mapDispatchToProps = (dispatch,ownProps) => {
    const dispatchFunctions = ownProps.cake 
    ? ()=>dispatch(buyCake())
    : ()=>dispatch(buyIceCream())
    return {
        buyItem : dispatchFunctions
    }
}

//if we want to only dispatch action but not subscribe to state changes
//i.e. use mapDispathToProps but not mapStateToProps
//write null in place of mapStateToProps
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
