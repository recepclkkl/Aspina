import Carousel1 from "../layout/Carousel1"
import Carousel2 from "../layout/Carousel2"
import ProductCards from "../layout/ProductCards"
import ShopCards from "../layout/ShopCards"
import ContainerFluid from "../layout/ContainerFluid"
import DesktopBlog from "../layout/DesktopBlog"

function HomePage() {

  return (
    <>
      <div className="w-screen  max-[980px]:w-full">
        <Carousel1/>
        <ShopCards/>
        <ProductCards/>
        <Carousel2/>
        <ContainerFluid/>
        <DesktopBlog/>
      </div>
      
    </>
  )
}

export default HomePage
