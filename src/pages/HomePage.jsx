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
    <div className="absolute max-w-screen w-full min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] left-[0] top-[0] 
    max-[980px]:w-full">
      <div className="w-screen  max-[980px]:w-full">
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
