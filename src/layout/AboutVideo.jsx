
function AboutVideo() {
    
  return (
    <>
    <div className="w-screen h-[800px] justify-center items-center flex mt-[100px] mb-[100px] 
    max-[680px]:h-[600px] max-[480px]:mb-[50px] max-[480px]:mt-[50px]">
        <div className="w-[90%] max-w-[2500px] h-[90%] flex justify-center items-center bg-[#FFFFFF] rounded-[10px] overflow-hidden
        max-[990px]:h-[500px] max-[880px]:h-[400px] max-[680px]:h-[300px] max-[580px]:h-[200px] ">
            <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/KLuTLF3x9sA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    </div>

    </>
    )
}

export default AboutVideo;