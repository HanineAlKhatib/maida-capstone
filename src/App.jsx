import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./features/auth/LogIn";
import SignUp from "./features/auth/SignUp";
import Landing from "./features/Landing/Landing";
import Test from "./components/auth/test";
import ProfilePage from "./features/User/ProfilePage";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={LogIn} />
        <Route path="/test" Component={Test} />
        <Route path="/profile" Component={ProfilePage} />
        <Route path="/checkout" Component={Checkout} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
