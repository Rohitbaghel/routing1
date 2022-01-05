import React from 'react'
import { useParams } from 'react-router-dom'
console.log(useParams)
export const UsersDetails = () => {
    const {identity} = useParams()
    // console.log(identity)
    return (
        <div>
            <h1>User Number{identity } details </h1>
        </div>
    )
}
