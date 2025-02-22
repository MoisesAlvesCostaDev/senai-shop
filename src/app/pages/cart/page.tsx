"use client";

import { useState } from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import Breadcrumb from "@/app/Components/Breadcrumb/Breadcrumb";
import CartProduct from "@/app/Components/CartProduct/CartProduct";
import { cartItems } from "@/app/moks/cartItemsMock";

export default function CartPage() {
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "debit" | null>(
    "debit"
  );

  return (
    <div className="bg-base-background min-h-screen">
      <Navbar type="buttonSearch" />
      <div className="px-20 py-4">
        <Breadcrumb title="Meu Carrinho" />
        <h1 className="text-3xl font-baloo font-bold text-base-title mb-6">
          Produtos
        </h1>
        <div className="grid grid-cols-[2fr_1fr] gap-8">
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                category={item.category}
                installmentValue={item.installmentValue}
                totalValue={item.totalValue}
              />
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
