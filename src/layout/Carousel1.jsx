import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  './pictures/bg-1.jpg',
  './pictures/bg-1.jpg',
];

function Carousel1() {
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

  return (
    <div className="w-screen h-auto min-h-[716px] flex justify-center 
    mt-[10px]">
      <div className="w-full h-[800px] min-h-[716px] rounded-[5px] border relative border-none
      max-[980px]:w-full ">
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
            className="absolute top-0 right-0 w-full h-full object-cover object-[center_30%] z-0  
            max-[980px]:w-full max-[980px]:object-[60%_center]"
            alt=""
          />
        </AnimatePresence>
        

        {/* Yazılar (resimle birlikte kayan) */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`text-${index}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="w-[975px] h-[651px] absolute top-[48px] left-[232px] gap-[80px] flex flex-col justify-center z-10 text-white
            max-[980px]:max-w-screen max-[980px]:left-[0]"
          >
            <div className="w-[599px] h-[331px] pt-[48px] pb-[48px] gap-[30px] flex flex-col z-1 justify-around 
            max-[980px]:max-w-screen max-[980px]:items-center max-[980px]:gap-[20px]">
              <h5 className="font-montserrat font-[700] text-[#FFFFFF] text-[16px] leading-[24px] tracking-[0.1px] 
              max-[980px]:w-[70%] max-[980px]:text-center">Summer 2025</h5>
              <h1 className="font-montserrat font-[700] text-[#FFFFFF] text-[58px] leading-[80px] tracking-[0.2px]
              max-[980px]:w-[70%] max-[980px]:text-[40px] max-[980px]:leading-[50px] max-[980px]:text-center">NEW COLLECTION</h1>
              <h4 className="w-[376px] h-[60px] font-montserrat font-[400] text-[#FFFFFF] text-[20px] leading-[30px] tracking-[0.2px]
              max-[980px]:w-[70%] max-[980px]:h-[70%] max-[980px]:text-[20px] max-[980px]:leading-[30px] max-[980px]:text-center">
                We know how large objects will act, but things on a small scale.
              </h4>
              <Link className=" flex justify-center text-[24px] border-none text-[#FFFFFF] leading-[32px] no-underline visited:text-[#FFFFFF] 
              items-center w-[221px] h-[62px] bg-[#2DC071] font-montserrat font-[700] text-[14px] leading-[22px] tracking-[0.2px]
              max-[980px]:w-[221px] max-[980px]:h-[70%] max-[980px]:justify-center" to="/shop" 
              >SHOP NOW</Link>
                        
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Geri / İleri Butonları */}
        <div className="absolute top-1/2 left-0 w-full flex justify-between items-center px-6 z-20
        max-[980px]:max-w-screen">
          <button onClick={prevImage} className="z-10 bg-[transparent] border-none">
            <ChevronLeft size={50} color='white'/>
          </button>
          <button onClick={nextImage} className="z-10 bg-[transparent] border-none">
            <ChevronRight size={50} color='white'/>
          </button>
        </div>

        {/* Alt Göstergeler */}
          <div className="w-[126px] h-[10px] flex relative top-[657px] left-1/2 -translate-x-1/2 z-1 ">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-[10px] w-[63px] transition-opacity duration-300 ${
                  index === i ? 'bg-[#FFFFFF] opacity-100' : 'bg-[#FFFFFF] opacity-50'
                }`}
              ></div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Carousel1;
