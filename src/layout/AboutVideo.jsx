
function AboutVideo() {
    
  return (
    <>
    <div className="w-screen h-[800px] justify-center items-center flex mt-[60px] mb-[60px]">
        <div className="w-[90%] max-w-[1058px] h-[600px] max-h-[595px] flex justify-center items-center bg-[#F6F8FB] rounded-[10px] overflow-hidden">
            <iframe
                className=" w-full h-full "
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