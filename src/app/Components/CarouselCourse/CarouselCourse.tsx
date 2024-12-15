"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CourseCard from "../CourseCard/CourseCard";
import { carouselItems } from "@/app/moks/CourseMoks";

export default function CarouselCourse({ carrosselId }: ICarouselCourse) {
  return (
    <div className="h-[394px] relative flex justify-center">
      <button
        className={`custom-prev-${carrosselId} absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg`}
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
            prevEl: `.custom-prev-${carrosselId}`,
            nextEl: `.custom-next-${carrosselId}`,
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
                workload={item.workload}
                offeredBy={item.offeredBy}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        className={`custom-next-${carrosselId} absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg`}
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
