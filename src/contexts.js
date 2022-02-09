import React from "react";

export const ThemeContext = React.createContext({
  primaryColor: "",
  secondaryColor: "",
});

export const StateContext = React.createContext({
  state : {},
  dispatch : () => {}
});
