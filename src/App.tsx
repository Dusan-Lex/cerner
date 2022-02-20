import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Header from "./components/Header/Header";
import HeroSlider from "./components/HeroSlider";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <AboutUs />
      <Services />
      <OurTeam />
      <Blog />
      <WhyUs />
    </div>
  );
}

export default App;
