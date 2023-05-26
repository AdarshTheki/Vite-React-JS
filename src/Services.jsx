import { styled } from "styled-components";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import images from "./assets/asset_4.png";

const Services = () => {
  const { services } = useGlobalContext();

  return (
    <Wrapper className='section'>
      <h2 className='common-heading'>Our Services</h2>
      <p className='paragraph'>
        We offer the full spectrum of services to help organizations work
        better. Everything from creating standards of excellence to training
        your people to work in more effective ways, assessing how you’re doing,
        and helping you perform even better in future. Very few others do this,
        and none have been doing it as long as we have.
      </p>
      <div className='container'>
        <div className='grid grid-three-column'>
          {services.map((curElem, index) => {
            const { name, url, site } = curElem;
            console.log(name, url);
            return (
              <div key={index} className='card'>
                <figure title={"image_" + index}>
                  <img src={images} alt={"image_" + index} />
                </figure>
                <div className='card-data'>
                  <h3>{name}</h3>
                  <p>
                    This is URL: {url} <br />
                    Site: <b>{site} </b>
                  </p>
                  <NavLink to='/service'>
                    <Button className='btn'>Read More</Button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

// Wrapper Styled Components
const Wrapper = styled.section`
  padding: 6rem 0;
  .paragraph {
    margin: auto;
    max-width: 800px;
    padding: 0 3rem 4rem 3rem;
  }

  background-color: ${({ theme }) => theme.colors.bg};

  .grid-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
