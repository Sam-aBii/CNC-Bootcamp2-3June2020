import React from 'react'
import { Child } from './Child'

export const Parent = (props) => {
    return (
        <div>
            This is Parent component
            <h2>{props.name}</h2>
            <Child myName = {props.name}  />
            
        </div>
    )
}
