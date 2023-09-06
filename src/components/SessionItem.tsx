import { useState } from "react";
import { Session } from "../types/Session";
import cacheService from "../service/CacheService";
import sessionService from "../service/SessionService";

const SessionItem: React.FC<Session> = ({ title, desc, start, end, date, spots, registerd }) => {
  const [spot] = useState<number>(spots);
  const [registerds] = useState<number>(registerd.length);

  const handleBooking = async () => {
    const username = await cacheService.getLocalValue("username");
    if (username === null) return false;
    const res = await sessionService.sessionRegister({ title, username });
    if (res === "added") {
      console.log("yaay");
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <div className="Container">
      <h5>{title}</h5>
      <p>{desc}</p>
      <p>Starttid: {start}</p>
      <p>Sluttid: {end}</p>
      <p>Datum: {date}</p>
      <p>
        Antal platser:{registerds}/{spots}
      </p>

      {registerds !== spot ? <button onClick={handleBooking}>Boka nu</button> : <button>Fullbokad</button>}
    </div>
  );
};
export default SessionItem;
