import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MotivationalBanner from "./Components/FirstPage";
import MobileComponent from "./Components/SolicitaOfertaMobile";
import MobileCards from "./Components/Mobile_Cards";
import DespreNoi from "./Components/DespreNoi";
import WhyUs from "./Components/WhyUs";
import ConsultatieGratuita from "./Components/ConsultatieGratuite";
import CumLucram from "./Components/CumLucram";
import GrowYourBusiness from "./Components/GrowYourBusiness";
import Formular from "./Components/Formular";
import EyesOnUs from "./Components/EyesOnUs";
import Footer from "./Components/Footer";
import LogoAnimation from "./Components/LogoAnimation";

function App() {
  const [logoAnimationFinished, setLogoAnimationFinished] =
    React.useState(false);

  return (
    <div className="App">
      {!logoAnimationFinished && (
        <LogoAnimation onFinish={() => setLogoAnimationFinished(true)} />
      )}
      {logoAnimationFinished && (
        <>
          <Navbar />
          <MotivationalBanner />
          <MobileComponent />
          <MobileCards />
          <DespreNoi />
          <WhyUs />
          <ConsultatieGratuita />
          <CumLucram />
          <GrowYourBusiness />
          <Formular />
          <EyesOnUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
