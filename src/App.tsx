import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Navbar } from "./components/Navbar";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
