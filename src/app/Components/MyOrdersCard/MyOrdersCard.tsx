"use client";

export default function MyOrderCard({
  id,
  imageUrl,
  title,
  category,
  description,
  cardEnding,
  totalValue,
}: Readonly<IMyOrderCard>) {
  return (
    <div key={id} className="bg-base-white shadow-md rounded-lg p-4 mt-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <div className="flex justify-between items-start">
              <h2 className="text-primary-dark text-lg font-bold mb-1 flex-1">
                {title}
              </h2>
              <span className="text-xs font-bold text-secondary-dark bg-secondary-light px-2 py-1 rounded-md whitespace-nowrap">
                {category}
              </span>
            </div>
            <p className="text-sm text-base-text mb-2">{description}</p>
          </div>
        </div>
      </div>

      <div className="w-full flex pl-28">
        <div className="mr-4">
          <div className="text-base-text font-bold flex gap-2">
            <img
              className="w-4 h-4"
              alt="Card"
              src="/assets/myorders/CreditCard.png"
            />
            **** **** **** {cardEnding}
          </div>
          <p className="text-sm text-base-text">em 12x</p>
        </div>

        <div className="flex items-center">
          <p className="text-lg font-bold text-base-title">
            R${totalValue.toFixed(2)}
          </p>
        </div>

        <div className="flex-1"></div>

        <div className="flex items-center">
          <button className="bg-secondary text-base-white px-6 py-3 rounded-md hover:bg-secondary-dark transition flex gap-2">
            ACESSAR CURSO{" "}
            <img
              className="w-4 h-4"
              alt="Paper Plane"
              src="/assets/myorders/PaperPlaneTilt.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
