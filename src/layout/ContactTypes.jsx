import {Mail, MapPin, Phone, Redo } from "lucide-react";


function ContactTypes() {
    
  return (
    <>
        <div className="w-screen h-auto flex flex-col items-center justify-center gap-[60px] mt-[20px] mb-[20px]">
            <div className="max-w-[2000px] w-[80%] h-[150px] flex flex-col justify-center items-center gap-[10px]
            max-[660px]:mt-[20px] max-[660px]:h-auto max-[660px]:w-[90%]">
                <h5 className="font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-center  text-[#252B42]">VISIT OUR OFFICE</h5>
                <h2 className="font-montserrat font-[700] text-[40px] leading-[50px] tracking-[0.2px] text-center  text-[#252B42]">We help small businesses with big ideas</h2>
            </div>
            <div className="max-w-[2000px] w-[60%] h-[450px] flex justify-center gap-[20px] 
            max-[830px]:flex-col max-[830px]:w-[90%] max-[830px]:min-w-[270px] max-[830px]:h-[900px] max-[830px]:items-center">
                <div className="max-w-[300px] w-full h-full flex flex-col gap-[10px] p- justify-center gap-[20px] items-center rounded-[10px]">
                    <Phone color="#23A6F0" size={72} />
                    <a href="email:georgia.young@example.com"
                    className="font-montserrat font-[700] text-sm leading-6 tracking-[0.2px] text-center no-underline text-[#252B42]">georgia.young@example.com</a>
                    <a href="email:georgia.young@ple.com"
                    className="font-montserrat font-[700] text-sm leading-6 tracking-[0.2px] text-center no-underline text-[#252B42]">georgia.young@ple.com</a>
                    <a href="#"
                    className="font-montserrat font-[700] text-sm leading-6 tracking-[0.2px] text-center no-underline text-[#252B42]">Get Support</a>
                    <button className="w-[150px] h-[54px] border border-[1px] border-[#23A6F0] rounded-[37px] text-[#23A6F0] bg-[#FFFFFF] ">Submit Request</button>
                </div>
                <div className="max-w-[300px] w-full h-full flex flex-col gap-[10px] justify-center gap-[20px] items-center bg-[#252B42] rounded-[10px]">
                    <MapPin color="#23A6F0" size={72} />
                    <a href="email:georgia.young@example.com"
                    className="font-montserrat font-[700] text-sm leading-6 tracking-[0.2px] text-center no-underline text-[#FFFFFF]">georgia.young@example.com</a>
                    <a href="email:georgia.young@ple.com"
                    className="font-montserrat font-[700] text-sm leading-6 tracking-[0.2px] text-center no-underline text-[#FFFFFF]">georgia.young@ple.com</a>
                    <a href="#"
                    className="font-montserrat font-[700] text-sm leading-6 tracking-[0.2px] text-center no-underline text-[#FFFFFF]">Get Support</a>
                    <button className="w-[150px] h-[54px] border border-[1px] border-[#23A6F0] rounded-[37px] text-[#23A6F0] bg-[#252B42] ">Submit Request</button>
                </div>
                <div className="max-w-[300px] w-full h-full flex flex-col gap-[10px] justify-center gap-[20px] items-center rounded-[10px] ">
                    <Mail color="#23A6F0" size={72} />
                    <a href="email:georgia.young@example.com"
                    className="font-montserrat font-[700] text-sm leading-6 tracking-[0.2px] text-center no-underline text-[#252B42]">georgia.young@example.com</a>
                    <a href="email:georgia.young@ple.com"
                    className="font-montserrat font-[700] text-sm leading-6 tracking-[0.2px] text-center no-underline text-[#252B42]">georgia.young@ple.com</a>
                    <a href="#"
                    className="font-montserrat font-[700] text-sm leading-6 tracking-[0.2px] text-center no-underline text-[#252B42]">Get Support</a>
                    <button className="w-[150px] h-[54px] border border-[1px] border-[#23A6F0] rounded-[37px] text-[#23A6F0] bg-[#FFFFFF] ">Submit Request</button>
                </div>
            </div>

            <div className="max-w-[2000px] w-[80%] h-[200px] flex flex-col justify-center items-center gap-[10px]
            max-[660px]:h-[414px] max-[660px]:w-[90%]">
                 <Redo color="#23A6F0" size={90} className="rotate-45"/>
                 
                <h2 className="font-montserrat font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-center  text-[#252B42]">WE Can't WAIT TO WEET YOU</h2>
                <h1 className="font-montserrat font-[700] text-[58px] leading-[80px] tracking-[0.2px] text-center  text-[#252B42]">Let's Talk</h1>
                <button className="w-[150px] h-[52px] border border-[1px] border-[#23A6F0] rounded-[5px] text-[#23A6F0] bg-[#23A6F0] text-[#FFFFFF]">Try it free now</button>
            </div>

        </div>

    </>
    )
}

export default ContactTypes;