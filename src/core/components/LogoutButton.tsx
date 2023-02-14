import { signOut } from "firebase/auth";
import { Button } from "flowbite-react";
import { auth } from "lib/firebase";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const router = useRouter()
  const Logout = () => {
    signOut(auth)
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <Button onClick={Logout}>Logout</Button>;
};

export default LogoutButton;
