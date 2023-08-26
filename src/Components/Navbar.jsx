import logo from "../assets/Logo.jpg"

export const Navbar = () => {


  return (
    <nav className="hidden md:block w-full h-fit absolute top-0 left-0 z-10 bg-white font-cormorant p-[.5rem] pl-[3rem] pr-[3rem]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo image" className="w-[40px] h-[40px]" />
          <p className="font-bold">T-Pro-Painting</p>
        </div>
        <div className="flex items-center gap-14">
          <ul className="flex items-center gap-8">
            <li className="font-bold text-[#333]">Services</li>
            <li className="font-bold text-[#333]">Gallery</li>
            <li className="font-bold text-[#333]">About us</li>
            <li className="font-bold text-[#333]">FAQ</li>
          </ul>
          <button className="text-white text-[1.2rem] py-[.3rem] bg-[#145B19] font-bold">Request Estimate</button>
        </div>
      </div>
    </nav>
  );
};
