import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text
} from "grommet";
import { useMutation } from "@apollo/client";
import { ADD_GAME } from "../utils/mutations";

const GameCard = ({ game }) => {
  const [addGame] = useMutation(ADD_GAME);

  const handleAddGame = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const updatedProfile = await addGame({
        variables: {
          gameId: game.id,
          name: game.name,
          released: game.released,
          rating: game.rating
        }
      });
      console.log(updatedProfile);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card key={game.id}>
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
            Community Rating:
            {game.rating}/5
          </Text>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              label="Add Game"
              data-id={game.id}
              primary={true}
              onClick={handleAddGame}
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GameCard;
