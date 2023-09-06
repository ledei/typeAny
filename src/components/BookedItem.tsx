import { Session } from "../types/Session";

interface SessionItemProps {
    session: Session;
  }
  
  const BookedItem: React.FC<SessionItemProps> = ({ session }) => {
  
    return (
      <div className="Container">
        <h5>{session.title}</h5>
        <p>Starttid: {session.start}</p>
        <p>Datum: {session.date}</p>
  
        {<button>Avboka</button>}
      </div>
    );
  };



export default BookedItem;
