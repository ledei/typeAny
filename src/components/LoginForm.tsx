import { Link } from "react-router-dom";
import { useState } from "react";

interface userDetails {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const [credential, setCredential] = useState<userDetails>({ username: "", password: "" });

  const handleCredential = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <div>
        <label htmlFor="">Användarnamn</label>
        <input
          type="text"
          onChange={(e) => {
            handleCredential(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Lössenord</label>
        <input
          type="password"
          onChange={(e) => {
            handleCredential(e);
          }}
        />
      </div>

      <button type="submit">Login</button>
      <button>avbryt</button>
      <p>
        Har du inget konto <Link to="signup">Klicka Här</Link>
      </p>
    </form>
  );
};
