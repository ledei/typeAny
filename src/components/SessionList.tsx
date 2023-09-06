import { Session } from "../types/Session";
import SessionItem from "./SessionItem";

interface SessionListProps {
  sessions: Session[];
}

const SessionList: React.FC<SessionListProps> = ({ sessions }) => {
  return (
    <div>
      {sessions.map((session, i) => (
        <SessionItem key={i} session={session} />
      ))}
    </div>
  );
};

export default SessionList;
