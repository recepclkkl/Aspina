function Cards() {

    const data=[
        {
            img:"./pictures/blonde.jpg",
            categories: "CLOTHS",
            stock:"5"
        },
        {
            img:"./pictures/bg-1.jpg",
            categories: "CLOTHS",
            stock:"5"
        },
        {
            img:"./pictures/white.jpg",
            categories: "CLOTHS",
            stock:"5"
        },
        {
            img:"./pictures/twopinks.jpg",
            categories: "CLOTHS",
            stock:"5"
        },
        {
            img:"./pictures/purple.jpg",
            categories: "CLOTHS",
            stock:"5"
        },
    ]
  return (
    <>
        <div className="max-w-screen h-auto flex justify-center">
            <div className="w-[1050px] h-[271px] flex">
                <div className="w-full h-full flex justify-between gap-[15px]">
                    {data.map((items,index)=>(
                        <div key={index} className="w-[288px] h-[223px] relative">
                            <img className="absolute object-cover w-full h-full z-10" src={items.img} alt={items.categories} />
                            <div className="absolute inset-0 w-full h-full z-20 bg-[#21212140]"></div>
                            <p className="w-full absolute z-30 flex top-[87px] text-[#FFFFFF] font-montserrat font-[700] text-[16px] leading-[24px] tracking-[0.1px] justify-center text-center">
                                {items.categories} <br /> {items.stock} Items
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
    )
}

export default Cards;