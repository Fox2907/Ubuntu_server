import React from "react";
import './DataContact.css'
const DataContact = ({iconContact, infoContact}) => {
  return (
    <div className="data-container">
      <img src={iconContact} alt="" className="icon-contact" />
      <div className="information-contact">
        {infoContact}
      </div>
    </div>
  );
};

export default DataContact;
