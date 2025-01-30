import React, { useState } from "react";
import AuthModal from "../components/AuthModal";

const LoginPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div>
      {isModalOpen && <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default LoginPage;
