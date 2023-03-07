import { Card, CardBody, CardFooter, CardHeader, Image, Text } from "grommet";
import { Star } from "grommet-icons";
import { useEffect, useState } from "react";
import { fetchPopularGames } from "../utils/Rawgapi";

const GameCard = ({ game }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card
        key={game.id}
        height="medium"
        width={{ max: "medium" }}
        margin="medium"
      >
        <CardHeader pad="medium">
          <Text size="medium" weight="bold">
            {game.name}
          </Text>
        </CardHeader>
        <CardBody pad="medium">
          <Image fit="cover" src={game.background_image} />
        </CardBody>
        <CardFooter pad={{ horizontal: "medium", vertical: "small" }}>
          <Text size="small">{game.released}</Text>
            <Text size="small" weight="bold">Community Rating:  
              {game.rating}/5
            </Text>
            <div style={{ display: "flex", justifyContent: "center" }}>
              Your Rating:
            {[1, 2, 3, 4, 5].map((value) => (
              <Star
                key={value}
                color={value <= rating ? "orange" : "light-4"}
                onClick={() => handleRating(value)}
              />
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GameCard;
