import { Button, Navbar as FlowbiteNavbar } from "flowbite-react";
import Link from "next/link";
import GoogleLoginButton from "./GoogleLoginButton";

const Navbar = () => {
  return (
    <FlowbiteNavbar fluid={true} rounded={true}>
      <Link href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold underline text-blue-500">
          forPlapoApps
        </span>
      </Link>

      <div className="flex md:order-2">
        <GoogleLoginButton />
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
