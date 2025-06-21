
function Brands() {

  return (
    <>
        <div className="max-w-screen h-auto flex justify-center items-center">
            <div className="w-[1050px] h-[175px] flex justify-between items-center 
            max-[980px]:w-full max-[980px]:h-full max-[980px]:flex-col max-[980px]:gap-[20px] max-[980px]:pt-[50px] max-[980px]:pb-[50px]">
                <img className="w-[103px] h-[34px]" src="/pictures/hooli.jpg" alt="hooli" />
                <img className="w-[83px] h-[59px]" src="/pictures/lyft.jpg" alt="lyft" />
                <img className="w-[102px] h-[75px]" src="/pictures/V.jpg" alt="V" />
                <img className="w-[103px] h-[42px]" src="/pictures/stripe.jpg" alt="stripe" />
                <img className="w-[103px] h-[62px]" src="/pictures/aws.jpg" alt="aws" />
                <img className="w-[75px] h-[72px]" src="/pictures/robot.jpg" alt="robot" />
            </div>
        </div>
    </>
    )
}

export default Brands;