"use client";

import React from "react";

export default function CourseModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  workload,
  offeredBy,
  description,
  cashValue,
  installmentValue,
  numberOfInstallments,
}: Readonly<ICourseModalProps>) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-base-white rounded-lg shadow-lg w-[800px] relative">
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        >
          ✖
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-base-title mb-4">{title}</h2>

          <div className="mb-4 text-base">
            <p className="font-bold text-base-title">
              Carga Horária: <span className="font-normal">{workload}</span>
            </p>
            <p className="font-bold text-base-title">
              Ofertado por: <span className="font-normal">{offeredBy}</span>
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-base-title mb-2">
              Descrição
            </h3>
            <p className="text-base text-base-subtitle">{description}</p>
          </div>

          <div className="mb-4">
            <p className="text-xl font-bold text-base-title">
              {numberOfInstallments}x de{" "}
              <span className="text-primary-dark">
                R${installmentValue.toFixed(2)}
              </span>
            </p>
            <p className="text-lg font-bold text-base-title">
              R${cashValue.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button className="flex items-center gap-2 text-secondary-dark border border-secondary-dark px-4 py-2 rounded-md hover:bg-secondary-light">
              ❤️ Adicionar aos Favoritos
            </button>
            <button className="bg-primary-dark text-base-white px-6 py-2 rounded-md hover:bg-primary-light">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
