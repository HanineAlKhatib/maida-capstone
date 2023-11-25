import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./features/auth/LogIn";
import SignUp from "./features/auth/SignUp";
import Landing from "./features/Landing/Landing";
import Main from "./features/adminChef/Main";
import RestaurantDetail from "./components/auth/RestaurantDetail";
import EditRestaurant from "./components/auth/EditRestaurant";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={LogIn} />
        <Route path="/main" Component={Main} />
        <Route path="/edit-restaurant/:id" element={<EditRestaurant />} />
        <Route path="/restaurant-details/:id" element={<RestaurantDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
