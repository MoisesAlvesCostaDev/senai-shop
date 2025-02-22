export interface ICourseCard {
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

export interface ICarouselCourse {
  carrosselId: string;
  filterBy?: "isRecentlySeen" | "state" | "ead";
}

export interface IBreadcrumb {
  title: string;
}

export interface ICourseModalProps extends ICourseCard {
  isOpen: boolean;
  onClose: () => void;
}

export interface IMyOrderCard {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  cardEnding: string;
  totalValue: number;
}

export interface ICartProductProps {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  installmentValue: number;
  totalValue: number;
}

export interface IAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ICarouselItems {
  id: number;
  imageUrl: string;
  title: string;
  technology: string;
  isEad: boolean;
  description: string;
  cashValue: number;
  installmentValue: number;
  numberOfInstallments: number;
  workload: string;
  offeredBy: string;
  state: string;
  isFavorited: boolean;
  isRecentlySeen: boolean;
}

export interface INavBarType {
  type: "inputSearch" | "buttonSearch";
}
