import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { useEffect, useState } from "react";
import { CardCarrousel } from "../../components/cards/CardCarrousel";
import pdt1 from '../../assets/products/product-2.png'
import pdt2 from '../../assets/products/product-7.png'
import pdt3 from '../../assets/products/product-8.png'
import pdt4 from '../../assets/products/product-10.png'
import pdt5 from '../../assets/products/product-9.png'
import pdt6 from '../../assets/products/product-5.png'
import pdt7 from '../../assets/products/product-1.png'

function Shop() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen)
  }

  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} />
      <div className="flex justify-center">
      <div className="grid grid-cols-1  md:grid-cols-4 gap-[30px] py-[50px]">
        <CardCarrousel img={pdt1} tag='loveseat sofa' price='199.00' country="Tanzania" slashP={400.00} newItem={true}/>
        <CardCarrousel img={pdt2} tag='table lamp' price='24.99' country="Japan" slashP={0} newItem={true}/>
        <CardCarrousel img={pdt3} tag='beige table lamp' price='25.00' country="Mexico" slashP={0} newItem={true}/>
        <CardCarrousel img={pdt4} tag='Side Table' price='195.00' country="Korea" slashP={0} newItem={true}/>
        <CardCarrousel img={pdt5} tag='bamboo basket' price='30.00' country="France" slashP={0} />
        <CardCarrousel img={pdt6} tag='Toaster' price='90.00' country="France" slashP={0} />
        <CardCarrousel img={pdt7} tag='Sofa' price='120.00' country="France" slashP={0} />
      </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Shop;
