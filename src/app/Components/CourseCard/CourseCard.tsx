"use client";

export default function CourseCard({
  id,
  imageUrl,
  technology,
  isEad,
  title,
  description,
  cashValue,
  installmentValue,
  numberOfInstallments,
}: ICourseCard) {
  return (
    <div
      className="w-[292px] h-[352px] bg-base-white shadow-xl rounded-lg flex flex-col border border-base-hover "
      style={{ opacity: 1 }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[140px] object-cover rounded-t-lg"
      />

      <div className=" p-3 flex flex-col gap-3">
        <div className="justify-center flex gap-2">
          <span className="text-xs font-bold text-secondary-dark bg-secondary-light px-2 py-1 rounded-md">
            {technology}
          </span>
          {isEad && (
            <span className="text-xs font-bold text-secondary-dark bg-secondary-light px-2 py-1 rounded-md">
              EAD
            </span>
          )}
        </div>

        <h3 className="text-primary-dark text-lg font-baloo font-bold text-center ">
          {title}
        </h3>

        <p className="text-base-subtitle text-sm font-roboto">
          {description?.length > 123
            ? `${description.substring(0, 123)}...`
            : description}
        </p>

        <div className="grid grid-cols-5">
          <div className="flex flex-col gap-1 col-span-4">
            <p className="text-base-text text-sm font-bold">
              {numberOfInstallments}x de{" "}
              <span className="text-base-text font-baloo text-2xl font-bold">
                R${installmentValue?.toFixed(2)}
              </span>
            </p>
            <p className="text-base-text text-md font-baloo ">
              R${" "}
              <span className="text-xl font-bold">{cashValue?.toFixed(2)}</span>
            </p>
          </div>
          <div>
            <button className="bg-secondary text-base-white p-2 w-12 h-12 flex items-center justify-center rounded-md shadow-md ">
              <img
                src="/assets/outhers/ShoppingCart.png"
                alt="Comprar"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
