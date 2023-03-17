import HeroSection from "./sections/HeroSection";
import Quote from "./sections/Quote";
import {GlobalStyle} from "./styles/GlobalStyle"
import PhoneModel from "./sections/PhoneModel";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Quote/>
      <PhoneModel />
      <HeroSection/>
    </>
  );
}

export default App;
