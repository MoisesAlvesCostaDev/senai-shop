"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { carouselItems } from "@/app/moks/CourseMoks";
import { useEffect, useState } from "react";
import { ICarouselItems } from "@/app/types/types";

interface Ilist {
  id: number;
  imageUrl: string;
  technology: string;
}

export default function CarouselTechnology() {
  const carouselMaxItensDefault = 6;
  const [list, setList] = useState<Ilist[]>([]);
  const [carouselMax, setCarouselMax] = useState<number>(
    carouselMaxItensDefault
  );

  function handleFilterTecnologies() {
    const uniqueTechnologies: Set<string> = new Set();
    const uniqueList: Ilist[] = [];
    const senaiShopUserState = localStorage.getItem("senaiShopUserState");

    let localCarouselItems: ICarouselItems[];

    if (senaiShopUserState) {
      localCarouselItems = carouselItems.filter((item) => {
        if (item.state === senaiShopUserState) {
          return item;
        } else {
          return null;
        }
      });
    } else {
      localCarouselItems = carouselItems;
    }

    localCarouselItems.forEach((item) => {
      if (!uniqueTechnologies.has(item.technology)) {
        uniqueTechnologies.add(item.technology);
        uniqueList.push({
          id: item.id,
          imageUrl: item.imageUrl,
          technology: item.technology,
        });
      }
    });

    if (uniqueList.length < carouselMaxItensDefault) {
      setCarouselMax(uniqueList.length);
    }

    setList(uniqueList);
  }

  useEffect(() => {
    handleFilterTecnologies();
  }, []);

  return (
    <div className="h-[174px] relative flex justify-center">
      <button
        className="custom-prev-Technology absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg"
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
            prevEl: ".custom-prev-Technology",
            nextEl: ".custom-next-Technology",
          }}
          pagination={{ clickable: true }}
          spaceBetween={120}
          slidesPerView={carouselMax}
        >
          {list.map((item) => (
            <SwiperSlide key={item.id}>
              <a
                href={`/pages/list?technology=${item.technology}`}
                className="text-center w-[150px]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.technology}
                  className="w-20 h-20 rounded-full mx-auto"
                />
                <p className="mt-3 font-roboto text-[16px] font-bold text-base-subtitle h-[100px]">
                  {item.technology}
                </p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        className="custom-next-Technology absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg"
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
