import Imagem1 from '../../assets/imgs/kit_de_adesivos_sticker_skate_skateboard_49_pecas_28641_1_bc_thumbnail 1.svg';

const FeaturedGrid = () => {
  return (
    <div className="flex justify-center w-full mt-20 px-4">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-6">

            <div className="w-full md:w-[300px] h-[520px] bg-[#FFE7D6] rounded-md flex flex-col justify-between p-6 overflow-hidden">

                <div className="flex flex-col items-center gap-8">
                    <h2 className="text-2xl font-bold text-[#151B3F] text-center">30% de desconto</h2>
                    <p className="text-sm text-[#151B3F] text-center">
                        Aproveite o combo especial <br className="hidden md:block" /> com 50 adesivos exclusivos.
                    </p>
                    <button className="bg-[#FA8232] text-white font-semibold px-6 py-2 md:py-3 rounded-md flex items-center gap-2 hover:bg-[#e67329] transition-all">
                        Compre já
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center">
                    <img
                        src={Imagem1}
                        alt="Imagem do Produto"
                        className="w-full h-[200px] object-contain"
                    />
                </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 flex-1">

                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="flex flex-col border border-[#E4E7E9] rounded-md w-full h-[250px] overflow-hidden hover:scale-105 hover:border-[#FA8232] transition-all"
                        >
                            <div className="flex items-center justify-center p-2 h-[65%]">
                                <img
                                src={Imagem1}
                                alt={`Categoria ${index + 1}`}
                                className="w-20 h-28 object-contain"
                                />
                            </div>

                            <div className="flex flex-col justify-between h-[35%] px-3 pb-3">
                                <div className="flex justify-start">
                                    <span className="text-sm font-medium text-[#151B3F]">
                                        Categoria {index + 1}
                                    </span>
                                </div>
                                <div className="flex justify-start mt-1">
                                    <span className="text-xs font-semibold text-[#FA8232]">R$ {29.9 + index},90</span>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)};
export default FeaturedGrid;