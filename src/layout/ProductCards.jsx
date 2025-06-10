function ProductCards() {

    const cards1 = [
        {
            img:'./public/pictures/product1.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {img:'./public/pictures/product2.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'./public/pictures/product3.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'./public/pictures/product4.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
    ]

    const cards2 = [
        {
            img:'./public/pictures/product5.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {img:'./public/pictures/product6.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'./public/pictures/product7.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'./public/pictures/product8.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
    ]

  return (
    <>
    <div className="w-[1440px] h-[1625px] bg-[#FFFFFF] flex flex-col items-center">
        <div className="w-[1124px] h-[1625px] flex flex-col items-center justify-around">
            <div className="w-[692px] h-[102px] flex flex-col justify-center items-center gap-[10px]">
                <p className="font-montserrat font-[400] text-[20px] text-[#737373] leading-[30px] tracking-[0.2px]">Featured Products</p>
                <p className="font-montserrat font-[700] text-[24px] leading-[32px] tracking-[0.1px]">BESTSELLER PRODUCTS</p>
                <p className="font-montserrat font-[400] text-[14px] text-[#737373] leading-[20px] tracking-[0.2px]">Problems trying to resolve the conflict between </p>
            </div>
            
            <div className="w-[1049px] h-[615px] flex gap-[30px]">
                {cards1.map((item,index)=>(
                    <div key={index} className="w-[238px] h-[615px] flex flex-col">
                        <div className="w-[239px] h-[427px]">
                            <img className="w-full h-full object-cover" src={item.img} alt="" />
                        </div>
                        <div className="w-[239px] h-[188px] flex flex-col items-center gap-[10px] justify-around pt-[25px]">
                            <p className="font-montserrat font-[700] text-[16px] text-[#252B42] leading-[24px] tracking-[0.1px] ">{item.name}</p>
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

            <div className="w-[1049px] h-[615px] flex gap-[30px]">
                {cards2.map((item,index)=>(
                    <div key={index} className="w-[238px] h-[615px] flex flex-col">
                        <div className="w-[239px] h-[427px]">
                            <img className="w-full h-full object-cover" src={item.img} alt="" />
                        </div>
                        <div className="w-[239px] h-[188px] flex flex-col items-center gap-[10px] justify-around pt-[25px]">
                            <p className="font-montserrat font-[700] text-[16px] text-[#252B42] leading-[24px] tracking-[0.1px] ">{item.name}</p>
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

export default ProductCards