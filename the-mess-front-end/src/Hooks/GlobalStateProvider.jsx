import { createContext } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext(null);

const GlobalStateProvider = ({ children }) => {
  // const APIHost = "https://pet-adoption-platform.onrender.com";
  // const APIHost = "http://127.0.0.1:8000";

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStateProvider;
