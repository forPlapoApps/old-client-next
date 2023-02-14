import { Navbar as FlowbiteNavbar } from "flowbite-react";
import Link from "next/link";
import GoogleLoginButton from "./GoogleLoginButton";
import { useContext } from "react";
import { AuthContext } from "context/auth";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const { isSignedIn } = useContext(AuthContext);

  return (
    <FlowbiteNavbar fluid={true} rounded={true}>
      <Link href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold underline text-blue-500">
          forPlapoApps
        </span>
      </Link>

      <div className="flex md:order-2">
        {isSignedIn ? <LogoutButton /> : <GoogleLoginButton />}
        <FlowbiteNavbar.Toggle />
      </div>
      <FlowbiteNavbar.Collapse>
        <Link href="/">Home</Link>
        <Link href="/rooms">Rooms</Link>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
};

export default Navbar;
