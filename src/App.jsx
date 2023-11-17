import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./features/auth/LogIn";
import SignUp from "./features/auth/SignUp";
import Landing from "./features/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={LogIn} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
