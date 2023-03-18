import HeroSection from "./sections/HeroSection";
import Quote from "./sections/Quote";
import {GlobalStyle} from "./styles/GlobalStyle"
import PhoneModel from "./sections/PhoneModel";
import DesignSection from "./sections/DesignSection";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Quote/>
      {/* <PhoneModel /> */}
      <HeroSection/>
      <DesignSection/>
    </>
  );
}

export default App;
