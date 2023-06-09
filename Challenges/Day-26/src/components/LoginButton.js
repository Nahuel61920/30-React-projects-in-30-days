import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()} className="rainbow-hover">
        <span className="sp">Register</span>
      </button>
    )
  );
};

export default LoginButton;
