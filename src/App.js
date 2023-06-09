import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Logo from "./Components/Logo";
import styles from "./styles/App.module.css";
import {Route, Routes} from "react-router-dom";
import SignUp from "./Components/SignUp";
import SingIn from "./Components/SingIn";
import { ProductsApi } from "./Components/ProductsApi";
function App() {
  return (
    <>
      <ProductsApi>
        <Logo />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Plants" element={<Cards />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/singin" element={<SingIn />} /> 
        </Routes>
     </ProductsApi>
    </>
  );
}

export default App;