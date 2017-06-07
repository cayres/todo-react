import React from 'react'

export default props => {
    if(props.done){
        return <s>{props.description}</s>
    }
    return <p>{props.description}</p>
}