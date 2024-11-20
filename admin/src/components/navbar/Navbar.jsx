import "./navbar.css";
import logo from "../../assets/slogotransparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <div className="user">
          <FontAwesomeIcon icon={faUser} />
          <h6>Profile</h6>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
