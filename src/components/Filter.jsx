import { LayoutGrid, List } from "lucide-react";

function Filter() {
  return (
    <>
        <div className="max-w-screen h-auto flex justify-center">
            <div className="w-[1050px] h-[98px]">
                <div className="w-full h-[50px] flex justify-between items-center">
                    <p className="w-[166px] text-[#737373] font-[700] text-[14px] leading-[24px] tracking-[0.2px] font-montserrat">Showing all 12 results</p>
                    <div className="w-[177px] h-full flex items-center gap-[15px]">
                        <p className="w-[166px] text-[#737373] font-[700] text-[14px] leading-[24px] tracking-[0.2px] font-montserrat">Views:</p>
                        <button className="border-none bg-[#FFFFFF]">
                            <LayoutGrid />
                        </button>
                        <button className="border-none bg-[#FFFFFF]">
                            <List color="#737373" />
                        </button>
                    </div>
                    <div className="w-[252px] h-full flex gap-[15px]">
                        <select name="Popularity" id="Popularity" className="w-[141px] border bg-[#DDDDDD] px-4 py-2 rounded-[5px] rounded font-[400] text-[14px] leading-[24px] text-[#737373] tracking-[0.2px] font-montserrat">
                            <option value="" disabled>Popularity</option>
                            <option value="all">All</option>
                            <option value="clothes">Clothes</option>
                            <option value="electronics">Electronics</option>
                            <option value="shoes">Shoes</option>
                        </select>
                        
                        <button 
                            className="w-[94px] bg-[#23A6F0] text-[#FFFFFF] rounded-[5px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-center font-montserrat">
                            Filter
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    )
}

export default Filter;