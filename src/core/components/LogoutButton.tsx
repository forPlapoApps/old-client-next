import { Button } from "flowbite-react";
import useAuth from "hooks/useAuth";

const LogoutButton = () => {
  const { logout } = useAuth();

  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
