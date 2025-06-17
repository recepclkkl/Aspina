function ProductCards() {

    const cards1 = [
        {
            img:'./pictures/product1.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {img:'./pictures/product2.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'./pictures/product3.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'./pictures/product4.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
    ]

    const cards2 = [
        {
            img:'./pictures/product5.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {img:'./pictures/product6.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'./pictures/product7.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
        {
            img:'./pictures/product8.jpg',
            name:'Graphic Design',
            descript:'English Department',
            price:'$16.48',
            salePrice:'$6.48'
        },
    ]

  return (
    <>
    <div className="w-full h-[1625px] bg-[#FFFFFF] flex flex-col items-center mt-[50px]
    max-[980px]:max-w-screen  max-[980px]:h-auto">
        <div className="w-[1124px] h-[1625px] flex flex-col items-center justify-around
        max-[980px]:w-full max-[980px]:h-full gap-[10px]">
            <div className="w-[692px] h-[102px] flex flex-col justify-center items-center gap-[10px] max-[980px]:w-[70%] max-[980px]:h-[200px] max-[980px]:justif">
                <p className="font-montserrat font-[400] text-[20px] text-[#737373] leading-[30px] tracking-[0.2px] max-[980px]:w-full max-[980px]:text-center">Featured Products</p>
                <p className="font-montserrat font-[700] text-[24px] leading-[32px] tracking-[0.1px] max-[980px]:w-full max-[980px]:text-center">BESTSELLER PRODUCTS</p>
                <p className="font-montserrat font-[400] text-[14px] text-[#737373] leading-[20px] tracking-[0.2px] max-[980px]:w-full max-[980px]:text-center">Problems trying to resolve the conflict between </p>
            </div>
            
            <div className="w-[1049px] h-[615px] flex gap-[30px] 
            max-[980px]:w-full max-[980px]:h-auto max-[980px]:flex-row max-[980px]:flex-wrap max-[980px]:justify-center  max-[980px]:min-h-[2650px]  max-[980px]:gap-[20px]">
                {cards1.map((item,index)=>(
                    <div key={index} className="w-[238px] h-[615px] flex flex-col 
                    max-[980px]:w-[90%] max-[980px]:h-[90%] max-[980px]:items-center  max-[980px]:gap-[20px]">
                        <div className="w-[238px] h-[427px] max-[980px]:w-full max-[980px]:h-auto">
                            <img className="w-full h-full object-cover" src={item.img} alt="" />
                        </div>
                        <div className="w-[239px] h-[188px] flex flex-col items-center gap-[10px] justify-around pt-[25px] max-[980px]:items-center">
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

            <div className="w-[1049px] h-[615px] flex gap-[30px] 
            max-[980px]:w-full max-[980px]:h-auto max-[980px]:flex-row max-[980px]:flex-wrap max-[980px]:justify-center  max-[980px]:min-h-[2650px]  max-[980px]:gap-[20px]">
                {cards2.map((item,index)=>(
                    <div key={index} className="w-[238px] h-[615px] flex flex-col 
                    max-[980px]:w-[90%] max-[980px]:h-[90%] max-[980px]:items-center  max-[980px]:gap-[20px]">
                        <div className="w-[239px] h-[427px] max-[980px]:w-full max-[980px]:h-auto">
                            <img className="w-full h-full object-cover" src={item.img} alt="" />
                        </div>
                        <div className="w-[239px] h-[188px] flex flex-col items-center gap-[10px] justify-around pt-[25px] 
                        max-[980px]:items-center  max-[980px]:w-full">
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