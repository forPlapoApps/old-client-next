import { Button, Navbar as FlowbiteNavbar } from "flowbite-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <FlowbiteNavbar fluid={true} rounded={true}>
      <Link href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold underline text-blue-500">
          forPlapoApps
        </span>
      </Link>

      <div className="flex md:order-2">
        <div className="flex gap-2">
          <Button color={"light"}>Register</Button>
          <Button>Get started</Button>
        </div>
        <FlowbiteNavbar.Toggle />
      </div>
      <FlowbiteNavbar.Collapse>
        <FlowbiteNavbar.Link href="/FlowbiteNavbars" active={true}>
          Home
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/FlowbiteNavbars">About</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/FlowbiteNavbars">
          Services
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/FlowbiteNavbars">
          Pricing
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/FlowbiteNavbars">
          Contact
        </FlowbiteNavbar.Link>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
};

export default Navbar;
