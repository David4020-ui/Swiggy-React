import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <section className="topBarSection">
        <div className="companyTitle">
          <Link to="/" className='link'>
          <h2>Swiggy</h2>
          </Link>
        
        </div>
        <div className="searchBar">
     <input className='search-box' type="text" placeholder='search...' />
        </div>
        <div className="userAuth">
      login/signUp
        </div>

    </section>
  )
}

export default TopBar