import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout()} className="rainbow-hover">
        <span className="sp">Logout</span>
      </button>
    )
  );
};

export default LogoutButton;
