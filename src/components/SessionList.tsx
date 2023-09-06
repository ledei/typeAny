import { Session } from "../types/Session";
import SessionItem from "./SessionItem";

interface SessionListProps {
  sessions: Session[] | undefined;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
}

const SessionList: React.FC<SessionListProps> = ({ sessions, setToggle, setMsg }) => {
  return (
    <div>
      {sessions?.map((session, i) => (
        <SessionItem key={i} session={session} setToggle={setToggle} setMsg={setMsg} />
      ))}
    </div>
  );
};

export default SessionList;
