import React from 'react'
import { useNavigate } from "react-router-dom";
function Header({ navActive, onNavButtonClick }) {
  let navigate = useNavigate();
  const navigateToAbout=(param)=>{
      navigate(param);
  }
  return (
    <header className={`${navActive ? 'active' : "header-not-active"}`}>
      <div className="container">
        <div className="row flex-end">
          <button type="button" className="nav-toggler" onClick={onNavButtonClick}>
            <span></span>
          </button>
          {navActive &&
            <nav className={`nav ${'fade-in'} `}>
              <div className="nav-inner">
                <ul>
                  <li onClick={()=>{
                    onNavButtonClick()
                    navigateToAbout('/')
                  }}><span className="nav-item">Home</span></li>
                  <li onClick={()=>{
                    onNavButtonClick()
                    navigateToAbout('/about')
                  }}><span className="nav-item">About</span></li>
                  {/* <li><span className="nav-item"> <Link style={{ textDecoration: 'none' }}  to="/contact" onClick={onNavButtonClick}>Contact</Link></span></li> */}
                </ul>
              </div>
            </nav>}
        </div>
      </div>
    </header>
  )
}

export default Header