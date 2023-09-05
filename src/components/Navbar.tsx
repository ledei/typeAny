import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";

export const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <div>
      <Link to="booking"> Våra pass</Link>
      <Link to="home"> Hem</Link>
      <p>Strong n' Epic</p>
      {username !== "" && <p>inloggad som {username}</p>}
      <button onClick={handleToggle}>Logga in</button>
      {toggle && <LoginForm setUsername={setUsername} handleToggle={handleToggle} />}
    </div>
  );
};
