import { useState, useEffect } from "react";
import { User } from "../types/User";
import requestService from "../service/RequestService";

interface quaryProps {
  username: string;
}

const userDefult: User = {
  username: "",
  password: "",
  role: "USER",
  booked: [],
};

const useFetchUser = (quary: quaryProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<User>(userDefult);
  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const id = setTimeout(async () => {
      const user = await requestService.fetchUser(quary);

      if (user !== undefined) {
        setData(user);
      } else {
        setError(true);
      }
      setIsLoading(false);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [quary]);
  return { isLoading, error, data };
};

export default useFetchUser;
