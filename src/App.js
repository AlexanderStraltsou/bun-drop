import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import OrderPage from "./components/OrderPage";
import Payment from "./components/Payment";
import Confirmation from "./components/Confirmation";


function App() {
  
  return (
    
      <Router>
        
<Navbar/>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/Menu"
          element={<Menu />}
        />

        <Route
          path="/OrderPage/"
          element={<OrderPage />}
        />


        <Route
          path="/Payment"
          element={<Payment />}
        /> 
        <Route
          path="/Confirmation"
          element={<Confirmation />}
        />
    

      </Routes>
      

      </Router>
    
  );
}

export default App;
