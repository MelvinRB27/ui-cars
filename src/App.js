import './App.css';
import { Routes, Route} from "react-router-dom";

//routes
import Home from "./pages/ListCars"
import AddCar from "./pages/AddCar"

import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-cars:id" element={<AddCar/>} />
      </Routes>
  
    </div>
  );
}

export default App;
