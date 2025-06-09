import Carousel1 from "../layout/carousel1"
import Carousel2 from "../layout/Carousel2"
import Navbar from "../layout/Navbar"
import ProductCards from "../layout/ProductCards"
import ShopCards from "../layout/ShopCards"
import ContainerFluid from "../layout/ContainerFluid"
import DesktopBlog from "../layout/DesktopBlog"

function HomePage() {

  return (
    <>
    <div className="absolute w-full min-h-screen flex justify-center bg-[#FFFFFF] left-[0] top-[0]">
      <div className="w-full max-w-[1440px]">
        <Navbar />
        <Carousel1/>
        <ShopCards/>
        <ProductCards/>
        <Carousel2/>
        <ContainerFluid/>
        <DesktopBlog/>
      </div>
    </div>
      
    </>
  )
}

export default HomePage
