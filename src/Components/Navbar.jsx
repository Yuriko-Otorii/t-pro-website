import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/Logo.jpg";

export const Navbar = ({ setIsContactModalOpen }) => {
  return (
    <nav className="hidden md:block w-full h-fit absolute top-0 left-0 z-10 bg-white p-[.5rem] pl-[3rem] pr-[3rem]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo image" className="w-[40px] h-[40px]" />
          <p className="font-bold text-lg">T-Pro painting</p>
        </div>
        <div className="flex items-center gap-14">
          <ul className="flex items-center gap-8">
            <li>
              <AnchorLink className="font-bold text-[#333] pb-2 px-2 relative hover:text-[#145B19] before:content-[''] before:bg-[#145B19] before:w-full before:h-[2px] before:absolute before:left-0 before:bottom-0 before:margin-auto before:origin-right-top before:scale-x-0 before:scale-y-100 before:transition before:duration-300 hover:before:origin-left-top hover:before:scale-x-100 hover:before:scale-y-100" href="#services">
                Services
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="font-bold text-[#333] pb-2 px-2 relative hover:text-[#145B19] before:content-[''] before:bg-[#145B19] before:w-full before:h-[2px] before:absolute before:left-0 before:bottom-0 before:margin-auto before:origin-right-top before:scale-x-0 before:scale-y-100 before:transition before:duration-300 hover:before:origin-left-top hover:before:scale-x-100 hover:before:scale-y-100" href="#protections">
                Protection
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="font-bold text-[#333] pb-2 px-2 relative hover:text-[#145B19] before:content-[''] before:bg-[#145B19] before:w-full before:h-[2px] before:absolute before:left-0 before:bottom-0 before:margin-auto before:origin-right-top before:scale-x-0 before:scale-y-100 before:transition before:duration-300 hover:before:origin-left-top hover:before:scale-x-100 hover:before:scale-y-100" href="#gallery">
                Gallery
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="font-bold text-[#333] pb-2 px-2 relative hover:text-[#145B19] before:content-[''] before:bg-[#145B19] before:w-full before:h-[2px] before:absolute before:left-0 before:bottom-0 before:margin-auto before:origin-right-top before:scale-x-0 before:scale-y-100 before:transition before:duration-300 hover:before:origin-left-top hover:before:scale-x-100 hover:before:scale-y-100" href="#aboutus">
                About us
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="font-bold text-[#333] pb-2 px-2 relative hover:text-[#145B19] before:content-[''] before:bg-[#145B19] before:w-full before:h-[2px] before:absolute before:left-0 before:bottom-0 before:margin-auto before:origin-right-top before:scale-x-0 before:scale-y-100 before:transition before:duration-300 hover:before:origin-left-top hover:before:scale-x-100 hover:before:scale-y-100" href="#faq">
                FAQ
              </AnchorLink>
            </li>
          </ul>
          <button
            className="text-white text-[1.2rem] py-[.3rem] px-[.8rem] bg-[#145B19] font-bold border-2 border-[#145B19] hover:text-[#145B19] hover:bg-white transition duration-[500ms]"
            onClick={() => setIsContactModalOpen(true)}
          >
            Request Estimate
          </button>
        </div>
      </div>
    </nav>
  );
};
