import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Footer />
      <SignInModal />
    </div>
  );
}

export default App;
