// import MainPage from "./components/figma/mainpage";


import Header from "./components/figma/Header/index.js";
import CTASection from "./components/figma/Home/CTASection/index.js";
import CTASection2 from "./components/figma/Home/CTASection2/index.js";
import CTOsection from "./components/figma/Home/CTOsection/index.js";
import CodeQuality from "./components/figma/Home/CodeQuality/index.js";
import CodeQualityNext from "./components/figma/Home/CodeQualityNext/index.js";
import Expertise from "./components/figma/Home/Expertise/index.js";
import Features from "./components/figma/Home/Features/index.js";
import FrameworksArray from "./components/figma/Home/FrameworksArray/index.js";
import HeroSection from "./components/figma/Home/HeroSection/index.js";
import SmarterSection from "./components/figma/Home/SmarterSection/index.js";
import Technologies from "./components/figma/Home/Technologies/index.js";
import WhySection from "./components/figma/Home/WhySection/index.js";




function App() {
  return (
    <div className="app">

      {/* <MainPage/> */}

      <Header/>
      <HeroSection/>
      <CTOsection/>
      <Expertise/>
      <CTASection/>
      <Features/>
      <Technologies/>
      <FrameworksArray/>
      <CTASection2/>
      <CodeQuality/>
      <CodeQualityNext/>
      <WhySection/>
      <SmarterSection/>
     
      
     
    </div>
  );
}

export default App;
