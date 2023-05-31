import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import asset_logo from '../assets/asset_logo.png';
import { styled } from "styled-components";

// Header Section
const Header = () => {
  return (
    <>
      <MainHeader>
        <NavLink to='/'>
          <img className="logo" src={asset_logo} alt='logo' />
        </NavLink>
        <Navbar />
      </MainHeader>
    </>
  );
};
export default Header;

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 170px;
  }
`;