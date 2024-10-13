import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const links = [
    {
      id: 1,
      link: "/",
      name: "Главная",
    },
  ];
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
      <nav className="bg-[#475F45]/90 w-full z-10 section-above">
        <div className="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between">
          <div className="flex items-center w-full md:w-auto">
          <div className="md:hidden flex mr-4">
            <button
              className="text-[#d4d9dc] hover:text-white transition-colors duration-200"
              onClick={handleNavToggle}
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
            <NavLink to="/" className="text-3xl text-white">
              Kino
            </NavLink>
            
          </div>
          <ul className="hidden md:flex space-x-4">
            {links
              .map(({ id, link, name, onClick }) => (
                <li
                  key={id}
                  className="text-[#d4d9dc] cursor-pointer hover:text-white transition-colors duration-200"
                >
                  <a
                    href={link}
                    className="nav-link uppercase"
                    onClick={onClick || (() => setNavOpen(false))}
                  >
                    {name}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {navOpen && (
          <div className="absolute bg-[#475F45]/90 w-full z-10 section-above">
            <ul className="container mx-auto text-center cursor-pointer border-t-2 border-gray-500">
              {links
                .map(({ id, link, name, onClick }) => (
                  <li key={id} className="py-2 border-b-2 border-gray-500">
                    <a
                      onClick={onClick || (() => setNavOpen(false))}
                      href={link}
                      className="nav-link text-[#d4d9dc] hover:text-white font-semibold text-lg"
                    >
                      {name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}

        
      </nav>
  );
};

export default NavBar;
