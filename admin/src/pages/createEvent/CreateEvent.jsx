import CreateEventForm from "../../components/createeventform/CreateEventForm";
import LinksToComponent from "../../components/linkstocomponent/LinksToComponent";
import Navbar from "../../components/navbar/Navbar";
import Siderbar from "../../components/sidebar/Siderbar";
import "./create-event.css";

function CreateEvent() {
  return (
    <div className="create-event-style">
      <Navbar />
      <div className="create-event">
        <div>
          <Siderbar />
        </div>
        <div className="create-event-details">
          <LinksToComponent />
          <CreateEventForm />
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
