import Imagem1 from '../../assets/imgs/pizza-sitcker.png';

const Category = () => {
  return (
    <div className="flex justify-center w-full mt-28 px-4">
      
        <div className="relative w-full max-w-[1200px] flex items-center">
            <button className="hidden sm:flex absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-[#FA8232] text-white w-12 h-12 rounded-full items-center justify-center shadow-md hover:scale-105 transition">
                <span className="text-2xl font-bold">←</span>
            </button>
            
            <div className="flex gap-4 sm:gap-6 overflow-x-auto w-full justify-start scrollbar-hide">
            
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-[160px] sm:w-[200px] h-[180px] sm:h-[200px] border border-[#E4E7E9] rounded-md shrink-0">
                        <img
                            src={Imagem1}
                            alt={`Categoria ${index + 1}`}
                            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                        />
                        <span className="text-sm font-medium text-[#151B3F] mt-3 sm:mt-4">
                            Categoria {index + 1}
                        </span>
                    </div>
                ))}

            </div>

            <button className="hidden sm:flex absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#FA8232] text-white w-12 h-12 rounded-full items-center justify-center shadow-md hover:scale-105 transition">
                <span className="text-2xl font-bold">→</span>
            </button>
        </div>
    </div>
  );
};
export default Category;
