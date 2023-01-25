import React, { useState } from "react";

import { SIDEBAR_POSITION, SIDEBAR_BEHAVIOR } from "../constants";
import useSettingsState from "../hooks/useSettingsState";

const initialState = {
  isOpen: true,
  position: SIDEBAR_POSITION.RIGHT,
  behavior: SIDEBAR_BEHAVIOR.FIXED,
};

const SidebarContext = React.createContext(initialState);

function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [position, setPosition] = useSettingsState(
    "sidebarPosition",
    SIDEBAR_POSITION.LEFT
  );
  const [behavior, setBehavior] = useSettingsState(
    "sidebarBehavior",
    SIDEBAR_BEHAVIOR.COMPACT
  );

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        position,
        setPosition,
        behavior,
        setBehavior,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, SidebarContext };
