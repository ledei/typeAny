import { Link } from "react-router-dom";
import React from "react";

export const LoginForm: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="">Användarnamn</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Lössenord</label>
        <input type="password" />
      </div>

      <button type="submit">Login</button>
      <button>avbryt</button>
      <p>
        Har du inget konto <Link to="signup">Klicka Här</Link>
      </p>
    </form>
  );
};
