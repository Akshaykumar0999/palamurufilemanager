import React, { useState } from "react";
export const NavMenuContext = React.createContext();
export const NavMenuContextProvider = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);
  const [theme, setTheme] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [activeMateID, setActiveMateID] = useState(null);
  return (
    <NavMenuContext.Provider
      value={{
        openNav,
        setOpenNav,
        theme,
        setTheme,
        openEdit,
        setOpenEdit,
        activeMateID,
        setActiveMateID,
      }}
    >
      {children}
    </NavMenuContext.Provider>
  );
};
