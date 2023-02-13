import { signInWithPopup } from "firebase/auth";
import { Button } from "flowbite-react";
import { auth, provider } from "lib/firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactModal from "react-modal";
import { FcGoogle } from "react-icons/fc";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: '40px'
  },
  overlay: {
    background: "#424548",
  },
};

const GoogleLoginButton = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleLogin = async () => {
    try {
      signInWithPopup(auth, provider)
        .then((userDetail) => {
          console.log(userDetail);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={() => openModal()}>SignUp</Button>
      <ReactModal
        isOpen={isModalOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">Welcome to forPlapoApps!!</h2>
          <p>Register Your Account to use this app!</p>
          <Button onClick={handleLogin} color={"light"} className="w-full">
            <div className="flex gap-2">
              <FcGoogle className="text-xl" />
              <p>Sign in with Google</p>
            </div>
          </Button>
        </div>
      </ReactModal>
    </div>
  );
};

export default GoogleLoginButton;
