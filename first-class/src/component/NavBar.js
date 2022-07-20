import React from 'react'
import{Link} from 'react-router-dom'
function NavBar() {
  return (
    <>
        <Link to='/'>Home</Link>&nbsp;|&nbsp;
        <Link to='/about'>About</Link><br />
    </>
  )
}

export default NavBar