import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
  {
    bgColor: '#23856D',
    titleSmall: 'Summer 2025',
    titleBig: 'Vita Classic Product',
    description: 'We know how large objects will act, We know how are objects will act, We know',
    price:"$16.48",
    img:"./src/pictures/whiteman.png"
    },
  {
    bgColor: '#5A2D82',
    titleSmall: 'Autumn 2025',
    titleBig: 'LIMITED EDITION',
    description: 'We know how large objects will act, We know how are objects will act, We know',
    price:"$18.99",
    img:"./src/pictures/whiteman.png"
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
    <div className="w-[1440px] h-[709px] rounded-[5px] border relative overflow-hidden border-none">
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
          className="w-[975px] h-[651px] absolute top-[48px] left-[232px] gap-[80px] flex flex-col justify-center z-10 text-white"
        >
            <div className='w-[1049px] h-[599px] flex'>
                <div className="w-[509px] h-[432px] pt-[48px] pb-[48px] gap-[30px] flex flex-col z-1 justify-around">
                    <h5 className="font-montserrat font-[400] text-[#FFFFFF] text-[20px] leading-[30px] tracking-[0.2px]">
                    {slides[index].titleSmall}
                    </h5>
                    <h1 className="font-montserrat font-[700] text-[#FFFFFF] text-[58px] leading-[80px] tracking-[0.2px]">
                    {slides[index].titleBig}
                    </h1>
                    <h4 className="w-[341px] h-[40px] font-montserrat font-[400] text-[#FFFFFF] text-[14px] leading-[20px] tracking-[0.2px]">
                    {slides[index].description}
                    </h4>
                    <div className='flex items-center gap-[34px]'>
                        <p className="font-montserrat font-[700] text-[#FFFFFF] text-[24px] leading-[32px] tracking-[0.1px]">{slides[index].price}</p>
                        <a href="#" className="flex justify-center no-underline visited:text-[#FFFFFF] items-center w-[221px] h-[62px] bg-[#2DC071] font-montserrat font-[700] text-[14px] leading-[22px] tracking-[0.2px] text-[#FFFFFF] border-none">
                            SHOP NOW
                        </a>
                    </div>
                    
                </div>
                <div className='w-[510px] h-[685px] object-cover'>
                    <img className="w-[443px] h-[685px]" src={slides[index].img} alt="#" />
                </div>
            </div>
        </motion.div>
      </AnimatePresence>

      {/* Geri / İleri Butonları */}
      <div className="absolute top-1/2 left-0 w-full flex justify-between items-center px-6 z-20">
        <button onClick={prevSlide} className="z-20 bg-transparent border-none">
          <img src="./src/pictures/right.png" alt="Geri" />
        </button>
        <button onClick={nextSlide} className="z-20 bg-transparent border-none">
          <img src="./src/pictures/left.png" alt="İleri" />
        </button>
      </div>

      {/* Alt Göstergeler */}
      <div className="w-[126px] h-[10px] flex relative top-[657px] left-1/2 -translate-x-1/2 z-1 ">
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
  );
}

export default Carousel2;
