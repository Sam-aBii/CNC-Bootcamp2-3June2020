import React from 'react'

export const Child = (props) => {
    return (
        <div>
            This is child component
            <h2>{props.myName}</h2>

        </div>
    )
}
