import {Link, useLocation} from "react-router-dom"
import "../css/Navbar.css";
import React, { useEffect, useState } from "react";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [locate,setlocate]=useState('/')

  const location=useLocation();
  
  useEffect(()=>{
   setlocate(location.pathname)
    
  },[location])
  
  

  const hamb = (value) => {
    setNavbar(value);
    
  };
  return (
    <div class="navbar">
      <nav>
        <h2 className="havyas">Havyas</h2>
        <ul>
          <li>
            {
              locate==="/"?" ":
            
            <Link to='/' className="media">
              Home
            </Link>
        }
          </li>
          <li>
          {
              locate==="/about"?" ":
            
            <Link to='/about' className="media">
              About
            </Link>
          }
          </li>
          <li>
          {
              locate==="/skill"?" ":
            <Link to='/skill' className="media">
              Skills
            </Link>
          }
          </li>
          
          <li>
          {
              locate==="/project"?" ":
            <Link to='/project' className="media">
              Project
            </Link>
          }
          </li>
          <li>
          {
              locate==="/connect"?" ":
            <Link to='/connect' className="media">
              Connect
            </Link>
          }
          </li>
          <li >
            <a href="#" onClick={() => hamb(true)} id="hamb">&#9776;</a>
          </li>
        </ul>
        {navbar ?
          <>
            <ul class="sidebar">
              <li>
                <a href="#" onClick={() => hamb(false)} id="hamb">&#x2715;</a>
              </li>
              
              <li>
               
              {
              locate==="/"?" ":
            
              <Link to="/" onClick={() => hamb(false)}>Home</Link>
            
            }
              </li>
              <li>
              {
              locate==="/about"?" ":
            
              <Link to="/about" onClick={() => hamb(false)}>About</Link>
              }
              </li>
              <li>
              {
              locate==="/skill"?" ":
            
              <Link to="/skill" onClick={() => hamb(false)}>Skills</Link>
              }
              </li>
              
              <li>
              {
              locate==="/project"?" ":
            
              <Link to="/project" onClick={() => hamb(false)}>Project</Link>
              }
              </li>
              <li>
              {
              locate==="/connect"?" ":
            
              <Link to="/connect" onClick={() => hamb(false)}>Connect</Link>
              }
              </li>
            </ul>
          </>
          :
          ""
        }
        
        
      </nav>

    </div>
  );
}
export default Navbar;