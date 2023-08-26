export const Navbar = () => {
  return (
    <nav className="hidden md:block w-full h-fit absolute top-0 left-0 p-[.5rem] pl-[3rem] pr-[3rem]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-[24px] h-[24px] bg-green-300"></div>
          <p className="font-bold">T-Pro-Painting</p>
        </div>
        <div className="flex items-center gap-14">
          <ul className="flex items-center gap-8">
            <li className="text-[#333]">Services</li>
            <li className="text-[#333]">Gallery</li>
            <li className="text-[#333]">About us</li>
            <li className="text-[#333]">FAQ</li>
          </ul>
          <button className="text-white bg-[#145B19]">Request Estimate</button>
        </div>
      </div>
    </nav>
  );
};
