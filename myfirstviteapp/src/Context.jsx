import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const API = 'https://kontests.net/api/v1/all'

const initialState = {
  name: "",
  image: "",
  services: [],
  massage:'',
};

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Adarsh Verma",
        image: "./images/asset_1.png",
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "About here",
        image: "./images/asset_2.png",
      },
    });
  };
  const updateContactPage = () => {
    return dispatch({
      type: "CONTACT_UPDATE",
      payload: {
        name: "contact here",
        image: "./images/asset_3.png",
        massage:"Welcome to our Contact Us blog! We value your feedback, questions, and suggestions. Our team is dedicated to providing exceptional customer service and ensuring your experience with us is top-notch. Whether you have a product inquiry, need assistance with an order, or simply want to share your thoughts, we're here to help. Please feel free to reach out to us through the contact information provided below. We appreciate your support and look forward to hearing from you soon!"
      },
    });
  };

  // To get API data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type:'GET_SERVICES', payload: data})
    } catch (error) {
      console.log(error);
    }
  } 
  // To call the API
  useEffect(() => {
    getServices(API);
  },[])
  
  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage, updateContactPage }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useGlobalContext };
