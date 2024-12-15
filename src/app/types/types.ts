interface ICourseCard {
  id: number;
  imageUrl: string;
  technology: string;
  isEad: boolean;
  title: string;
  description: string;
  cashValue: number;
  installmentValue: number;
  numberOfInstallments: number;
  workload: string;
  offeredBy: string;
}

interface ICarouselCourse {
  carrosselId: string;
}

interface IBreadcrumb {
  title: string;
}

interface ICourseModalProps extends ICourseCard {
  isOpen: boolean;
  onClose: () => void;
}

interface IMyOrderCard {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  cardEnding: string;
  totalValue: number;
}

interface ICartProductProps {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  installmentValue: number;
  totalValue: number;
}
