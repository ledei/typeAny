import SessionList from "../components/SessionList";
import useFetchSession from "../hooks/useFetchSessions";

const BookingPage = (): JSX.Element => {
  const { isLoading, error, data } = useFetchSession();

  return (
    <div>
      <div>{(error && <p>404 could not found</p>) || (isLoading && <p>loading...</p>) || <SessionList sessions={data} />}</div>
    </div>
  );
};

export default BookingPage;
