import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logoImage from "../../assets/logo.png";
import profilePicture from "../../assets/profile-picture.png";
import { Link } from "react-router-dom";
import { Routes } from "../../Routes/RouteConstants";
import { navConstants } from "../../Constants/navbarConstants";
import bellIcon from "../../assets/notification bell.png"

const BaseNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full border-b bg-white border-gray-100 shadow-sm font-roboto">
        <div className="container mx-auto lg:px-16 py-4 flex items-center justify-between px-2">
          <div>
            <img src={logoImage} alt={navConstants?.altText} />
          </div>
          <div className="hidden md:flex items-center gap-8 text-[#424242]">
            <Link to={Routes?.HOME} className="text-blue-600 cursor-pointer">{navConstants.explore}</Link>
            <Link to={Routes?.ROOT} className="hover:text-blue-600 cursor-pointer">{navConstants?.search}</Link>
            <Link to={Routes?.ROOT} className="hover:text-blue-600 cursor-pointer">{navConstants.hotel}</Link>
            <Link to={Routes?.ROOT} className="hover:text-blue-600 cursor-pointer">{navConstants?.offers}</Link>

            <img src={bellIcon} alt={navConstants?.altText} />
            <img
              src={profilePicture}
              className="w-9 h-9 rounded-full cursor-pointer"
              alt={navConstants?.altText}
            />
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>
      {open && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-100 shadow-sm">
          <h2 className="text-lg font-semibold">{navConstants?.menu}</h2>
          <FiX className="text-2xl cursor-pointer" onClick={() => setOpen(false)} />
        </div>
        <div className="flex flex-col p-6 gap-6 text-[#424242]">
          <Link to={Routes?.HOME} className="text-blue-600 cursor-pointer">{navConstants?.explore}</Link>
          <Link to={Routes?.ROOT} className="hover:text-blue-600 cursor-pointer">{navConstants?.search}</Link>
          <Link to={Routes?.ROOT} className="hover:text-blue-600 cursor-pointer">{navConstants?.hotel}</Link>
          <Link to={Routes?.ROOT} className="hover:text-blue-600 cursor-pointer">{navConstants?.offers}</Link>
          <div className="flex items-center gap-4 mt-4">
            <img src={bellIcon} alt={navConstants?.altText} />
            <img
              src={profilePicture}
              alt={navConstants?.altText}
              className="w-9 h-9 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseNavbar;
