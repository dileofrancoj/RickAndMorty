import React, { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: null,
  add: () => {},
  remove: (id) => {},
});

const { Provider } = FavoritesContext;

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = (character) => {
    setFavorites([...favorites, character]);
  };

  const remove = (id) => {
    const characters = favorites.filter((character) => character.id !== id);
    setFavorites(characters);
  };

  return <Provider value={{ favorites, add, remove }}>{children}</Provider>;
};
