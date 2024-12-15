"use client";

import { useState } from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import Breadcrumb from "@/app/Components/Breadcrumb/Breadcrumb";

const cartItems = [
  {
    id: 1,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Programação em TypeScript",
    category: "TECNOLOGIA DA INFORMAÇÃO",
    installmentValue: 80.0,
    totalValue: 960.0,
  },
  {
    id: 2,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Redes de Computadores",
    category: "TECNOLOGIA DA INFORMAÇÃO",
    installmentValue: 70.0,
    totalValue: 840.0,
  },
  {
    id: 3,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Segurança da Informação",
    category: "TECNOLOGIA DA INFORMAÇÃO",
    installmentValue: 85.0,
    totalValue: 1020.0,
  },
];

export default function CartPage() {
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "debit" | null>(
    "debit"
  );

  return (
    <div className="bg-base-background min-h-screen">
      <Navbar />

      <div className="px-20 py-4">
        <Breadcrumb title="Meu Carrinho" />

        <h1 className="text-3xl font-baloo font-bold text-base-title mb-6">
          Produtos
        </h1>

        <div className="grid grid-cols-[2fr_1fr] gap-8">
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-base-white rounded-lg shadow-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-primary-dark text-lg font-bold mb-1">
                      {item.title}
                    </h2>
                    <span className="text-xs font-bold text-secondary-dark bg-secondary-light px-2 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-base-title font-bold">
                    12x de{" "}
                    <span className="text-primary-dark font-baloo text-xl">
                      R${item.installmentValue.toFixed(2)}
                    </span>
                  </p>
                  <p className="text-base-title font-bold text-lg">
                    R$ {item.totalValue.toFixed(2)}
                  </p>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <img
                    src="/assets/cart/Trash.png"
                    alt="Excluir"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-base-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-xl font-bold text-base-title mb-4">
              Finalizar compra
            </h2>

            <div className="mb-4">
              <p className="text-sm text-base-title mb-2">Forma de pagamento</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPaymentMethod("debit")}
                  className={`flex-1 flex items-center justify-center  text-base-text text-sm border rounded-md py-2 gap-2 ${
                    paymentMethod === "debit"
                      ? "bg-primary-light border-primary "
                      : "bg-base-button "
                  }`}
                >
                  <img
                    src="/assets/cart/CreditCard.png"
                    alt="Débito"
                    className="w-6 h-6"
                  />
                  CARTÃO DE DÉBITO
                </button>
                <button
                  onClick={() => setPaymentMethod("credit")}
                  className={`flex-1 flex items-center justify-center  text-base-text text-sm border rounded-md py-2 gap-2  ${
                    paymentMethod === "credit"
                      ? "bg-primary-light border-primary"
                      : "bg-base-button "
                  }`}
                >
                  <img
                    src="/assets/cart/CreditCard.png"
                    alt="Crédito"
                    className="w-6 h-6"
                  />
                  CARTÃO DE CRÉDITO
                </button>
              </div>
            </div>

            {paymentMethod === "credit" && (
              <div className="mb-4">
                <p className="text-sm text-base-title mb-2">
                  Dados de Pagamento
                </p>
                <input
                  type="text"
                  placeholder="Cartão de Crédito"
                  className="w-full px-4 py-2 border rounded-md mb-2 bg-base-button text-base-text"
                />
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Data de Validade"
                    className="w-1/2 px-4 py-2 border rounded-md bg-base-button text-base-text"
                  />
                  <input
                    type="text"
                    placeholder="Código de Segurança"
                    className="w-1/2 px-4 py-2 border rounded-md bg-base-button text-base-text"
                  />
                </div>
                <select className="w-full px-4 py-2 border rounded-md bg-base-button text-base-label filter ">
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option className="text-base-label" value="1x">
                    1x sem juros
                  </option>
                  <option className="text-base-label" value="2x">
                    2x de R$480,00
                  </option>
                  <option className="text-base-label" value="3x">
                    3x de R$320,00
                  </option>
                </select>
              </div>
            )}

            <div className="mb-4">
              <p className="text-sm text-base-title mb-2">Cupom de desconto</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Cupom"
                  className="flex-1 px-4 py-2 border rounded-l-md bg-base-button text-base-text"
                />
                <button className="bg-primary text-base-white px-4 py-2 rounded-r-md hover:bg-primary-dark">
                  INSERIR
                </button>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-lg text-base-title">Total</p>
              <p className="text-2xl font-bold text-base-text font-baloo">
                R$ 960,00
              </p>
            </div>

            <button className="w-full bg-primary text-base-white font-bold py-3 rounded-md hover:bg-primary-dark">
              FINALIZAR COMPRA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
