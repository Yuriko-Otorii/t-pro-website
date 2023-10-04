import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/Logo.jpg";

export const Navbar = ({ setIsContactModalOpen }) => {
  return (
    <nav className="hidden md:block w-full h-fit absolute top-0 left-0 z-10 bg-white p-[.5rem] pl-[3rem] pr-[3rem]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo image" className="w-[40px] h-[40px]" />
        </div>
        <div className="flex items-center gap-14">
          <ul className="flex items-center gap-8">
            <li>
              <AnchorLink className="font-bold text-[#333]" href="#services">
                Services
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="font-bold text-[#333]" href="#protections">
                Protection
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="font-bold text-[#333]" href="#gallery">
                Gallery
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="font-bold text-[#333]" href="#aboutus">
                About us
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="font-bold text-[#333]" href="#faq">
                FAQ
              </AnchorLink>
            </li>
          </ul>
          <button
            className="text-white text-[1.2rem] py-[.3rem] px-[.8rem] bg-[#145B19] font-bold hover:text-[#145B19] hover:bg-white transition duration-[500ms]"
            onClick={() => setIsContactModalOpen(true)}
          >
            Request Estimate
          </button>
        </div>
      </div>
    </nav>
  );
};
