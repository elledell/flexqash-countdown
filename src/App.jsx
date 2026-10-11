import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WaysToEarn from "./components/WaysToEarn";
import HowItWorks from "./components/HowItWorks";
import Countries from "./components/Countries";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] font-sans">
      <TopBar />
      <Navbar />
      <Hero />
      <WaysToEarn />
      <HowItWorks />
      <Countries />
      <Faq />
      <Footer />
    </div>
  );
}