import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Navbar } from "./components/Navbar";
import BookingPage from "./pages/BookingPage";
import { useState, useEffect } from "react";
import cacheService from "./service/CacheService";

function App(): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    try {
      setUsername(cacheService.getLocalValue("username"));
    } catch (error) {
      setUsername("");
    }
  }, []);

  return (
    <>
      <Navbar setToggle={setToggle} toggle={toggle} message={msg} setMsg={setMsg} setUsername={setUsername} username={username} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="booking" element={<BookingPage setToggle={setToggle} setMsg={setMsg} />} />
      </Routes>
    </>
  );
}

export default App;
