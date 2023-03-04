import { Card, CardBody, CardFooter, CardHeader, Image, Text } from "grommet";
import { useEffect, useState } from "react";
import { fetchPopularGames } from "../utils/Rawgapi";

const GameCard = ({ game }) => {
  // state to store the fetched games
  
  
  return (
      
      <div style={{display: 'flex', flexWrap: "wrap" }}>
        <Card 
          key={game.id} 
          height="medium"
          width={{ max: "small" }}
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
            <Text size="small" weight="bold">
              {game.rating}/5
            </Text>
          </CardFooter>
        </Card>
      </div>
  );
};


export default GameCard;
