import { useEffect } from "react";
import HeroSection from "./Components/HeroSection"
import { useGlobalContext } from "./Context"

const Contact = () => {

  const { updateContactPage } =  useGlobalContext();
  useEffect(() => updateContactPage(),[]);

  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default Contact
