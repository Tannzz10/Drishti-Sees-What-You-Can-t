import { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets"; 
export const Headers = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <NavLink to="/">
              <h1 className="text-2xl sm:text-1xl font-bold">
                <span className="text-neutral-800">DRI</span>
                <span className="text-[#813B06]">SHTI</span>
              </h1>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className="hover:text-[#813B06] transition">Home</NavLink>
            <NavLink to="/Pageservice" className="hover:text-[#813B06] transition">Services</NavLink>
            <NavLink to="/Pagemediate" className="hover:text-[#813B06] transition">Mediate</NavLink>
            <button className="bg-[#813B06] text-white px-4 py-1 rounded hover:bg-[#682f04] transition">LOGIN</button>
          </nav>

          {/* Hamburger icon */}
          <div className="md:hidden cursor-pointer">
            <img
              src={showMobileMenu ? assets.cross_icon : assets.menu_icon}
              alt="menu"
              className="w-6"
              onClick={() => setMobileMenu(!showMobileMenu)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-40 transform transition-transform ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <img
            onClick={() => setMobileMenu(false)}
            src={assets.cross_icon}
            alt="close"
            className="w-6 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center gap-6 mt-4 text-lg font-medium">
          <NavLink onClick={() => setMobileMenu(false)} to="/" className="hover:text-[#813B06]">Home</NavLink>
          <NavLink onClick={() => setMobileMenu(false)} to="/Pageservice" className="hover:text-[#813B06]">Services</NavLink>
          <NavLink onClick={() => setMobileMenu(false)} to="/Pagemediate" className="hover:text-[#813B06]">Mediate</NavLink>
          <button className="bg-[#813B06] text-white px-6 py-2 rounded hover:bg-[#682f04] transition">LOGIN</button>
        </ul>
      </div>
    </header>
  );
};
