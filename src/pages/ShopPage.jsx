

import { ChevronRight} from 'lucide-react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Cards from '../components/Cards';
import Filter from '../components/Filter';
import Products from '../components/Products';
import Page from '../components/Page';

import { useState } from "react";
import Brands from '../components/Brands';


function ShopPage() {
    const [selectedPage, setSelectedPage] = useState("1");
  return (
    <>
        <div className="max-w-screen h-auto flex justify-center">
            <div className="w-[95%] h-[92px] flex justify-between items-center max-[980px]:flex-col max-[980px]:h-[150px] max-[980px]:gap-[30px] max-[980px]:justify-center">
                <hr className='hidden text-[#737373] w-[90%] max-[980px]:flex'/>
                <p className='font-montserrat font-[700] text-[24px] text-[#252B42] leading-[32px] tracking-[0.1px] text-center'>Shop</p>
                <div className="flex items-center pr-[10px] ">
                    <Link className="no-underline font-montserrat font-[700] text-[14px] text-[#252B42] leading-[24px] tracking-[0.2px] text-center" to="/">Home</Link>
                    <ChevronRight />
                    <Link className="no-underline font-montserrat font-[bold] text-[14px]  text-[#BDBDBD] leading-[24px] tracking-[0.2px] text-center" to="/shop">Shop</Link>
                </div>
            </div>
        </div>
        <Cards/>
        <Filter/>
        <Products selectedPage={selectedPage} />
        <Page selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Brands/>
    </>
    )
}

export default ShopPage;