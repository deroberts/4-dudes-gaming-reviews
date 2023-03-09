import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grommet, Heading, Image, Anchor, Nav, Box } from "grommet";
import { fetchPopularGames } from "./utils/Rawgapi";
import GameCard from "./components/GameCard";
import SearchGame from "./components/SearchGame";
import cover from "./images/cover.png";
import Auth from "./pages/Auth";
import SignupForm from "./components/SignupForm";
import Navbar from "./components/Navbar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Sun, Moon } from "grommet-icons";

import PostForm from "./components/Form/Form"

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [popularGames, setPopularGames] = React.useState([]);
  const [darkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    fetchPopularGames()
      .then((data) => setPopularGames(data))
      .catch((err) => console.log(err));
  }, []);

  // adding dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    global: {
      font: {
        family: "Roboto",
      },
      colors: {
        brand: "#00739D",
        background: {
          light: "#FFFFFF",
          dark: "#1A1A1A",
        },
        text: {
          light: "#333333",
          dark: "#FFFFFF",
        },
      },
    },
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <Grommet
          theme={theme}
          className="App"
          themeMode={darkMode ? "dark" : "light"}
        >
          {/* <Heading size="large" color="brand">
            4-dudes-gaming-reviews
          </Heading> */}
          <Navbar />
          <Box direction="row" wrap justify="center">
            {popularGames.map((game) => (
              <Box key={game.id} margin="small">
                <GameCard game={game} />
              </Box>
            ))}
          </Box>
          <SearchGame />
          <Routes>
            <Route exact path="/Auth" element={<SignupForm />} />
            <Route exact path="/form" element={<PostForm />}/>
          </Routes>
          <Image fit="cover" src={cover} />
          <button onClick={toggleDarkMode}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </Grommet>
      </Router>
    </ApolloProvider>
  );
}

export default App;
