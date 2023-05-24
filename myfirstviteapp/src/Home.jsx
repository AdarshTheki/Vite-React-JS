import { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import { useGlobalContext } from "./Context";

const Home = () => {
  // const data = {
  //   name: 'Adarsh Verma',
  //   image: './images/asset_1.png',
  //   massage: 'I am Adarsh Verma. A Front-End Developer and Freelancer. A Front-End Developer and freelancer'
  // };

  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(),[])

  return (
    <div>
      <HeroSection/>
    </div>
  );
};

export default Home;
