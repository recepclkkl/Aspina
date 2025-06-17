import { div } from "framer-motion/client"
import { CalendarDays,MessageCircleMore } from 'lucide-react';

function DesktopBlog() {

const cards=[
    {
        img:"./pictures/street.jpg",
        name:"Loudest à la Madison #1 (L'integral)",
        desc:"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date:"09 June 2025",
        comments:"10 comments",
    },
    {
        img:"./pictures/beetle.jpg",
        name:"Loudest à la Madison #1 (L'integral)",
        desc:"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date:"09 June 2025",
        comments:"10 comments",
    },
    {
        img:"./pictures/umbrellas.jpg",
        name:"Loudest à la Madison #1 (L'integral)",
        desc:"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date:"09 June 2025",
        comments:"10 comments",
    }
]

  return (
    <>
    <div className="max-w-screen h-[1044px] flex justify-center 
    max-[980px]:max-w-screen max-[980px]:h-auto  max-[980px]:pt-[50px]">
        <div className="w-[1050px] h-full flex flex-col gap-[50px] items-center justify-center
        max-[980px]:w-full  max-[980px]:h-auto">
            <div className="w-[692px] h-[134px] flex flex-col items-center gap-[10px]
            max-[980px]:w-full max-[980px]:h-auto  max-[980px]:gap-[20px]">
                <p className="font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]
                 max-[980px]:text-center" >Practice Advice</p>
                <p className="font-montserrat font-[700] text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]
                 max-[980px]:text-center" >Featured Posts</p>
                <p className="w-[469px] h-[40px] font-montserrat font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] text-center
                 max-[980px]:w-full  max-[980px]:h-auto" >Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="w-[1045px] h-[606px] flex gap-[10px] justify-center
            max-[980px]:max-w-screen max-[980px]:h-auto max-[980px]:flex-col max-[980px]:gap-[20px] max-[980px]:items-center">
                
                {cards.map((item,index)=>(
                    <div key={index} className="w-[348px] h-[606px] 
                    max-[980px]:w-full max-[980px]:h-auto  max-[980px]:items-center">
                        <div className="w-[348px] h-[300px]  
                        max-[980px]:flex max-[980px]:w-full max-[980px]:h-[50%]  max-[980px]:justify-center">
                            <img className="w-full h-full object-cover max-[980px]:w-[90%]" src={item.img} alt="" />
                        </div>
                        <div className="w-[348px] h-[306px] pt-[25px] pb-[35px] pr-[25px] pl-[25px] flex flex-col gap-[10px]
                        max-[980px]:w-[90%] max-[980px]:h-auto max-[980px]:translate-x-[5%]  max-[980px]:justify-center max-[980px]:items-center max-[980px]:p-[0] max-[980px]:gap-[20px]">
                            <div className="w-[160px] h-[16px] flex gap-[15px] max-[980px]:w-full">
                                <a className="no-underline font-montserrat font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#8EC2F2]" href="#">Google</a>
                                <a className="no-underline font-montserrat font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#737373]" href="#">Trending</a>
                                <a className="no-underline font-montserrat font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#737373]" href="#">New</a>
                            </div>
                            <h4 className="w-[247px] h-[60px] font-montserrat font-[600] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42] max-[980px]:w-full max-[980px]:h-auto">{item.name}</h4>
                            <p className="w-[280px] h-[60px] font-montserrat font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] max-[980px]:w-full max-[980px]:h-auto">{item.desc}</p>
                            
                            <div className="w-[330px] h-[46px] flex items-center justify-between max-[980px]:w-full">

                                <div className="w-[110px] h-[16px] flex items-center gap-[5px]">
                                    <CalendarDays color="#23A6F0" size={16}/>
                                    <p className="w-[84px] h-[16px] font-montserrat font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#737373]">
                                    {item.date}</p>
                                </div>
                               
                                <div className="w-[115px] h-[16px] flex items-center gap-[5px]">
                                    <MessageCircleMore color="#23856D" size={16}/>
                                    <p className="w-[84px] h-[16px] font-montserrat font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#737373]">
                                        {item.comments}</p>
                                </div>

                            </div>
                            
                            <div className="w-[104px] h-[24px] flex items-center justify-between gap-[10px] max-[980px]:w-full max-[980px]:justify-start max-[980px]:gap-[20px]">
                                <a className="w-[85px] h-[24px] no-underline font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]" href="#">Learn More </a>
                                <img className="w-[8.62px] h-[16px] " src="./pictures/none.png" alt="#" />
                            </div>
                        </div>
                        <hr className="hidden max-[980px]:block" />
                    </div>
                    
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default DesktopBlog
