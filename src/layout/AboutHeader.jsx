function AboutHeader() {
    
  return (
    <>
    <div className="w-screen h-auto justify-center items-center flex">

        <div className="w-[90%] max-w-[2500px] h-[800px] grid grid-cols-2 grid-rows-1 justify-center items-center gap-[40px]">
            <div className="flex justify-center">

                <div className="flex flex-col justify-between items-start gap-[35px]">
                    <p className="font-montserrat font-[700] text-[16px] leading-[24px] tracking-[0.1] text-[#252B42]">ABOUT COMPANY</p>
                    <p className="font-montserrat font-[700] text-[58px] leading-[80px] tracking-[0.2] text-[#252B42]">ABOUT US</p>
                    <p className="w-[390px] font-montserrat font-[400] text-[20px] leading-[30px] tracking-[0.2] text-[#737373]">
                    We know how large objects will act, but things on a small scale
                    </p>
                    <button className="w-[193px] h-[52px] font-montserrat font-[700] text-[14px] leading-[22px] tracking-[0.2] text-[#FFFFFF] bg-[#23A6F0] rounded-[5px] border-none">
                    Get Quote Now
                    </button>
                </div>
                
            </div>
            <div className="h-full flex ">
                <img className="w-full min-w-[690px] h-full object-cover object-[80%_90%]" src="./pictures/yellowwomen.png" alt="" />
            </div>

        </div>
        
    </div>

    <div className="w-screen h-auto flex items-center justify-center gap-[10px]">
        <div className="w-full max-w-[400px] h-[150px] flex flex-col justify-center items-start gap-[20px] ">
            <p className="font-montserrat font-[700] text-[14px] leading-[20px] tracking-[0.2] text-[#E74040]">Problems trying</p>
            <p className="font-montserrat font-[700] text-[24px] leading-[32px] tracking-[0.1] text-[#252B42]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
        </div>
        <div className="w-full max-w-[500px] h-[150px] flex flex-col justify-center items-start gap-[20px] ">
            <p className="font-montserrat font-[400] text-[14px] leading-[20px] tracking-[0.2] text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
    </div>

    <div className="w-screen h-auto flex items-center justify-center gap-[10px] mt-[100px] ">
        <div className="w-[50%] h-[150px] flex flex-row justify-center items-start gap-[30px] ">
            <div className="w-[240px]">
                <p className="font-montserrat font-[700] text-[58px] text-center leading-[80px] tracking-[0.2] text-[#252B42]">15K</p>
                <p className="font-montserrat font-[700] text-[16px] text-center leading-[24px] tracking-[0.1] text-[#737373]">Happy Customers</p>
            </div>
            <div className="w-[240px]">
                <p className="font-montserrat font-[700] text-[58px] text-center leading-[80px] tracking-[0.2] text-[#252B42]">150K</p>
                <p className="font-montserrat font-[700] text-[16px] text-center leading-[24px] tracking-[0.1] text-[#737373]">Monthly Visitors</p>
            </div>
            <div className="w-[240px]">
                <p className="font-montserrat font-[700] text-[58px] text-center leading-[80px] tracking-[0.2] text-[#252B42]">15</p>
                <p className="font-montserrat font-[700] text-[16px] text-center leading-[24px] tracking-[0.1] text-[#737373]">Countries  Worldwide</p>
            </div>
            <div className="w-[240px] flex flex-col items-center justify-center">
                <p className="font-montserrat font-[700] text-[58px] text-center leading-[80px] tracking-[0.2] text-[#252B42]">100+</p>
                <p className="font-montserrat font-[700] text-[16px] text-center leading-[24px] tracking-[0.1] text-[#737373]">Top Partners</p>
            </div>

        </div>
    </div>

    </>
    )
}

export default AboutHeader;