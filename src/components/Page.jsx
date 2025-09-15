

const data = [
  { page: "First", color: "#F3F3F3", text: "#BDBDBD" },
  { page: "1", color: "#FFFFFF", text: "#23A6F0" },
  { page: "2", color: "#FFFFFF", text: "#23A6F0" },
  { page: "3", color: "#FFFFFF", text: "#23A6F0" },
  { page: "Next", color: "#FFFFFF", text: "#23A6F0" },
];

function Page({ selectedPage, setSelectedPage }) {
  const changeProducts = (page) => {
    if (page === "First") {
      setSelectedPage("1");
    } else if (page === "Next") {
      const nextPage = String(Math.min(Number(selectedPage) + 1, 3));
      setSelectedPage(nextPage);
    } else {
      setSelectedPage(page);
    }
  };

  return (
    <div className="max-w-screen h-auto flex justify-center">
      <div className="w-[313px] h-[74px] flex justify-center gap-2 border border-[#BDBDBD] rounded-[5px] 
      max-[980px]:w-[90%]">
        {data.map((item, index) => {
          const isSelected =
            item.page === selectedPage ||
            (item.page === "First" && selectedPage === "1");

          const isFirst = item.page === "First";
          const firstInactive = isFirst && selectedPage !== "1";

          return (
              <button
                key={index}
                onClick={() => changeProducts(item.page)}
                className={`w-full px-4 py-2 rounded-l-[5px] rounded-r-[5px] font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] border-none
                  max-[980px]:w-full max-[980px]:h-full
                  ${
                    isSelected && !isFirst
                      ? "bg-[#23A6F0] text-[#FFFFFF]"
                      : firstInactive
                      ? "bg-[#F3F3F3] text-[#BDBDBD]"
                      : "bg-[#FFFFFF] text-[#23A6F0]"
                  }
                  hover:bg-[#23A6F0] hover:text-[#FFFFFF]`}>
                {item.page}
              </button>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
