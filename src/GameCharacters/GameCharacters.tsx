import characters from "../repository/characters.json";
import { GameCharacterGridLayout } from "../design/interfaces/GameCharacterGridLayout";
import { Button } from "../design/atoms/Button";
import { GameCharacterLayout } from "../design/interfaces/GameCharacterLayout";

interface GameCharactersProps {
  logOutUser: () => void;
}

export const GameCharacters = ({ logOutUser }: GameCharactersProps) => {
  return (
    <GameCharacterLayout>
      <Button onClick={logOutUser}>Se deconnecter</Button>
      <GameCharacterGridLayout characters={characters} />
    </GameCharacterLayout>
  );
};
