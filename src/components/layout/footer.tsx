import Logo from '../../assets/icons/goat-icon.svg';

const Footer = () => {
  return (
    <footer className="bg-[#151B3F] w-full py-8 flex flex-col items-center justify-center">
      
      <div className="flex items-center gap-3">
        <img
          src={Logo}
          alt="Logo GoatStickers"
          className="w-10 h-10 object-contain"
        />
        <span className="text-white text-xl font-semibold">GoatStickers</span>
      </div>

      <p className="text-gray-400 text-xs mt-4">© 2025 GoatStickers. Todos os direitos reservados.</p>
      
    </footer>
  );
};

export default Footer;