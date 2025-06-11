import { div } from "framer-motion/client"

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
    <div className="w-full h-[1044px] flex justify-center">
        <div className="w-[1050px] h-[1044px] flex flex-col gap-[80px] items-center justify-center">
            <div className="w-[692px] h-[134px] flex flex-col items-center gap-[10px]">
                <p className="font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]" >Practice Advice</p>
                <p className="font-montserrat font-[700] text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]" >Featured Posts</p>
                <p className="w-[469px] h-[40px] font-montserrat font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] text-center" >Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="w-[1045px] h-[606px] flex gap-[10px] justify-center">
                
                {cards.map((item,index)=>(
                    <div key={index} className="w-[348px] h-[606px]">
                        <div className="w-[348px] h-[300px] ">
                            <img className="w-full h-full object-cover" src={item.img} alt="" />
                        </div>
                        <div className="w-[348px] h-[306px] pt-[25px] pb-[35px] pr-[25px] pl-[25px] flex flex-col gap-[10px]">
                            <div className="w-[160px] h-[16px] flex gap-[15px]">
                                <a className="no-underline font-montserrat font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#8EC2F2]" href="#">Google</a>
                                <a className="no-underline font-montserrat font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#737373]" href="#">Trending</a>
                                <a className="no-underline font-montserrat font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#737373]" href="#">New</a>
                            </div>
                            <p className="w-[247px] h-[60px] font-montserrat font-[400] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]">{item.name}</p>
                            <p className="w-[280px] h-[60px] font-montserrat font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">{item.desc}</p>
                            
                            <div className="w-[298px] h-[46px] flex items-center justify-between ">

                                <div className="w-[110px] h-[16px] flex items-center justify-between gap-[5px]">
                                    <img className="w-[16px] h-[16px] " src="./pictures/date.png" alt="#" />
                                    <p className="w-[84px] h-[16px] font-montserrat font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#737373]">
                                    {item.date}</p>
                                </div>
                               
                                <div className="w-[115px] h-[16px] flex items-center justify-between gap-[5px]">
                                    <img className="w-[16px] h-[16px] " src="./pictures/comment.png" alt="#" />
                                    <p className="w-[84px] h-[16px] font-montserrat font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#737373]">
                                        {item.comments}</p>
                                </div>

                            </div>
                            
                            <div className="w-[104px] h-[24px] flex items-center justify-between gap-[10px]">
                                <a className="w-[85px] h-[24px] no-underline font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]" href="#">Learn More </a>
                                <img className="w-[8.62px] h-[16px] " src="./pictures/none.png" alt="#" />
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

export default DesktopBlog
