import { useState, useRef, useEffect } from "react";

function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const menuRef = useRef(null);

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
    <div className="w-full h-auto flex justify-center">
      <div className="w-full h-[136px] flex flex-col justify-between">
          {/* Dark navbar */}
          <div className="w-full h-[58px] bg-[#252B42] relative flex justify-center relative">
            <div className="w-[1440px] h-full relative flex justify-between relative">
              <div className="relative w-[1440px] flex justify-between ">

                {/* Contact */}
                <div className="w-[415px] h-[58px] relative flex  gap-[10px] items-center justify-center ">
                  <address className="w-[145px] h-[44px] gap-[5px] flex justify-center">
                    <a
                      href="tel:2255550118"
                      className=" font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#FFFFFF] no-underline hover:text-gray-200 flex items-center gap-[5px]">
                      <img className="w-[16px] h-[16px]" src="./pictures/phone-icon.png" alt="phone"/>
                      (225) 555-0118
                    </a>
                  </address>
                  <address className="w-[260px] h-[44px] flex gap-[5px]">
                    <a
                      href="mailto:michelle.rivera@example.com"
                      className="font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#FFFFFF] no-underline hover:text-gray-200 flex items-center gap-[5px]">
                      <img className="w-[16px] h-[16px]" src="./pictures/mail-icon.png" alt="mail"/>
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
                      <a href="https://www.instagram.com/"><img src="./pictures/instagram.png" alt="" /></a>
                      <a href="https://www.youtube.com/"><img src="./pictures/youtube.png" alt="" /></a>
                      <a href="https://www.facebook.com/"><img src="./pictures/facebook.png" alt="" /></a>
                      <a href="https://x.com/home?lang=tr"><img src="./pictures/X.png" alt="" /></a>
                    </div>
                </div>

              </div>
            </div>
          </div>

          {/* Light navbar */}
          <div className="w-full h-[58px] bg-[#FFFFFF] flex justify-center relative">
            <div className="w-[1440px] h-full flex justify-between">
              {/* Brand */}
                <div className="w-[108px] h-[58px] flex relative justify-start">
                  <a 
                  className="w-[108px] h-[32px] relative top-[13px] font-montserrat font-[700] text-[24px] 
                  leading-[32px] tracking-[0.1px] text-[#252B42] no-underline" 
                  href="www.aspina.com">
                    Aspina
                  </a>

                </div>

                {/* NavMenu */}
                <div className="w-full h-[58px]  flex relative justify-between items-center">

                  <div className="relative w-[361px] items-center">
                    <ul className="font-[700] flex justify-between gap-[15px] text-sm items-center">
                      <li>
                        <a
                          className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center no-underline"
                          href="/Home"
                        >
                          Home
                        </a>
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
                        <a className="text-[#737373] font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-center no-underline" href="/About">About</a>
                      </li>
                      <li>
                        <a className="text-[#737373] font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-center no-underline" href="/Blog">Blog</a>
                      </li>
                      <li>
                        <a className="text-[#737373] font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-center no-underline" href="/Contact">Contact</a>
                      </li>
                      <li>
                        <a className="text-[#737373] font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-center no-underline" href="/Pages">Pages</a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-[324px] h-[54px] flex justify-end items-center relative ">
                        <ul className="flex font-montserrat  text-[14px] leading-[24px] tracking-[0.2px] text-center text-[#23A6F0]">
                          <li className="w-[166px] font-[700]"><a >Login/Register</a></li>
                          <li className="w-[46px]"><img src="./pictures/arama.png" alt="" /></li>
                          <li className="w-[56px]"><img src="./pictures/sepet.png" alt="" /></li>
                          <li className="w-[56px]"><img src="./pictures/fav.png" alt="" /></li>
                        </ul>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;
