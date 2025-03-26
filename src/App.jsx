import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCarousel from "./components/MovieCarousel";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Movies from "./pages/Movies";
import Sports from "./pages/Sports";
 import Offers from "./pages/Offers"; // Import Offers Page
//  import HomePage from "./HomePage";
import SignIn from "./pages/signin";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/MovieCarousel" element={<MovieCarousel/>}/>
        <Route path="/signin" element={<SignIn />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </Router>
  );
};

export default App;
