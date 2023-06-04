import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { SelectedItemsProvider } from "./SelectedItemsContext";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./components/Home";
// import Login from "./components/Login";
import Menu from "./components/Menu";

import OrderPage from "./components/OrderPage";
import Payment from "./components/Payment";
import Confirmation from "./components/Confirmation";
// import NotFound from "./components/NotFound";

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
        
        
        
        */

        {/* <Route
          path="/Login"
          element={<Login />}
        />


       
        
        
        
        }



        
{/*         
        <Route
          path="*"
          element={<NotFound />}
        /> */}


      </Routes>
      

      </Router>
    
  );
}

export default App;
