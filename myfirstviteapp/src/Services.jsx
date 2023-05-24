import { useGlobalContext } from "./Context"

const Services = () => {
  const {services} = useGlobalContext();

  return (
    <>
      <h1>Services</h1>
    </>
  )
}

export default Services
