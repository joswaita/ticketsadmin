import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sider-bar.css";
import {
  faBarsProgress,
  faChevronRight,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Siderbar() {
  return (
    <div className="side-bar">
      <div className="sidebar-component">
        <section className="siderbar-item">
          <FontAwesomeIcon className="sidebar-icons" icon={faPeopleGroup} />
          <p>User Management</p>
          <FontAwesomeIcon
            className="sidebar-icons chevron-right"
            icon={faChevronRight}
          />
        </section>
        <div className="sidebar-subitems">
          <ul>
            <li>Create User</li>
            <li>Deactivate User</li>
          </ul>
        </div>
      </div>

      <div className="sidebar-component">
        <section className="siderbar-item">
          <FontAwesomeIcon className="sidebar-icons" icon={faBarsProgress} />
          <p>Event Management</p>
          <FontAwesomeIcon
            className="sidebar-icons chevron-right"
            icon={faChevronRight}
          />
        </section>
        <div className="sidebar-subitems">
          <ul>
            <Link to="/create-event">
              <li>Create Event</li>
            </Link>
            <li>Approve Event Listing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Siderbar;
