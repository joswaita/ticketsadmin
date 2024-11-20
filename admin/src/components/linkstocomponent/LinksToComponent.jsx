import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./links-to-component.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function LinksToComponent() {
  return (
    <div className="links-to-component">
      <ul className="links">
        <li>
          User Management <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li>Create event</li>
      </ul>
    </div>
  );
}

export default LinksToComponent;
