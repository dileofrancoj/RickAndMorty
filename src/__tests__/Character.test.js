import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import Character from "../components/Character";
import { FavoritesProvider } from "./../contexts/Favorites";

const getData = async () => {
  const { data } = await axios.get(
    "https://rickandmortyapi.com/api/character/1"
  );
  return data;
};

describe("Test in <Character /> component", () => {
  test("Should render a Character", async () => {
    const data = await getData();
    const element = render(
      <Router>
        <FavoritesProvider>
          <Character {...data} />
        </FavoritesProvider>
      </Router>
    );
  });
});
