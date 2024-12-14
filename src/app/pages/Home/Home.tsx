import CarouselTechnology from "@/app/Components/ CarouselTechnology/ CarouselTechnology";
import CarouselCourse from "@/app/Components/CarouselCourse/CarouselCourse";
import Navbar from "@/app/Components/Navbar/Navbar";

export default function HomePage() {
  return (
    <div className="bg-white ">
      <Navbar />
      <div className=" pr-20 pl-20">
        <CarouselTechnology />
        <CarouselCourse />
      </div>
    </div>
  );
}
