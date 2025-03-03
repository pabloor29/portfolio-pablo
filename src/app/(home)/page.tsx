import Footer from "../../../components/Footer";
import HeroBanner from "../../../components/HeroBanner";
import IntroPerson from "../../../components/IntroPerson";
import Navbar from "../../../components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="bg-dots">
      <HeroBanner />
      <IntroPerson />
    </div>
    <Footer />
    </>
  );
}
