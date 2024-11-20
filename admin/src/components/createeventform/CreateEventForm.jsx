import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./create-event-form.css";

function CreateEventForm() {
  const [eventDate, setEventDate] = useState(new Date());
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [ticketCategories, setTicketCategories] = useState([
    { category: "", price: "" },
  ]);

  function handleFileChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleAddCategory() {
    setTicketCategories([...ticketCategories, { category: "", price: "" }]);
  }

  function handleCategoryChange(index, field, value) {
    const updatedCategories = [...ticketCategories];
    updatedCategories[index][field] = value;
    setTicketCategories(updatedCategories);
  }

  return (
    <form className="create-event-form">
      <div className="form-section">
        <label>Upload Event Banner:</label>
        <input type="file" onChange={handleFileChange} />
        {file && <img src={file} alt="Event Banner" className="event-banner" />}
      </div>

      <div className="form-section">
        <label>Event Name:</label>
        <input type="text" placeholder="Enter event name" />
      </div>

      <div className="form-section">
        <label>Event Organiser:</label>
        <input type="text" placeholder="Organizer name" />
      </div>

      <div className="form-section">
        <label>Event Date:</label>
        <DatePicker
          selected={eventDate}
          onChange={(date) => setEventDate(date)}
        />
      </div>

      <div className="form-section time-section">
        <div>
          <label>Event Start Time:</label>
          <input type="time" />
        </div>
        <div>
          <label>Event End Time:</label>
          <input type="time" />
        </div>
      </div>

      <div className="form-section ticket-categories">
        <label>Ticket Categories:</label>
        {ticketCategories.map((ticket, index) => (
          <div key={index} className="ticket-category">
            <input
              type="text"
              placeholder="e.g VIP"
              value={ticket.category}
              onChange={(e) =>
                handleCategoryChange(index, "category", e.target.value)
              }
            />
            <input
              type="number"
              placeholder="Price (KSH)"
              value={ticket.price}
              onChange={(e) =>
                handleCategoryChange(index, "price", e.target.value)
              }
            />
          </div>
        ))}
        <button type="button" onClick={handleAddCategory} className="add-more">
          Add More
        </button>
      </div>

      <div className="form-section">
        <label>Event Location:</label>
        <div className="location-fields">
          <input type="number" placeholder="Latitude (e.g -1.908888)" />
          <input type="number" placeholder="Longitude (e.g 34.000008)" />
        </div>
      </div>

      <div className="form-section">
        <label>Event Description:</label>
        <ReactQuill
          className="react-quill"
          theme="snow"
          value={description}
          onChange={setDescription}
        />
      </div>

      <button type="submit" className="submit-btn">
        Submit Event
      </button>
    </form>
  );
}

export default CreateEventForm;
