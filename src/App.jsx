import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home/Home';
import Webcamera from './Pages/Webcamera/Webcamera';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cam" element={<Webcamera/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
