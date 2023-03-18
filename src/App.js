import HeroSection from "./sections/HeroSection";
import Quote from "./sections/Quote";
import {GlobalStyle} from "./styles/GlobalStyle"
import PhoneModel from "./sections/PhoneModel";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import ProcessorSection from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Quote/>
      {/* <PhoneModel /> */}
      <HeroSection/>
      <DesignSection/>
      <DisplaySection/>
      <ProcessorSection/>
      <BatterySection/>  
    </>
  );
}

export default App;
