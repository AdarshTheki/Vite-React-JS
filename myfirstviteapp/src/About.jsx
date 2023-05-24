import { useEffect } from "react";
import HeroSection from "./Components/HeroSection"
import { useGlobalContext } from "./Context";

const About = () => {

  const { updateAboutPage } = useGlobalContext();
  useEffect(() => updateAboutPage(),[])

  return (
    <div>
      <HeroSection />      
    </div>
  )
}

export default About
