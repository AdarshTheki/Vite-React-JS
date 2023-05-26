import { styled } from 'styled-components'
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
      {/* <img src=".//image.jpg" alt="image_Error" /> */}
      <h1>This Page is 404 Error</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptatum sapiente odio provident, architecto, impedit dolores quisquam qui aliquid deleniti quibusdam ipsam deserunt accusantium et, obcaecati tempora exercitationem quia unde!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, distinctio nostrum, quasi eligendi esse tempora dolorum voluptas dolor, quibusdam id velit totam tempore vel reprehenderit nisi assumenda a officia. Rem.</p>
      <NavLink to='/'>
        <Button type='button' className='btn'>Go Back</Button>      
      </NavLink>      
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-item; center;
  flex-direction: column; 
  h1 {
    color: #777;
    margin-bottom: 3rem;
  }
  p {
    line-height: 2;
    font-weight: 500;
    color: hotpink;
    width: 70%;
    margin: auto;
  }
  .btn {
    font-size: 2rem;
    width: 150px;
    margin: 1rem auto 0;
    margin-top: 1rem;
  }
`;
export default Error
