import { useState, useRef, useEffect } from "react";
import Logo from '../../assets/icons/goat-icon.svg?react';
import UserIcon from '../../assets/icons/user-icon.svg?react';
import SearchIcon from '../../assets/icons/search-icon.svg?react';
import CartIcon from '../../assets/icons/cart-icon.svg?react';
import NotificationIcon from '../../assets/icons/notification-icon.svg?react';
import { Link } from "react-router-dom";
import LoginForms from "../forms/LoginForms";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#151B3F] text-white relative">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">

        <div className="flex items-center ml-1">
          <Link to="/">
            <Logo className="w-12 h-10" />
          </Link>
       </div>

        <div className="flex justify-center flex-1 min-w-[200px] md:min-w-[400px]">
          <div className="relative w-full max-w-[700px]">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="px-3 py-1.5 w-full rounded-sm bg-[#151B3F] text-white border border-[#c9b793] focus:outline-none focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793] transition-all text-sm md:text-base"
            />
            <SearchIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-black" />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 relative">

          <button 
            type="button" 
            className="hover:text-[#c9b793] relative"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <UserIcon className="w-5 h-5 md:w-6 md:h-6 text-[#c9b793]" />
          </button>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 top-12 mt-2 w-[250px] bg-[#f1f1f1] text-black rounded-md shadow-xl p-4 z-50"
            >
              <h2 className="text-lg font-bold mb-3 text-center text-[#151B3F]">Entrar</h2>
              <LoginForms onSuccess={() => setIsDropdownOpen(false)} />
              <p className="mt-4 text-xs text-center text-[#151B3F]">
                Ainda não possui conta?{" "}
                <Link to="/cadastro" className="text-[#FA8232] font-semibold hover:underline">
                  Clique aqui
                </Link>
              </p>
            </div>
          )}

          <span className="text-[#c9b793] hidden sm:block">|</span>

         <Link to="/cart" className="hover:text-[#c9b793]">
           <CartIcon className="w-5 h-5 md:w-6 md:h-6 text-[#c9b793]" />
         </Link>

          <span className="text-[#c9b793] hidden sm:block">|</span>

          <button type="button" className="hover:text-[#c9b793]">
            <NotificationIcon className="w-5 h-5 md:w-6 md:h-6 text-[#c9b793]" />
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;