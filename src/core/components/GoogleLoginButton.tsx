import { Button } from "flowbite-react";
import { useState } from "react";
import ReactModal from "react-modal";
import { FcGoogle } from "react-icons/fc";
import useAuth from "hooks/useAuth";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "40px",
  },
  overlay: {
    background: "#424548",
    opacity: "90%",
  },
};

const GoogleLoginButton = () => {
  const { login } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <Button onClick={() => openModal()}>SignUp</Button>
      <ReactModal
        isOpen={isModalOpen}
        style={customStyles}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">Welcome to forPlapoApps!!</h2>
          <p>Register Your Account to use this app!</p>
          <Button onClick={login} color={"light"} className="w-full">
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
