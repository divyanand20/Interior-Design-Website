import "./write.css";
import {FaImages} from "react-icons/fa";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Write about your project..."
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup1">
        <FaImages
                size={30} 
                style={{color:"black", marginRight: "1rem"} }
                />  Photos/Videos
          <input id="fileInput" type="file"/>
          </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
