import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";

export const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  const handleLogout = () => {
    setToggle(false);
    setUsername("");
  };
  return (
    <div>
      <Link to="booking"> Våra pass</Link>
      <Link to="/"> Hem</Link>
      <p>Strong n' Epic</p>
      {username !== "" && <p>inloggad som {username}</p>}
      {username === "" ? <button onClick={handleToggle}>Logga in</button> : <button onClick={handleLogout}>Logga ut</button>}

      {toggle && <LoginForm setUsername={setUsername} handleToggle={handleToggle} />}
    </div>
  );
};
