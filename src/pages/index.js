
import HomeBlog from "@/components/blog/HomeBlog";
import ProductSection from "@/components/books/ProducctSection";
import Herocta from "@/components/cta/Herocta";
import DoctorSlider from "@/components/doctor/DoctorSlider";
import FooterSection from "@/components/footer/FooterSection";
import Navbar from "@/components/navbar/Navbar";
import HospitalServices from "@/components/services/HospitalServices";
import HeroSlider from "@/components/slider/Slider";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <HeroSlider/>
      <Herocta/>
      <DoctorSlider/>
      <HospitalServices/>
      <HomeBlog/>
      <FooterSection/>
      
    </main>
  );
}
