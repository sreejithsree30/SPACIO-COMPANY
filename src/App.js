
import Home from "./Components/Home"
import About from "./Components/About";
import Details from "./Components/Details";
import Work from "./Components/Work";

import Main from "./Components/Main";
import Image from "./Components/Image";

import './App.css';
import Footer from "./Components/Footer";
import LatestWork from "./Components/LatestWork";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Image />
      <Details />
      <LatestWork />
      <Work />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
