import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div>
      <Link to="booking"> Våra pass</Link>
      <Link to="home"> Hem</Link>
      <p>Strong n' Epic</p>
      <button>Logga in</button>
    </div>
  );
};
