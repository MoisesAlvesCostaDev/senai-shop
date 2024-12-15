import CarouselTechnology from "@/app/Components/CarouselTechnology/CarouselTechnology";
import CarouselCourse from "@/app/Components/CarouselCourse/CarouselCourse";
import Navbar from "@/app/Components/Navbar/Navbar";

export default function HomePage() {
  return (
    <div className=" bg-base-background min-h-screen ">
      <Navbar />
      <div className=" pr-20 pl-20">
        <h2 className="font-baloo text-3xl text-base-title font-bold mb-7">
          Navegue por Áreas Tecnológicas
        </h2>
        <CarouselTechnology />
        <h2 className="font-baloo text-3xl text-base-title font-bold mb-7 mt-7">
          Cursos vistos recentemente
        </h2>
        <CarouselCourse carrosselId={"1"} />
        <div className="flex items-center">
          <h2 className="font-baloo flex-1 text-3xl text-base-title font-bold mb-7 mt-7">
            Cursos da sua região
          </h2>
          <div>
            <a
              href={`/pages/list?coursesInMyRegion=true`}
              className="text-primary bg-base-white border border-primary rounded-2xl p-2 text-sm"
            >
              VER MAIS
            </a>
          </div>
        </div>

        <CarouselCourse carrosselId={"2"} />
        <div className="flex items-center">
          <h2 className="font-baloo flex-1 text-3xl text-base-title font-bold mb-7 mt-7">
            Cursos EAD
          </h2>
          <div>
            <a
              href={`/pages/list?ead=true`}
              className="text-primary bg-base-white border border-primary rounded-2xl p-2 text-sm"
            >
              VER MAIS
            </a>
          </div>
        </div>
        <CarouselCourse carrosselId={"3"} />
      </div>
    </div>
  );
}
