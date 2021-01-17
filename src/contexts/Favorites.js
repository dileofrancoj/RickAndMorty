import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext({
  favorites: null,
  add: () => {},
});

const { Provider } = FavoritesContext;

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = (character) => {
    setFavorites([...favorites, character]);
  };

  return <Provider value={{ favorites, add }}>{children}</Provider>;
};
