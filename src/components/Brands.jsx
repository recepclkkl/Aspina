import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Brands() {

    const location = useLocation();
    const isAboutPage = location.pathname === "/about";

  return (
    <>
        <div className="max-w-screen h-auto flex flex-col justify-center items-center">
            <div className={`${isAboutPage ? "flex flex-col gap-[20px] mt-[50px]" : "hidden"}`}>
                    <p className="text-center font-montserrat font-[700] text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">Big Companies Are Here</p>
                    <p className="max-w-[550px] text-center font-montserrat font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            <div className={`w-[1050px] h-[175px] flex justify-between items-center 
            ${isAboutPage ? "flex-row" : "flex"}
            max-[680px]:w-full max-[680px]:h-full max-[680px]:flex-col max-[680px]:gap-[20px] max-[680px]:pt-[50px] max-[680px]:pb-[50px]`}>

                
                <img className="w-[103px] h-[34px]" src="/pictures/hooli.jpg" alt="hooli" />
                <img className="w-[83px] h-[59px]" src="/pictures/lyft.jpg" alt="lyft" />
                <img className="w-[102px] h-[75px]" src="/pictures/V.jpg" alt="V" />
                <img className="w-[103px] h-[42px]" src="/pictures/stripe.jpg" alt="stripe" />
                <img className="w-[103px] h-[62px]" src="/pictures/aws.jpg" alt="aws" />
                <img className="w-[75px] h-[72px]" src="/pictures/robot.jpg" alt="robot" />
            </div>
        </div>
    </>
    )
}

export default Brands;