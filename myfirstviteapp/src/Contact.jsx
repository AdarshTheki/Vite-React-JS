import { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import { useGlobalContext } from "./Context";
import { styled } from "styled-components";

const Contact = () => {
  const { updateContactPage } = useGlobalContext();
  useEffect(() => updateContactPage(), []);

  return (
    <>
      <HeroSection />
      <Wrapper>
        <h2 className='common-heading'>Feel Free to Contact us</h2>
        <iframe
          className='map-iframe'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.7766374801!2d77.30057078952956!3d12.954458676347052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1684928252367!5m2!1sen!2sin'
          width='100%'
          height='400'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>

      <div className='container'>
        <div className='contact-form'>
          {/* "formspree.io" go to website and create form */}
          <form action='https://formspree.io/f/xoqzzdpg' method='POST' className="contact-inputs">
            <input
              type='text'
              name='username'
              placeholder='username'
              autoComplete='off'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Enter email here'
              autoComplete='off'
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              required
              />
            <textarea name="massage" id="none" cols="30" rows="6"></textarea>

            <input type="submit" value='send'/>
          </form>
        </div>
      </div>
    </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .map-iframe {
    padding: 0 3rem;
  }
  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;
      
      .contact-inputs {
        display: flex;
        gap: 3rem;
        flex-direction: column;

        input[type="submit"]{
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scaleX(0.9);
          }
      }
    }
  }
`;

export default Contact;
