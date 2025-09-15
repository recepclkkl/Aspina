import Products from "../components/Products"

function ProductCards() {
  return (
    <>
    <div className="max-w-screen h-[1625px] bg-[#FFFFFF] flex flex-col items-center mt-[50px]
    max-[980px]:max-w-screen  max-[980px]:h-auto">
        <div className="w-[1124px] h-[1625px] flex flex-col items-center justify-around
        max-[980px]:w-full max-[980px]:h-full gap-[10px]">
            <div className="w-[692px] h-[102px] flex flex-col justify-center items-center gap-[10px] max-[980px]:w-[70%] max-[980px]:h-[200px] max-[980px]:justif">
                <p className="font-montserrat font-[400] text-[20px] text-[#737373] leading-[30px] tracking-[0.2px] max-[980px]:w-full max-[980px]:text-center">
                  Featured Products</p>
                <p className="font-montserrat font-[700] text-[24px] leading-[32px] tracking-[0.1px] max-[980px]:w-full max-[980px]:text-center">
                  BESTSELLER PRODUCTS</p>
                <p className="font-montserrat font-[400] text-[14px] text-[#737373] leading-[20px] tracking-[0.2px] max-[980px]:w-full max-[980px]:text-center">
                  Problems trying to resolve the conflict between </p>
            </div>
            <Products/>
        </div>
    </div>      
    </>
  )
}

export default ProductCards