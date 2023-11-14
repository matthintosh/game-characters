import { Button } from "../design/atoms/Button";
import { CharacterCard } from "../design/molecules/CharacterCard";

interface LoginProps {
  logUser: () => void;
}

export const Login = ({ logUser }: LoginProps) => {
  return (
    <CharacterCard
      imgUrl="/bowser.webp"
      title="Hey pas si vite vous n'êtes pas connecté !"
    >
      <Button onClick={logUser}>Se connecter</Button>
    </CharacterCard>
  );
};
