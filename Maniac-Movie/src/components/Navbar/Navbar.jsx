import React from 'react';
import "./Navbar.css";
import Fire from '../../assets/Designer.png'
import Star from '../../assets/2234894a5947b15d53493d82ca9236fd.png';
import Party from '../../assets/Party (2).png'

const Navbar = () => {
  return (
    <nav className=' navbar'>
      <h1>MovieManiac</h1>

      <div className='navbar_links'>
         <a href = "">Popular{""}
            <img src = {Fire} alt = "fire_emoji" className = "navbar_emoji"/></a>

        <a href = "">Top Rated{""}
            <img src = {Star} alt = "star_emoji" className = "navbar_star"/></a>

        <a href = "">Upcoming{""}
            <img src = {Party} alt = "party_emoji" className = "navbar_emoji"/></a>

      </div>
    </nav>
  )
}

export default Navbar