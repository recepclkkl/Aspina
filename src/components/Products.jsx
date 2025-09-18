import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom";
function Products({ selectedPage }) {

    const location = useLocation();
    const isShopPage = location.pathname === "/shop";
    
    const cards1 = [
        {
            img:'/pictures/product1.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {img:'/pictures/product2.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/product3.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/product4.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },

        {
            img:'/pictures/product5.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {img:'/pictures/product6.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/product7.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/product8.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/green.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/pink.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/blue.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/brown.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {img:'/pictures/product6.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/product7.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/pink.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/blue.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/product5.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {img:'/pictures/product6.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/product7.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/product8.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/green.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/product7.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/pink.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'/pictures/blue.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
    ]

    let visible = [];

    if (selectedPage === "1") {
        visible = cards1.slice(0, 8);
    } else if (selectedPage === "2") {
        visible = cards1.slice(8, 16);
    } else if (selectedPage === "3") {
        visible = cards1.slice(16, 24);
    }

    const visibleCards = isShopPage ? visible : cards1.slice(0, 8);
  return (
    <>
    <div className="max-w-screen h-auto justify-center flex mb-[30px]">      
        <div className="w-[1050px] flex justify-center">               
            <div className="w-full h-auto flex gap-[30px] justify-center flex-wrap
            max-[660px]:w-full max-[660px]:flex-row max-[660px]:flex-wrap max-[660px]:justify-center  max-[660px]:h-auto  max-[660px]:gap-[20px]">
                {visibleCards.map((item,index)=>(
                    <div key={index} className="w-[238px] h-[615px] flex flex-col 
                    max-[660px]:w-[90%] max-[660px]:h-auto max-[660px]:items-center  max-[660px]:gap-[20px] hover:border hover:border-[#BDBDBD]">
                        <div className="w-[238px] h-[427px] max-[980px]:w-full max-[980px]:h-auto">
                            
                            <Link to="/shop/product"><img className="w-full h-full object-cover" src={item.img} alt="" /></Link>
                        </div>
                        <div className="w-[239px] h-[188px] flex flex-col items-center gap-[10px] justify-around pt-[25px] max-[980px]:items-center">
                            <Link className="font-montserrat font-[700] text-[16px] text-[#252B42] leading-[24px] tracking-[0.1px] no-underline visited:text-[#252B42]" to="/shop/product">{item.name}</Link>
                            <p className="font-montserrat font-[700] text-[14px] text-[#737373] leading-[24px] tracking-[0.2px] ">{item.descript}</p>
                            <div className="flex gap-[5px]">
                                <p className="font-montserrat font-[700] text-[16px] text-[#BDBDBD] leading-[24px] tracking-[0.1px] ">{item.price}</p>
                                <p className="font-montserrat font-[700] text-[16px] text-[#23856D] leading-[24px] tracking-[0.1px] ">{item.salePrice}</p>
                            </div>
                            <div className="flex gap-[6px]">
                                <button className="w-[16px] h-[16px] border border-none rounded-full bg-[#23A6F0]"></button>
                                <button className="w-[16px] h-[16px] border border-none rounded-full bg-[#23856D]"></button>
                                <button className="w-[16px] h-[16px] border border-none rounded-full bg-[#E77C40]"></button>
                                <button className="w-[16px] h-[16px] border border-none rounded-full bg-[#252B42]"></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>        
    </>
  )
}

export default Products