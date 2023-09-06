import SessionList from "../components/SessionList";
import useFetchSession from "../hooks/useFetchSessions";
interface BookingPageProps {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
}

const BookingPage: React.FC<BookingPageProps> = ({ setToggle, setMsg }) => {
  const { isLoading, error, data } = useFetchSession();

  return (
    <div>
      <div>
        {(error && <p>404 could not found</p>) || (isLoading && <p>loading...</p>) || <SessionList sessions={data} setToggle={setToggle} setMsg={setMsg} />}
      </div>
    </div>
  );
};

export default BookingPage;
