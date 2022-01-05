import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    return (
        <div style={{display:"flex", justifyContent:'space-between'}}>
            <Link to='/'>Home</Link>  
            <Link to='/About'>About</Link>      
            <Link to='/Contact'>Contact</Link>   
            <Link to='/Users'>Users</Link>   
        </div>
    )
}
