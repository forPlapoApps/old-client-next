import { AuthContext } from "context/auth";
import { Avatar, Dropdown } from "flowbite-react";
import useAuth from "hooks/useAuth";
import { useContext } from "react";

const LogoutButton = () => {
  const { logout } = useAuth();
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser && (
        <Dropdown
          label={
            <Avatar
              alt="User Profile"
              img={currentUser.imageUrl}
              rounded={true}
            />
          }
          arrowIcon={false}
          inline={true}
        >
          <Dropdown.Header>
            <span className="block text-sm">{currentUser.name}</span>
            <span className="block truncate text-sm font-medium">
              {currentUser.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
        </Dropdown>
      )}
    </>
  );
};

export default LogoutButton;
