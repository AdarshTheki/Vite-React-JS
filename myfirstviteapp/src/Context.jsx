import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const API = 'https://api.nasa.gov/planetary/apod?api_key=VbgUXm5d6CTT1AuafdGkuRpH2h3eOQM4BLg57q5Z'

const initialState = {
  name: "",
  image: "",
  services: [],
};

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

export { AppProvider, useGlobalContext };
