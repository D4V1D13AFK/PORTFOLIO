// App.js
import React from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
  <body>  
    <div className="App">
        <header className="App-header">
        <Navbar />
        </header>
        <Home />
        <Footer />
    </div>
  </body>  
  );
}

export default App;
