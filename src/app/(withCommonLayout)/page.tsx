import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/ui/HomePage/WhyUs/WhyUs";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div>
     <HeroSection/>
     <Specialist/>
     <TopRatedDoctors/>
     <WhyUs/>
    </div>
  );
};

export default HomePage;
