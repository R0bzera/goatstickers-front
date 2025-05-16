import React from "react";
import Header from "../components/layout/header";
import { Link } from "react-router-dom";
import CartItem, { CartItemProps } from "../components/layout/cartItem";
import stickerUrl from "../assets/imgs/kit_de_adesivos_sticker_skate_skateboard_49_pecas_28641_1_bc_thumbnail 1.svg";

const CartPage: React.FC = () => {
  const cartItems: CartItemProps[] = [
    { id: 1, name: "Sticker Skate", image: stickerUrl, price: 29.9 },
    { id: 2, name: "Sticker Holográfico", image: stickerUrl, price: 19.9 },
  ];

  const handleRemove = (id: number) => {
    console.log("remover item", id);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const frete = 10.0;
  const total = subtotal + frete;

  return (
    <>
      <Header />

      <div className="flex justify-center w-full py-10 px-4 bg-white">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-6">

          <div className="flex-1 border border-[#E4E7E9] bg-transparent rounded-md p-6">
            <h2 className="text-xl font-semibold text-[#151B3F] mb-4">Seu Carrinho</h2>

            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onRemove={handleRemove}
              />
            ))}

          </div>

          <div className="w-full lg:w-[350px] border border-[#E4E7E9] bg-transparent rounded-md p-6 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-[#151B3F]">Resumo</h2>

            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-sm font-medium text-[#151B3F]">
                R$ {subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Frete</span>
              <span className="text-sm font-medium text-[#151B3F]">
                R$ {frete.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-600">Total</span>
              <span className="text-lg font-semibold text-[#151B3F]">
                R$ {total.toFixed(2)}
              </span>
            </div>

            <div className="border-t border-[#E4E7E9] pt-4">
              <h3 className="text-sm font-medium text-[#151B3F] mb-2">
                Endereço de Entrega
              </h3>
              <p className="text-sm text-gray-500">
                Rua Exemplo, 123<br />
                Bairro, Cidade – UF<br />
                CEP 00000-000
              </p>
            </div>

            <Link
              to="/checkout"
              className="mt-6 bg-[#FA8232] text-white font-semibold py-3 rounded-md text-center hover:bg-[#e67329] transition-all"
            >
              Ir para Método de Pagamento
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;