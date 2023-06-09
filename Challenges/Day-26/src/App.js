import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <main className="column">
      <h1>React Auth0</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <Profile />
          <LoginButton />
          <LogoutButton />
        </>
      )}
    </main>
  );
}

export default App;
