import React, { useState } from "react";

function SessionItem({ title, desc, start, end, date, spots }) {
  const [spots] = useState(spots);
  const [registerd, setRegisterd] = useState(registerd.length);

  // const handleBooking = () => {
  //   setRegisterd(...registerd[username], username);
  // };
  
  

  return (
    <div className="Container">
      <h5>{title}</h5>
      <p>{desc}</p>
      <p>Starttid: {start}</p>
      <p>Sluttid: {end}</p>
      <p>Datum: {date}</p>
      <p>Antal platser: {spots}</p>

      {registerd ==! spots ? (
        <button onClick={handleBooking}>Boka nu</button>
      ) : (
        <button>Fullbokad</button>
      )}
    </div>
  );
}
export default SessionItem;

//   {username !== "" && <p>Inloggad som {username}</p>}
