import "./navbar.css"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cam");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">CameraApp</span>
        <div className="navItems">
          <button className="navButton" onClick={handleClick}>TAKE SNAP</button>
         
        </div>
      </div>
    </div>
  )
}

export default Navbar