import { Instagram,Facebook,Twitter } from 'lucide-react';

function Footer() {

  return (
    <>
    <div className="max-w-screen h-[488px] flex justify-center bg-[#FFFFFF] max-[980px]:max-w-screen max-[980px]:h-auto">
        <div className="w-full h-full flex flex-col justify-between bg-[#FFFFFF]">
            <div className="w-full h-[142px] flex justify-center bg-[#FAFAFA]">
                <div className="w-[1050px] h-[138px] flex items-center justify-between 
                max-[980px]:w-[90%] max-[980px]:flex-col max-[980px]:justify-center max-[980px]:gap-[20px] max-[980px]:items-start">
                    <p className="font-montserrat font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">Aspina</p>
                    <div className="w-[236px] h-[24px] flex gap-[20px] justify-end max-[980px]:justify-start">
                        <a href="https://www.instagram.com"><Instagram color="#23A6F0" size={22}/></a>
                        <a href="https://www.facebook.com"><Facebook color="#23A6F0" size={22}/></a>
                        <a href="https://www.x.com"><Twitter color="#23A6F0" size={22}/></a>
                    </div>
                </div>
            </div>
            <hr className="w-full border border-[1px] border-[#E6E6E6] max-[980px]:w-full" />
            <div className="w-full h-[272px] flex justify-center max-[980px]:h-auto">
                <div className="w-[1041px] h-[170px] flex gap-[30px] pt-[50px] pb-[50px] justify-between font-montserrat 
                max-[980px]:w-[90%] max-[980px]:flex-col max-[980px]:h-auto">
                    <div className="w-[148px] h-[170px] flex flex-col gap-[20px]">
                        <p className="font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Company Info</p>
                        <div className=" flex flex-col gap-[10px]">
                            <p className="w-[119px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">About Us</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Carrier</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">We are hiring</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Blog</p>
                        </div>
                    </div>
                    <div className="w-[148px] h-[170px] flex flex-col gap-[20px]">
                        <p className="font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Legal</p>
                        <div className="flex flex-col gap-[10px]">
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">About Us</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Carrier</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">We Are Hiring</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Blog</p>
                        </div>
                    </div>
                    <div className="w-[149px] h-[170px] flex flex-col gap-[20px]">
                        <p className="font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Features</p>
                        <div className="flex flex-col gap-[10px]">
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Business Marketing</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">User Analytic</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Live Chat</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Unlimited Support</p>
                            </div>
                    </div>
                    <div className="w-[152px] h-[170px] flex flex-col gap-[20px]">
                        <p className="font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Resources</p>
                        <div className="flex flex-col gap-[10px]">
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">IOS & Android</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Watch a Demo</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Customers</p>
                            <p className="font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">API</p>
                        </div>
                    </div>
                    <div className="w-[321px] h-[131px] flex flex-col gap-[20px] max-[980px]:w-full">
                        <p className="font-[700] text-[16px] leading-[24px] tracking-[0.1px] font-montserrat">Get In Touch</p>
                        <div className="w-[321px] h-[87px] max-[980px]:w-[80%]">
                            <div className="w-full h-[58px] max-[980px]:w-full">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    name="mail"
                                    id="mail"
                                    className="w-[198px] h-[55px] p-2 border border-[1px] rounded-l-[5px] bg-[#F9F9F9] text-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    max-[980px]:w-[60%]"/>
                                    <button className="w-[115px] h-[58px] bg-[#23A6F0] text-[#FFFFFF] font-[400] 
                                    text-[14px] leading-[28px] tracking-[0.2px] border rounded-r-[5px] rounded-br-[5px] 
                                    max-[980px]:w-[30%] max-[980px]:min-w-[71px]
                                    ">Subscribe</button>
                            </div>
                            <p className="font-[400] text-[12px] text-[#737373] leading-[28px] tracking-[0.2px] font-montserrat">Lore imp sum dolor Amit</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[74px] flex justify-center bg-[#FAFAFA]">
                <div className="w-[1050px] h-[74px] flex items-center 
                max-[980px]:w-full max-[980px]:h-auto max-[980px]:justify-center">
                    <p className="font-[700] text-[14px] text-[#737373] leading-[24px] tracking-[0.2px] font-montserrat
                    max-[980px]:text-center max-[980px]:w-[70%]">Made With Love By Finland All Right Reserved </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
