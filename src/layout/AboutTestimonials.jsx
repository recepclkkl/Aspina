function AboutTestimonials() {
    
  return (
    <>
      <div className="w-screen h-auto flex justify-center items-center bg-[#2A7CC7] gap-[100px]">
          <div className="w-screen h-[412px] flex flex-col items-left justify-center gap-[30px] pl-[300px]
          max-[1050px]:items-center max-[1050px]:text-center max-[1050px]:pl-[0px]">
            <p className="font-montserrat font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#FFFFFF]">WORK WITH US</p>
            <p className="font-montserrat font-[700] text-[40px] leading-[50px] tracking-[0.2px] text-[#FFFFFF]
            max-[1050px]:w-[300px] ">Now Let’s grow Yours</p>
            <p className="max-w-[500px] font-montserrat font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#FFFFFF]
            max-[1050px]:w-[260px]">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
            <button className="w-[130px] h-[52px] bg-[#2A7CC7] border-[#FFFFFF] border-[1px] rounded-[5px] text-[#FFFFFF]">Show More</button>
          </div>
        <img className="h-[636px] object-cover max-[1050px]:hidden" src="./pictures/pinkwomen.jpg" alt="" />
      </div>
    </>
    )
}

export default AboutTestimonials;