import { useState } from "react";
import { Layout } from "./design/interfaces/Layout";
import { Login } from "./Login/Login";
import { GameCharacters } from "./GameCharacters/GameCharacters";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logIn = () => {
    setIsAuthenticated(true);
  };

  const logOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <Layout>
      {isAuthenticated ? (
        <GameCharacters logOutUser={logOut} />
      ) : (
        <Login logUser={logIn} />
      )}
    </Layout>
  );
}

export default App;
