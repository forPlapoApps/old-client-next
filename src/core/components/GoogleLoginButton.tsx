import { signInWithPopup } from 'firebase/auth'
import { Button } from 'flowbite-react';
import { auth, provider } from "lib/firebase";
import { useRouter } from "next/router";
import { useState } from "react";

const GoogleLoginButton = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      signInWithPopup(auth, provider).then((userDetail) => {
        console.log(userDetail)
      }).catch((error) => {
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
  };
  
  return (
    <div>
      <Button onClick={handleLogin}>Googleログイン</Button>
    </div>
  )
}

export default GoogleLoginButton
