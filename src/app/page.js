
import Herocta from "@/components/cta/Herocta";
import DoctorSlider from "@/components/doctor/DoctorSlider";
import Navbar from "@/components/navbar/Navbar";
import HospitalServices from "@/components/services/HospitalServices";
import HeroSlider from "@/components/slider/Slider";

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <HeroSlider/>
      <Herocta/>
      <DoctorSlider/>
      <HospitalServices/>
      
    </main>
  );
}
