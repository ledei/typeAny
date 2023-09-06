import { Link } from "react-router-dom";
import { useState } from "react";
import requestService from "../service/RequestService";
import cacheService from "../service/CacheService";

interface userDetails {
  username: string;
  password: string;
}

type LoginformProps = {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  handleToggle: () => void;
  message: string;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
};

export const LoginForm: React.FC<LoginformProps> = ({ setUsername, handleToggle, message, setMsg }) => {
  const [credential, setCredential] = useState<userDetails>({ username: "", password: "" });

  const handleCredential = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleCancelBtn = () => {
    setMsg("");
    handleToggle();
    setCredential({ username: "", password: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await requestService.authUser(credential);
    if (res) {
      setUsername(credential.username);
      handleToggle();
      setMsg("");
      cacheService.saveLocalValue("username", credential.username);
    } else {
      setMsg("Wrong credentials");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Användarnamn</label>
        <input
          name="username"
          type="text"
          onChange={(e) => {
            handleCredential(e);
          }}
        />
      </div>
      <div>
        <label>Lössenord</label>
        <input
          name="password"
          type="password"
          onChange={(e) => {
            handleCredential(e);
          }}
        />
      </div>
      {message !== "" && <p>{message}</p>}

      <button type="submit">Login</button>
      <button type="reset" onClick={handleCancelBtn}>
        avbryt
      </button>
      <p>
        Har du inget konto <Link to="signup">Klicka Här</Link>
      </p>
    </form>
  );
};
