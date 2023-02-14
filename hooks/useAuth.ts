import createUser from "@/users/mutations/createUser";
import { AuthContext } from "context/auth";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "lib/firebase";
import { useRouter } from "next/router";
import { useContext } from "react";

const useAuth = () => {
  const router = useRouter()
  const { setCurrentUser } = useContext(AuthContext)

  const login = async () => {
    try {
      signInWithPopup(auth, provider)
        .then(async ({ user }) => {
          const token = await user.getIdToken()
          const userData = {
            name: user.displayName,
            email: user.email,
            firebaseId: user.uid,
            token
          }
          await createUser(userData);
          setCurrentUser(userData)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return {
    login,
    logout
  }
}

export default useAuth
