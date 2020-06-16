import React, { Component } from 'react'

export default class TobaccoView extends Component{
    render(){
        const {brand,name,price,nicotine,tar,throat_hit,isMenthol} = this.props
        return (
            <div>
                <h3>{brand}</h3>
                <p>{name}</p>
                <p>{price}</p>
                <p>{nicotine}</p>
                <p>{tar}</p>
                <p>{throat_hit}</p>
                <p>{isMenthol}</p>
            </div>

        )

    }
}