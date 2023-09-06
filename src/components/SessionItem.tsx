import { useState } from "react";
import { Session } from "../types/Session";
import cacheService from "../service/CacheService";
import sessionService from "../service/SessionService";

interface SessionItemProps {
  session: Session;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
}

const SessionItem: React.FC<SessionItemProps> = ({ session, setToggle, setMsg }) => {
  const [spot] = useState<number>(session.spots);
  const [registerds, setRegisterds] = useState<number>(session.registerd.length);

  const handleBooking = async () => {
    let username: string = "";
    try {
      username = await cacheService.getLocalValue("username");
    } catch (error) {
      setToggle(true);
      setMsg("Måste vara inloggad för att boka");
    }

    const title = session.title;
    const res = await sessionService.sessionRegister({ title, username });
    if (res === "added") {
      setRegisterds(session.registerd.length);
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <div className="Container">
      <h5>{session.title}</h5>
      <p>{session.desc}</p>
      <p>Starttid: {session.start}</p>
      <p>Sluttid: {session.end}</p>
      <p>Datum: {session.date}</p>
      <p>
        Antal platser:{registerds}/{session.spots}
      </p>

      {registerds !== spot ? <button onClick={handleBooking}>Boka nu</button> : <button>Fullbokad</button>}
    </div>
  );
};
export default SessionItem;
