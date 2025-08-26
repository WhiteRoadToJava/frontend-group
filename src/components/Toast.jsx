import React, { useEffect } from "react";
import Success_icon from "../icons/icons/success-icon.png";
import Error_icon from "../icons/icons/error-icon.png";
import Warning_icon from "../icons/icons/warning-icon.png";
import Info_icon from "../icons/icons/info-icon.png";
import "../styles/toast.css";

const Toast = ({ show, type, text, onHide }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);
  return (
    show && (
      <div className={`toastBox ${type}`}>
        <div className="image">
            <img
              src={
                type == "success"
                  ? Success_icon
                  : type === "error"
                  ? Error_icon
                  : type === "warning"
                  ? Warning_icon
                  : type === "info"
                  ? Info_icon
                  : ""
              }
              alt=""
            />
          </div>
        <div className="toast">
          <h2 className="toast-type">{type}</h2>
          <p className="toast-text">{text}</p>
        </div>
      </div>
    )
  );
};

export default Toast;
