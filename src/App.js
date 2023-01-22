import "./styles/main.scss";
import Homepage from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
//import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
//import Location from "./components/Location";
import Footer from "./components/Footer";
import Menubar from "./components/Navbar";

function App() {
  return (
    <>
      <Menubar />
      <Homepage />
      <div className="bg">
        <div className="container frame">
          <div className="category-container">
            {" "}
            <About />
          </div>

          <div className="category-container">
            {" "}
            <Services />
          </div>

          {/* <Testimonials /> */}
          <div className="category-container">
            {" "}
            <Contact />
          </div>

          {/* <Location /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
