import Imagem1 from '../../assets/imgs/kit_de_adesivos_sticker_skate_skateboard_49_pecas_28641_1_bc_thumbnail 1.svg';

function Banner() {
  return (
    <div className="flex justify-center w-full mt-10 px-4">
      <div className="relative w-full max-w-[1200px] bg-[#FFE7D6] rounded-md py-10 px-6 md:px-12 flex flex-col md:flex-row items-center">

        <div className="flex flex-col gap-4 z-10 text-center md:text-left">
          <p className="text-xs md:text-sm font-bold text-[#151B3F]">NOVIDADE EXCLUSIVA</p>
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#151B3F] leading-tight">
            Conheça nossa nova coleção <br className="hidden md:block" /> de adesivos especiais!
          </h1>
          <p className="text-sm md:text-base text-[#151B3F]">
            Produtos únicos, qualidade premium e entrega rápida.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="mt-4 md:mt-6 bg-[#FA8232] text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-md flex items-center gap-2 hover:bg-[#e67329] transition-all w-fit">
              Comprar Agora
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden md:block absolute right-[-80px] top-1/2 transform -translate-y-1/2 z-0">
          <img
            src={Imagem1}
            alt="Imagem Banner"
            className="w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
export default Banner;