import CarouselTechnology from "@/app/Components/ CarouselTechnology/ CarouselTechnology";
import Navbar from "@/app/Components/Navbar/Navbar";

export default function HomePage() {
  return (
    <div className="bg-white ">
      <Navbar />
      <div className=" pr-20 pl-20">
        <CarouselTechnology />
      </div>
    </div>
  );
}
