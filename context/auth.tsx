import { auth } from "lib/firebase";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

type AuthContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  setCurrentUser: () => {},
});

type AuthProviderProps = {
  children?: ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({
          name: user.displayName,
          email: user.email,
          firebaseId: user.uid,
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (currentUser === undefined) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
