"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const carouselItems = [
  {
    id: 1,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 1",
  },
  {
    id: 2,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 2",
  },
  {
    id: 3,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 3",
  },
  {
    id: 4,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 4",
  },
  {
    id: 5,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 5",
  },
  {
    id: 6,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 6",
  },
  {
    id: 7,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 7",
  },
  {
    id: 8,
    imageUrl: "/assets/outhers/Carousel.png",
    title: "Tecnologia da Informação 8",
  },
];

export default function CarouselTechnology() {
  return (
    <div className="h-[174px] relative flex justify-center">
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
          spaceBetween={2} // Espaçamento entre os slides
          slidesPerView={6} // Ajuste automático do tamanho dos slides
        >
          {carouselItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="text-center w-[150px]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-20 h-20 rounded-full mx-auto"
                />
                <p className="mt-3 font-roboto text-[16px] font-bold text-base-subtitle h-[100px]">
                  {item.title}
                </p>
              </div>
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
