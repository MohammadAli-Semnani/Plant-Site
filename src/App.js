import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Logo from "./Components/Logo";
import styles from "./styles/App.module.css";
import {Route, Routes} from "react-router-dom";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <Logo/>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Plants" element={<Cards />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
