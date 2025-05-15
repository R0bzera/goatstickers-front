import Imagem1 from '../../assets/imgs/kit_de_adesivos_sticker_skate_skateboard_49_pecas_28641_1_bc_thumbnail 1.svg';
import Imagem2 from '../../assets/imgs/360fx360f 1.svg';
import Imagem3 from '../../assets/imgs/10_thumbnail 1.svg';
import Entrega from '../../assets/icons/pakage-icon.svg?react';
import Trofeu from '../../assets/icons/tropy-icon.svg?react';
import Cartao from '../../assets/icons/creditCard-icon.svg?react';
import HeadPhone from '../../assets/icons/herdphone-icon.svg?react';

const ProductGrid = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            
            <div className="grid grid-cols-1 md:grid-cols-[750px_auto] gap-7">
                
                <div className="bg-[#F2F4F5] w-full md:w-[750px] h-[520px] rounded-md overflow-hidden flex flex-col md:flex-row items-center justify-between p-6">
                    <div>
                        <p className="text-sm font-bold flex items-center gap-2">
                            <span className="w-5 h-[2px] bg-gray-800"></span>
                            O MELHOR MATERIAL DO MERCADO
                        </p>
                        <h2 className="text-3xl font-bold text-gray-800">PACK STICKERS</h2>
                        <p className="text-lg text-gray-500 mt-2">
                            Economize seu dinheiro adquirindo nosso pack de 45 stickers.
                        </p>
                        <button className="mt-12 bg-[#FA8232] text-white font-semibold px-12 py-4 rounded-md flex items-center gap-2 hover:bg-[#e67329] transition-all">
                            Compre já
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>

                    <img
                        src={Imagem1}
                        alt="Produto Grande"
                        className="w-[300px] h-[300px] md:w-[370px] md:h-[370px] object-cover rounded-md mt-6 md:mt-0"
                    />
                </div>

                <div className="flex flex-col gap-7">

                    <div className="bg-[#151B3F] w-full md:w-[424px] h-[248px] rounded-md overflow-hidden flex flex-row items-center">
                        <div className="flex flex-col justify-center p-4 w-full">
                            <p className="text-xs text-[#C8B793] mt-2">PROMOÇÃO GOAT</p>
                            <h2 className="text-lg font-bold text-white mt-3">ADESIVOS HOLOGRÁFICOS</h2>

                            <button className="mt-5 bg-[#C8B793] text-white font-semibold px-4 py-3 rounded-md flex items-center gap-2 hover:bg-[#b5a684] transition-all">
                                Compre já
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

                        <div className="h-full">
                            <img
                                src={Imagem2}
                                alt="Produto Pequeno 1"
                                className="h-full w-[150px] md:w-[1000px] object-cover"
                            />
                        </div>
                    </div>

                    <div className="bg-[#F2F4F5] w-full md:w-[424px] h-[248px] rounded-md overflow-hidden flex flex-row items-center">
                        <div className="h-full">
                            <img
                                src={Imagem3}
                                alt="Produto Pequeno 2"
                                className="h-full w-[150px] md:w-[300px] object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center p-4 w-full">
                            <h2 className="text-lg font-bold text-gray-800">Adesivos Personalizados</h2>
                            <p className="text-xs text-gray-500 mt-1">CONSULTE NOSSOS PREÇOS</p>

                            <button className="mt-10 bg-[#FA8232] text-white font-semibold px-9 py-4 rounded-md flex items-center gap-1 hover:bg-[#e67329] transition-all w-auto self-start">
                                Compre já
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full mt-10">
                <div className="w-full md:w-[1200px] border border-[#E4E7E9] py-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 rounded-md px-4">
                    
                    {[Entrega, Trofeu, Cartao, HeadPhone].map((Icon, idx) => (
                        <div key={idx} className="flex items-center flex-1 text-[#151B3F] justify-center">
                            <Icon className="w-12 h-12" />
                            <div className="flex flex-col justify-center ml-3 text-center md:text-left">
                                <span className="text-sm font-semibold leading-none">Título</span>
                                <p className="text-xs text-gray-500 leading-none mt-1">Descrição</p>
                            </div>
                            {idx !== 3 && (
                                <span className="hidden md:block text-[#E4E7E9] text-4xl font-light mx-6">|</span>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};
export default ProductGrid;
