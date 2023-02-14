import { auth } from "lib/firebase";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

type AuthContextType = {
  currentUser: UserSession;
  setCurrentUser: (user: UserSession) => void;
  isSignedIn: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  setCurrentUser: () => {},
  isSignedIn: false,
});

type AuthProviderProps = {
  children?: ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserSession | undefined>(
    undefined
  );
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setCurrentUser({
          name: user.displayName || "",
          email: user.email || "",
          firebaseId: user.uid,
          token,
          imageUrl: user.photoURL || "",
        });
      } else {
        setCurrentUser(null);
      }
      setIsSignedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (currentUser === undefined) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, isSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
