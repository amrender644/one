import logo from './logo.svg';
import './App.css';
import MainNavBar from './Components/MainNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home.js';
import LetsBuild from './Components/LetsBuild.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>      
      <MainNavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/build" element={<LetsBuild />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
