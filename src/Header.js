import Headroom from "react-headroom";
import "./Header.css"

//Links to different sections of portfolio.

function Header() {
    return (
        <Headroom style={{
            webkitTransition: 'all .5s ease-in-out',
            mozTransition: 'all .5s ease-in-out',
            oTransition: 'all .5s ease-in-out',
            transition: 'all .5s ease-in-out'
          }}>
        <header className = "header">
         <ul className="menu">
          {
            <li> <a href="#personal">personal</a></li>
          }
          {
            <li><a href="#projects">portfolio</a></li>
          }
          {
            <li><a href="#skills">skills</a></li>
          }
        </ul>
        </header>
      </Headroom>
    );
  }
  export default Header;