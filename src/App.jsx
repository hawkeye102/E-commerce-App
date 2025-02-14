import Header from "./components/Header";
import Slider from "./components/SwiperSlider";
import Homecatslider from "./components/HomeCatSlider";
import FreeShip from "./components/freeShipping";
import Banner from "./components/Banner";
export default function App() {
  return (
    <div>
      <Header />
      <Slider/>
      <FreeShip/>
      <Banner/>

      <main className="p-6">
       
      </main>
    </div>
  );
}
