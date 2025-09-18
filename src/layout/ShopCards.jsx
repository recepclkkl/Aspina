
function ShopCards() {

  return (
    <>
    <div className="w-screen h-[770px] flex justify-center bg-[#FAFAFA] 
    max-[980px]:max-w-screen max-[980px]:h-[1700px] mt-[10px]">
        <div className="w-[1124px] h-full flex justify-center 
        max-[980px]:w-full max-[980px]:h-full max-[980px]:items-start">
            <div className="w-[1050px] h-[610px] flex flex-col justify-between items-center
            max-[980px]:w-full max-[980px]:h-full max-[980px]:gap-[48px]">
                <div className="w-[607px] h-[62px] flex flex-col justify-between items-center 
                max-[980px]:w-full max-[980px]:items-center max-[980px]:gap-[10px]">
                    <p className="font-montserrat font-[700] text-[24px] text-black leading-[32px] tracking-[0.1px]">EDITOR’S PICK</p>
                    <p className="font-montserrat font-[400] text-[14px] text-[#737373] leading-[20px] tracking-[0.2px]
                    max-[980px]:w-[50%] max-[980px]:h-[40px] max-[980px]:text-center">Problems trying to resolve the conflict between </p>
                </div>

                <div className="w-[1050px] h-[500px] flex gap-[30px]
                max-[980px]:w-full max-[980px]:h-auto max-[980px]:flex-col max-[980px]:items-center">
                    <div className="w-[510px] h-[500px] relative max-[980px]:w-[90%] ">
                        <img className="absolute w-full h-full object-cover" src="./pictures/man.jpg" alt="" />
                        <a href="#" className="absolute left-[31px] top-[426px] w-[170px] h-[48px] flex 
                            items-center justify-center no-underline font-montserrat font-[700] text-[16px] 
                            text-[#252B42] leading-[24px] tracking-[0.1px] visited:text-[#252B42] bg-[#FFFFFF] border-none cursor-pointer"
                            >
                            MEN
                        </a>
                    </div>
                    <div className="w-[240px] h-[500px] relative max-[980px]:w-[90%] ">
                        <img className="absolute w-full h-full object-cover" src="./pictures/women.jpg" alt="" />
                        <a href="#" className="absolute left-[21px] top-[426px] w-[136px] h-[48px] flex 
                            items-center justify-center no-underline font-montserrat font-[700] text-[16px] 
                            text-[#252B42] leading-[24px] tracking-[0.1px] visited:text-[#252B42] bg-[#FFFFFF] border-none cursor-pointer"
                            >
                            WOMEN
                        </a>
                    </div>

                    <div className="w-[240px] h-[500px] flex flex-col gap-[16px] max-[980px]:w-full max-[980px]:items-center">
                        <div className="w-[240px] h-[242px] relative max-[980px]:w-[90%] max-[980px]:h-[100%]">
                            <img className="absolute w-full h-full object-cover" src="./pictures/accessories.jpg" alt="" />
                            <a href="#" className="absolute left-[21px] top-[171px] w-[170px] h-[48px] flex 
                                items-center justify-center no-underline font-montserrat font-[700] text-[16px] 
                                text-[#252B42] leading-[24px] tracking-[0.1px] visited:text-[#252B42] bg-[#FFFFFF] border-none cursor-pointer"
                                >
                                ACCESSORIES
                            </a>
                        </div>

                        <div className="w-[240px] h-[242px] relative max-[980px]:w-[90%] max-[980px]:h-[100%]">
                            <img className="absolute w-full h-full object-cover" src="./pictures/kids.jpg" alt="" />
                            <a href="#" className="absolute left-[21px] top-[171px] w-[120px] h-[48px] flex 
                                items-center justify-center no-underline font-montserrat font-[700] text-[16px] 
                                text-[#252B42] leading-[24px] tracking-[0.1px] visited:text-[#252B42] bg-[#FFFFFF] border-none cursor-pointer"
                                >
                                KIDS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ShopCards
