
import ProductScreen from "./containers/product/productScreen"
import CartScreen from "./containers/cart/CartScreen"
//import NavBar from './containers/navbar/NavBar'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route exact path="/" element={<ProductScreen />} />  
      <Route exact path="/containers/cart/CartScreen" element={<CartScreen />} />  
        


          </Routes>    
    
    </div>
    </Router>
  );
}

export default App