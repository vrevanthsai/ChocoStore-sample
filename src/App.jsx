import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreFront from "./Admin/StoreFront.jsx";
import About from "./components/About.jsx"
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Cart from './components/Cart.jsx';
import Chocolate from "./components/chocolate.jsx";
import ChocoDetails from './components/ChocoDetails.jsx';
import ChocoDetailsInfo from './components/ChocoDetailsInfo.jsx';
import ChocoDetailsStorage from './components/ChocoDetailsStorage.jsx';
import {AppProvider} from "./components/AppContext.jsx"

function App() {
  return (
    <BrowserRouter>
    <AppProvider>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/chocolates" element={<Chocolate />}></Route>
          <Route path="/chocolates/:id/" element={<ChocoDetails />}>
            <Route path="" element={<ChocoDetailsInfo />}></Route>
            <Route path="storage" element={<ChocoDetailsStorage />}></Route>
          </Route>
          <Route path="/desserts" element={<About />}></Route>
          <Route path="/user" element={<About />}></Route>
          <Route path="/admin" element={<StoreFront />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>
  )

}

export default App
