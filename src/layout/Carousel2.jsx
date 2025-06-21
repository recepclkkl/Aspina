import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    bgColor: '#23856D',
    titleSmall: 'Summer 2025',
    titleBig: 'Vita Classic Product',
    description: 'We know how large objects will act, We know how are objects will act, We know',
    price:"$16.48",
    img:"./pictures/whiteman.png"
    },
  {
    bgColor: '#5A2D82',
    titleSmall: 'Autumn 2025',
    titleBig: 'LIMITED EDITION',
    description: 'We know how large objects will act, We know how are objects will act, We know',
    price:"$18.99",
    img:"./pictures/whiteman.png"
    },
];

function Carousel2() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
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

    <div className="max-w-screen h-[709px] flex justify-center max-[980px]:max-w-screen max-[980px]:h-[709px] max-[980px]:mt-[20px] max-[980px]:h-[1236px]">
      <div className="w-[1440px] h-[full] rounded-[5px] border relative overflow-hidden border-none 
      max-[980px]:w-full">
        {/* Arka plan renk */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-0 w-full h-full z-0"
            style={{ backgroundColor: slides[index].bgColor }}
          />
        </AnimatePresence>

        {/* Yazılar */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`text-${index}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="w-[975px] h-[709px] absolute top-[48px] left-[232px] gap-[80px] flex flex-col justify-center z-10 text-white
            max-[980px]:left-[0] max-[980px]:max-w-screen max-[980px]:h-full  max-[980px]:top-[0]"
          >
              <div className='w-full h-[709px] flex 
              max-[980px]:justify-between max-[980px]:flex-col max-[980px]:w-full max-[980px]:h-full'>
                  <div className="w-[509px] h-[432px] pt-[48px] pb-[48px] gap-[30px] flex flex-col z-1 justify-around
                  max-[980px]:w-full  max-[980px]:h-[429px] max-[980px]:items-center">
                      <h5 className="font-montserrat font-[400] text-[#FFFFFF] text-[20px] leading-[30px] tracking-[0.2px] max-[980px]:text-center">
                      {slides[index].titleSmall}
                      </h5>
                      <h1 className="font-montserrat font-[700] text-[#FFFFFF] text-[58px] leading-[80px] tracking-[0.2px]
                      max-[980px]:text-[40px] max-[980px]:leading-[50px] max-[980px]:text-center">
                      {slides[index].titleBig}
                      </h1>
                      <h4 className="w-[341px] h-[40px] font-montserrat font-[400] text-[#FFFFFF] text-[14px] leading-[20px] tracking-[0.2px]
                      max-[980px]:h-auto max-[980px]:text-[20px] max-[980px]:leading-[30px] max-[980px]:text-center">
                      {slides[index].description}
                      </h4>
                      <div className='flex items-center gap-[34px] max-[980px]:flex-col max-[980px]:gap-[10px]'>
                          <p className="font-montserrat font-[700] text-[#FFFFFF] text-[24px] leading-[32px] tracking-[0.1px] max-[980px]:text-center">{slides[index].price}</p>
                          <a href="#" className="flex justify-center no-underline visited:text-[#FFFFFF] 
                          items-center w-[221px] h-[62px] bg-[#2DC071] font-montserrat font-[700] text-[14px] leading-[22px] tracking-[0.2px] text-[#FFFFFF] border-none max-[980px]:text-center">
                              SHOP NOW
                          </a>
                      </div>
                      
                  </div>
                  <div className='w-[510px] h-[685px] object-cover 
                  max-[980px]:w-full  max-[980px]:h-[300px] max-[980px]:flex max-[980px]:justify-center  max-[980px]:items-end'>
                      <img className="w-[443px] h-[685px] max-[980px]:w-full max-[980px]:h-auto max-[980px]:max-h-[800px] object-cover object-top max-[980px]:flex" src={slides[index].img} alt="#" />
                  </div>
              </div>
          </motion.div>
        </AnimatePresence>

        {/* Geri / İleri Butonları */}
        <div className="absolute top-1/2 left-0 w-full flex justify-between items-center px-6 z-20">
          <button onClick={prevSlide} className="z-20 bg-transparent border-none">
            <ChevronLeft />
          </button>
          <button onClick={nextSlide} className="z-20 bg-transparent border-none">
            <ChevronRight />
          </button>
        </div>

        {/* Alt Göstergeler */}
        <div className="w-[126px] h-[10px] flex relative top-[657px] left-1/2 -translate-x-1/2 z-1 
        max-[980px]:top-[1200px] max-[980px]:z-20">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-[10px] w-[63px] transition-opacity duration-300 z-20 ${
                index === i ? 'bg-[#FFFFFF] opacity-100' : 'bg-[#FFFFFF] opacity-50'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel2;
