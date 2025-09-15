import { ChevronRight} from "lucide-react";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import ProductDetail from "../components/ProductDetail";
import Brands from '../components/Brands';
import Products from "../components/Products";

function ProductPage() {

    return (
    <>
    <div className="max-w-screen flex flex-col items-center gap-[20px] ">
        <div className="w-[95%] flex items-center pr-[10px] pt-[20px]">
                    <Link className="no-underline font-montserrat font-[700] text-[14px] text-[#252B42] leading-[24px] tracking-[0.2px] text-center" to="/">Home</Link>
                    <ChevronRight />
                    <Link className="no-underline font-montserrat font-[700] text-[14px]  text-[#252B42] leading-[24px] tracking-[0.2px] text-center" to="/shop">Shop</Link>
                    <ChevronRight />
                    <Link className="no-underline font-montserrat font-[700] text-[14px]  text-[#BDBDBD] leading-[24px] tracking-[0.2px] text-center" to="/shop/product">Graphic Design</Link>
        </div>

    </div>
    <ProductDetail/>
    <div className="w-full flex flex-col items-center 
    max-[660px]:w-screen max-[660px]:pt-[50px]">
        <div className="w-screen flex flex-col gap-[30px] max-[660px]:w-full justify-center items-center">
            <p className="w-[1050px] flex justify-start font-montserrat font-[700] text-[24px] text-[#252B42] leading-[32px] tracking-[0.2px] pt-[20px]
            max-[980px]:text-center  max-[1055px]:w-screen  max-[1055px]:justify-center">BESTSELLER PRODUCTS</p>
            <Products/>        
        </div>
        
    </div>
    
    <Brands/>
    </>
    )
}

export default ProductPage;