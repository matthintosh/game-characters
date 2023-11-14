import { Character } from "../../repository/models/Character";
import { Grid } from "./Grid";
import { CharacterCard } from "../molecules/CharacterCard";

export const GameCharacterGridLayout = ({
  characters,
}: {
  characters: Character[];
}) => {
  const getCharacterCardVariant = (index: number) => {
    if (index === 3) {
      return "centeredImageTextLeft";
    }
    if (index === 4) return "contentRow";
    return "contentLeft";
  };

  return (
    <Grid>
      {characters.map((character, index) => (
        <CharacterCard
          key={`${character.name}_${index}`}
          imgUrl={character.imageUrl}
          title={character.name}
          subtitle={character.description}
          gridArea={`card${index + 1}`}
          variant={getCharacterCardVariant(index + 1)}
        />
      ))}
    </Grid>
  );
};
