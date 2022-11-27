import React, { Dispatch, SetStateAction } from "react";

interface ModeContextProps {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}

export const ModeContext = React.createContext<ModeContextProps>({
  mode: "light",
} as ModeContextProps);

export const ModeProvider = ({ children }: any) => {
  const [mode, setMode] = React.useState<string>(
    localStorage.getItem("mode") || "light"
  );

  return (
    <ModeContext.Provider
      value={{
        mode: mode,
        setMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => React.useContext(ModeContext);
