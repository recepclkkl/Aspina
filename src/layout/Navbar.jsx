import { useState, useRef, useEffect } from "react";
import { Phone,Mail,Instagram,Youtube,Facebook,Twitter,Search,ShoppingCart,Heart,User, Menu  } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const menuRef = useRef(null);
const location = useLocation();

const isShopPage = location.pathname.startsWith("/shop");

useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
    <div className="max-w-screen h-auto flex justify-center max-[660px]:max-w-screen max-[660px]:h-[328px]">
      <div className="w-full h-[136px] flex flex-col justify-between max-[980px]:w-full">
          {/* Dark navbar */}
          <div className={`w-full h-[58px] ${isShopPage ? "bg-[#23856D]" : "bg-[#252B42]"} relative flex justify-center max-[980px]:hidden`}>
            <div className="w-[95%] h-full flex justify-center relative">
              <div className="relative w-full flex justify-between ">

                {/* Contact */}
                <div className="w-[415px] h-[58px] relative flex  gap-[10px] items-center justify-center ">
                  <address className="w-[145px] h-[44px] gap-[5px] flex justify-center">
                    <a
                      href="tel:2255550118"
                      className=" font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#FFFFFF] no-underline hover:text-gray-200 flex items-center gap-[5px]">
                        <Phone color="white" size={16}/>
                      (225) 555-0118
                    </a>
                  </address>
                  <address className="w-[260px] h-[44px] flex gap-[5px]">
                    <a
                      href="mailto:michelle.rivera@example.com"
                      className="font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#FFFFFF] no-underline hover:text-gray-200 flex items-center gap-[5px]">
                      <Mail color="white" size={16}/>
                      michelle.rivera@example.com
                    </a>
                  </address>
                </div>

                {/* Texts */}
                <div className="w-[332px] h-[58px] text-[#FFFFFF] flex gap-[10px] justify-center items-center">
                  <p className="font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] ">Follow Us and get a chance to win 80% off</p>
                </div>

                {/* Socials */}
                <div className=" w-[233px] h-[58px] flex gap-[10px] justify-center items-center">
                    <p className="w-[83px] h-[24px] text-[#FFFFFF] flex items-center">Follow Us:</p>
                    <div className=" w-[120px] h-[26px] flex items-center justify-between">
                      <a href="https://www.instagram.com/"><Instagram color="white" size={16}/></a>
                      <a href="https://www.youtube.com/"><Youtube color="white" size={16}/></a>
                      <a href="https://www.facebook.com/"><Facebook color="white" size={16}/></a>
                      <a href="https://x.com/home?lang=tr"><Twitter color="white" size={16}/></a>
                    </div>
                </div>

              </div>
            </div>
          </div>

          {/* Light navbar */}
          <div className="w-full h-[58px] bg-[#FFFFFF] flex justify-center relative 
          max-[980px]:w-full max-[980px]:h-[328px]  max-[980px]:flex max-[980px]:flex-col max-[980px]:justify-center">
            <div className="w-[95%] h-full flex justify-between relative 
            max-[980px]:w-full max-[980px]:h-[58px] max-[980px]:justify-between ">
              {/* Brand */}
                <div className="w-[108px] h-[58px] flex justify-start max-[980px]:h-[58px]">
                  <a 
                  className="w-[108px] h-[32px] relative top-[13px] font-montserrat font-[700] text-[24px] 
                  leading-[32px] tracking-[0.1px] text-[#252B42] no-underline max-[980px]:left-[10px]" 
                  href="www.aspina.com">
                    Aspina
                  </a> 
                </div>

                {/* NavMenu */}
                <div className="w-full h-[58px]  flex relative justify-between items-center 
                max-[980px]:gap-[60px] max-[980px]:flex max-[980px]:justify-end">

                  <div className="relative w-[361px] items-center max-[980px]:hidden">
                    <ul className="font-[700] flex justify-between gap-[15px] text-sm items-center">
                      <li>
                        <a
                          className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center no-underline"
                          href="/">Home</a>
                      </li>

                      <li ref={menuRef}>
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="w-[63px] font-[500] bg-[#FFFFFF] border-none flex items-center justify-between"
                        >
                          <p className="font-montserrat font-medium text-[14px] leading-[28px] tracking-[0.2px] text-[#252B42]">Shop</p> 
                          <img src="./pictures/arrow.png" alt="" />
                        </button>

                        {isOpen && (
                          <div className="w-[396px] h-[272px] top-[40px] left-[62px] absolute flex z-20 border-solid border-[1px] border-t-0">
                            {/* Kadın */}
                            <div 
                            className="w-[198px] h-[272px] flex flex-col font-[700] text-[14px] 
                                leading-[24px] tracking-[0.2px] bg-[#FFFFFF]">
                              <a href="#"
                                className="w-[198px] h-[56px] text-[#252B42] no-underline hover:text-[gray]">
                                  Kadın
                              </a>
                              <ul 
                                className="w-[198px] h-[216px] space-y-1 text-sm flex flex-col justify-between">
                                <li><a href="#" className="no-underline text-[#737373] hover:text-[black]">Bags</a></li>
                                <li><a href="#" className="no-underline text-[#737373] hover:text-[black]">Belts</a></li>
                                <li><a href="#" className="no-underline text-[#737373] hover:text-[black]">Cosmetics</a></li>
                                <li><a href="#" className="no-underline text-[#737373] hover:text-[black]">Bags</a></li>
                                <li><a href="#" className="no-underline text-[#737373] hover:text-[black]">Hats</a></li>
                              </ul>
                            </div>

                            {/* Erkek */}
                            <div 
                            className="w-[198px] h-[272px] flex flex-col font-[700] text-[14px] 
                                leading-[24px] tracking-[0.2px] bg-[#FFFFFF]">
                              <a href="#"
                                className="w-[198px] h-[56px] text-[#252B42] no-underline hover:text-[gray]">
                                  Erkek
                              </a>
                              <ul 
                                className="w-[198px] h-[216px] space-y-1 text-sm flex flex-col justify-between ">
                                <li><a href="#" className="no-underline text-[#737373] hover:text-[black]">Bags</a></li>
                                <li><a href="#" className="no-underline text-[#737373] hover:text-[black]">Belts</a></li>
                                <li><a href="#" className="no-underline text-[#737373] hover:text-[black]">Cosmetics</a></li>
                                <li><a href="#" className="no-underline text-[#737373] hover:text-[black]">Bags</a></li>
                                <li><a href="#" className="no-underline text-[#737373] hover:text-[black]">Hats</a></li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </li>

                      <li>
                        <a className="text-[#737373] font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-center no-underline" href="/about">About</a>
                      </li>
                      <li>
                        <a className="text-[#737373] font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-center no-underline" href="/blog">Blog</a>
                      </li>
                      <li>
                        <a className="text-[#737373] font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-center no-underline" href="/contact">Contact</a>
                      </li>
                      <li>
                        <a className="text-[#737373] font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-center no-underline" href="/pages">Pages</a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-[324px] h-[54px] flex justify-end items-center relative max-[980px]:w-[180px]">
                        <ul className="flex font-montserrat  text-[14px] leading-[24px] tracking-[0.2px] text-center text-[#23A6F0] max-[980px]:hidden">
                          <li className="w-[166px] font-[700]"><a >Login/Register</a></li>
                          <li className="w-[46px]"><Search color="#23A6F0" size={16}/></li>
                          <li className="w-[56px]"><ShoppingCart color="#23A6F0" size={16}/></li>
                          <li className="w-[56px]"><Heart color="#23A6F0" size={16}/></li>
                        </ul>
                        <ul className="hidden relative text-[#23A6F0] gap-[25px] max-[980px]:flex max-[980px]:right-[10px]">
                          <li><User color="black" size={24} /></li>
                          <li><Search color="black" size={24}/> </li>
                          <li><ShoppingCart color="black" size={24}/></li>
                          <li><Menu color="black" size={24}/></li>
                        </ul>
                  </div>  
                </div>
            </div>
            <div className="hidden max-[660px]:w-full max-[660px]:h-[270px] max-[660px]:flex max-[660px]:justify-center">
                <div className="w-full h-full">
                    <ul className="w-full h-full items-center flex justify-between 
                    max-[660px]:flex-col max-[660px]:items-center max-[660px]:gap-[20px] max-[660px]:p-[10px] max-[660px]:justify-center">
                      <li><a className="font-montserrat font-[400] text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] no-underline visited:text-[#737373]" 
                      href="/">Home</a></li>
                      <li><a className="font-montserrat font-[600] text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] no-underline visited:text-[#737373]"
                      href="/shop/product">Products</a></li>
                      <li><a className="font-montserrat font-[550] text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] no-underline visited:text-[#737373]"
                      href="/pricing">Pricing</a></li>
                      <li><a className="font-montserrat font-[550] text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] no-underline visited:text-[#737373]"
                      href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;
