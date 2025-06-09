


function containerFluid() {

  return (
    <>
    <div className="w-[1440px] h-[682px]">
        <div className="w-[1440px] h-[682px] flex gap-[30px] justify-end">

            <div className="w-[704px] h-[682px] relative overflow-hidden">
                <img className=" relative object-cover top-[-90px] left-[-137px] w-[725px] h-[774px] object-cover" src="./src/pictures/reds.png" alt="" />
            </div>

            <div className="w-[573px] h-[682px] flex flex-col justify-center">
                <div className="w-[573px] h-[326px] flex flex-col gap-[30px] justify-between">
                    <p className="font-montserrat font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">SUMMER 2025</p>
                    <p className="w-[376px] h-[100px] font-montserrat font-[700] text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">Part of the Neural Universe</p>
                    <p className="w-[389px] h-[60px] font-montserrat font-[400] text-[20px] leading-[30px] tracking-[0.2px] text-[#737373] flex justify-between">We know how large objects will act, but things on a small scale.</p>
                    <div className="w-[339px] h-[52px] flex gap-[10px]">
                        <a className="w-[151px] h-[52px] bg-[#2DC071] rounded-[5px] no-underline flex items-center justify-center visited:text-[#FFFFFF] text-[#FFFFFF] 
                        font-montserrat font-[700] text-[14px] leading-[22px] tracking-[0.2px]" href="#">BUY NOW</a>
                        
                        <a className="w-[171px] h-[52px] border border-solid rounded-[5px] no-underline flex items-center justify-center visited:text-[#2DC071] text-[#2DC071]
                        font-montserrat font-[700] text-[14px] leading-[22px] tracking-[0.2px]" href="#">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default containerFluid
