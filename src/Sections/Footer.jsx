import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/Logo.jpg";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center border-2 border-t-[#145B19] mt-10 pt-10">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex gap-10 mb-5 md:mb-0 md:flex-row md:gap-12">
          <div className="flex flex-col">
            <p className="font-bold mb-3">Company</p>
            <ul className="flex flex-col gap-1">
              <li>
                <AnchorLink className="text-[#213547]" href="#aboutus">
                  About us
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="text-[#213547]" href="#protections">
                  Protections
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="text-[#213547]" href="#gallery">
                  Gallery
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="text-[#213547]" href="#testimonials">
                  Testimonials
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="text-[#213547]" href="#history">
                  History
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="text-[#213547]" href="#faq">
                  FAQ
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="text-[#213547]" href="#career">
                  Career
                </AnchorLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="font-bold mb-3">Services</p>
            <ul className="flex flex-col gap-1">
              <li>
                <AnchorLink className="text-[#213547]" href="#services">
                  Interior & Exterior Painting
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="text-[#213547]" href="#services">
                  Wallpaper Removal
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="text-[#213547]" href="#services">
                  Exterior Metal
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="text-[#213547]" href="#services">
                  Deck Sealing
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="text-[#213547]" href="#services">
                  Power Washing
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="text-[#213547]" href="#services">
                  Limewash Paint
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="mb-5 w-20 h-20" />
          <div className="flex flex-col items-start gap-1">
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <p>tpropainting03@gmail.com</p>
            </div>
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <p>+1 (236) 886 - 1661</p>
            </div>
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p>Vancouver, BC</p>
            </div>
          </div>
          <div >
            <a
              href="https://instagram.com/tpropainting?igshid=MzMyNGUyNmU2YQ=="
              rel="noreferrer"
              target="_blank"
              className="flex items-center mt-5 gap-2 text-[#213547]"
            >
              <p>Find our works!</p>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#4d4d4d" }}
                size="lg"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm mt-8 mb-2">©T-Pro Painting</p>
    </div>
  );
};
