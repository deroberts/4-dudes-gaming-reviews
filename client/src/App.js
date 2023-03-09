import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Grommet,
  Heading,
  Image,
  Text,
  Nav,
  Carousel,
  Box,
  Card,
  CardBody,
  Paragraph,
  ThumbsRating,
} from "grommet";
import { fetchPopularGames } from "./utils/Rawgapi";
import GameCard from "./components/GameCard";
import SearchGame from "./components/SearchGame";
import cover from "./images/cover.png";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Sun, Moon } from "grommet-icons";

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
  const [darkMode, setDarkMode] = React.useState(true);

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
          <div className="container">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/me" element={<Profile />} />
            </Routes>
          </div>
          <Navbar />
          <Box direction="row" wrap justify="center">
            {popularGames.map((game) => (
              <Box key={game.id} margin="small">
                <GameCard game={game} />
              </Box>
            ))}
          </Box>
          <SearchGame />

          <button onClick={toggleDarkMode}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <Box
            justify="evenly"
            align="center"
            direction="row"
            pad="xlarge"
            background="brand"
            round="large"
          >
            <Card pad="xlarge" background="dark-1" gap="large">
              <Heading margin="none">Hollow Knight: Silksong</Heading>
              <CardBody>
                <Paragraph margin="none">
                  Play as Hornet, princess-protector of Hallownest, and
                  adventure through a whole new kingdom ruled by silk and song!
                  Captured and brought to this unfamiliar world, Hornet must
                  battle foes and solve mysteries as she ascends on a deadly
                  pilgrimage to the kingdom’s peak.
                </Paragraph>
                <Paragraph margin="none">
                  Game Features: Discover a whole new kingdom! Explore coral
                  forests, mossy grottos, gilded cities and misted moors as you
                  ascend to the shining citadel at the top of the world. Planned
                  Release Date: 2023-06-30
                </Paragraph>
              </CardBody>
              <ThumbsRating />
            </Card>

            <Card pad="xlarge" background="dark-1" gap="large">
              <Heading margin="none">Marvel's Spider-Man 2</Heading>
              <CardBody>
                <Paragraph margin="none">
                  Marvel's Spider-Man 2 is undoubtedly one of the most exciting
                  upcoming PS5 games on the way. And with the release date
                  window now currently set for Fall 2023, we know roughly when
                  we'll be able to jump into the new adventure with the
                  webslinger. Initially announced during the 2021 PlayStation
                  showcase, the sequel joins a slate of upcoming Marvel games on
                  the horizon. And with Insomniac Games back at the helm, and
                  there are plenty of reasons to get excited about what shaping
                  up to be of the biggest new games for 2023.
                </Paragraph>
              </CardBody>
              <ThumbsRating />
            </Card>
          </Box>
          <Box align="center" height="small">
            <Image fit="cover" src={cover} />
          </Box>

          <button onClick={toggleDarkMode}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </Grommet>
      </Router>
    </ApolloProvider>
  );
}

export default App;
