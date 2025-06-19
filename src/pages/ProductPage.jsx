import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const images = [
  "/pictures/product1.jpg",
  "/pictures/product2.jpg",
  "/pictures/product3.jpg",
];

function ProductPage() {

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
    <div className="max-w-screen flex flex-col items-center gap-[20px] ">
        <div className="w-[95%] flex items-center pr-[10px] ">
                    <Link className="no-underline font-montserrat font-[700] text-[14px] text-[#252B42] leading-[24px] tracking-[0.2px] text-center" to="/">Home</Link>
                    <ChevronRight />
                    <Link className="no-underline font-montserrat font-[700] text-[14px]  text-[#252B42] leading-[24px] tracking-[0.2px] text-center" to="/shop">Shop</Link>
                    <ChevronRight />
                    <Link className="no-underline font-montserrat font-[700] text-[14px]  text-[#BDBDBD] leading-[24px] tracking-[0.2px] text-center" to="/product">Graphic Design</Link>
        </div>

        <div className="w-full h-auto flex justify-center">
            <div className="w-[80%] h-[600px]">
                <div className="w-full h-[550px] flex">
                    <div className="w-[50%] h-full">
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
                                    <img src="./pictures/right.png" alt="Geri" />
                                    </button>
                                    <button onClick={nextImage} className="z-10 bg-[transparent] border-none">
                                    <img src="./pictures/left.png" alt="İleri" />
                                    </button>
                                </div>
                                
                            </div>
                            <div className="w-full h-[15%] flex gap-2 mt-2">
                                {images.map((item, i) => (
                                <button key={i} onClick={() => handleChange(i)} className={`w-[80px] h-[80px] rounded overflow-hidden border-2 ${index === i ? 'border-[#23A6F0]' : 'border-transparent'}`}>
                                    <img className="w-full h-full object-cover" src={item} alt={`Thumbnail ${i + 1}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="w-[50%] h-full">
                        <div className="w-full h-[85%]">

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
        
    </>
    )
}

export default ProductPage;