import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import  { ReservationForm } from "./Components/reservation";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <a href="/reservation">
        <button className="primary-button">Reserve Now</button>
      </a>      
      <Work />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;


