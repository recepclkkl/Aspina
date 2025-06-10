
function Footer() {

  return (
    <>
    <div className="w-[1440px] h-[488px] flex flex-col justify-between bg-[#FFFFFF]">
        <div className="w-[1440px] h-[142px] flex justify-center bg-[#FAFAFA]">
            <div className="w-[1050px] h-[138px] flex items-center justify-between">
                <p className="font-montserrat font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">Bandage</p>
                <div className="w-[236px] h-[24px] flex gap-[20px] justify-center">
                    <img src="./public/pictures/f.png" alt="" />
                    <img src="./public/pictures/i.png" alt="" />
                    <img src="./public/pictures/t.png" alt="" />
                </div>
            </div>
        </div>
        <hr className="w-[1057px] border border-[1px] border-[#E6E6E6]" />
        <div className="w-[1440px] h-[272px] flex justify-center">
            <div className="w-[1050px] h-[270px] flex gap-[30px] justify-center">
                <div className="w-[148px] h-[170px]">
                    <p>Company Info</p>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </div>
                <div className="w-[152px] h-[170px]">
                    <p>Legal</p>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We Are Hiring</p>
                    <p>Blog</p>
                </div>
                <div className="w-[148px] h-[170px]">
                    <p>Features</p>
                    <p>Business Marketing</p>
                    <p>User Analytic</p>
                    <p>Live Chat</p>
                    <p>Unlimited Support</p>
                </div>
                <div className="w-[152px] h-[170px]">
                    <p>Resources</p>
                    <p>IOS & Android</p>
                    <p>Watch a Demo</p>
                    <p>Customers</p>
                    <p>API</p>
                </div>
                <div className="w-[321px] h-[131px]">
                    <p>Get In Touch</p>
                    <input
                    type="email"
                    placeholder="Your Email"
                    name="mail"
                    id="mail"
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button>Subscribe</button>
                    <p>Lore imp sum dolor Amit</p>
                </div>
            </div>
        </div>

        <div className="w-[1440px] h-[74px]"></div>
    </div>
      
    </>
  )
}

export default Footer
