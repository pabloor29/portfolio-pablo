import Footer from "../../../components/Footer";
import HeroBanner from "../../../components/HeroBanner";
import CurrentPositions from "../../../components/CurrentPositions";
import IntroPerson from "../../../components/IntroPerson";
import Navbar from "../../../components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="bg-dots">
      <HeroBanner />
      <CurrentPositions />
      <IntroPerson />
    </div>
    <Footer />
    </>
  );
}
