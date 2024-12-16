"use client";

interface CartProductProps {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  installmentValue: number;
  totalValue: number;
}

export default function CartProduct({
  id,
  imageUrl,
  title,
  category,
  installmentValue,
  totalValue,
}: Readonly<CartProductProps>) {
  return (
    <div
      key={id}
      className="bg-base-white rounded-lg shadow-lg p-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-primary-dark text-lg font-bold mb-1">{title}</h2>
          <span className="text-xs font-bold text-secondary-dark bg-secondary-light px-2 py-1 rounded-md">
            {category}
          </span>
        </div>
      </div>

      <div className="text-right">
        <p className="text-base-title font-bold">
          12x de{" "}
          <span className="text-primary-dark font-baloo text-xl">
            R${installmentValue.toFixed(2)}
          </span>
        </p>
        <p className="text-base-title font-bold text-lg">
          R$ {totalValue.toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => {}}
        className="text-red-500 hover:text-red-700 transition"
        aria-label="Remover produto"
      >
        <img src="/assets/cart/Trash.png" alt="Excluir" className="w-6 h-6" />
      </button>
    </div>
  );
}
