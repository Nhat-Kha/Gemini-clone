import { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "@/assets/assets";
import { Context } from "@/context/Context";
import {
  faBars,
  faCircleQuestion,
  faClockRotateLeft,
  faGear,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          style={{ width: "20px", height: "20px", textAlign: "right" }}
        />
        <div onClick={() => newChat()} className="new-chat">
          <FontAwesomeIcon icon={faPlus} style={{ with: "20px" }} />
          {extended ? <p>New Chat</p> : null}
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          {extended
            ? prevPrompts.map((item, index) => {
                return (
                  <div onClick={() => {}} className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0, 18)}...</p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            style={{ with: "20px", height: "20px", color: "white" }}
          />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            style={{ with: "20px", height: "20px", color: "white" }}
          />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <FontAwesomeIcon
            icon={faGear}
            style={{ with: "20px", height: "20px", color: "white" }}
          />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}
