"use client";

import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CourseCard from "@/app/Components/CourseCard/CourseCard";
import { carouselItems } from "@/app/moks/CourseMoks";
import Navbar from "@/app/Components/Navbar/Navbar";
import Breadcrumb from "@/app/Components/Breadcrumb/Breadcrumb";
import { useRouter, useSearchParams } from "next/navigation";
import { ICarouselItems } from "@/app/types/types";

interface Ilist {
  id: number;
  technology: string;
}

export default function ListPage() {
  const intensPerPage = 12;
  const searchParams = useSearchParams();
  const technologyFilter = searchParams.get("technology");
  const EADFilter = searchParams.get("ead");
  const coursesInMyRegion = searchParams.get("coursesInMyRegion");

  const router = useRouter();
  const timeToFetchMoreDataInMilliseconds = 500;
  const [courses, setCourses] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tecnologiesAvailable, setTecnologiesAvailable] = useState<Ilist[]>([]);
  const [selectedTechnology, setSelectedTechnology] =
    useState(technologyFilter);
  const [showCoursesInMyRegion, setShowCoursesInMyRegion] = useState<boolean>(
    !!coursesInMyRegion
  );
  const [showCoursesEAD, setShowCoursesEAD] = useState<boolean>(!!EADFilter);

  function handleFilterTecnologies() {
    const uniqueTechnologies: Set<string> = new Set();
    const uniqueList: Ilist[] = [];

    carouselItems.forEach((item) => {
      if (!uniqueTechnologies.has(item.technology)) {
        uniqueTechnologies.add(item.technology);
        uniqueList.push({
          id: item.id,
          technology: item.technology,
        });
      }
    });

    setTecnologiesAvailable(uniqueList);
  }

  function handleFilterList() {
    const senaiShopUserState = localStorage.getItem("senaiShopUserState");

    let localCarouselItems: ICarouselItems[] = carouselItems;

    if (selectedTechnology) {
      localCarouselItems = carouselItems.filter((item) => {
        if (item.technology === selectedTechnology) {
          return item;
        } else {
          return null;
        }
      });
    }

    if (senaiShopUserState && showCoursesInMyRegion) {
      localCarouselItems = localCarouselItems.filter((item) => {
        if (item.state === senaiShopUserState) {
          return item;
        } else {
          return null;
        }
      });
    }

    if (showCoursesEAD) {
      localCarouselItems = localCarouselItems.filter((item) => {
        if (item.isEad) {
          return item;
        } else {
          return null;
        }
      });
    }
    setCourses(localCarouselItems.slice(0, intensPerPage));
  }

  useEffect(() => {
    handleFilterList();
  }, [selectedTechnology, showCoursesInMyRegion, showCoursesEAD]);

  useEffect(() => {
    handleFilterTecnologies();
    handleFilterList();
  }, []);

  const fetchMoreCourses = () => {
    if (courses.length >= carouselItems.length) {
      setHasMore(false);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      const newCourses = carouselItems.slice(
        courses.length,
        courses.length + intensPerPage
      );
      setIsLoading(false);
      setCourses((prev) => [...prev, ...newCourses]);
    }, timeToFetchMoreDataInMilliseconds);
  };

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);

    params.set(key, value);
    router.push(`${window.location.pathname}?${params.toString()}`);
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
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className="flex gap-10">
          <aside className="w-64">
            <h2 className="font-roboto font-bold text-lg text-base-title mb-4">
              Filtros
            </h2>
            <div className="mb-4 ">
              <ul>
                <li>
                  <label className="flex items-center gap-2 text-base text-base-subtitle">
                    <input
                      type="checkbox"
                      checked={showCoursesInMyRegion}
                      onChange={() => {
                        setShowCoursesInMyRegion(!showCoursesInMyRegion);
                        updateQueryParams(
                          "coursesInMyRegion",
                          String(!showCoursesInMyRegion)
                        );
                      }}
                    />
                    Cursos da minha região
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <label className="flex items-center gap-2 text-base text-base-subtitle">
                    <input
                      type="checkbox"
                      checked={showCoursesEAD}
                      onChange={() => {
                        setShowCoursesEAD(!showCoursesEAD);
                        updateQueryParams("ead", String(!showCoursesEAD));
                      }}
                    />
                    Cursos EAD
                  </label>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <label
                htmlFor="technology-select"
                className="block text-base font-bold text-base-title mb-2"
              >
                Área Tecnológica
              </label>
              <select
                id="technology-select"
                className="border px-3 py-2 rounded bg-base-input text-base-text placeholder-base-label w-full"
                onChange={(e) => {
                  if (e.target.value) {
                    setSelectedTechnology(e.target.value);
                    updateQueryParams("technology", String(e.target.value));
                  } else {
                    setSelectedTechnology("");
                    updateQueryParams("technology", "");
                  }
                }}
                value={selectedTechnology || ""}
              >
                <option value="">Selecione uma área</option>
                {tecnologiesAvailable.map((item) => (
                  <option key={item.id} value={item.technology}>
                    {item.technology}
                  </option>
                ))}
              </select>
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
                    offeredBy={course.offeredBy}
                    workload={course.workload}
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
