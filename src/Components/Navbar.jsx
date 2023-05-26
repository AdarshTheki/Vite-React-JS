import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgCloseR } from 'react-icons/cg';
import { Nav } from "./Nav";
// Header Section in navbar
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>  
        <ul className='navbar-list'>
          <li><NavLink className="navbar-link" onClick={()=>setOpenMenu(false)} to="/" >Home</NavLink></li>
          <li><NavLink className="navbar-link" onClick={()=>setOpenMenu(false)} to="/about" >About</NavLink></li>
          <li><NavLink className="navbar-link" onClick={()=>setOpenMenu(false)} to="/contact" >Contact</NavLink></li>
          <li><NavLink className="navbar-link" onClick={()=>setOpenMenu(false)} to="/services" >Services</NavLink></li>
        </ul>
        {/* logo icon */}
        <div className="mobile-navbar-btn">
          <CgMenu name="menu-outlie" className="mobile-nav-icon" onClick={() => setOpenMenu(true)} />
          <CgCloseR name="close-outline" className="close-outline mobile-nav-icon" onClick={() => setOpenMenu(false)} />
        </div>
      </div>
    </Nav>
    </>
  );
};

export default Navbar;
