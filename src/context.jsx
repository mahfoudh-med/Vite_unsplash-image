import { useContext, useState, useEffect, createContext } from "react";

const AppContext = createContext();

const prefersMode = () =>
  localStorage.getItem("darkTheme")
    ? JSON.parse(localStorage.getItem("darkTheme"))
    : matchMedia("(prefers-color-scheme:dark)").matches;

const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(prefersMode());
  const [searchText, setSearchText] = useState("cat");
  useEffect(() => {
    document.querySelector("body").classList.toggle("dark-mode", prefersMode());
  }, []);

  const handleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    document.querySelector("body").classList.toggle("dark-mode", newTheme);
    localStorage.setItem("darkTheme", newTheme);
  };
  return (
    <AppContext.Provider
      value={{ handleTheme, darkTheme, searchText, setSearchText }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export default AppProvider;
