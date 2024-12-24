import React from 'react'
import "../App.css";


function Navbar() {
  return (
    <div>
        <nav className='container'>
             <div className="logo">
                <img src="/images/brand_logo.png" alt="brandlogo" />
             </div>
             <ul>
                <li href ="#">Menu</li>
                <li href ="#">Location</li>
                <li href ="#">About</li>
                <li href ="#">contact</li>
             </ul>
             
             <button type='submit'>Login</button>
        </nav>
    </div>
  )
}

export default Navbar