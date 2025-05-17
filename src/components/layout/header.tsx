import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from '../../assets/icons/goat-icon.svg?react';
import UserIcon from '../../assets/icons/user-icon.svg?react';
import SearchIcon from '../../assets/icons/search-icon.svg?react';
import CartIcon from '../../assets/icons/cart-icon.svg?react';
import NotificationIcon from '../../assets/icons/notification-icon.svg?react';

import LoginForms from "../forms/LoginForms";

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (isLoginOpen && loginRef.current && !loginRef.current.contains(target)) {
        setIsLoginOpen(false);
      }
      if (isNotifOpen && notifRef.current && !notifRef.current.contains(target)) {
        setIsNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLoginOpen, isNotifOpen]);

  const notifications: string[] = [
    // deixei vazio para testar o dropdown pequeninho quando não houver notificações
  ];

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
              className="px-3 py-1.5 w-full rounded-sm bg-[#151B3F] text-white border border-[#c9b793]
                         focus:outline-none focus:ring-2 focus:ring-[#c9b793] focus:border-[#c9b793]
                         transition-all text-sm md:text-base"
            />
            <SearchIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-black" />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">

          <div className="relative">
            <button
              onClick={() => setIsLoginOpen((p) => !p)}
              className="hover:text-[#c9b793]"
            >
              <UserIcon className="w-5 h-5 md:w-6 md:h-6 text-[#c9b793]" />
            </button>
            {isLoginOpen && (
              <div
                ref={loginRef}
                className="absolute right-0 top-12 w-[250px] bg-[#f1f1f1] text-black rounded-md shadow-xl p-4 z-50"
              >
                <h2 className="text-lg font-bold mb-3 text-center text-[#151B3F]">Entrar</h2>
                <LoginForms onSuccess={() => setIsLoginOpen(false)} />
                <p className="mt-4 text-xs text-center text-[#151B3F]">
                  Ainda não possui conta?{" "}
                  <Link to="/cadastro" className="text-[#FA8232] font-semibold hover:underline">
                    Clique aqui
                  </Link>
                </p>
              </div>
            )}
          </div>

          <span className="text-[#c9b793] hidden sm:block">|</span>

          <Link to="/cart" className="hover:text-[#c9b793]">
            <CartIcon className="w-5 h-5 md:w-6 md:h-6 text-[#c9b793]" />
          </Link>

          <span className="text-[#c9b793] hidden sm:block">|</span>

          <div className="relative">
            <button
              onClick={() => setIsNotifOpen((p) => !p)}
              className="hover:text-[#c9b793]"
            >
              <NotificationIcon className="w-5 h-5 md:w-6 md:h-6 text-[#c9b793]" />
            </button>
            {isNotifOpen && (
              <div
                ref={notifRef}
                className="absolute right-0 top-12 mt-2 w-[280px] max-h-64 bg-[#f1f1f1] text-black rounded-md shadow-xl p-3
                           overflow-y-auto z-50"
              >
                {notifications.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center py-4">
                    Sem novas atualizações
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {notifications.map((note, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-800 bg-gray-100 rounded px-3 py-2"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;