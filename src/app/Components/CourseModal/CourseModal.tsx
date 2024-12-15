import ReactDOM from "react-dom";

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
  technology,
  isEad,
}: Readonly<ICourseModalProps>) {
  if (!isOpen) return null;

  const modalContent = (
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
          className="absolute top-3 right-3 text-base-white bg-secondary w-10 h-10 rounded-md hover:text-red-700"
        >
          X
        </button>

        <div className="p-6">
          <div className="grid grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-bold text-primary font-baloo text-4xl mb-4">
                {title}
              </h2>
            </div>

            <div>
              <div className="flex justify-center gap-2">
                <span className="text-xs font-bold text-secondary-dark bg-secondary-light px-2 py-1 rounded-md">
                  {technology}
                </span>
                {isEad && (
                  <span className="text-xs font-bold text-secondary-dark bg-secondary-light px-2 py-1 rounded-md">
                    EAD
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mb-2 text-base flex gap-2">
            <p className="font-bold text-base-title">
              Carga Horária: <span className="font-normal">{workload}</span>
            </p>
            <p className="font-bold text-base-title">
              Ofertado por: <span className="font-normal">{offeredBy}</span>
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold font-baloo text-base-title mb-2">
              Descrição
            </h3>
            <p className="text-base text-base-subtitle">{description}</p>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <p className="text-base-text text-lg ">
                {numberOfInstallments}x de{" "}
                <span className="text-base-text font-baloo text-4xl font-bold">
                  R${installmentValue?.toFixed(2)}
                </span>
              </p>
              <p className="text-base-text text-md font-baloo">
                R${" "}
                <span className="text-2xl font-bold">
                  {cashValue?.toFixed(2)}
                </span>
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 mt-4">
              <button className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary hover:bg-secondary-dark">
                <img alt="Coracao" src="/assets/outhers/CardHeath.png"></img>
              </button>
              <button className="bg-primary text-base-white font-bold px-6 py-2 rounded-md hover:bg-primary-light">
                ADICIONAR AO CARRINHO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root") || document.body
  );
}
