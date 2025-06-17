import Carousel1 from "../layout/Carousel1"
import Carousel2 from "../layout/Carousel2"
import Navbar from "../layout/Navbar"
import ProductCards from "../layout/ProductCards"
import ShopCards from "../layout/ShopCards"
import ContainerFluid from "../layout/ContainerFluid"
import DesktopBlog from "../layout/DesktopBlog"
import Footer from "../layout/footer"

function HomePage() {

  return (
    <>
    <div className="absolute w-full min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] left-[0] top-[0] max-[980px]:w-[100vw] max-[980px]:max-w-screen">
      <div className="w-[100vw]  max-[980px]:w-[100vw]">
        <Navbar />
        <Carousel1/>
        <ShopCards/>
        <ProductCards/>
        <Carousel2/>
        <ContainerFluid/>
        <DesktopBlog/>
        <Footer/>
      </div>
    </div>
      
    </>
  )
}

export default HomePage
