import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function TeamHeader() {
    return (
        <>
        <div className="w-screen h-auto flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-[100px] mb-[100px] gap-[24px]">
                <p className="font-montserrat text-[#737373] text-[16px] font-[700] leading-[24px] traking-[0.1px]
                max-[660px]:text-[32px]">WHAT WE DO</p>
                <p className="font-montserrat text-[#252B42] text-[58px] text-center font-[700] leading-[80px] traking-[0.2px]"
                > Innovation tailored for you</p>

                <section className="flex justify-left items-center gap-[8px]">
                    <Link to="/" className="no-underline font-montserrat text-[#252B42] text-[16px] font-[700] leading-[24px] traking-[0.1px]"
                    >Home</Link>
                    <ChevronRight />
                    <Link to="/team" className="no-underline font-montserrat text-[#737373] text-[16px] font-[700] leading-[24px] traking-[0.1px]"
                    >Team</Link>
                </section>
            </div>
            <div className="w-[90%] h-[550px]  flex gap-[10px] grid grid-cols-2 grid-rows-1 justify-center items-center mb-[100px]">
                <div className="w-full h-full flex justify-end items-center overflow-hidden">
                    <img className="w-full h-full object-cover" src="pictures/teamred.jpg" alt="" />
                </div>
                <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-[10px] ">
                    <img className="w-full h-full  object-cover" src="pictures/whitewomen.jpg" alt=""/>
                    <img className="w-full h-full  object-cover" src="pictures/jeanwomen.jpg" alt=""/>
                    <img className="w-full h-full  object-cover" src="pictures/blackwhitewomen.jpg" alt=""/>
                    <img className="w-full h-full  object-cover" src="pictures/jeanwomen2.jpg" alt=""/>
                </div>
            </div>
        </div>
        
        </>
        
    )
}
export default TeamHeader;