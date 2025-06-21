import { ChevronLeft, ChevronRight, Eye, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import Rating from "../components/Rating";

const images = [
  "/pictures/product1.jpg",
  "/pictures/product2.jpg",
  "/pictures/product3.jpg",
];

function ProductDetail() {
    const [index, setIndex] = useState(0);
        const [direction, setDirection] = useState(1);
        
          const nextImage = () => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % images.length);
          };
        
          const prevImage = () => {
            setDirection(-1);
            setIndex((prev) => (prev - 1 + images.length) % images.length);
          };
        
          const variants = {
            enter: (dir) => ({
              x: dir > 0 ? 1000 : -1000,
              opacity: 0,
            }),
            center: {
              x: 0,
              opacity: 1,
            },
            exit: (dir) => ({
              x: dir < 0 ? 1000 : -1000,
              opacity: 0,
            }),
          };
    
          
        const handleChange = (i) => {
            setDirection(i > index ? 1 : -1);
            setIndex(i);
        }
  return (
    <>
        <div className="w-full h-auto flex flex-col justify-center">
            <div className="w-full h-[600px] flex justify-center">
                <div className="w-[1050px] h-[550px] flex max-w-screen gap-[20px]">
                    <div className="w-[50%] h-full flex flex-col items-center">
                            <div className="max-h-[468px] min-h-[468px] max-w-[372px] min-w-[372px] rounded-[5px] border relative overflow-hidden border-none max-[980px]:w-full ">
                                {/* Arka plan resmi */}
                                <AnimatePresence initial={false} custom={direction}>
                                <motion.img
                                    key={index}
                                    src={images[index]}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.6 }}
                                    className="max-h-[468px] min-h-[468px] max-w-[372px] min-w-[372px]  absolute top-0 left-0 w-full h-auto object-cover z-0"
                                    alt=""/>
                                </AnimatePresence>
                                
                                {/* Geri / İleri Butonları */}
                                <div className="absolute top-1/2 left-0 w-[372px] flex justify-between items-center px-6 z-20
                                max-[980px]:max-w-full">
                                    <button onClick={prevImage} className="z-10 bg-[transparent] border-none">
                                    <ChevronLeft />
                                    </button>
                                    <button onClick={nextImage} className="z-10 bg-[transparent] border-none">
                                    <ChevronRight />
                                    </button>
                                </div>
                                
                            </div>
                            <div className="max-w-[372px] min-w-[372px] h-[15%] flex gap-2 mt-2 border border-[#23A6F0]">
                                {images.map((item, i) => (
                                <button key={i} onClick={() => handleChange(i)} className={`w-[80px] h-[80px] rounded overflow-hidden border-2 ${index === i ? 'border-[#23A6F0]' : 'border-transparent'}`}>
                                    <img className="w-full h-full object-cover" src={item} alt={`Thumbnail ${i + 1}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="w-[50%] h-full">
                        <div className="w-full h-[85%] flex flex-col justify-between pt-[20px] items-start">
                            <h1 className="font-montserrat font-[400] text-[20px] text-[#252B42] leading-[30px] tracking-[0.2px]">Floating Phone</h1>
                            <div>
                                <Rating rating={4.3} reviewCount={123} />
                            </div>
                            <div>
                                <p className="font-montserrat font-[700] text-[24px] text-[#252B42] leading-[32px] tracking-[0.1px]">$1,139.33</p>
                                <div className="flex">
                                    <p className="font-montserrat font-[700] text-[14px] text-[#737373] leading-[24px] tracking-[0.2px]">Availability :</p>
                                    <p className="font-montserrat font-[700] text-[14px] text-[#23A6F0] leading-[24px] tracking-[0.2px]">In Stock</p>
                                </div>
                            </div>
                            <p className="max-w-[500px] font-montserrat font-[400] text-[14px] text-[#737373] leading-[24px] tracking-[0.2px]">
                                Met minim Mollie non desert Alamo est sit cliquey dolor 
                                do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                                Excitation venial consequent sent nostrum met.
                            </p>
                            <div className="w-full max-w-[490px] flex justify-start">
                                <hr className="w-full" />
                            </div>
                            <div className="flex gap-[6px]">
                                <button className="w-[30px] h-[30px] border border-none rounded-full bg-[#23A6F0]"></button>
                                <button className="w-[30px] h-[30px] border border-none rounded-full bg-[#23856D]"></button>
                                <button className="w-[30px] h-[30px] border border-none rounded-full bg-[#E77C40]"></button>
                                <button className="w-[30px] h-[30px] border border-none rounded-full bg-[#252B42]"></button>
                            </div>
                            <div className="flex gap-[30px]">
                                <button 
                                className="w-auto h-[44px] bg-[#23A6F0] text-[#FFFFFF] border-[#858585] rounded-[5px] hover:bg-[#23856D] 
                                font-montserrat font-[700] text-[14px] text-[#FFFFFF] hover:text-[#000000] leading-[24px] tracking-[0.2px]">
                                    Select Options
                                </button>
                                <div>
                                    <button className="w-[40px] h-[40px] rounded-full bg-[#E8E8E8] border-[#FFFFFF]"><Heart /></button>
                                    <button className="w-[40px] h-[40px] rounded-full bg-[#E8E8E8] border-[#FFFFFF]"> <ShoppingCart /></button>
                                    <button className="w-[40px] h-[40px] rounded-full bg-[#E8E8E8] border-[#FFFFFF]"><Eye /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto">
                <div className="w-full h-[91px] flex justify-center">
                    <button className="bg-[#FFFFFF] border-none font-montserrat font-[700] text-[14px] text-[#737373] hover:text-[#000000] leading-[24px] tracking-[0.2px]">
                        Description
                    </button>

                    <button className="bg-[#FFFFFF] border-none font-montserrat font-[700] text-[14px] text-[#737373] hover:text-[#000000] leading-[24px] tracking-[0.2px]">
                        Additional Information
                    </button>
                    <button className="bg-[#FFFFFF] border-none font-montserrat font-[700] text-[14px] text-[#737373] hover:text-[#000000] leading-[24px] tracking-[0.2px]">
                        Reviews (123)
                    </button>
                </div>
                <div className="w-full h-auto flex gap-[50px] justify-center ">
                    <div className="w-[1050px] h-[499px] flex gap-[30px]">
                        <div className="w-[30%]">
                            <img className="w-full h-auto" src="/pictures/product1.jpg" alt="" />
                        </div>
                        <div className="w-[35%] flex flex-col gap-[30px]">
                            <p className="font-montserrat font-[700] text-[24px] text-[#252B42] leading-[32px] tracking-[0.1px]">the quick fox jumps over </p>
                            <p className="font-montserrat font-[400] text-[14px] text-[#737373] leading-[20px] tracking-[0.1px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br /> <br />
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br /> <br />
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        </div>
                        <div className="w-[35%]  flex flex-col justify-start gap-[30px] font-montserrat font-[700] text-[14px] text-[#737373] leading-[24px] tracking-[0.2px]">
                            <div className="flex flex-col gap-[30px]">
                                <p className="font-montserrat font-[700] text-[24px] text-[#252B42] leading-[32px] tracking-[0.1px]">the quick fox jumps over </p>
                                <ul className="flex flex-col gap-[10px]">
                                    <li className="flex items-center"><ChevronRight />the quick fox jumps over the lazy dog</li>
                                    <li className="flex items-center"><ChevronRight />the quick fox jumps over the lazy dog</li>
                                    <li className="flex items-center"><ChevronRight />the quick fox jumps over the lazy dog</li>
                                    <li className="flex items-center"><ChevronRight />the quick fox jumps over the lazy dog</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[30px]">
                                <p className="font-montserrat font-[700] text-[24px] text-[#252B42] leading-[32px] tracking-[0.1px]">the quick fox jumps over </p>
                                <ul className="flex flex-col gap-[10px]">
                                    <li className="flex items-center"><ChevronRight />the quick fox jumps over the lazy dog</li>
                                    <li className="flex items-center"><ChevronRight />the quick fox jumps over the lazy dog</li>
                                    <li className="flex items-center"><ChevronRight />the quick fox jumps over the lazy dog</li>
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

export default ProductDetail;


