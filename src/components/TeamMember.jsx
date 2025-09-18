import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function TeamMember() {

    const location = useLocation();
    const isAboutPage = location.pathname === "/about";

    const data=[
        {
            img:"./pictures/teammember1.jpg",
            username: "Member1",
            profession:"Profession"
        },
        {
            img:"./pictures/teammember2.jpg",
            username: "Member2",
            profession:"Profession"
        },
        {
            img:"./pictures/teammember3.jpg",
            username: "Member3",
            profession:"Profession"
        },
        {
            img:"./pictures/teammember4.jpg",
            username: "Member4",
            profession:"Profession"
        },
        {
            img:"./pictures/teammember5.jpg",
            username: "Member5",
            profession:"Profession"
        },
        {
            img:"./pictures/teammember6.jpg",
            username: "Member6",
            profession:"Profession"
        },
        {
            img:"./pictures/teammember7.jpg",
            username: "Member7",
            profession:"Profession"
        },
        {
            img:"./pictures/teammember8.jpg",
            username: "Member8",
            profession:"Profession"
        },
        {
            img:"./pictures/teammember9.jpg",
            username: "Member9",
            profession:"Profession"
        },
    ]

    const visibleMembers = isAboutPage ? data.slice(0, 3) : data;
  return (
    <>
        <div className="w-screen h-auto flex flex-col justify-center items-center">
            <h1 className="font-montserrat font-[700] text-[32px] text-[#252B42] leading-[40px] tracking-[0.1] mb-[20px]
            max-[680px]:text-[40px] max-[680px]:leading-[50px] max-[680px]:tracking-[0.2]">Meet Our Team</h1>
            <p className={`${isAboutPage ? "block mb-[50px]" : "hidden"} max-w-[470px] text-center font-montserrat font-[400] text-[14px] text-[#737373] leading-[20px] tracking-[0.2]`}>
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                <div className={`w-[70%] h-full justify-center gap-[15px] grid ${isAboutPage ? "grid-cols-3 grid-rows-1" : "grid-cols-3 grid-rows-3"}
                    max-[680px]:w-[90%] max-[680px]:flex max-[680px]:flex-col max-[680px]:items-center max-[680px]:h-auto`}>
                        {visibleMembers.map((items,index)=>(
                            <div key={index} className="w-full h-[300px] flex flex-col justify-center items-center mb-[30px]">
                                <div className="w-full h-[70%] mb-[20px] overflow-hidden flex justify-center items-center">
                                    <img className="object-cover h-full" src={items.img} alt={items.username} />
                                </div>
                                
                                <div>
                                    <p className="font-montserrat font-[700] text-[16px] text-[#252B42] leading-[24px] tracking-[0.1]">{items.username}</p>
                                    <p className="font-montserrat font-[700] text-[14px] text-[#737373] leading-[24px] tracking-[0.2]">{items.profession}</p>
                                </div>

                                <div className="flex justify-center items-center gap-[10px] mt-[10px]">
                                    <a href="https://www.facebook.com/"><Facebook size={23} color="#23A6F0"/></a>
                                    <a href="https://www.instagram.com/"><Instagram size={23} color="#23A6F0"/></a>
                                    <a href="https://x.com/home?lang=tr"><Twitter size={23} color="#23A6F0"/></a>
                                </div>
                            </div>
                        ))}
                </div>

            <div className={`w-screen h-auto flex justify-center items-center mt-[50px] mb-[100px]
                ${isAboutPage ? "hidden" : "block"}`}>

                <div className="w-[70%] h-auto rounded-[12px] flex flex-col justify-center items-center gap-[30px]">
                    <h2 className="font-montserrat font-[700] text-[40px] text-[#252B42] leading-[50px] tracking-[0.2] text-center
                    max-[680px]:text-[40px] max-[680px]:leading-[50px] max-[680px]:tracking-[0.1]">Start your 14 days free trial</h2>
                    <p className="w-[35%] text-center font-montserrat font-[400] text-[12px] text-[#737373] leading-[20px] tracking-[0.2]
                    max-[680px]:w-[80%] max-[680px]:text-[14px] max-[680px]:leading-[20px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
                    <button className="bg-[#23A6F0] text-[#FFFFFF] font-montserrat font-[700] text-[14px] leading-[22px]
                    tracking-[0.2px] rounded-[5px] w-[180px] h-[52px] border-none">Try it free now</button>

                    <div className="flex justify-center items-center gap-[20px]">
                        <a href="https://x.com/home?lang=tr"><Twitter size={23} color="#23A6F0"/></a>
                        <a href="https://www.facebook.com/"><Facebook size={23} color="#23A6F0"/></a>
                        <a href="https://www.instagram.com/"><Instagram size={23} color="#23A6F0"/></a>
                        <a href="https://www.linkedin.com/"><Linkedin size={23} color="#23A6F0"/></a>
                    </div>
                    
                </div>
                    
            </div>
            
        </div>
    </>
    )
}

export default TeamMember;