"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CourseCard from "../CourseCard/CourseCard";

const carouselItems: ICourseCard[] = [
  {
    id: 1,
    imageUrl: "/assets/outhers/CarouselBanner.png",
    title: "Tecnologia da Informação 1",
    technology: "Programação",
    isEad: true,
    description:
      "Aprenda os fundamentos de programação e lógica computacional. aldjlka  jldjasl jdlksa jlkdjsalkdlksaj dlksajldkjsal jsalk dlksa",
    cashValue: 120.5,
    installmentValue: 12.5,
    numberOfInstallments: 10,
  },
  {
    id: 2,
    imageUrl: "/assets/outhers/CarouselBanner.png",
    title: "Tecnologia da Informação 2",
    technology: "Redes de Computadores",
    isEad: true,
    description: "Curso avançado sobre configuração e manutenção de redes.",
    cashValue: 200.0,
    installmentValue: 20.0,
    numberOfInstallments: 10,
  },
  {
    id: 3,
    imageUrl: "/assets/outhers/CarouselBanner.png",
    title: "Tecnologia da Informação 3",
    technology: "Segurança da Informação",
    isEad: false,
    description:
      "Aprenda a proteger sistemas e dados contra ameaças cibernéticas.",
    cashValue: 150.0,
    installmentValue: 15.0,
    numberOfInstallments: 10,
  },
  {
    id: 4,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 4",
    technology: "Inteligência Artificial",
    isEad: true,
    description:
      "Curso introdutório sobre algoritmos de IA e aprendizado de máquina.",
    cashValue: 300.0,
    installmentValue: 30.0,
    numberOfInstallments: 10,
  },
  {
    id: 5,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 5",
    technology: "Desenvolvimento Web",
    isEad: false,
    description:
      "Domine as principais tecnologias para criar aplicações web modernas.",
    cashValue: 180.0,
    installmentValue: 18.0,
    numberOfInstallments: 10,
  },
  {
    id: 6,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 6",
    technology: "Desenvolvimento Mobile",
    isEad: true,
    description:
      "Curso completo sobre criação de aplicativos para Android e iOS.",
    cashValue: 250.0,
    installmentValue: 25.0,
    numberOfInstallments: 10,
  },
  {
    id: 7,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 7",
    technology: "Banco de Dados",
    isEad: false,
    description: "Aprenda a projetar, administrar e otimizar bancos de dados.",
    cashValue: 220.0,
    installmentValue: 22.0,
    numberOfInstallments: 10,
  },
  {
    id: 8,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 8",
    technology: "Big Data",
    isEad: true,
    description:
      "Entenda os conceitos de Big Data e análise de dados em larga escala.",
    cashValue: 350.0,
    installmentValue: 35.0,
    numberOfInstallments: 10,
  },
];

export default function CarouselCourse() {
  return (
    <div className="h-[384px] relative flex justify-center">
      <button
        className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg"
        aria-label="Previous"
      >
        <img
          alt="Senai Shop"
          src="/assets/outhers/CaretLeft.png"
          className="h-4 flex items-center justify-center"
        />
      </button>
      <div className="max-w-[90%] w-full flex justify-center">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{ clickable: true }}
          spaceBetween={3}
          slidesPerView={3}
        >
          {carouselItems.map((item: ICourseCard) => (
            <SwiperSlide key={item.id}>
              <CourseCard
                id={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                technology={item.technology}
                isEad={item.isEad}
                description={item.description}
                cashValue={item.cashValue}
                installmentValue={item.installmentValue}
                numberOfInstallments={item.numberOfInstallments}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg"
        aria-label="Next"
      >
        <img
          alt="Senai Shop"
          src="/assets/outhers/CaretRight.png"
          className="h-4 flex items-center justify-center"
        />
      </button>
    </div>
  );
}
