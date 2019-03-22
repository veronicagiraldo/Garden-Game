import React from 'react';
import { Link } from 'react-router-dom'


function Navbar () {
 return(
   <div className="nav">
      <Link className="navLinks" to ="/">Home</Link>
      <Link className="navLinks" to ="/howto">How to Play</Link>
      <Link className="navLinks" to="/greenhouse">Green House</Link>
   </div>
 )
}
export default Navbar