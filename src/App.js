import { BrowserRouter, Routes, Route, Links } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Quote from "./pages/Quote";




function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
      </Routes>

    </BrowserRouter>




  );
}

export default App;
