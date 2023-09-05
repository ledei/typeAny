import { Link } from "react-router-dom";
import { useState } from "react";
import requestService from "../service/RequestService";

interface userDetails {
  username: string;
  password: string;
}

type LoginformProps = {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  handleToggle: () => void;
};

export const LoginForm: React.FC<LoginformProps> = ({ setUsername, handleToggle }) => {
  const [credential, setCredential] = useState<userDetails>({ username: "", password: "" });
  const [msg, setMsg] = useState<string>("");

  const handleCredential = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await requestService.authUser(credential);
    if (res) {
      setUsername(credential.username);
      handleToggle();
      setMsg("");
    } else {
      setMsg("Wrong credentials");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Användarnamn</label>
        <input
          name="username"
          type="text"
          onChange={(e) => {
            handleCredential(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Lössenord</label>
        <input
          name="password"
          type="password"
          onChange={(e) => {
            handleCredential(e);
          }}
        />
      </div>
      {msg !== "" && <p>{msg}</p>}

      <button type="submit">Login</button>
      <button>avbryt</button>
      <p>
        Har du inget konto <Link to="signup">Klicka Här</Link>
      </p>
    </form>
  );
};
