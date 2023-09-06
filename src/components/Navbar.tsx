import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import cacheService from "../service/CacheService";

interface NavbarProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMsg: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  username: string;
}

export const Navbar: React.FC<NavbarProps> = ({ setToggle, toggle, message, setMsg, setUsername, username }) => {
  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  const handleLogout = () => {
    setToggle(false);
    setUsername("");
    cacheService.removeLocalValue("username");
  };
  return (
    <div>
      <Link to="booking"> Våra pass</Link>
      <Link to="/"> Hem</Link>
      <p>Strong n' Epic</p>
      {username !== "" && <p>inloggad som {username}</p>}
      {username === "" ? <button onClick={handleToggle}>Logga in</button> : <button onClick={handleLogout}>Logga ut</button>}

      {toggle && <LoginForm setUsername={setUsername} handleToggle={handleToggle} message={message} setMsg={setMsg} />}
    </div>
  );
};
