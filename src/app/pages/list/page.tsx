"use client";

import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CourseCard from "@/app/Components/CourseCard/CourseCard";
import { carouselItems } from "@/app/moks/CourseMoks";
import Navbar from "@/app/Components/Navbar/Navbar";
import Breadcrumb from "@/app/Components/Breadcrumb/Breadcrumb";

export default function ListPage() {
  const intensPerPage = 12;
  const timeToFetchMoreDataInMilliseconds = 500;
  const [courses, setCourses] = useState(carouselItems.slice(0, intensPerPage));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreCourses = () => {
    if (courses.length >= carouselItems.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      const newCourses = carouselItems.slice(
        courses.length,
        courses.length + intensPerPage
      );
      setCourses((prev) => [...prev, ...newCourses]);
    }, timeToFetchMoreDataInMilliseconds);
  };

  return (
    <div className="bg-base-background min-h-screen">
      <Navbar />

      <div className=" pr-20 pl-20">
        <Breadcrumb title="Listagem de Cursos" />
        <div className="mb-8">
          <h1 className="text-4xl font-baloo font-bold text-base-title mb-4">
            Cursos Online SENAI
          </h1>
          <p className="text-base text-base-subtitle">
            Descubra os cursos online do SENAI no futuro.digital! Aprenda novas
            habilidades para crescer na carreira, com flexibilidade e
            certificado garantido. Comece agora mesmo!
          </p>
        </div>

        <div className="flex gap-10">
          <aside className="w-64">
            <h2 className="font-roboto font-bold text-lg text-base-title mb-4">
              Filtros
            </h2>
            <div className="mb-6">
              <h3 className="text-base font-bold text-base-title mb-2">
                Área Tecnológica
              </h3>
              <ul>
                <li>
                  <label className="flex items-center gap-2 text-base text-base-subtitle">
                    <input type="checkbox" />
                    Alimentos
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2 text-base text-base-subtitle">
                    <input type="checkbox" />
                    Automotiva
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2 text-base text-base-subtitle">
                    <input type="checkbox" />
                    Tecnologia da Informação
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-base-title mb-2">
                Modalidade
              </h3>
              <ul>
                <li>
                  <label className="flex items-center gap-2 text-base text-base-subtitle">
                    <input type="checkbox" />
                    Presencial
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2 text-base text-base-subtitle">
                    <input type="checkbox" />
                    EAD
                  </label>
                </li>
              </ul>
            </div>
          </aside>

          <main className="flex-1">
            <InfiniteScroll
              dataLength={courses.length}
              next={fetchMoreCourses}
              hasMore={hasMore}
              loader={<h4 className="text-center mt-4">Carregando...</h4>} // Loader
              endMessage={
                <p className="text-center mt-4">
                  <b>Você viu todos os cursos disponíveis!</b>
                </p>
              }
            >
              <div className="grid grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    imageUrl={course.imageUrl}
                    title={course.title}
                    technology={course.technology}
                    isEad={course.isEad}
                    description={course.description}
                    cashValue={course.cashValue}
                    installmentValue={course.installmentValue}
                    numberOfInstallments={course.numberOfInstallments}
                  />
                ))}
              </div>
            </InfiniteScroll>
          </main>
        </div>
      </div>
    </div>
  );
}
