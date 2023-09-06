import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Navbar } from "./components/Navbar";
import BookingPage from "./pages/BookingPage";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="booking" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
