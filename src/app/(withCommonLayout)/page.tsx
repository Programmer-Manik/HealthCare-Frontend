import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div>
     <HeroSection/>
     <Specialist/>
     <TopRatedDoctors/>
    </div>
  );
};

export default HomePage;
