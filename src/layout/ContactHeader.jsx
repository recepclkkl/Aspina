
import { Phone,Mail,Instagram,Youtube,Facebook,Twitter,Search,ShoppingCart,Heart,User, Menu  } from 'lucide-react';
function ContactHeader() {
    return(
        <>
        <div className="w-screen h-auto ">
            <div className="w-[80%] h-[826px] flex justify-center items-center m-auto">
                <div className="w-full h-[500px] flex flex-col gap-[10px] justify-between">
                    <h1 className='font-montserrat font-[700] text-[16px] leading-[24px] tracking-[0.1px]'>Contact Us</h1>
                    <p className='font-montserrat font-[700] text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]'>Get in touch today!</p>
                    <p className='font-montserrat font-[400] text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]'>We know how large objects will act, but things on a small scale</p>
                    <a className="no-underline text-[#252B42] font-montserrat font-[700] text-[24px] leading-[32px] tracking-[0.1px]" href="tel:+451215215">Phone; +451 215 215</a>
                    <a className="no-underline text-[#252B42] font-montserrat font-[700] text-[24px] leading-[32px] tracking-[0.1px]" href="fax:+451215215">Fax; +451 215 215</a>

                    <div className='flex gap-[10px] w-[242px] h-[50px] opacity-100 gap-[34px] p-[10px]'>
                        <a className='flex justify-center items-center' href="https://x.com/home?lang=tr"><Twitter color="#252B42" size={30}/></a>
                        <a className='flex justify-center items-center' href="https://www.facebook.com/"><Facebook color="#252B42" size={30}/></a>
                        <a className='flex justify-center items-center' href="https://www.instagram.com/"><Instagram color="#252B42" size={30}/></a>
                        <a className='flex justify-center items-center' href="https://www.youtube.com/"><Youtube color="#252B42" size={30}/></a>
                    </div>
                </div>
                <div className="w-full h-full flex justify-end items-center">
                    <img className="w-full h-full object-cover" src="./pictures/contact.png" alt="" />
                </div>
            </div>
        </div>
        
        
        
        </>
    )
}

export default ContactHeader;